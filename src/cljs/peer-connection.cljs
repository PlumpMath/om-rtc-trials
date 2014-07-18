(ns rtc.peer-connection
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [cljs.core.async :as async :refer [chan put! pipe unique map< filter< alts! <!]]))




(defn data-channel-coord [dc owner joint key]
  (let [dc-send-delta (partial joint :dc-send-delta)
        handle-msg (partial joint :dc-handle-message)]
    (set! (.-onopen dc) dc-send-delta)
    (set! (.-onmessage dc)  handle-msg)
    (set! (.-opnclose dc) dc-send-delta)
    (om/set-state! owner key dc)))

(defn initdc [pc owner joint]
  (let [dc (.createDataChannel pc "sendDataChannel" (clj->js {:reliable true}))]
    (data-channel-coord dc owner joint :sc)))


(defn r-candidate [pc val]
  (let [jscandidate (clj->js val)
        rdescript (js/RTCIceCandidate. jscandidate)]
    
    (.addIceCandidate pc rdescript)))

(defn r-offer [pc descr pc-coord data]
  (let [jsdescr (clj->js descr)
        rtcdesc (js/RTCSessionDescription. jsdescr)]
    (.setRemoteDescription pc rtcdesc)
    (when (= (@data :role) :joiner)  
      (.createAnswer pc #(put! pc-coord [:localsend %]) #(print %) #js {}))
    ))


(defn pc-loop [owner data settings]
  (let [pc-coord (om/get-shared owner :pc-coord)
        webc (om/get-shared owner :websocket->)
        pc (om/get-state owner :pc)
        streamc (om/get-state owner :streamc)]
    (go-loop [[key val] (<! pc-coord)]
             (case key
               :ice (when (.-candidate val)
                      (put! webc [:s-candidate { ;:type "candidate"
                                        :sdpMLineIndex (.-sdpMLineIndex (.-candidate val))
                                        ;:id (.-sdpMid (.-candidate val))
                                        :candidate (.-candidate (.-candidate val))
                                        }]))
               :addstr (put! streamc [:remote "rvid" (.-stream val)])
               :remstr (print key val)
               :ondc (data-channel-coord (.-channel val) owner #(put! pc-coord [% %2]) :sc)
               :dc-send-delta (print key val)
               :dc-handle-message  (om/update-state! owner :msgs #(conj % (.-data val)))
               
               :offer (.createOffer pc #(put! pc-coord [:localsend %]) #(print %) #js {})
               :r-candidate (r-candidate pc val)
               :r-offer (r-offer pc val pc-coord data)
               :localsend (do
                            (put! webc [:s-offer {:type (.-type val)
                                                :sdp (.-sdp val)}])
                            (.setLocalDescription pc val)))
             (recur (<! pc-coord)))))


(defn pc-coord [owner data {data-channel :data-channel}]
  (let [pc (om/get-state owner :pc)
        pc-coord (om/get-shared owner :pc-coord)
        joint #(put! pc-coord [% %2])
        
        ice (partial joint :ice)
        addstr (partial joint :addstr)
        remstr (partial joint :remstr)
        ondc (partial joint :ondc)
        
        ]
    (set! (.-onicecandidate pc) ice)
    (set! (.-onaddstream pc) addstr)
    (set! (.-onremovestream pc) remstr)
    (when data-channel
        (case (data :role)
          :initiator (initdc pc owner joint)
          :joiner (set! (.-ondatachannel pc) ondc)))))


(defn pc [owner data settings]
    (pc-coord owner data settings)
    (pc-loop owner data settings))
