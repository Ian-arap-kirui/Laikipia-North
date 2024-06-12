import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EventImg from "../../assets/business.jpg";
import "./cards.css";
import "./cards-cont.css";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const UpcomingEventsCard = ({ event }) => {
  const location = useLocation();
  if (!event) {
    return null; // or render some fallback UI
  }

  return (
    <div className="upcomingEventCard" key={event.id}>
      <img src={EventImg} alt="" />
      <div className="eventsDetails">
        <ul>
          {/* <li>Conference</li> */}
          <li>{event.location || "Location not available"}</li>
        </ul>
        <h4>{event.title || "Title not available"}</h4>
        <p>
          <FontAwesomeIcon icon={faLocationPin} />
          <a href="./" target="_blank" rel="noopener noreferrer">
            {event.location || "Location not available"}
          </a>
        </p>
        {location.pathname === "/" ? (
          <>
            {" "}
            <Link
              to={`/services/constituency-office/events/${event.link}`}
              className="read-more-btn"
            >
              Read More
            </Link>
          </>
        ) : location.pathname === "/services/constituency-office/events" ? (
          <>
            {" "}
            <Link to={`${event.link}`} className="read-more-btn">
              Read More
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};

UpcomingEventsCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    location: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    eventOrganiser: PropTypes.string,
  }).isRequired,
};

export default UpcomingEventsCard;
