import { useContext } from "react";
import { EventContext } from "./EventProvider";
import Event from "./Event";

export default function EventList() {
  const { events, selectedDate, selectedEvent } = useContext(EventContext);
  const dateFormattingOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  let eventList;

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

  if (selectedEvent) {
    eventList = "";
  }

  return <div className="flex flex-wrap">{eventList}</div>;
}

// Continue here. How do I want to list events? Currently filtering by selected day but default list uses latest first. Group by day/week/month?
