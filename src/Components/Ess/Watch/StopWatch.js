import React, { useEffect, useState } from 'react'

function StopWatch() {
  const [count,setCount]=useState(0);
  const [isPaused,setIsPaused]=useState(false);

  useEffect(()=>{
    let timer;
    if(!isPaused){
        console.log('mmmm');
        timer=setInterval(()=>{
            setCount(prevState=>prevState+1);
        },1000)
    }
    return ()=>{
        console.log('Anil');
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
  const calculateMinutes=()=>{
    var h = ('0'+Math.floor(count / 3600)).slice(-2);
    var m = ('0'+Math.floor(count % 3600 / 60)).slice(-2);
    var s = ('0'+Math.floor(count % 3600 % 60)).slice(-2);
    return `${h}:${m}:${s}`;
}
  return (
    <div>

        <h4>
            {calculateMinutes()}
          </h4>
        <div>
            {!isPaused? <button onClick={pausedHandler}>Paused</button>: <button onClick={handleStart}>Start</button>}
            <button onClick={resetHandler}>Reset</button>
        </div>
    </div>
  )
}

export default StopWatch