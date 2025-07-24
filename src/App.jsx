
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import About from './pages/About'
import CountryDetails from './CountryDetails'
import TravelNoteForm from './TravelNoteForm'
import CountryList from './components/CountryList'
import UserNote from './UserNote'


const App = () => {
  return (
    <div>
      <h3>TRAVEL ADVISORY APP</h3>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/country-details" element={<CountryDetails />} />
        <Route path="/country-list" element={<CountryList />} />  
        <Route path="/form" element={<TravelNoteForm />} />  
        <Route path="/user-note" element={<UserNote />} />
      </Routes>
    </div>
    
  )
}

export default App

