import { useContext } from "react";
import { NoteContext } from "./NoteProvider";

export default function Note({ note }) {
  const { deleteNote } = useContext(NoteContext);

  const deleteHandeler = (event) => {
    // This also works by passing note.id but I don't know why. Can see the benefit of hiding ids.
    // Does react remember what note was used to make a component?
    deleteNote(event.id);
  };

  return (
    <div className="card">
      <p>{note.text}</p>
      <button onClick={deleteHandeler} id={note.id}>
        Delete
      </button>
    </div>
  );
}
