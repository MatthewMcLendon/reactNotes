import { EventProvider } from "../Calendar/EventProvider";
import CalendarComponent from "../Calendar/Calendar";
import EventList from "../Calendar/EventList";

export default function CalendarRoute() {
  return (
    <EventProvider>
      <CalendarComponent />
      <EventList />
    </EventProvider>
  );
}
