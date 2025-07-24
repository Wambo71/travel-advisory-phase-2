


import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

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