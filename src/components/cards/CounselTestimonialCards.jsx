import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CounselTestimonialCards = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faStar} />
      <p>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elitsed eiusmod
        tempor elite incididunt labore dolore magna aliqua Quis ipsum
        suspendisse ultrices set amet set do eimusd tempor labore sit dolor
        magna aliiqua amet.”
      </p>
      <div className="testimonialDetails">
        <div className="testimonialProfile">
          <img src={""} alt="" loading="lazy" />

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
