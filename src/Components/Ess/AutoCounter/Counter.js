import React, { useEffect, useState } from 'react'

function Counter() {
  const [count,setCount]=useState(0);
  const [isPaused,setIsPaused]=useState(false);

  useEffect(()=>{
    let timer;
    if(!isPaused){
        timer=setInterval(()=>{
            setCount(prevState=>prevState+1);
        },1000)
    }
    return ()=>{
        clearInterval(timer);
    }
  },[isPaused])
  const pausedHandler=()=>{
    setIsPaused(true);
  }
  const handleStart=()=>{
    setIsPaused(false);
  }
  const resetHandler=()=>{
    setCount(0);
  }
  return (
    <div>

        <h4>{count}</h4>
        <div>
            {!isPaused? <button onClick={pausedHandler}>Paused</button>: <button onClick={handleStart}>Start</button>}
            <button onClick={resetHandler}>Reset</button>
        </div>
    </div>
  )
}

export default Counter