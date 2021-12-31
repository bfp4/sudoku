import React from "react";
import { useContext, useEffect, useState } from "react";

const BoardContext = React.createContext();

export function useBoard(){
    return useContext(BoardContext)
}

export function BoardProvider({children}){
    const [value, setValue] = useState()

    const getBoard = async () => {
        const response = await fetch("https://sugoku.herokuapp.com/board?difficulty=easy");
        const data = await response.json();
        const board = data.board
        return board
    }

    useEffect(async () => {
        const board = await getBoard()
        const originalBoard = board.map(box => {
            return box.map(block => block != 0)
        })

        await setValue({
            board: board, 
            originalBoard: originalBoard
        })
        return value
    }, [])

    return (
        <BoardContext.Provider value={value}>
            {value == undefined ? null : children}
        </BoardContext.Provider>
    )
}

