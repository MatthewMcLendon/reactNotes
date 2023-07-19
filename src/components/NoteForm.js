import { useContext } from "react";
import { NoteContext } from "./NoteProvider";

export default function NoteForm() {
  const { addNote } = useContext(NoteContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const newNote = {
      text: document.querySelector("#note-form-text").value,
    };

    addNote(newNote).then(
      (document.querySelector("#note-form-text").value = "")
    );
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="note-form-text">Note: </label>
      <input type="text" id="note-form-text" />
      <input type="hidden" id="id" />
      <button>Add new note</button>
    </form>
  );
}
