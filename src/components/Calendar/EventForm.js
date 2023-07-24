import { useContext } from "react";
import { EventContext } from "./EventProvider";

export default function EventForm() {
  const { addEvent, selectedDate, setSelectedDate } = useContext(EventContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const targetTime = document.querySelector("#event-time").value;
    const targetDate = new Date(selectedDate);
    const min = targetTime.slice(3);
    const hour = targetTime.slice(0, 2);
    targetDate.setHours(hour, min);

    const newEvent = {
      title: document.querySelector("#event-title").value,
      location: document.querySelector("#event-location").value,
      description: document.querySelector("#event-description").value,
      date: targetDate.toString(),
    };

    addEvent(newEvent).then(clearSelectedDate);
  };

  const clearSelectedDate = () => {
    setSelectedDate();
    clearEventForm();
    document.querySelector("#event-form").classList.add("hidden");
    document.querySelector("#show-all-events").classList.add("hidden");
  };

  const clearEventForm = () => {
    document.querySelector(`#event-title`).value = "";
    document.querySelector(`#event-location`).value = "";
    document.querySelector(`#event-description`).value = "";
    document.querySelector(`#event-time`).value = "";
  };

  if (selectedDate) {
    document.querySelector("#event-form").classList.remove("hidden");
    document.querySelector("#show-all-events").classList.remove("hidden");
  }

  return (
    <>
      <form onSubmit={submitHandler} className="hidden" id="event-form">
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
      <button
        onClick={clearSelectedDate}
        id="show-all-events"
        className="hidden"
      >
        Show all events
      </button>
    </>
  );
}
