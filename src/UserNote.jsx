import React, { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://travel-backend-kbq2.onrender.com/userNotes"  // API endpoint to fetch user notes

function UserNote() {
  //state to manage user notes
  const [notes, setNotes] = useState([]);

  useEffect(() => {  // fetches notes from api
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);

  const handleDelete = (id) => { // function to delete a note by id
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => { 
        setNotes(notes.filter((note) => note.id !== id)); //remove the deleted note from the state
      })
      .catch((error) => console.error("Error deleting note:", error));
  };

  return (
    <div className="user-notes-container">
      <h2 className="user-notes-title">Travel Notes from Other Users</h2>
      {notes.length === 0 ? (
        <p>No notes submitted yet.</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="user-note-card">
            <div className="user-note-row">
              <span className="user-note-label">Name:</span>
              <span className="user-note-value">{note.name}</span>
            </div>
            <div className="user-note-row">
              <span className="user-note-label">Country:</span>
              <span className="user-note-value">{note.country}</span>
            </div>
            <div className="user-note-row">
              <span className="user-note-label">Note:</span>
              <span className="user-note-value">{note.note}</span>
            </div>
            <div className="user-note-meta">
              Date: {note.date} | Type: {note.type}
            </div>
            <button className="user-delete-btn" onClick={() => handleDelete(note.id)}>
              Delete note
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default UserNote;