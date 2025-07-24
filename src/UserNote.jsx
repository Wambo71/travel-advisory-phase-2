import React, { useEffect, useState } from "react";
import "./App.css";
const API_URL = "http://localhost:3000/userNotes";

function UserNote() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(API_URL)
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
    <div className="notes-container">
      <h2 className="notes-title">Travel Notes from Other Users</h2>
      {notes.length === 0 ? (
        <p>No notes submitted yet.</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="note-card">
            <div className="note-row">
              <span className="note-label">Name:</span>
              <span className="note-value">{note.name}</span>
            </div>
            <div className="note-row">
              <span className="note-label">Country:</span>
              <span className="note-value">{note.country}</span>
            </div>
            <div className="note-row">
              <span className="note-label">Note:</span>
              <span className="note-value">{note.note}</span>
            </div>
            <div className="note-meta">
              Date: {note.date} | Type: {note.type}
            </div>
            <button className="delete-btn" onClick={() => handleDelete(note.id)}>
              Delete note
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default UserNote;