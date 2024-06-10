import React from 'react'
import useLocalStorage from './useLocalStorage'

function Homes() {
    const[count,setCount]=useLocalStorage('')
    const handleChnage=(e)=>{
        setCount(e.target.value)
    }
    return (
        <div>
            Local Storage Custom Custom
            <h1> {count}</h1>
            <input type='text' value={count} onChange={handleChnage} />
        </div>
    )
}

export default Homes