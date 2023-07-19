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

  return (
    <NoteContext.Provider value={notes}>{props.children}</NoteContext.Provider>
  );
}
