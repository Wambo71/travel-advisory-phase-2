import React,{useEffect ,useState} from "react";

const API_URL = "https://travel-backend-kbq2.onrender.com/countries"


const CountryDetails = () => {
    const[countries,setCountries] = useState([])

      useEffect (() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => { setCountries(data);
            })
            .catch((error) => {
                console.error("Error fetching country data:", error);
            });
    }, []);

  return (
      <div>
        {countries.map((country) => (
          <div key={country.id}>
            <p>{country.name}</p>
            <p>Region: {country.region}</p>
            <p>Advisory: {country.advisory}</p>
          </div>
        ))}
      </div>
  );
}

export default CountryDetails