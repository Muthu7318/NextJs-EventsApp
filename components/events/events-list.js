import EventItem from "./event-item";
import styles from "./events-list.module.css";

function EventList(props) {
  const { events } = props;

  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem
          key={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
          id={event.id}
        ></EventItem>
      ))}
    </ul>
  );
}

export default EventList;
