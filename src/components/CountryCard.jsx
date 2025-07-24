import React from 'react';

function CountryCard({ country }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-md mb-4">
      <h2 className="text-lg font-bold">{country.name}</h2>
      <p><strong>Region:</strong> {country.region}</p>
     
    </div>
  );
}

export default CountryCard;