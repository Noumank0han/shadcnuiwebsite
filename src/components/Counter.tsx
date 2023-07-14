"use client"

import React, { useState } from 'react'

const Counter = () => {

    let [count, setCount] = useState(1)

    return (
        <div>
            <div className="flex mt-6 gap-2 items-center">
                <span className="font-bold">Quantity:</span>
                <button onClick={() => count <= 1 ? 1 : setCount((count) => count - 1)} className="flex rounded-full bg-gray-100 p-2 h-8 w-8 justify-center items-center">-</button>
                <span>{count}</span>
                <button onClick={() => setCount((count) => count + 1)} className="flex rounded-full bg-gray-50 border p-2 h-8 w-8 justify-center items-center">+</button>
            </div>
        </div>
    )
}

export default Counter