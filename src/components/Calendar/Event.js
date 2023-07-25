import { useContext } from "react";
import { EventContext } from "./EventProvider";

export default function Event({ event }) {
  const { deleteEvent } = useContext(EventContext);

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

  const deleteEventHandler = () => {
    deleteEvent(event.id);
  };

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>{event.location}</p>
      <p>{formattedDate}</p>
      <button onClick={deleteEventHandler}>Delete event</button>
    </div>
  );
}
