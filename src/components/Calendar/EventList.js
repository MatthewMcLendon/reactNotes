import { useContext } from "react";
import { EventContext } from "./EventProvider";
import Event from "./Event";

export default function EventList() {
  const { events, selectedDate } = useContext(EventContext);
  let eventList;
  const dateFormattingOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  if (!selectedDate) {
    eventList = events.map((event) => {
      return <Event event={event} key={event.id} />;
    });
  } else {
    eventList = events
      .filter((event) => {
        const date = new Date(event.date).toLocaleDateString(
          `en-us`,
          dateFormattingOptions
        );
        const filterDate = new Date(selectedDate).toLocaleDateString(
          `en-us`,
          dateFormattingOptions
        );
        return date === filterDate;
      })
      .map((event) => {
        return <Event event={event} key={event.id} />;
      });
  }

  return <div>{eventList}</div>;
}
