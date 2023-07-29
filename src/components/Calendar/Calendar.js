import { useContext } from "react";
import { EventContext } from "./EventProvider";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarComponent() {
  const { selectedDate, setSelectedDate } = useContext(EventContext);

  return <Calendar onChange={setSelectedDate} value={selectedDate} />;
}
