import React, { useState } from 'react'
import "./styles.css"

import { useBoard } from '../../Context/BoardContext'

export default function Block(props) {
    const [number, setNumber] = useState(props.number)
    let { boxNumber, blockNumber } = props
    const { board, originalBoard } = useBoard()
    let numberInput;
    let border = ""

    
    if(blockNumber === 2 || blockNumber === 5)
        border += " b-right"
    if(boxNumber === 2 || boxNumber === 5)
        border += " b-bottom"

    if(originalBoard[boxNumber][blockNumber]){
        numberInput = (
            <input 
                type="number"
                className={'number og-number' + border}
                value={number}
                min="0"
                max="9"
                disabled
            />
        )
    }else {
        numberInput = (
            <input 
                type="number"
                className={'number non-og-number' + border}
                value={number !== 0 ? number : ""} 
                min="0"
                max="9"
                onChange={(e) => handleChange(e)}
            />
        )
    }

    const handleChange = (e) => {
        const newNumber = e.target.value === "" ? 0 : parseInt(e.target.value)
        if(newNumber <= 9 && newNumber >= 0){
            setNumber(newNumber)
            board[boxNumber][blockNumber] = newNumber
        }
    }

    return (
        numberInput
    )
}
