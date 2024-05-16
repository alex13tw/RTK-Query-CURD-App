import React from 'react'
import { Link } from 'react-router-dom'
import ULists from './ULists'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand ms-4 text-white">CRUD</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ULists />
  </div>
</nav>
    </div>
  )
}

export default Header
