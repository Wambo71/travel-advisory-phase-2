import React,{useEffect ,useState} from "react";

const API_URL = "http://localhost:3000/countries";


const CountryDetails = () => {
  
    const[countries,setCountries] = useState(null)

      useEffect (() => {
        fetch(API_URL) 
            .then((response) => response.json())
            .then((data) => { setCountries(data);
            })
            .catch((error) => {
                console.error("Error fetching country data:", error);
            });
    }, [])

  if (!countries) {
    return <div>Loading...</div>
  }

  return (
      <div>
        <h1>Country details</h1>
       {countries.map((country) => <li key={country.id}>{country.name} {country.region} {country.advisory}</li>
        )}
      </div>
  )
}

  
  


export default CountryDetails