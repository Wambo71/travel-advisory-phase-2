


import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        
            <ul>
                <li><NavLink to= {"/about"}>About</NavLink></li>
                <li><NavLink to={"/country-details"}>CountryDetails</NavLink></li>
                <li><NavLink to={"/country-list"}>CountryList</NavLink></li>
            </ul>
        
    </nav>
  )
}

export default Navbar