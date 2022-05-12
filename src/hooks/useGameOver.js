import { useState, useCallback } from "react"

export default function useGameOver () {
    const [gameOver, setGameOver] = useState('true')

    const resetGameOver = useCallback(() => {
        setGameOver(false);
    }, [])

    return [gameOver, setGameOver, resetGameOver];
};