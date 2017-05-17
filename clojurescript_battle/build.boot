#!/usr/bin/env boot

(set-env!
  :project 'battleship
  :version "0.1.0"
  :resource-paths #{"src" "html" "resources" "test"}
  :dependencies '[[org.clojure/clojure "1.8.0"]
                  [org.clojure/core.async "0.2.385"]
                  [org.clojure/clojurescript "1.9.36"]                  
                  [org.clojure/tools.nrepl "0.2.12" :scope "test"]
                  [com.cemerick/piggieback "0.2.1" :scope "test"]
                  [weasel "0.7.0" :scope "test"]
                  [pandeiro/boot-http "0.7.3"]
                  [adzerk/boot-test "1.1.1" :scope "test"]
                  [adzerk/boot-cljs "1.7.228-1" :scope "test"]
                  [adzerk/boot-cljs-repl "0.3.0" :scope "test"]
                  [adzerk/boot-reload "0.4.8" :scope "test"]
                  [reagent "0.5.1"]])

(require '[pandeiro.boot-http :refer [serve]]
         '[adzerk.boot-test :refer :all]
         '[adzerk.boot-cljs :refer [cljs]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
         '[adzerk.boot-reload :refer [reload]])

(task-options!
 pom {:project (get-env :project)
      :version (get-env :version)})

(deftask dev
  "Start clojurescript development mode."
  []
  (comp (serve :dir "target/")
        (watch)
        (reload :on-jsload 'battleship.core/main)
        (cljs-repl)
        (cljs :source-map true :optimizations :none)))

(deftask build
  "Build an uber-jar."
  []
  (comp
   (aot :namespace '#{battleship.core})
   (pom :project (get-env :project)
        :version (get-env :version))
   (uber)
   (jar :file (format "%s-%s-standalone.jar" (get-env :project) (get-env :version)) :main 'battleship.core)
   (target)))

(defn -main
  [& args]
  (require 'battleship.core)
  (apply (resolve 'battleship.core/-main) args))
