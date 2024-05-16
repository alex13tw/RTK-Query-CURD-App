import React, { useEffect, useState }  from 'react'
import {  useGetUserQuery ,useUpdateUserMutation} from '../RTK/userAPI';
import { useNavigate, useParams } from 'react-router-dom';
import Form from './Form';

const EditUser = () => {  
    const {id} = useParams();  
    const [user,setUser] =useState({   
        id:id, 
        name:"",   
        email:""   
    });   
       
    const handleChange=(e)=>{     
        setUser({...user,[e.target.name] : e.target.value}) 
    }       
         
    const {data}= useGetUserQuery(id);       
    useEffect(      
     ()=>{    
            if(data){    
            setUser({...user, name: data.name  ,email: data.email})    
            }      
        },[data]        
        
    )    
       
    const navigate=useNavigate();       
    const [updateUser] =useUpdateUserMutation() 
    const handleSubmit= async(e)=>{   
        e.preventDefault();
        await updateUser(user);  
        navigate('/');   
    }   
    
    return (   
    <div className='row justify-content-center pt-5 mt-5'>  
        <div className='col-4'>   
        <Form fname="Edit User" onSubmit={handleSubmit} value1={user.name} value2={user.email} handleChange={handleChange} user={user} />
        </div>      
    </div>  
  )   
}

export default EditUser  
