import React, { useState, useEffect } from 'react'
import { useBoard } from '../../Context/BoardContext'

export default function SolveButton() {
    const [solve, setSolve] = useState(false)
    let { board, originalBoard, setBoard } = useBoard()

    const handleClick = async () => {
        const response = await fetch(`solve`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(originalBoard)
        })
        const data = await response.json()
        const solvedBoard = await data.solvedBoard
        await setBoard(solvedBoard)
    }

    return (
        <button onClick={handleClick}>
            Solve
        </button>
    )
}
