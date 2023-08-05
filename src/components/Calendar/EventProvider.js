import { useEffect, useState, createContext } from "react";

export const EventContext = createContext();

export function EventProvider(props) {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedEvent, setSelectedEvent] = useState();

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    const userId = parseInt(localStorage.getItem("user"));
    return fetch("http://localhost:8088/events")
      .then((response) => response.json())
      .then((response) => response.filter((event) => event.user === userId))
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

  const deleteEvent = (id) => {
    return fetch(`http://localhost:8088/events/${id}`, {
      method: "DELETE",
    }).then(getEvents);
  };

  const updateEvent = (event) => {
    return fetch(`http://localhost:8088/events/${event.id}`, {
      method: "PUT",
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
        selectedEvent,
        setEvents,
        addEvent,
        deleteEvent,
        updateEvent,
        setSelectedEvent,
        setSelectedDate,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
}
