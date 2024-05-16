import React from 'react'
import { useGetUsersQuery,useDeleteUserMutation } from '../RTK/userAPI'
import { Link } from 'react-router-dom'
import Button from './Button'
import Card from './Card'

const User = () => {
    const {data,isLoading,isError,isSuccess,error} =useGetUsersQuery()
    const [deleteUser]=useDeleteUserMutation()  
  return (     
    <div className="row justify-content-center">    
    {isLoading && <h3>Loading...</h3>}  

      {isError && <h3>Something is Wrong</h3>} 

      {isSuccess &&   
      data.map((user,index)=>(    

      <div className="col-4">     
        <Card user={user} onClick={()=>deleteUser(user.id)} key={index} /> 
      </div>
              
      ))
      }
    </div>
  )
}

export default User
