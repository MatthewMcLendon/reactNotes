export default function Note({ note }) {
  return (
    <div className="card">
      <p>{note.text}</p>
    </div>
  );
}
