package com.battleship

object Play extends App {
  val game = new Game()
  game.runGame(game.createBoard(),0,Nil,Nil)
}
