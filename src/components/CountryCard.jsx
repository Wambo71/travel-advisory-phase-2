import React from 'react';

function CountryCard({ country }) { //function component that receives country as a prop
  return (
    // Displaying country details in a card format
    <div >
      <h2 >{country.name}</h2>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Advisory Level:</strong>{country.advisoryLevel}</p>

      </div>
  );
}

export default CountryCard;