import React, { useEffect, useState } from 'react'
import {EmployeeData} from './EmployeeData';

function Users() {
  const [users,setUsers]=useState();
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [age,setAge]=useState(0);
  const [id,setId]=useState(0);
  const [isUpdate,setIsUpdate]=useState(false);

const handleSubmit=(e)=>{
    e.preventDefault();
    if(id>0){
      let copyUsers=[...users];
      let itemIndex=copyUsers.map((item)=>item.id).indexOf(id);
      copyUsers[itemIndex].id=id;
      copyUsers[itemIndex].name=name;
      copyUsers[itemIndex].email=email;
      copyUsers[itemIndex].age=age;
      setUsers(copyUsers);
      setId('');
      setName('');
      setEmail('');
      setAge('');
      setIsUpdate(false);
    }else{
      let obj={
        id:users.length+1,
        name,
        email,
        age
      }
       let copyUser=[...users];
       copyUser.push(obj);
       setUsers(copyUser);

    }
    

}
const handleEdit=(id)=>{
     let copyUsers=[...users];
     let itemIndex=copyUsers.map((item)=>item.id).indexOf(id);
    setId(copyUsers[itemIndex].id);
    setName(copyUsers[itemIndex].name);
    setEmail(copyUsers[itemIndex].email);
    setAge(copyUsers[itemIndex].age);
    setIsUpdate(true);
}

const handleDelete=(id)=>{
   
    let copyUsers=[...users];
    let tempUser=copyUsers.filter((item)=>item.id !==id);
    setUsers(tempUser);
}

const handleInput=(e)=>{
    if(e.target.id==='name'){
      setName(e.target.value);
    }
    if(e.target.id==='email'){
      setEmail(e.target.value);
    }
    if(e.target.id==='age'){
      setAge(e.target.value);
    }
}


useEffect(()=>{
  setUsers(EmployeeData);
},[]);
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
        <div className="container mt-3">
          <h5>Employee Create</h5>
          <form onSubmit={handleSubmit}> 
            <div className="mb-6 mt-6">
              <label>Name:</label>
              <input type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                name="name" 
                value={name}
                onChange={handleInput}
               />
            </div>
            <div className="mb-6 mt-6">
              <label >Email:</label>
              <input type="email" 
                className="form-control" 
                id="email" 
                placeholder="Enter email" 
                name="email" 
                value={email}
                onChange={handleInput}
              />
            </div>
            <div className="mb-6 mt-6">
              <label>Age:</label>
              <input type="number" 
                className="form-control" 
                id="age" 
                placeholder="Enter Age" 
                name="age" 
                value={age}
                onChange={handleInput}
              />
            </div>
            {!isUpdate?<button type="submit" 
               className="btn btn-primary" 
               style={{marginTop:'20px'}}
            >Submit</button>:<button type="submit" 
            className="btn btn-primary" 
            style={{marginTop:'20px'}}
         >Update</button>}
            
          </form>
        </div>
        </div>
      </div>
      <div className='row'>
        <div className="col-sm-10">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users&& users.map((item,idx)=>(<tr key={item.id}>
                  <td>{idx+1}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>
                    <button onClick={()=>handleEdit(item.id)}>Edit</button>&nbsp;
                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
  )
}

export default Users