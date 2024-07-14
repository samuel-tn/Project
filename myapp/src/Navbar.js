import React from 'react'
import './App.css';

function Navbar() {
  return (
    <div className='navbar'>
    <div className='navbar-logo'>
        Men 
    </div>
    <ul className='navbar-menu'>
        <li><a href="/">Register/Login</a></li>
        <li><a href="/">Tools</a></li>
        <li><a href="/">API</a></li>
        <li><a href="/">Pricing</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
    </ul>
    </div>
  )
}

export default Navbar