    import React from 'react'

function Dashboard() {
  return (
    <>
    <nav>
      <ul>
        <ul>
            <li><NavLink to={"./dashboard/about"}>Income</NavLink></li>
            <li><NavLInk to={"./dashboard/country details"}>Expenses</NavLInk></li>
            <li><NavLink to={"./dashboard/country list"}>Savings</NavLink></li>
        </ul>
      </ul>Content
    </nav>
    <div className='Content'>
    <Outlet/>
    </div>
    </>
  )
}

export default Dashboard

    import React from 'react'
    import { NavLink, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <>
    <nav>
      
        <ul>
            <li><NavLink to="about">About</NavLink></li>
            <li><NavLink to="country-details">Country Details</NavLink></li>
            <li><NavLink to="country-list">Country List</NavLink></li>
        </ul>
      
    </nav>
    <div className='Content'>
    <Outlet/>
    </div>
    </>
  )
}

export default Dashboard
