import { useContext } from "react";
import { EventContext } from "./EventProvider";
import Event from "./Event";

export default function EventList() {
  const { events, selectedDate } = useContext(EventContext);
  let eventList;

  if (!selectedDate) {
    eventList = events.map((event) => {
      return <Event event={event} key={event.id} />;
    });
  } else {
    eventList = events
      .filter((event) => {
        return event.date === selectedDate.toString();
      })
      .map((event) => {
        return <Event event={event} key={event.id} />;
      });
  }

  return <div>{eventList}</div>;
}
