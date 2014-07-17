(ns rtc.main
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  ( :require [cljs.reader :as reader]
             [goog.events :as events]
             [goog.dom :as gdom]
             [rtc.prefix :as prefix]
             [rtc.messaging :as msg]
             [om-tools.core :refer-macros [defcomponent]]
             [om-tools.dom :as dom :include-macros true]
             [goog.debug :as debug]
             [clojure.string :as string]
             [cljs.core.async :as async :refer [chan put! pipe unique map< filter< alts! <!]]
             [om.core :as om :include-macros true]))

(enable-console-print!)

(def app-state (atom {:shit "whatever"}))

(defn handle-stream [owner stream node]
  (om/set-state! owner :stream stream)
  (case js/webrtcDetectedBrowser
    "firefox" (set! (.-mozSrcObject node) stream)
    (set! (.-src node)  (.createObjectURL js/URL stream))
    ) 
  (.play node))


(defn vid-loop [owner data vidc]
  (go-loop [[key ref stream] (<! vidc)]
           (let [webc (om/get-shared owner :webc)
                 pc (om/get-state owner :pc)
                 role (@data :role)
                 ]
             (case key
               :local (let [node (om/get-node owner ref)]
                       (.addStream pc stream) 
                       (put! webc (if (= role :initiator) [:igum] [:rgum]))
                       (handle-stream owner stream node))
               :remote (let [node (om/get-node owner ref)]
                         (handle-stream owner stream node)
                         )
               (print "TROUBLE IN VID-LOOP")
               ) 
             )

           
           
           (recur (<! vidc))))

(def error #(print (.-name %)))

(defn locals [owner c]
  (js/getUserMedia (clj->js {:audio true}) #(put! c [:local "lvid"  %])  #(print (debug/expose %))))

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
        rdescript (js/RTCIceCandidate. jscandidate)
        ]
    
    (.addIceCandidate pc rdescript)))

(defn r-offer [pc descr pc-coord data]
  (let [jsdescr (clj->js descr)
        rtcdesc (js/RTCSessionDescription. jsdescr)]
    (.setRemoteDescription pc rtcdesc)
    (when (= (@data :role) :joiner)  
      (.createAnswer pc #(put! pc-coord [:localsend %]) #(print %) #js {}))
      ))


(defn pc-loop [owner data]
  (let [pc-coord (om/get-shared owner :pc-coord)
        webc (om/get-shared owner :webc)
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
               :answer (print "here's an answer case, johann")
               :offer (.createOffer pc #(put! pc-coord [:localsend %]) #(print %) #js {})
               :r-candidate (r-candidate pc val)
               :r-offer (r-offer pc val pc-coord data)
               :localsend (do
                            (put! webc [:s-offer {:type (.-type val)
                                                :sdp (.-sdp val)}])
                            (.setLocalDescription pc val)))
             (recur (<! pc-coord)))))


(defn pc-coord [owner data]
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
    (case (data :role)
      :initiator (initdc pc owner joint)
      :joiner (set! (.-ondatachannel pc) ondc))))


(defn pc [owner data]
    (pc-coord owner data)
    (pc-loop owner data))

(defn dcsend [owner]
  (let [sc (om/get-state owner :sc)
        node (om/get-node owner "dc")
        val (.-value node)
        ]
    (.send sc val)))



(defcomponent final-rtc [data owner opts]
  (init-state [_]
              (let [
                    pc-config (if (= "firefox" js/webrtcDetectedBrowser)
                                #js {:iceServers #js [ #js {:url "stun:23.21.150.121"}]}
                                #js {:iceServers #js [ #js {:url "stun:stun.l.google.com:19302"}]})
                    pc-constants #js {:optional #js [ #js {:DtlsSrtpKeyAgreement true}]} 
                    pc (js/RTCPeerConnection pc-config pc-constants)
                    ]
                {:pc pc
                 :msgs []
                 :streamc (chan)}))
  (will-mount [_]
              (let [streamc (om/get-state owner :streamc)]
                (pc owner data)
                #_(locals owner streamc)
                (vid-loop owner data streamc)
                ))
  (render-state [_ {:keys [sc msgs]}]
                (let [webc (om/get-shared owner :webc)]
                  (dom/div {:class "full flex"}
                   (when sc
                     (dom/div
                      (dom/input {:type "text" :ref "dc"})
                      (dom/button {:on-click #(dcsend owner)} "america")
                      (dom/div
                       (map (fn [msg]
                              (dom/div msg)
                              ) msgs))))
                   
                   (dom/video {:ref "lvid"})
                   (dom/video {:ref "rvid"})))
                ))

(defn set-room [data owner]
  (let [node (om/get-node owner "room")
        node-val (.-value node)
        
        ]
    (om/update! data :room node-val)))

(defcomponent room-space [{:keys [role] :as data} owner opts]
  (render-state [_ _]
                (let [webc (om/get-shared owner :webc)]
                  (dom/div {:class "full flex"}
                     
                     
                     
                     

                   #_(dom/button {:on-click #(put! webc [:init])} "connect")
                   (when (= role :joiner) (dom/button {:on-click #(put! webc [:connect])} "start" ))
                   (when (data :role) (om/build final-rtc data))
                   ))
                ))





(defcomponent app-view [data owner]
  (render-state [_ _]
                (om/build msg/websock data {:opts {:child room-space}})
                ))

(om/root app-view
         app-state
         {:target (gdom/getElement "app")
          :tx-listen #(print %)
          :shared {:vidc (chan)
                   :pc-coord (chan)
                   :webc (chan)}})
