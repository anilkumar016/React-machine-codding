import React from 'react'

const Checkbox = ({id,type,name,handleClick,isChecked})=>{
  return (
    <input 
        type={type} 
        id={id} 
        name={name} 
        onChange={handleClick}  
        checked={isChecked}
    />
   
  );
}

export default Checkbox;