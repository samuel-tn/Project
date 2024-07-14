import React from 'react'
import './App.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
    <div className='navbar-logo'>
        Men 
    </div>
    <ul className='navbar-menu'>
        <li><Link to="/Register/Login">LoginRegister</Link></li>
        <li><Link to="/Tools">ToolsPage</Link></li>
        <li><Link to="/API">APIPage</Link></li>
        <li><Link to="/Pricing">PricingPage</Link></li>
        <li><Link to="/About">AboutPage</Link></li>
        <li><Link to="/Contact">ContactPage</Link></li>
    </ul>
    </div>
  );
};

export default Navbar