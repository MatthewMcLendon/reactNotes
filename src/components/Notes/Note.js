import { useContext } from "react";
import { NoteContext } from "./NoteProvider";
import "./Note.module.css";

export default function Note({ note }) {
  const { deleteNote, setSelectedNote } = useContext(NoteContext);

  const deleteHandeler = () => {
    deleteNote(note.id);
  };

  const updateHandler = () => {
    setSelectedNote(note);
  };

  return (
    <div className="card secondary note-card">
      <p>{note.text}</p>
      <button onClick={deleteHandeler}>Delete</button>
      <button onClick={updateHandler}>Update</button>
    </div>
  );
}
