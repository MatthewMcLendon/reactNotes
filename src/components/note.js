import { useContext } from "react";
import { NoteContext } from "./NoteProvider";

export default function Note({ note }) {
  const { deleteNote, setSelectedNote } = useContext(NoteContext);

  const deleteHandeler = () => {
    // This works by passing note.id or event.id but I don't know why. Can see the benefit of hiding ids.
    // Does react remember what note was used to make a component?
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
