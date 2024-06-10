import React, { useEffect,useState } from 'react'
import './Home.css';
import debounceObj from './Util';
function Home() {
  const [inputVal,setInputVal]=useState('')
  const [autoSelected,setAutoSelected]=useState([])
  const handleInput=(e)=>{
    setInputVal(e.target.value)
  }
  const fetchData=async (searchVal)=>{
       let url=`https://api.frontendeval.com/fake/food/${searchVal}`;
       let data= await debounceObj(url)
       let copyautoSelected=[...autoSelected]
       copyautoSelected=data
       setAutoSelected(copyautoSelected) 
  }
 
  useEffect(()=>{
    if(inputVal.length>0){
       fetchData(inputVal)
    }
  },[inputVal])

  return (
    <div className='box'>
       <div className='row'>
           <input type='text' id='search' name='name' onChange={handleInput}/>
       </div>
       <div className='auto-serach'>
          {
          autoSelected&&autoSelected.map((item,idx)=>(<div className='item' key={idx}>
          {item} 
         </div>))
          }
           
          
       </div>
    </div>
  )
}

export default Home