import React from 'react'
import "./styles.css"

import { useBoard } from '../../Context/Context'
import { useDispatch } from '../../Context/Context'

export default function Block(props) {
    let { boxNumber, blockNumber } = props
    const { board, originalBoardSlots, isSolved } = useBoard()
    const dispatch = useDispatch()
    const number = board[boxNumber][blockNumber]
    let numberInput;
    let border = ""
    
    if(blockNumber === 2 || blockNumber === 5)
        border += " b-right"
    if(boxNumber === 2 || boxNumber === 5)
        border += " b-bottom"

    if(originalBoardSlots[boxNumber][blockNumber]){
        numberInput = (
            <input 
                type="number"
                className={'number og-number' + border}
                value={number}
                min="0"
                max="9"
                id={`${boxNumber},${blockNumber}`}
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
                id={`${boxNumber},${blockNumber}`}
                onChange={(e) => handleChange(e)}
                disabled={isSolved}
            />
        )
    }

    const handleChange = (e) => {
        const newNumber = e.target.value === "" ? 0 : parseInt(e.target.value)
        if(newNumber <= 9 && newNumber >= 0){
            dispatch({
                type: "set-number-slot",
                payload: {
                    boxNumber: boxNumber,
                    blockNumber: blockNumber,
                    number: newNumber
                }
            })
        }
    }

    return (
        numberInput
    )
}
