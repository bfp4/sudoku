export default function reducer(state, action){
    switch(action.type){
        case "get-board":
            const { board, originalBoardSlots } = action.payload
            return {
                board: board,
                originalBoardSlots: originalBoardSlots,
                isSolved: false,
                isLoaded: true
            }
        case "set-number-slot":
            const { boxNumber, blockNumber, number } = action.payload
            state.board[boxNumber][blockNumber] = number
            const newBoard = state.board
            return {
                ...state,
                board: newBoard
            }
        case "set-solved":
            const { solvedBoard } = action.payload
            return {
                ...state,
                board: solvedBoard,
                isSolved: true
            }
        case "loading":
            return {
                ...state,
                isLoaded: false
            }
        default:
            return {...state, board: "butt"}
    }
}