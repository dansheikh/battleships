#!/usr/bin/env boot

(set-env!
 :resource-paths #{"src" "test"}
 :dependencies '[[org.clojure/clojure "1.8.0" :scope "provided"]
                 [adzerk/boot-test "1.1.1" :scope "test"]])

(set-env!
  :project 'clojure-battle
  :version "0.1.0")

(require '[adzerk.boot-test :refer :all])

(task-options!
 pom {:project (get-env :project)
      :version (get-env :version)})

(deftask build
  "Build an uber-jar."
  []
  (comp
   (aot :namespace '#{clojure-battle.core})
   (pom :project (get-env :project)
        :version (get-env :version))
   (uber)
   (jar :file (format "%s-%s-standalone.jar" (get-env :project) (get-env :version)) :main 'clojure-battle.core)
   (target)))

(defn -main
  [& args]
  (require 'clojure-battle.core)
  (apply (resolve 'clojure-battle.core/-main) args))
