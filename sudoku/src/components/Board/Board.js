import React from 'react'
import "./styles.css"
import { useBoard } from "../../Context/Context"

import Block from '../Block/Block'

export default function Board() {
    const { board } = useBoard()

    const blocks = (
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
    )

    return (
        <div className="board-grid">
            {blocks}
        </div>
    )
}
