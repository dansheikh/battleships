package com.battleship
import org.scalatest.FunSuite


class GameSuite extends FunSuite {
  val game = new Game()

  test("Barrage Test"){
    val gameBoard = game.createBoard()
    val coordinate = gameBoard.head.head

    val newBoard = game.barrage(coordinate._1, coordinate._2, gameBoard)
    val set1 = gameBoard.head
    val set2 = newBoard._2.last

    assert(set1.filterNot(x => x ==(coordinate)) == set2)
  }
}
