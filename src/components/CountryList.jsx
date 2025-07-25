import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

const API_URL = "https://travel-backend-kbq2.onrender.com/countries";// API endpoint to fetch country data

function CountryList() {
  const [countries, setCountries] = useState([]);  //state to show fetched countries
  const [loading, setLoading] = useState(true);   // state to track if data is still loading


 // Fetching country data from the API when the component mounts
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())  // convert response to JSON
      .then((data) => {
        setCountries(data);  //store data in state

        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching countries:', err);
        setLoading(false);
      });
  }, []); // runs only once after render

  if (loading) return <p>Loading countries...</p>;// if the data is still loading, show a loading message

  return ( // renders a list of countries using the CountryCard component
    <div >
      {countries.map((country) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
  );
}

export default CountryList;