import { useContext } from "react";
import { NoteContext } from "./noteProvider";
import Note from "./note";

export default function NoteList() {
  const notes = useContext(NoteContext);

  return (
    <div className="note-list">
      {notes.map((note) => {
        return <Note note={note} key={note.id} />;
      })}
    </div>
  );
}
