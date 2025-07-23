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
