import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <nav>
        <p>
            <ul>
                <li><NavLink to= {"./About"}>About</ NavLink></li>
                <li><NavLink to={"./CountryDetails"}>CountryDetails</NavLink></li>
                <li><NavLink to={"countryList"}>CountryList</NavLink></li>
            </ul>
        </p>
    </nav>
  )
}

export default Navbar