import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
        <nav className ="navbarnew">
            <ul >
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/login'}>Login</NavLink></li>
                <li><NavLink to={'/register'}>Register</NavLink></li>
                <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar