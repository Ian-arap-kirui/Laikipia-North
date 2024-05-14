import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cards.css";
import "./cards-cont.css";
import DummyProfPic from "../../assets/dummyProfile.jpg";

const CounselTestimonialCards = () => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <li key={i}>
          <FontAwesomeIcon icon={faStar} />
        </li>
      );
    }
    return stars;
  };

  return (
    <div className="counselTestimonialCard">
      <ul className="starIcons">{renderStars()}</ul>

      <p>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elitsed eiusmod
        tempor elite incididunt labore dolore magna aliqua Quis ipsum
        suspendisse ultrices set amet set do eimusd tempor labore sit dolor
        magna aliiqua amet.”
      </p>
      <div className="testimonialDetails">
        <div className="testimonialProfile">
          <img src={DummyProfPic} alt="" loading="lazy" />

          <div className="testimonialProfileText">
            <h5>John Smith</h5>
            <span>Member of Parliament(MP)</span>
          </div>
        </div>
        <div className="testimonialQuoteIcon">
          <FontAwesomeIcon icon={faQuoteRight} />
        </div>
      </div>
    </div>
  );
};

export default CounselTestimonialCards;
