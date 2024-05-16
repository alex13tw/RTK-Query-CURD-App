import React, { useState } from 'react'
import { useAddUserMutation  } from '../RTK/userAPI';
import { useNavigate } from 'react-router-dom';
import Form from './Form';



const CreateUser = () => {
    const [user,setUser] =useState({ });
    const handleChange=(e)=>{
        setUser({...user,[e.target.name] : e.target.value})
    }
 console.log(user);
    const [addUser]=useAddUserMutation();  
    const navigate=useNavigate();   
    const handleSubmit= async(e)=>{ 
        e.preventDefault();
        await addUser(user);
        navigate('/');  
    } 

  return (    
    <div className='row justify-content-center pt-5 mt-5'>    
    <div className='col-4'>    
    <Form fname="Add user" onSubmit={handleSubmit} handleChange={handleChange} />
    </div>
    </div>
  )
}

export default CreateUser
