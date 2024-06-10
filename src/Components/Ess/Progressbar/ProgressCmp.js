import React, { useEffect, useState } from 'react'
import './Progress.css'
import Progress from './Progress'
function ProgressCmp() {
  const [progress,setProgress]=useState(0);
  useEffect(()=>{
    let timer=setInterval(()=>{
        if(progress<100){
            setProgress(p=>p+1)
        }
    },20)
    return ()=>{
        clearInterval(timer)
    }
  },[progress])
  return (
    <div>
        <Progress progress={progress} color='red' />
        <Progress progress={progress} color='yellow' />
    </div>
  )
}

export default ProgressCmp