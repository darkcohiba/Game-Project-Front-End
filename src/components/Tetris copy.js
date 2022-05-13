import "./Tetris.css"
import Board from "./Board"
import {useBoard} from "../hooks/useBoard"

export default function Tetris ({rows, columns, setGameOver}) {

const [board, setBoard] = useBoard({rows, columns})

    return(
        <>
            <Board board={board}/>
        </>
    );
};