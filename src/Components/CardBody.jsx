import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
const CardBody = ({onClick,user}) => {
  return (
    <div className='justify-content-center d-flex'>  
    <Button className='btn btn-sm btn-danger m-1' name="Delete" onClick={onClick} /> 
    <Link  to={`/edit/${user.id}`}> 
    <Button className='btn btn-sm btn-success m-1' name="Edit" />
    </Link>    
    </div>
  )
}

export default CardBody
