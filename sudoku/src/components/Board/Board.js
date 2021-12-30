import React from 'react'
import "./styles.css"
import { useBoard } from "../../Context/BoardContext"

import Box from "../Box/Box"

export default function Board() {
    const board = useBoard().board

    return (
        <div className="board-grid">
            {
                board.map((box, i) => {
                    return (
                        <Box 
                            key={i}
                            box={box}
                            boxNumber={i}
                        />
                    )
                })
            }
        </div>
    )
}
