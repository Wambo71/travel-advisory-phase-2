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

  return (
    <div>
      <h2>Travel Notes from Other Users</h2>
      {notes.length === 0 ? (
        <p>No notes submitted yet.</p>
      ) : (
        notes.map((note) => (
          <div key={note.id}>
            <p>{note.content}</p>
          </div>
        ))
      )}
    </div>
    );
  }
  
  export default UserNote;