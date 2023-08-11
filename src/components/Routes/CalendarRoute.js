import { EventProvider } from "../Calendar/EventProvider";
import CalendarComponent from "../Calendar/Calendar";
import EventList from "../Calendar/EventList";
import EventForm from "../Calendar/EventForm";

export default function CalendarRoute() {
  return (
    <main>
      <EventProvider>
        <CalendarComponent />
        <EventForm />
        <EventList />
      </EventProvider>
    </main>
  );
}
