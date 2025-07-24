import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

function CountryList() {
  const [country, setcountry] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/countries')
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
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
      {notes.map((countries) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
  );
}

export default CountryList;