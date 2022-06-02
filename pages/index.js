import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/events-list";

function HomePage() {
  const FeaturedEvents = getFeaturedEvents();
  return (
    <div>
      <EventList events={FeaturedEvents}></EventList>
    </div>
  );
}

export default HomePage;
