import React from 'react'
import Login from './login'
import navbarstyles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={navbarstyles.navbar_container}>

<h1>AuthenticDAO</h1>
<Login/>

    </div>
  )
}

export default Navbar