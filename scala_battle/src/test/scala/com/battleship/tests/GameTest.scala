import org.scalatest.FunSuite
import com.battleship.Game

class GameSuite extends FunSuite {

  val game = new Game()

  test("A new default Game has 2 ships") {
    assert(game.n === 2)
  }

  test("LaunchHelper Test"){
    game.launchHelper.isInstanceOf
  }
}
