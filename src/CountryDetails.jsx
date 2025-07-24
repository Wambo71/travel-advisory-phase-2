import React,{useEffect ,useState} from "react";

const API_URL = "https:localhost:3000/countries";


const CountryDetails = () => {
    const[country,setCountry] = useState()

      useEffect (() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => { setCountry(data);
            })
            .catch((error) => {
                console.error("Error fetching country data:", error);
            });
    }, []);

  return (
      <div>
        <h1>Country details</h1>
        <p> {country.name}</p>
        <p>Region:{country.region}</p>
        <p>Advisory:{country.advisory}</p>

      </div>
  )
}

export default CountryDetails