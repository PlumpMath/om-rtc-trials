(ns rtc.async
  (:require [org.httpkit.server :as http-kit] ))


(def user-map (atom {}))

(defn user-coord [channel uuid room]
  (let [placer #(http-kit/send! channel (str [ %]))
        sorter (fn [users]
                 (if (> (count (users room)) 0)
                   (do (placer :joined)
                       (assoc users room  (conj (get users room) [uuid channel])))
                   (do (placer :created)
                       (assoc users room [[uuid channel]]))))]
    
    (swap! user-map sorter)
    
    (println @user-map)))

(defn notify-user [user-id room msg]
  (doseq [[id channel :as tuple]  (@user-map room)
          :when (not= id user-id)]
    (http-kit/send! channel (str msg))))



(defn signal-dispatch [[key val :as sig] channel uuid room]
  (println sig)
  (case key
    ;:init 
    ;:igum (notify-user uuid room [:answer])
    :connect (notify-user uuid room [:offer])
    :stream-added (notify-user uuid room [:r-stream-added])
    :s-candidate (notify-user uuid room [:r-candidate val])
    :s-offer (notify-user uuid room [:r-offer val])
    (println sig)))



(defn async-handler [{{:keys [uuid room]} :session :as ring-request}]
  (http-kit/with-channel ring-request channel
    (user-coord channel uuid room)
    (doto channel
      (http-kit/on-close (fn [status]
                           (let [clean (fn [users]
                                         (let [unrevised-room (users room)
                                               revised-room (into [] (filter
                                                                      (fn [[id channel]] (not= uuid id) )
                                                                      unrevised-room))]
                                           (if (> (count revised-room) 0)
                                             (assoc users room revised-room)
                                             (dissoc users room))))]
                             (swap! user-map clean)
                             (print @user-map))
                           ))
      (http-kit/on-receive (fn [sig]
                             (let [sig (clojure.core/read-string sig)]

                               (signal-dispatch sig channel uuid room)))))))
