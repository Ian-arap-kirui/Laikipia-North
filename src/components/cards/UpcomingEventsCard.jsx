import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EventImg from "../../assets/business.jpg";
import "./cards.css";
import "./cards-cont.css";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const UpcomingEventsCard = () => {
  return (
    <div className="upcomingEventCard">
      <img src={EventImg} alt="" />
      <div className="eventsDetails">
        <ul>
          <li>Conference</li>
          <li>Oct 14, 2024</li>
        </ul>
        <h4>Annual General Meeting</h4>
        <p>
          <FontAwesomeIcon icon={faLocationPin} />
          <a href="./" targer="_blank">
            Laikipia , Kenya{" "}
          </a>
        </p>
        <Link to="/events/Annual-General-Meeting" className="read-more-btn">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default UpcomingEventsCard;
