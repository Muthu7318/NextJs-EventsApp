import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/events-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilterdEventsPage() {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading..</p>;
  }

  const [year, month] = filteredData;

  if (
    isNaN(year) ||
    isNaN(month) ||
    +year > 2030 ||
    +year < 2021 ||
    +month < 1 ||
    +month > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Filter. Please adjust your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">All Event</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvent = getFilteredEvents({ year: +year, month: +month });

  if (!filteredEvent || filteredEvent.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Events found for the chosen filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">All Event</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <div>
      <ResultsTitle date={date}></ResultsTitle>
      <EventList events={filteredEvent}></EventList>
    </div>
  );
}

export default FilterdEventsPage;
