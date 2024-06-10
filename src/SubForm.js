import React, { useState } from 'react'

function SubForm() {
  const [formdata,setFormdata]=useState({name:'',email:'',password:'',isError:false});
  
  function submitHandler(event){
    event.preventDefault();
    if(formdata.name==='' ||formdata.email==='' || formdata.password===''){
        setFormdata({...formdata,isError:true});
    }
   
  }
  return (
    <div>
        <h6>{formdata.isError?'Please enter required fields':''}</h6>
        <form onSubmit={(e)=>{submitHandler(e)}}>
          <input type="text" name="name" onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
          <br/>
          <input type="password" name="password" onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/>
          <br/>
          <input type="email" name="email" onChange={(e)=>setFormdata({...formdata,email:e.target.value})} />
          <br/>
          <br/>
          <input type="submit" value="Register" />
         </form>
    </div>
  )
}

export default SubForm;