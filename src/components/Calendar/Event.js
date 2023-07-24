export default function Event({ event }) {
  const dateFormattingOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const formattedDate = new Date(event.date).toLocaleDateString(
    `en-us`,
    dateFormattingOptions
  );
  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>{event.location}</p>
      <p>{formattedDate}</p>
    </div>
  );
}
