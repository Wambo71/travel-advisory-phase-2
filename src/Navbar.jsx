


import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
//  functional component to render the navigation bar
function Navbar() {
  return (
    <nav className='Nav'>
         <NavLink to= "./about">About</NavLink>
         <NavLink to="./country-details">CountryDetails</NavLink>
         <NavLink to="./country-list">CountryList</NavLink>   
         <NavLink to="./form">TravelNoteForm</NavLink>        
    </nav>
  )
}

export default Navbar