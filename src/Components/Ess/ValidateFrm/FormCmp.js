import React, { useState } from 'react'
import './FormCmp.css'
function FormCmp() {
  const defaultdata={
      fullname:'',
      fullnameErr:'',
      firstname:'',
      firstnameErr:'',
      lastname:'',
      lastnameErr:'',
      email:'',
      emailErr:'',
      password:'',
      passwordErr:'',
      confirm_password:'',
      confirm_passwordErr:''
  }

  const [formdata,setFormData]=useState(defaultdata);
  const validate=()=>{
      let error=true;
      if(formdata.fullname===''){
        setFormData(prevState=>({...prevState,fullnameErr:'Please Eneter Fullname'}));
        error=false;
      }else{
        setFormData(prevState=>({...prevState,fullnameErr:''}));
        error=true;
       
      }
      if(formdata.firstname===''){
        setFormData(prevState=>({...prevState,firstnameErr:'Please Eneter Firstname'}));
        error=false;
      }else{
        setFormData(prevState=>({...prevState,firstnameErr:''}));
        error=true;
      }
      if(formdata.lastname===''){
        setFormData(prevState=>({...prevState,lastnameErr:'Please Eneter Lastname'}));
        error=false;
      }else{
        setFormData(prevState=>({...prevState,lastnameErr:''}));
        error=true;
      }
      if(formdata.email===''){
        setFormData(prevState=>({...prevState,emailErr:'Please Eneter Email'}));
        error=false;
      }else{
        setFormData(prevState=>({...prevState,emailErr:''}));
        error=true;
      }
      if(formdata.password===''){
        setFormData(prevState=>({...prevState,passwordErr:'Please Eneter Password'}));
        error=false;
      }else{
        setFormData(prevState=>({...prevState,passwordErr:''}));
        error=true;
      }
      if(formdata.confirm_password===''){
        setFormData(prevState=>({...prevState,confirm_passwordErr:'Please Eneter Confirm Password'}));
        error=false;
      }else if(formdata.password !==formdata.confirm_password){
        setFormData(prevState=>({...prevState,confirm_passwordErr:'Password and Confirm Password Mismatch.'}));
        error=false;
      }else{
        setFormData(prevState=>({...prevState,confirm_passwordErr:''}));
        error=true;
      }
      return error;
  }
  const handleSubmit=(e)=>{
       e.preventDefault();
       if(validate()){
          console.log(formdata);
       }
  }
  const handleInput=(e)=>{
    const {id,value}=e.target;
    setFormData(prevData=>({...prevData,[id]:value}));
    validate();
    
  }
  
 
  return (
    <>
       <div className='container'> 
          <form onSubmit={handleSubmit}>
            <h4> Target Form</h4>
           <div className='col'>
                  <label>Fullname</label>
                  <input type='text' id='fullname' name='fullname'  placeholder='Enter Fullname' onChange={handleInput} / >
                  {formdata.fullnameErr.length>0 &&<span>{formdata.fullnameErr}</span>}
           </div>
           <br/>
           <div className='col'>
                  <label>First Name</label>
                  <input type='text' id='firstname' name='firstname' placeholder='Enter First Name'  onChange={handleInput} / >
                  {formdata.firstnameErr.length>0 &&<span>{formdata.firstnameErr}</span>}
           </div>
           <br/>
           <div className='col'>
                  <label>Last Name</label>
                  <input type='text' id='lastname' name='lastname'  placeholder='Enter Last Name'  onChange={handleInput} / >
                  {formdata.lastnameErr.length>0 &&<span>{formdata.lastnameErr}</span>}
           </div>
           <br/>
           <div className='col'>
                  <label>Email</label>
                  <input type='email' id='email' name='email'  placeholder='Enter Email' onChange={handleInput} / >
                  {formdata.emailErr.length>0 &&<span>{formdata.emailErr}</span>}
           </div>
           <br/>
           <div className='col'>
                  <label>Password</label>
                  <input type='password' id='password' name='password'  placeholder='Enter Password'  onChange={handleInput} / >
                  {formdata.passwordErr.length>0 &&<span>{formdata.passwordErr}</span>}
           </div>
           <br/>
           <div className='col'>
                  <label>Confirm Password</label>
                  <input type='password' id='confirm_password' name='confirm_password' placeholder='Enter Confirm Password'  onChange={handleInput} / >
                  {formdata.confirm_passwordErr.length>0 &&<span>{formdata.confirm_passwordErr}</span>}
           </div>
           <br/>
           <div className='col'>
                  <input type='submit' value='Submit' / >
           </div>
           </form>
       </div> 
    </>
  );
}

export default FormCmp