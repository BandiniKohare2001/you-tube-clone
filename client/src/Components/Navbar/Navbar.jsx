import React from 'react'
import './Navbar.css';
import logo from "./favicon.png"

function Navbar() {
  return (
    <div className='Container_Navbar'>
     <div className='Burger_Logo_Navbar'>
        <div className='Burger'>
       <p></p>
       <p></p>
       <p></p>
        </div>
        <div className='logo_div_Navbar'>
        <img  className="logo" src={logo} alt='YouTube logo' />
        <p className='logo_title_Navbar'>YouTube</p>
        </div>
        {/* <SearchBar /> */}
     </div>
    </div>
  )
}

export default Navbar
