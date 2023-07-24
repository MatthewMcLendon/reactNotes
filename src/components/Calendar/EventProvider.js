import { useEffect, useState, createContext } from "react";

export const EventContext = createContext();

export function EventProvider(props) {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState();

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    return fetch("http://localhost:8088/events")
      .then((response) => response.json())
      .then((response) => {
        setEvents(response);
      });
  };

  const addEvent = (event) => {
    return fetch("http://localhost:8088/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    }).then(getEvents);
  };

  return (
    <EventContext.Provider
      value={{
        events,
        selectedDate,
        setEvents,
        addEvent,
        setSelectedDate,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
}
