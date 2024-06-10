import React, { useState } from 'react'

function useLocalStorage(key,defaultValue) {
  const [storedValue,setStoredValue]=useState(()=>{
    try{
        let value = localStorage.getItem(key)
        if(value){
            return JSON.parse(value)
        }else{
            localStorage.setItem(key,JSON.stringify(defaultValue))
            return defaultValue
        }
    }catch(err){
         return defaultValue;
    }
  })
  const setValue=(currVal)=>{
    try{
        localStorage.setItem(key,JSON.stringify(currVal))
    }catch(err){ }
    setStoredValue(currVal);
  }

  return [storedValue,setValue]
}

export default useLocalStorage