import React, { useEffect, useState } from 'react'
import { Catalogues } from './data' 
import Checkbox from './Checkbox';

function CheckboxExp() {
    const [isCheckAll,setIsCheckAll]=useState(false);
    const [list,setList]=useState([]);
    const [isCheck,setIsCheck]=useState([]);


    const handleSelectAll=(e)=>{

        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map((item)=>item.id));
        console.log(isCheckAll);
        if(isCheckAll){
            setIsCheck([]);
        }
    }
    const handleClick=(e)=>{
         const {id,checked} = e.target;
         setIsCheck([...isCheck,id]);
         if(!checked){
            let copyischeck=[...isCheck];
           let temcopy= copyischeck.filter((item)=>item !=id);
           setIsCheck(temcopy);
         }
         console.log(isCheck);
    }
    console.log(isCheck);
    useEffect(()=>{
        setList(Catalogues);
    },[]);
    
    const catalog=list.map(({id,name})=>{
        return ( 
            <>
            <Checkbox 
                key={id} 
                type="checkbox"
                id={id} 
                name={name}
                handleClick={handleClick} 
                isChecked={isCheck.includes(id)} 
            /> 
            {name}
        </>
        )
    })
   
    return (
        <div>
            <Checkbox
                type="checkbox"
                name="selectAll"
                id="selectAll"
                handleClick={handleSelectAll}
                isChecked={isCheckAll}
            />
            Select All
            {catalog}
        </div>
    )
}

export default CheckboxExp