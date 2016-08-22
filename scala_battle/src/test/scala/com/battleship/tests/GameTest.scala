package com.battleship
import org.scalatest.FunSuite


class GameSuite extends FunSuite {


  val game = new Game()

  test("A new default Game has 2 ships") {
    assert(game.n === 2)
  }

  test("LaunchHelper Test"){ //tests for correct creation of temp map
    val m = game.launchHelper()
    assert(m.values.exists(x => (x.getName()) == "1" && x.getHealth() == 3 || (x.getName() == "2" && x.getHealth() == 3)))
  }

  test("deployShips and launch test"){ // Checks the final map for duplicate keys. If there are duplicates ten the final map was created incorrectly
    val x = game.launch().keys.toSeq
    val y = x.distinct
    assert(x.equals(y))
  }

  test("attack test")// checks if when the correct coordinate, that the point is removed and the frigate is altered appropriately
  {
    val testBoard = game.launch()
    val coordinate = testBoard.keys.toList.head
    val testFrigate1 = testBoard(coordinate._1, coordinate._2)
    val testMap = testBoard.filterKeys(x => testBoard(x._1,x._2) == testFrigate1).filterKeys(x => (x._1,x._2) != coordinate)
    val testBoard2 = game.attack(coordinate._1, coordinate._2,testBoard)._2

    val isRemoved = !testBoard2.contains((coordinate._1,coordinate._2))
    val coordinate2 = testMap.keys.toList.head
    val testFrigate2 = testBoard2(coordinate2)
    val isHurt = testFrigate1.decrementHP().getHealth() == testFrigate2.getHealth()
    val isSame = testFrigate1.getName() == testFrigate2.getName()

    assert(isRemoved && isHurt && isSame)

  }

  test("Merge Maps Test - relies on MergeLists"){
    val frigate1 = new Frigate("frigate1", 3)
    val frigate2 = new Frigate("frigate2", 3)

    assert(Map((0,0) -> frigate1, (0,1) -> frigate2) == game.mergeMaps(Map((0,0) -> frigate1), Map((0,1) -> frigate2)))
  }

  test("Barrage Test"){
    val gameBoard = game.createBoard()
    val coordinate = gameBoard.head.head

    val newBoard = game.barrage(coordinate._1, coordinate._2, gameBoard)
    val set1 = gameBoard.head
    val set2 = newBoard._2.last

    assert(set1.filterNot(x => x ==(coordinate)) == set2)
  }
}
