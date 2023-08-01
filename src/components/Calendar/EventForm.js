import { useContext, useState } from "react";
import { EventContext } from "./EventProvider";

export default function EventForm() {
  const {
    addEvent,
    updateEvent,
    selectedDate,
    setSelectedDate,
    selectedEvent,
    setSelectedEvent,
  } = useContext(EventContext);

  const [formVisible, setFormVisible] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    if (selectedEvent) {
      const updatedEvent = selectedEvent;

      updatedEvent.title = document.querySelector("#event-title").value;
      updatedEvent.location = document.querySelector("#event-location").value;
      updatedEvent.description =
        document.querySelector("#event-description").value;
      updatedEvent.date = dateFormatter();

      updateEvent(updatedEvent).then(clearSelectedDate);

      return;
    }

    const newEvent = {
      title: document.querySelector("#event-title").value,
      location: document.querySelector("#event-location").value,
      description: document.querySelector("#event-description").value,
      date: dateFormatter(),
    };

    addEvent(newEvent).then(clearSelectedDate);
  };

  const dateFormatter = () => {
    const targetTime = document.querySelector("#event-time").value;
    const targetDate = new Date(selectedDate);
    const min = targetTime.slice(3, 5);
    const hour = targetTime.slice(0, 2);

    const updatedDate = targetDate.setHours(hour, min);
    const dateString = new Date(updatedDate).toString();

    return dateString;
  };

  const clearSelectedDate = () => {
    setSelectedDate();
    setSelectedEvent();
    formVisible && clearEventForm();
    setFormVisible(false);
  };

  const clearEventForm = () => {
    document.querySelector(`#event-title`).value = "";
    document.querySelector(`#event-location`).value = "";
    document.querySelector(`#event-description`).value = "";
    document.querySelector(`#event-time`).value = "";
  };

  const showEventForm = async () => {
    setFormVisible(true);
  };

  const populateForm = async () => {
    let makeForm = new Promise((resolve, reject) => {
      setFormVisible(true);
      resolve();
    });

    await makeForm;

    let time = new Date(selectedEvent.date).toLocaleTimeString("it-US");

    document.querySelector(`#event-title`).value = selectedEvent.title;
    document.querySelector(`#event-location`).value = selectedEvent.location;
    document.querySelector(`#event-description`).value =
      selectedEvent.description;
    document.querySelector(`#event-time`).value = time;
  };

  if (selectedEvent) {
    !formVisible && populateForm();
  }

  return (
    <>
      {selectedDate && (
        <>
          {!formVisible && (
            <button onClick={showEventForm} id="show-event-form">
              Add new event
            </button>
          )}
          <button onClick={clearSelectedDate} id="show-all-events">
            Show all events
          </button>
        </>
      )}
      {formVisible && (
        <form onSubmit={submitHandler} id="event-form">
          <input type="hidden" />
          <div>
            <label htmlFor="event-title">Event name: </label>
            <input type="text" id="event-title" required />
          </div>
          <div>
            <label htmlFor="event-location">Event location: </label>
            <input type="text" id="event-location" required />
          </div>
          <div>
            <label htmlFor="event-description">Event description: </label>
            <input type="text" id="event-description" required />
          </div>
          <div>
            <label htmlFor="event-time">Event time: </label>
            <input type="time" id="event-time" required />
          </div>
          <button>Add event to calendar</button>
        </form>
      )}
    </>
  );
}
