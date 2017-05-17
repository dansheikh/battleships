(ns battleship.core
  (:require [cljs.core.async :refer [<! close! promise-chan put!]]
            [reagent.core :as reagent :refer [atom]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def board-size 10)
(def game-time (* 10 60 1000))

(defn board [n]
  (vec (repeat n (vec (repeat n 0)))))

(defonce state
  (atom {:text "Battleship"
         :board (board board-size)
         :time game-time
         :status :in-progress}))

(defn countdown []
  (let [interval (promise-chan)
        time-check (fn timer []
                     (let [now (@state :time)]
                       (if (> now 0)
                         (swap! state assoc :time (- now 1000))
                         (do
                           (swap! state assoc :status :time-up)
                           (go (js/clearInterval (<! interval)))))))]
    (put! interval (js/setInterval time-check 1000))
    (close! interval)))

(defn start []
  [:input.start {:type "button"
           :value "Start"
           :on-click countdown}])

(defn fmt-time []
  (let [now (@state :time)
        seconds (mod (/ now 1000) 60)
        minutes (/ (- (/ now 1000) seconds) 60)]
    (str minutes ":" (if (< seconds 10) (str "0" seconds) seconds))))

(defn clock []
  [:div {:class "clock"}
   [:span "Time: "]
   [:span (#(if (<= (@state :time) 300000) {:class "time warning"})) (fmt-time)]])

(defn blank-square [i j]
  [:rect {:width 0.9
          :height 0.9
          :fill "gray"
          :x i
          :y j
          :on-click (fn check-square [e]
                      (when (= (@state :status) :in-progress)
                        (.alert js/window (str "Clicked: " j " " i))))}])

(defn miss-circle [i j]
  [:circle {:r 0.35
            :stroke "darkred"
            :stroke-width 0.12
            :fill "none"
            :cx (+ 0.5 i)
            :cy (+ 0.5 j)}])

(defn hit-cross [i j]
  [:g {:stroke "green"
       :stroke-width 0.4
       :stroke-linecap "round"
       :transform (str "translate(" (+ 0.5 i) "," (+ 0.5 j) ") scale(0.3)")}
   [:line {:x1 -1 :y1 -1 :x2 1 :y2 1}]
   [:line {:x1 1 :y1 -1 :x2 -1 :y2 1}]])
  
(defn main []
  [:center
   [:h1 (@state :text)]
   [start]
   [clock]
   (into 
    [:svg
     {:view-box (str "0 0 " board-size " " board-size)
      :width 500
      :height 500}]
     (for [i (range board-size)
           j (range board-size)]
       (case (get-in @state [:board j i])
         0 [blank-square i j]
         1 [hit-cross i j]
         2 [miss-circle i j])))])

(reagent/render-component [main] (.getElementById js/document "app"))                          

