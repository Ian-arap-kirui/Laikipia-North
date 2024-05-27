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

const eventDetails = [
  { icon: faCalendar, title: "Event Date:", value: "12 October 2024" },
  { icon: faClock, title: "Event Time:", value: "08:00 am - 04:00 pm" },
  {
    icon: faMapMarkerAlt,
    title: "Event Location:",
    value: "18 Quiet Valley Lane, USA",
  },
  { icon: faDollarSign, title: "Event Cost:", value: "members only" },
  { icon: faPhone, title: "Phone Number:", value: "+254 123 456 78" },
  {
    icon: faEnvelope,
    title: "Email Address:",
    value: "support@laikipiaNorthConstituency.go.ke",
  },
  {
    icon: faGlobe,
    title: "Website:",
    value: "laikipianorthconstituency.go.ke",
  },
];
const EventsContent = () => {
  return (
    <div className="eventContentContainer">
      <div className="eventImgContainer">
        <img src={dummyImg} alt="event image" loading="lazy" />
        <img src={dummyImg} alt="event image" loading="lazy" />
      </div>
      <div className="eventContentDetails">
        <div className="eventContentText">
          <h3>Annual General Meeting</h3>
          <p>
            Vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deseru mollitia
            animi, id est laborum et dolorum fuga
          </p>
          <p>
            Vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deseru mollitia
            animi, id est laborum et dolorum fuga
          </p>
          <div className="eventMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.807072504901!2d36.81512454786976!3d-1.2900277322641942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d9646e9173%3A0xeb7e627d529f74c7!2sParliament%20of%20Kenya!5e0!3m2!1sen!2ske!4v1716454942346!5m2!1sen!2ske"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="eventContentInfo">
          <div className="eventContentCard">
            <h3>Event Information</h3>
            <p>
              It is a long established fact that a reader will be distracted the
              readable content of a page
            </p>

            {eventDetails.map((detail, index) => (
              <div className="eventInfoCard" key={index}>
                <FontAwesomeIcon icon={detail.icon} />
                <div className="eventInfo">
                  <h5>{detail.title}</h5>
                  <span>{detail.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsContent;
