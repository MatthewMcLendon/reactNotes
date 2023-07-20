import { useContext, useEffect } from "react";
import { NoteContext } from "./NoteProvider";

export default function NoteForm() {
  const { addNote, updateNote, selectedNote, setSelectedNote } =
    useContext(NoteContext);
  let buttons = <button id="note-form-submit">Submit</button>;

  useEffect(() => {
    document.querySelector("#note-form-text").value = selectedNote.text;
  }, [selectedNote]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (selectedNote && selectedNote.id !== "default") {
      selectedNote.text = document.querySelector("#note-form-text").value;
      updateNote(selectedNote);
      setSelectedNote({ text: "", id: "default" });
    } else {
      const newNote = {
        text: document.querySelector("#note-form-text").value,
      };

      addNote(newNote).then(formReset);
    }
  };

  const cancelHandler = (event) => {
    event.preventDefault();

    setSelectedNote({ text: "", id: "default" });
    buttons = <button id="note-form-submit">Submit</button>;
  };

  const formReset = () => {
    document.querySelector("#note-form-text").value = "";
    buttons = <button id="note-form-submit">Submit</button>;
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
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="note-form-text">Note: </label>
      <input type="text" id="note-form-text" required />
      <input type="hidden" id="id" />
      {buttons}
    </form>
  );
}
