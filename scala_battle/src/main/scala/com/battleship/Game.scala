package com.battleship
import scala.util.Random
import scala.io

class Game(val n: Integer = 2) {

  def launcher(): Set[(Int,Int)] = {
    val axis = Random.nextInt(2)
    val loc = if (axis == 0) {
      val lat = Random.nextInt(10)
      val lon = Random.nextInt(8)

      val bow = (lat, lon)
      (bow +: 1.to(2).map(x => (bow._1, bow._2 + x))).toSet
    } else {
      val lat = Random.nextInt(8)
      val lon = Random.nextInt(10)

      val bow = (lat, lon)
      (bow +: 1.to(2).map(x => (bow._1 + x, bow._2))).toSet
    }
    loc
  }

  def boardCheck(finalBoard: Vector[Set[(Int,Int)]], possibleLocation: Set[(Int,Int)]): Vector[Set[(Int,Int)]] = {
    if(!finalBoard.filter(x => !x.intersect(possibleLocation).isEmpty).isEmpty){
      boardCheck(finalBoard,launcher())
    }
    else{
      finalBoard :+ possibleLocation
    }
  }

  def fillBoard(counter: Int, board: Vector[Set[(Int,Int)]]): Vector[Set[(Int,Int)]] = {

  if(counter > 0) {
    fillBoard(counter - 1, boardCheck(board, launcher()))
  }
  else {
    board
    }
  }

  def createBoard(): Vector[Set[(Int,Int)]] = {
    fillBoard(2,Vector(launcher()))
  }

  def barrage(x: Int, y: Int, finalBoard: Vector[Set[(Int,Int)]]): (Boolean, Vector[Set[(Int,Int)]]) = {
    val interim = finalBoard.partition(a => a.contains((x,y)))

    if(interim._1.isEmpty){
      println("Miss!")
      (false,interim._2)
    }
    else{
      println("Hit!")
      if(interim._1.head.size == 1){
        println("Frigate Sunk!!")
        (true,interim._2)
      }
      else{
        (true, interim._2 :+ (interim._1.head.filter(a => a!= (x,y))))
      }
    }
  }

  def runGame(gameBoard: Vector[Set[(Int,Int)]], shotCounter: Int, missLocs: List[(Int,Int)], hitLocs: List[(Int,Int)]): Vector[Set[(Int,Int)]] = {
    println("Shots Remaining: " + (20-shotCounter))
    println("Miss Locations: " + missLocs)
    println("Hit Locations: " + hitLocs)
    println("Enter the X coordinate of your attack")
    val x = readInt()
    println("Enter the Y coordinate of your attack")
    val y = readInt()

    val newBoard = barrage(x,y,gameBoard)
    if(newBoard._2.isEmpty){
      println("All Frigates Sunk!")
      newBoard._2
    }
    else if(shotCounter+1 >= 20){
      println("No Shots Remaining")
      println("Remaining Frigate Locations: ")
      println(newBoard._2)
      newBoard._2
    }
    else{
      println("")
      if(newBoard._1){
        runGame(newBoard._2, shotCounter+1, missLocs, (x,y) :: hitLocs)
      }
      else {
        runGame(newBoard._2, shotCounter + 1, (x, y) :: missLocs, hitLocs)
      }
    }

  }
}
