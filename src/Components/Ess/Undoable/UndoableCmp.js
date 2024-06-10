import React, { useState } from 'react'
import './Undoable.css';
function UndoableCmp() {
  const [value,setValue]=useState(0);
  const [history,setHistory]=useState([]);
  const [redoData,setRedoData]=useState([]);
   
  const manageHistory=(action,prevVal,currVal)=>{
        let obj={
            action,
            prevVal,
            currVal
        }
       
        let copyHistory = [...history];
        copyHistory.unshift(obj);
        setHistory(copyHistory)
  }

  const handleClick=(e)=>{
     let inputVal=parseInt(e.target.value);
     manageHistory(inputVal,value,value+inputVal);
     setValue(prevVal=>prevVal+inputVal)
  }
  const undoHandler=()=>{
    if(history.length>0){
        let copyhistory =[...history];
        let undotemp=copyhistory.shift();
        setRedoData(prev=>[...prev,undotemp]);
        setHistory(copyhistory);
    }
  }
  const redoHandler=()=>{
       let copyRedoData=[...redoData];
       let tempRedoData=copyRedoData.pop();
       setRedoData(copyRedoData);
       let {action,prevVal,currVal}=tempRedoData;
       manageHistory(action,prevVal,currVal);


    
  }
  console.log(redoData,history);

  return (
    <div>
        <div className='counter-container'>
              <div className='undo-container'>
                  <button onClick={undoHandler}>Undo</button>
                  <button onClick={redoHandler}>Redo</button>
              </div>
              <div className='action-container'>
                 {
                    [-100,-10,-1].map((num,index)=>{
                         return (
                         <button 
                         onClick={handleClick} 
                         value={num}
                         key={index}
                         >{num}</button>
                        )
                   })
                 }
                 <span className='counter-text'>{value}</span>
                 {
                    ['+100','+10','+1'].map((num,index)=>{
                         return (
                         <button 
                         onClick={handleClick} 
                         value={num}
                         key={index}>{num}</button>)
                   })
                 }
              </div>
              <div className='history-container'>
                     {
                       history.map((item)=>{
                           return (<div className='row'>
                                <div>{item.action}        {`(${item.prevVal} -> ${item.currVal})`}</div>
                           </div>)
                       }) 
                     }
              </div>
        </div>
    </div>
  )
}

export default UndoableCmp