import React, { useState } from 'react'
import './multistep.css'
const inputData=[
    {
        id:'name',
        label:'Name',
        type:'text',
        placeholder:'Please Enter Name',
        button:'Next'

    },
    {
        id:'email',
        label:'email',
        type:'email',
        placeholder:'Please Enter Email',
        button:'Next'
    },
    {
        id:'dob',
        label:'DOB',
        type:'date',
        placeholder:'Please Enter DOB',
        button:'Next'
    },
    {
        id:'password',
        label:'Password',
        type:'password',
        placeholder:'Please Enter Password',
        button:'Save'
    },


]
function MultiStepCmp() {
    const [forData,setFormData]=useState(inputData);
    const [data,setData]=useState({
        name:'',
        email:'',
        dob:'',
        password:''
    });
    const [index,setIndex]=useState(0);
    const submitHandler=(e)=>{
        e.preventDefault();
        if(index>=forData.length-1){
            alert('Form is submitted');
        }else{
            setIndex(prev=>prev+1);
        }
    }
    const handleInput=(e)=>{
        console.log(e.target.id);
        setData(prevState=>({...prevState,[e.target.id]:e.target.value}))
    }
    const handlePrev=(e)=>{
         e.preventDefault();
         setIndex(prevState=>prevState-1);
    }

    return (
        <div>
           <div className='form-div'>
                <form onSubmit={submitHandler}>  
                <h3>Multiple Step Form </h3>
                {
                index>0? <div className='btn-prev'>
                <a href='/' onClick={handlePrev}>Previous</a>
            </div>:null
                }              
               
                
                <div className='input-row'>
                <input type={forData[index].type} 
                    id={forData[index].id}
                    value={data[forData[index].id]} 
                    name={forData[index].id} 
                    placeholder={forData[index].placeholder} 
                    onChange={handleInput}
                />
                </div>
                <div className='btn-container' style={{marginTop:'20px'}}>
                    <button>{forData[index].button}</button>
                </div>
                </form>
           </div>
        </div>
    )
}

export default MultiStepCmp