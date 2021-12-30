import React from 'react'
import "./styles.css"

import Block from "../Block/Block"

export default function Box(props) {
    const { box, boxNumber } = props
    return (
        <div className='box-grid'>
            {
                box.map((block, i) => {
                    const originalNumber = block !== 0
                    return (
                        <Block 
                            key={i}
                            number={block}
                            boxNumber={boxNumber}
                            blockNumber={i}
                            originalNumber={originalNumber}
                        />
                    )
                })
            }
        </div>
    )
}
