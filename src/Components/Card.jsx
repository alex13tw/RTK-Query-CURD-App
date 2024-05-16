import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import CardHead from './CardHead'
import CardBody from './CardBody'

const Card = ({user,onClick,key}) => {
  return (
    <div>
      <div className="card m-3 " key={key} >   
          <div className="card-body">        
          <CardHead name={user.name} email={user.email}  />
          <CardBody onClick={onClick} user={user}/>    
          </div>
        </div>
    </div>
  )
}

export default Card
