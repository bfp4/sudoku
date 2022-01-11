export default async function getBoard(){
    const response = await fetch("https://sugoku.herokuapp.com/board?difficulty=random");
    const data = await response.json();
    const board = await data.board
    const originalBoardSlots = await board.map(box => {
        return box.map(block => block !== 0)
    })
    const state = {
        board: board, 
        originalBoard: board,
        originalBoardSlots: originalBoardSlots
    }
    return state
}



