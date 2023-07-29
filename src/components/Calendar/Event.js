import { useContext } from "react";
import { EventContext } from "./EventProvider";

export default function Event({ event }) {
  const { deleteEvent, setSelectedEvent, setSelectedDate } =
    useContext(EventContext);

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

  const deleteHandler = () => {
    deleteEvent(event.id);
  };

  const updateHandler = () => {
    setSelectedEvent(event);
    setSelectedDate(event.date);
  };

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>{event.location}</p>
      <p>{formattedDate}</p>
      <button onClick={deleteHandler}>Delete event</button>
      <button onClick={updateHandler}>Edit event</button>
    </div>
  );
}
