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
        “I've lived in Laikipia North all my life, and I have seen significant
        improvements in infrastructure, especially in the healthcare sector. The
        leadership is committed to addressing our needs”
      </p>
      <div className="testimonialDetails">
        <div className="testimonialProfile">
          <img src={DummyProfPic} alt="" loading="lazy" />

          <div className="testimonialProfileText">
            <h5>John Smith</h5>
            <span> Resident of Sosian Ward.</span>
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
