(ns rtc.server
  (:use compojure.core)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [rtc.views.complector :as views]
            [rtc.async :as async]
            [ring.util.response :refer [file-response]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.edn :refer [wrap-edn-params]]
            [clojure.core.async :refer [chan <! >! put! close! go-loop go]]
            [org.httpkit.server :as http-kit]
            [ring.middleware.reload :as reload]
            
            [ring.util.response :as resp]))

(defn uuid [] (str (java.util.UUID/randomUUID)))

(defn assign-uuid [app]
  (fn [{session :session :as req}]
    (println session)
    (if-not (session :uuid)
      (app (assoc req :session {:uuid (uuid)}))
      (app req))))





(defroutes rtcroutes
  (GET "/room/:room" [:as {session :session} room]
       (let [session (assoc session :room room )] 
           (assoc (resp/response (views/rtc)) :session session)))
  (GET "/ws" [] async/async-handler)
  (route/resources "/" {:root "public"}))




(def app (-> rtcroutes assign-uuid handler/site reload/wrap-reload))


(defn -main
  ([port]
    (let [Port (Integer/parseInt port)]
      (println "server running w/ port" port)
      (println "we are in " (System/getenv "MODE") " mode")
      (http-kit/run-server app {:port Port})))
  ([]
   (let [strPort (System/getenv "PORT")
         Port (Integer/parseInt strPort)]
     (println "we're running on:" strPort)
     (http-kit/run-server app {:port Port}))))
