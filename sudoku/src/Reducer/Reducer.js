export default function reducer(state, action){
    switch(action.type){
        case "get-board":
            const { board, originalBoard, originalBoardSlots } = action.payload
            return {
                ...state,
                board: board,
                originalBoard: originalBoard,
                originalBoardSlots: originalBoardSlots,
                isLoaded: true
            }
        case "set-number-slot":
            const { boxNumber, blockNumber, number } = action.payload
            state.board[boxNumber][blockNumber] = number
            return state
        case "set-solved":
            const { solvedBoard } = action.payload
            return {
                ...state,
                board: solvedBoard,
                isSolved: true
            }
        default:
            return {...state, board: "butt"}
    }
}