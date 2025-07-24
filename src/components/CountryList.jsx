import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

const API_URL = "https://travel-backend-kbq2.onrender.com/countries";

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching countries:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading countries...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {countries.map((country) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
  );
}

export default CountryList;