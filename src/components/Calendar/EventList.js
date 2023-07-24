import { useContext } from "react";
import { EventContext } from "./EventProvider";
import Event from "./Event";

export default function EventList() {
  const { events } = useContext(EventContext);
  return (
    <div>
      {events.map((event) => {
        return <Event event={event} key={event.id} />;
      })}
    </div>
  );
}
