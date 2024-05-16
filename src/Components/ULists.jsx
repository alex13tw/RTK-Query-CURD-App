import React from 'react'
import { Link } from 'react-router-dom'

const ULists = () => {
  return (
    <div>
      <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link className="nav-link text-light text-opacity-75" to='/create'>
      Create
      </Link> 
      </li>   
    </ul>
    </div>
  )
}

export default ULists
