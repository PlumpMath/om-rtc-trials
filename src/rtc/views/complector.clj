(ns rtc.views.complector
  (:require
            [rtc.views.css :as css]
            [rtc.views.html :as page]))

(defn rtc
  []
  (page/rtc css/rtc))
