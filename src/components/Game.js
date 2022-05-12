import Menu from "./Menu"
import useGameOver from "../hooks/useGameOver"
import Tetris from "./Tetris"


export default function TetrisBoard({rows, columns}) {

    const [gameOver, setGameOver, resetGameOver] = useGameOver();

    const start = () => {
        resetGameOver();
    }

    return(
        <div className="tetris-board">
            {gameOver ? (
            <Menu onClick={start}/>
            ) : (
                <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
            )}
        </div>
    )
}
 