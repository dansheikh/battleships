package com.battleship
import scala.util.Random
import scala.io

class Frigate(name: String, health: Int) {
  def getName(): String = name
  def getHealth(): Int = health
  def decrementHP(): Frigate = new Frigate(name, health-1)
  def isFloating(): Boolean = (health > 0)
}

class Game(val n: Integer = 2) {

  var frigateNameCounter = 1
  //If there is an overlap in the temp map and the final map the naming system will be off
  val frigateHP = 3 // Makes values into Int object
  //board 10 by 10
  // n == num ships
  // ship is size 3


  def launch(): Map[(Int, Int), Frigate] = {
    //if the keys of the finalMap contains any value from the keys of the map created by launchHelper then run launchHelper again
    deployShips(2, Map.empty, launchHelper())
  }

  def deployShips(counter: Int, finalMap: Map[(Int, Int), Frigate], possibleLocation: Map[(Int, Int), Frigate]): Map[(Int, Int), Frigate] = counter match {
    case 0 => finalMap
    case _ => if (!finalMap.keys.toSeq.contains(possibleLocation.keys.toSeq)) {
      deployShips(counter - 1, mergeMaps(finalMap, possibleLocation), launchHelper())
    }
    else {
      deployShips(counter, finalMap, launchHelper())
    }
  }

  def launchHelper(): Map[(Int, Int), Frigate] = {
    val axis = Random.nextInt(2)
    val frigate = new Frigate("" + frigateNameCounter + "", frigateHP)

    val loc = if (axis == 0) {
      val lat = Random.nextInt(10)
      val lon = Random.nextInt(8)

      val bow = (lat, lon)
      (bow +: 1.to(2).map(x => (bow._1, bow._2 + x))).map(x => x -> frigate).toMap
    } else {
      val lat = Random.nextInt(8)
      val lon = Random.nextInt(10)

      val bow = (lat, lon)
      (bow +: 1.to(2).map(x => (bow._1 + x, bow._2))).map(x => x -> frigate).toMap
    }
    frigateNameCounter = frigateNameCounter + 1
    loc
  }

  def mergeMaps(map1: Map[(Int, Int), Frigate], map2: Map[(Int, Int), Frigate]): Map[(Int, Int), Frigate] = {
    val list1 = map1.toList
    val list2 = map2.toList

    mergeLists(list1, list2).toMap
  }

  //list1 will always be equal to or larger than list 1 in size
  def mergeLists(list1: List[((Int, Int), Frigate)], list2: List[((Int, Int), Frigate)]): List[((Int, Int), Frigate)] = {
    (list1, list2) match {
      case (Nil, lst) => lst
      case (lst, Nil) => lst
      case (lst1, lst2) => mergeLists(lst2.head :: lst1, lst2.tail)
    }
  }

  //Map.partition returns a map of the true values followed by a map of the false values


  def attack(x: Int, y: Int, finalMap: Map[(Int, Int), Frigate]): (Boolean,Map[(Int, Int), Frigate]) = {
    // will take in user input and check if a frigate is at location (x,y)
    if(finalMap.keys.toSeq.contains((x,y))) {
      if (finalMap(x, y).isInstanceOf[Frigate]) {

        val ship = finalMap(x, y)
        val tempMaps = finalMap.partition(x => x._2 == ship)
        val newShip = ship.decrementHP()
        if (newShip.isFloating()) {
          val newMapNewShips = tempMaps._1.map(x => x._1 -> newShip).filterNot(a => (a._1._1 == x) && (a._1._2 == y))

          (true, mergeMaps(tempMaps._2, newMapNewShips))
        }
        else {
          println("Frigate: " + newShip.getName() + " has been sunk!")
          (true, tempMaps._2)
        }
      }
      else (false, finalMap)
    }
    else (false,finalMap)
  }


  def play(): Unit = {
    val gameMap = launch()
    println("Welcome to Battleship V1.0")
    println("You have 20 shots to sink 2 ship. Good Luck")

    run(gameMap,0,Nil,Nil)
    println("Game Over!")
  }

  def run(gameMap: Map[(Int, Int), Frigate], shotCounter: Int, missLocs: List[(Int,Int)], hitLocs: List[(Int,Int)]): Map[(Int, Int), Frigate] = {
    println("Shots Remaining: " + (20-shotCounter))
    println("Miss Locations: " + missLocs)
    println("Hit Locations: " + hitLocs)
    println("Enter the X coordinate of your attack")
    val x = readInt()
    println("Enter the Y coordinate of your attack")
    val y = readInt()

    val newMap = attack(x,y, gameMap)

    if(newMap._1) println("Hit!")
    else println("Miss!")

    if(newMap._2.isEmpty){
      println("Congratulations All Ships Have Sunk!!")
      newMap._2
    }
    else if(shotCounter+1 >= 20){
      println("No Shots Remaining")
      println(newMap._2)
      newMap._2
    }
    else{

      if(newMap._1){
        run(newMap._2, shotCounter+1, missLocs, (x,y) :: hitLocs)
      }
      else {
        run(newMap._2, shotCounter + 1, (x, y) :: missLocs, hitLocs)
      }
    }
  }


//  }
}
