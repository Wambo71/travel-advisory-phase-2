import React,{useEffect ,useState} from "react";

const API_URL = "https://travel-backend-kbq2.onrender.com/countries"  // API endpoint to fetch country data

// CountryDetails component to display details of each country and advisories
const CountryDetails = () => {
    const[countries,setCountries] = useState([])

      useEffect (() => {
        fetch(API_URL)  // Fetching country data from the API
            .then((response) => response.json())  // Convert response to JSON
            .then((data) => { setCountries(data);
            })
            .catch((error) => {
                console.error("Error fetching country data:", error);  // Handle any errors that occur during the fetch
            });
    }, []);

  return (  // Rendering the list of countries with their advisories
      <div className="details-container">
        {countries.map((country) => (   // Mapping through the countries array to display each country's details
          <div className="country-card" key={country.id}>
            <p>{country.name}</p>
            
            <p className="country-advisory">Advisory: {country.advisory}</p>
          </div>
        ))}
      </div>
  );
}

export default CountryDetails