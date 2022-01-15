import { useBoard, useDispatch } from '../../Context/Context'

export default function SolveButton() {
    const { board, originalBoardSlots, isSolved } = useBoard()
    const dispatch = useDispatch()

    const handleClick = async () => {
        const originalBoard = board.map((box, i) => {
            return box.map((block, j) => {
                return originalBoardSlots[i][j] ? block : 0
            })
        })
        const response = await fetch(`solve`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(originalBoard)
        })
        const data = await response.json()
        const solvedBoard = await data.solvedBoard
        dispatch({
            type: "set-solved", 
            payload: {
                solvedBoard: solvedBoard
            }
        })
    }

    return (
        <button className="button" onClick={!isSolved ? handleClick : null}>
            Solve
        </button>
    )
}
