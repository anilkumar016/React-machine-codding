import React,{useRef,useState,useEffect} from 'react'

function Stopwatches() {
    const inputRef=useRef(0);
    const [count,setCount]=useState(0);
    const handleStart=()=>{
        if(inputRef.current) return ;
        inputRef.current=setInterval(()=>{
            setCount(prevState=>prevState+1);
        },1000);
    }
    const handleStop=()=>{
        clearInterval(inputRef.current);
        inputRef.current=0;
    }
    const handleReset=()=>{
        clearInterval(inputRef.current);
        inputRef.current=0;
        setCount(0);
    }
    useEffect(()=>{
          clearInterval(inputRef.current);
    },[])
    const calCulateTime=()=>{
         let hours=('0'+Math.floor(count/3600)).slice(-2);
         let minutes=('0'+Math.floor(count%3600/60)).slice(-2);
         let second=('0'+Math.floor(count%3600%60)).slice(-2);
         return `${hours} : ${minutes} : ${second}`
    }
    return (
        <div>
            <h1>{calCulateTime()}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Stopwatches