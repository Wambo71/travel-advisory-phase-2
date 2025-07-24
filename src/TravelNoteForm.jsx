import React, { useState } from "react"
const API_URL = "http://localhost:3000/UserNotes"

function TravelNoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    note: "",
    date:"",
    type:""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/userNotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((newNote) => {
        alert("Thank you! Your note has been submitted.");
        setFormData({ name: "", country: "", note: "" }); 
      })
      .catch((error) => {
        console.error("Error submitting note:", error);
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Submit Your Travel Advice</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
        <label htmlFor="country">country</label>
        
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />

          <br />
        <label htmlFor="travel note">travel note</label>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}

            required
          />
          <br />
          <label htmlFor="date">date</label>
          <input 
          type="date" 
          value={formData.date}
          onChange= {handleChange}
          required
          />

          <label htmlFor="advisory type">advisory type</label>
          <select name="type" value={formData.type} onChange={handleChange}></select>

          <option value="">select</option>
          <option value="safety">Safety</option>
          <option value="health">Health</option>
          <option value="transport">Transport</option>

        
        <button type="submit">Submit Note</button>
      </form>
    </div>
  );
}

export default TravelNoteForm;
