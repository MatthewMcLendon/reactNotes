import { useEffect, useState, createContext } from "react";

export const NoteContext = createContext();

export function NoteProvider(props) {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState({ text: "", id: "default" });

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    const userId = parseInt(localStorage.getItem("user"));
    return fetch("http://localhost:8088/notes")
      .then((response) => response.json())
      .then((response) => response.filter((note) => note.user === userId))
      .then((response) => {
        setNotes(response);
        console.log(notes, userId, response);
      });
  };

  const addNote = (note) => {
    return fetch("http://localhost:8088/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    }).then(getNotes);
  };

  const deleteNote = (id) => {
    return fetch(`http://localhost:8088/notes/${id}`, {
      method: "DELETE",
    }).then(getNotes);
  };

  const updateNote = (note) => {
    return fetch(`http://localhost:8088/notes/${note.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    }).then(getNotes);
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        selectedNote,
        addNote,
        deleteNote,
        updateNote,
        setSelectedNote,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
}
