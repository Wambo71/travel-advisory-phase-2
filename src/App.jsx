import React from 'react'
import{Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import About from './pages/About'
import CountryDetails from './CountryDetails'
import Dashboard from './layout/Dashboard'
import CountryList from './CountryList'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="about" element={<About />} />
          <Route path="country-details" element={<CountryDetails />} />
          <Route path="country-list" element={<CountryList />} />
        </Route>
      </Routes>
    </div>
    
  )
}

export default App