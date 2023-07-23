import { NoteProvider } from "../Notes/NoteProvider";
import NoteForm from "../Notes/NoteForm";
import NoteList from "../Notes/NoteList";

export default function NoteRoute() {
  return (
    <NoteProvider>
      <NoteForm />
      <NoteList />
    </NoteProvider>
  );
}
