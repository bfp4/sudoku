import React from 'react'

export default function SolveButton() {
    async function run(){
        const response = await fetch(`solve/${""}`)
        const data = await response.json()
        await console.log(data)
    }
    return (
        <button onClick={run}>
            Solve
        </button>
    )
}
