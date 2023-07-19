import { useEffect, useState, createContext } from "react";

export const NoteContext = createContext();

export function NoteProvider(props) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    return fetch("http://localhost:8088/notes")
      .then((response) => response.json())
      .then((response) => {
        setNotes(response);
      });
  };

  const addNote = (Note) => {
    return fetch("http://localhost:8088/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Note),
    }).then(getNotes);
  };

  const deleteNote = (id) => {
    return fetch(`http://localhost:8088/notes/${id}`, {
      method: "DELETE",
    }).then(getNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
}
