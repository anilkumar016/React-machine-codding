import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment } from './countSlice';

function Main() {
    const count=useSelector(state=>state.count);
     const dispatch=useDispatch()
  return (
    <div>
       <h2>{count}</h2>
       <button onClick={()=>dispatch(increment())}>Increment</button>
       <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Main