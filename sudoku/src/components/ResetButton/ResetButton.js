import React from 'react'
import getBoard from '../../Context/getBoard';

import { useDispatch } from '../../Context/Context';

export default function ResetButton() {
    const dispatch = useDispatch()

    const handleReset = async () => {
        dispatch({type: "loading"})
        const boardState = await getBoard()
        dispatch({
            type: "get-board",
            payload: boardState
        })
    }

    return (
        <button className="button" onClick={handleReset}>
            Reset
        </button>
    )
}
