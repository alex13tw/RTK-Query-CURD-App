import React from 'react'

const CardHead = ({name,email}) => {
  return (
    <div>
       <h5 className="card-title text-center">{name}</h5>    
        <h6 className="card-subtitle mb-2 text-muted text-center">{email}</h6>
    </div>
  )
}

export default CardHead
