import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";




const API_URL = "https://travel-backend-kbq2.onrender.com/userNotes"   // API endpoint to submit travel notes

function TravelNoteForm() {

  const [formData, setFormData] = useState({  // state to manage form data
    // Initializing the form fields
    name: "",
    country: "",
    note: "",
    date: "",
    type: "",
  });

   const navigate = useNavigate();  //a hook to navigate to another page after form submission
  
   
  const handleChange = (e) => {
    setFormData({
      ...formData,  // Spread operator to keep existing form data
      [e.target.name]: e.target.value,  //updtaes the field that changed
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();   // prevents form reload

    fetch(API_URL, {   // Submitting the form data to the API
      method: "POST",
      headers: {
        "Content-Type": "application/json",   // means we are sending JSON data
      },
      body: JSON.stringify(formData),  // Convert form data to JSON string
    })
      .then((res) => res.json())
      .then((newNote) => {
         alert("Note submitted successfully!");
         
        setFormData({ name: "", country: "", note: "", date: "", type: "" });  // clear the form text areas after submission

          navigate("/user-note");  //navigate to the user note page
      })
      .catch((error) => {
        console.error("Error submitting note:", error);
      });
  };

  return (  //renders the form for submitting travel notes
    <>
    <form className="travel-form-container" onSubmit={handleSubmit}>
      <h2 className="travel-form-title">Submit Your Travel Advice</h2>
      
      <label className="travel-form-label" htmlFor="name">Name</label>
      <input
        className="travel-form-input"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label className="travel-form-label" htmlFor="country">Country</label>
      <input
        className="travel-form-input"
        type="text"
        name="country"
        value={formData.country}
        onChange={handleChange}
        required
      />

      <label className="travel-form-label" htmlFor="note">Travel Note</label>
      <textarea
        className="travel-form-textarea"
        name="note"
        value={formData.note}
        onChange={handleChange}
        required
      />

      <label className="travel-form-label" htmlFor="date">Date</label>
      <input
        className="travel-form-input"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label className="travel-form-label" htmlFor="type">Advisory Type</label>
      <select
        className="travel-form-input"
        name="type"
        value={formData.type}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="safety">Safety</option>
        <option value="health">Health</option>
        <option value="transport">Transport</option>
      </select>
      
      <button className="travel-form-btn" type="submit">
        Submit Note
      </button>
           
    </form>
    </>
  );
 
}

export default TravelNoteForm
