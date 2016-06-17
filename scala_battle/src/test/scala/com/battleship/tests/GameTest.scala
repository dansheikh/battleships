import org.scalatest.FunSuite
import com.battleship.Game

class GameSuite extends FunSuite {
  test("A new default Game has 2 ships") {
    val game = new Game()
    assert(game.n === 2)
  }
}
