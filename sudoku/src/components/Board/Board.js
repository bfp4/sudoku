import React from 'react'
import "./styles.css"
import { useBoard } from "../../Context/BoardContext"

import Block from '../Block/Block'

export default function Board() {
    const board = useBoard().board

    return (
        <div className="board-grid">
            {
                board.map((box, i) => {
                    return box.map((block, j) => {
                        return (
                            <Block
                                key={j}
                                number={block}
                                boxNumber={i}
                                blockNumber={j}
                            />
                        )
                    })
                })
            }
        </div>
    )
}
