import React, { useState } from "react"
const API_URL = "http://localhost:3000/UserNotes"

function TravelNoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    note: "",
    date:"",
    recommend:false,
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
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Travel Note:
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}

            required
          />
        </label>
        <br /><br />
        <button type="submit">Submit Note</button>
      </form>
    </div>
  );
}

export default TravelNoteForm;
