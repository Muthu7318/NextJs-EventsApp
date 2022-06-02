import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/events-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

function AllEvents() {
  const allEvents = getAllEvents();
  const router = useRouter();

  function searchHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <div>
      <EventsSearch onSearch={searchHandler}></EventsSearch>
      <EventList events={allEvents}></EventList>
    </div>
  );
}

export default AllEvents;
