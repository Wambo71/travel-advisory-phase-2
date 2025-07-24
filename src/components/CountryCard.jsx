import React from 'react';

function CountryCard({ country }) {
  return (
    <div >
      <h2 >{country.name}</h2>
      <p><strong>Region:</strong> {country.region}</p>
     
    </div>
  );
}

export default CountryCard;