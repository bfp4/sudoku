import React from 'react'
import "./styles.css"

import { useBoard } from '../../Context/BoardContext'

export default function Box(props) {
    let { number, boxNumber, blockNumber } = props
    const originalBoard = useBoard().originalBoard

    return (
        <div className="block">
               {
                   originalBoard[boxNumber][blockNumber] ? (<div className='number original-number'>{number}</div>)
                    : (<div className='number'>{number !== 0 && number}</div>)
               }
        </div>
    )
}
