import { useEffect, useState, createContext } from "react";

export const EventContext = createContext();

export function EventProvider(props) {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState();

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  const getEvents = () => {
    return fetch("http://localhost:8088/events")
      .then((response) => response.json())
      .then((response) => {
        setEvents(response);
      });
  };

  return (
    <EventContext.Provider
      value={{
        events,
        selectedDate,
        setEvents,
        setSelectedDate,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
}
