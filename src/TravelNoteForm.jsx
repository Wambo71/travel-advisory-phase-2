import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:3000/userNotes";

function TravelNoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    note: "",
    date: "",
    type: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newNote) => {
        alert("Thank you! Your note has been submitted.");
        setFormData({ name: "", country: "", note: "", date: "", type: "" });
      })
      .catch((error) => {
        console.error("Error submitting note:", error);
      });
  };

  return (
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

     <Link to="/user-note">
      <button className="travel-form-btn" type="submit">
        Submit Note
      </button> /</Link>
    </form>
  );
}

export default TravelNoteForm;
