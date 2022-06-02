import Link from "next/link";
import Button from "../ui/button";
import styles from "./event-item.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const FormattedAddress = location.replace(", ", "\n");
  const ExploreLink = `/events/${id}`;
  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt=""></img>
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon></DateIcon>
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon></AddressIcon>
            <address>{FormattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={ExploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
