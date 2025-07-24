import React, { useEffect, useState } from "react";
const API_URL = "http://localhost:3000/userNotes";

function UserNote() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/userNotes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setNotes(notes.filter((note) => note.id !== id));
      })
      .catch((error) => console.error("Error deleting note:", error));
  };

  return (
    <div>
      <h2>Travel Notes from Other Users</h2>
      {notes.length === 0 ? (
        <p>No notes submitted yet.</p>
      ) : (
        notes.map((note) => (
          <div key={note.id}>
            <p> Name:{note.name}</p>
            <p>Country:{note.country}</p>
            <p>Note:{note.note}</p>
            <p>Date:{note.date}</p>
            <p>type:{note.type}</p>
            
  
     <button onClick={() => handleDelete(note.id)}>Delete note</button>
          </div>
        ))
      )}
     
    </div>
    );
  }
  
  export default UserNote;