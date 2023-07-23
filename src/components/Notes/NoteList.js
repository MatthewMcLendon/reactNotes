import { useContext } from "react";
import { NoteContext } from "./NoteProvider";
import Note from "./Note";

export default function NoteList() {
  const { notes } = useContext(NoteContext);

  return (
    <div className="note-list">
      {notes.map((note) => {
        return <Note note={note} key={note.id} />;
      })}
    </div>
  );
}
