(ns rtc.views.html
  (:require [hiccup.page :as html]
            [hiccup.element :as element]))

(defn cljs [space name]
  (if (= (System/getenv "MODE") "DEV")
    
    (conj
     '()
     (element/javascript-tag (str "goog.require('" space "." name "')"))
     (html/include-js  (str "/javascripts/" name "/"  "app.js"))
     (html/include-js (str "/javascripts/" name "/out/goog/base.js")))
    (html/include-js (str "/javascripts/app.js"))
    )
  )






(defn head-boiler [title css]
  [:head [:title title]
   [:meta {:name "viewport"
           :http-equiv "Content-type"
           :content "width=device-width, initial-scale=1.0"}]
   [:style css]
   ])

(defn rtc
  [css]
  (html/html5
   (conj (head-boiler "the new obvious" css)
         (html/include-js "//cdnjs.cloudflare.com/ajax/libs/fastclick/0.6.11/fastclick.min.js")
         (html/include-js "/javascripts/adapter.js")
         (html/include-css "//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css")
         (element/javascript-tag "window.addEventListener('load', function() {
                                 FastClick.attach(document.body);
                                 }, false);"))
   [:body.full
    [:div#app.full]


    (when (System/getenv "MODE") (html/include-js "http://fb.me/react-0.10.0.js"))
    (cljs "rtc" "main")
    ]))
