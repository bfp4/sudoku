import { useBoard, useDispatch } from '../../Context/Context'

export default function SolveButton() {
    const { originalBoard, isSolved } = useBoard()
    const dispatch = useDispatch()

    const handleClick = async () => {
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
        <button onClick={!isSolved ? handleClick : null}>
            Solve
        </button>
    )
}
