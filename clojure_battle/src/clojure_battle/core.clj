(ns clojure-battle.core)

(def codec {"A" 0 "B" 1 "C" 2 "D" 3 "E" 4 "F" 5 "G" 6 "H" 7 "I" 8 "J" 9})

(defn theatre
  [n]
  (->> "o" (repeat n) vec (repeat n) vec))

(defn launch
  [n]
  (loop [cnt n acc {}]
    (if (= cnt 0)
      acc
    (recur
      (dec cnt)
      (into acc (let [axis (rand-int 2)]
            (if (= axis 0)
              (let [x (rand-int 8) y (rand-int 10)]
                (map #(hash-map (str y (+ x %)) false) (range 3)))
              (let [x (rand-int 10) y (rand-int 8)]
                (map #(hash-map (str (+ y %) x) false) (range 3))))))))))
