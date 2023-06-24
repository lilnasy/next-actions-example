"use client"
import { useState } from "react"
import { increment, decrement, getCount } from "./whatever"

// needs webpack experiments topLevelAwait enabled
const initialCount = /* await getCount() */ 0

export default function () {
    const [ count, setCount ] = useState(initialCount)
    
    getCount().then(setCount)
    
    return <>
        <button onClick={async () => setCount(await decrement())}>-</button>
        <span>{count}</span>
        <button onClick={async () => setCount(await increment())}>+</button>
    </>
}
