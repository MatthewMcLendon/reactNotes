import { useContext } from "react";
import { NoteContext } from "./NoteProvider";

export default function Note({ note }) {
  const { deleteNote, setSelectedNote } = useContext(NoteContext);

  const deleteHandeler = () => {
    deleteNote(note.id);
  };

  const updateHandler = () => {
    setSelectedNote(note);
  };

  return (
    <div className="card">
      <p>{note.text}</p>
      <button onClick={deleteHandeler}>Delete</button>
      <button onClick={updateHandler}>Update</button>
    </div>
  );
}
