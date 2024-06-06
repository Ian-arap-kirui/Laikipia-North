import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./pageContentStyles/eventContent.css";
import dummyImg from "../../assets/parliament.jpg";
import {
  faCalendar,
  faClock,
  faDollarSign,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const EventsContent = ({ event }) => {
  return (
    <div className="eventContentContainer">
      <div key={event.id}>
        <h3>{event.title}</h3>
        <div className="eventImgContainer">
          <img src={dummyImg} alt="event image" loading="lazy" />
          <img src={dummyImg} alt="event image" loading="lazy" />
        </div>
        <div className="eventContentDetails">
          <div className="eventContentText">
            <p>{event.description}</p>
            <div className="eventMap">
              <iframe
                src={event.mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="eventContentInfo">
            <div className="eventContentCard">
              <h3>Event Information</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </p>
              <div className="eventInfoCard">
                <FontAwesomeIcon icon={faCalendar} />
                <div className="eventInfo">
                  <h5>Event Date:</h5>
                  <span>{event.date}</span>
                </div>
              </div>
              <div className="eventInfoCard">
                <FontAwesomeIcon icon={faClock} />
                <div className="eventInfo">
                  <h5>Event Time:</h5>
                  <span>{event.time}</span>
                </div>
              </div>
              <div className="eventInfoCard">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <div className="eventInfo">
                  <h5>Event Location:</h5>
                  <span>{event.location}</span>
                </div>
              </div>
              <div className="eventInfoCard">
                <FontAwesomeIcon icon={faDollarSign} />
                <div className="eventInfo">
                  <h5>Event Cost:</h5>
                  <span>{event.cost}</span>
                </div>
              </div>
              <div className="eventInfoCard">
                <FontAwesomeIcon icon={faPhone} />
                <div className="eventInfo">
                  <h5>Phone Number:</h5>
                  <span>{event.phone}</span>
                </div>
              </div>
              <div className="eventInfoCard">
                <FontAwesomeIcon icon={faEnvelope} />
                <div className="eventInfo">
                  <h5>Email Address:</h5>
                  <span>{event.email}</span>
                </div>
              </div>
              <div className="eventInfoCard">
                <FontAwesomeIcon icon={faGlobe} />
                <div className="eventInfo">
                  <h5>Website:</h5>
                  <span>{event.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsContent;
