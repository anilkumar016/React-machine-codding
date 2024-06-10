import React, { useEffect, useState } from 'react'

function LoadingCmp() {
  const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
    let timer;
    timer = setTimeout(()=>{
        setIsLoading(false);
    },6000)

    return ()=>{
        clearTimeout(timer)
    }

  },[])
  return (
    <div>
        {isLoading?<div>Loading...........</div>:''}
    </div>
  )
}

export default LoadingCmp