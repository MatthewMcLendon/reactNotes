import { useContext, useEffect } from "react";
import { NoteContext } from "./NoteProvider";
import "./NoteForm.module.css"

export default function NoteForm() {
  const { addNote, updateNote, selectedNote, setSelectedNote } =
    useContext(NoteContext);
  let buttons;

  useEffect(() => {
    document.querySelector("#note-form-text").value = selectedNote.text;
  }, [selectedNote]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (selectedNote && selectedNote.id !== "default") {
      selectedNote.text = document.querySelector("#note-form-text").value;
      updateNote(selectedNote).then(formReset);
    } else {
      const newNote = {
        text: document.querySelector("#note-form-text").value,
        user: parseInt(localStorage.getItem("user")),
      };

      addNote(newNote).then(formReset);
    }
  };

  const cancelHandler = (event) => {
    event.preventDefault();

    formReset();
  };

  const formReset = () => {
    setSelectedNote({ text: "", id: "default" });
  };

  if (selectedNote.id !== "default") {
    buttons = (
      <>
        <button id="note-form-submit">Submit</button>
        <button onClick={cancelHandler} id="note-form-cancel">
          Cancel
        </button>
      </>
    );
  } else {
    buttons = <button id="note-form-submit">Submit</button>;
  }

  return (
    <form onSubmit={submitHandler} className="secondary card">
      <label htmlFor="note-form-text">Note: </label>
      <input type="text" id="note-form-text" required />
      <input type="hidden" id="id" />
      {buttons}
    </form>
  );
}
