name := "Battleship"

organization := "sheikh"

version := "1.0"

scalaVersion := "2.11.8"

mainClass in (Compile, packageBin) := Some("com.battleship.Game")

libraryDependencies += "org.scalatest" %% "scalatest" % "2.2.6" % "test"
