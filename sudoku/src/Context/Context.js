import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/Reducer"
import getBoard from "./getBoard";

const BoardContext = React.createContext();
const DispatchContext = React.createContext();

export function useBoard(){
    return useContext(BoardContext)
}

export function useDispatch(){
    return useContext(DispatchContext)
}

const intialState = {
    board: [], 
    originalBoard: [],
    originalBoardSlots: [],
    isSolved: false,
    isLoaded: false
}

export function BoardProvider({children}){
    const [state, dispatch] = useReducer(reducer, intialState)

    useEffect(() => {
        (async () => {
            const boardState = await getBoard()
            dispatch({
                type: "get-board",
                payload: boardState
            })
        })();
        return 
    }, [])

    return (
        <DispatchContext.Provider value={dispatch}>
            <BoardContext.Provider value={state}>
                {state.isLoaded ? children : null}
            </BoardContext.Provider>
        </DispatchContext.Provider>
    )
}

