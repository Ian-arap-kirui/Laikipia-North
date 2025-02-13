import React from "react";
import "./cards.css";
import "./cards-cont.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { shortenDescription } from "../../utils/ShortenDesc";

const ServiceCards = ({ carDFor, page, service, blog }) => {
  const isServiceCard = carDFor === "serviceCards";
  const isLatestBlog = carDFor === "latestBlogs";

  const pageTypeClass = page === "aboutUs" ? "aboutUsServCard" : "serviceCard";

  // Determine the link path and text based on whether it's a service or blog
  const linkPath = isServiceCard
    ? `/services/${service?.link}`
    : `/blogs/${blog?.id}`;
  const linkText = isServiceCard ? service?.title : blog?.title;

  // Render the appropriate icon for service cards
  const renderIcon = () => {
    if (isServiceCard) {
      return (
        <div className="servCardIcon">
          <FontAwesomeIcon icon={faBriefcase} />
        </div>
      );
    }
    return null;
  };

  // Render the appropriate description based on whether it's a service or blog
  const renderDescription = () => {
    if (isServiceCard) {
      return <p>{shortenDescription(service?.description, 35)}</p>;
    } else if (isLatestBlog) {
      return <p>{shortenDescription(blog?.description, 15)}</p>;
    }
    return null;
  };
  
  // Render the image based on whether it's a service or blog
  const renderImage = () => {
    const imageSrc = isServiceCard ? service?.img : blog?.img;
    const imageAlt = isServiceCard ? service?.title : blog?.title;

    return (
      <img
        src={imageSrc}
        alt={imageAlt || "Card Image"}
        className="serviceCardImg"
        loading="lazy"
      />
    );
  };

  return (
    <div className={pageTypeClass}>
      <div className="serviceCardImgCont">
        <Link to={linkPath}>{renderImage()}</Link>
        {renderIcon()}
      </div>
      <div className="serviceCardText">
        <h4>
          <Link to={linkPath}>{linkText}</Link>
        </h4>
        {renderDescription()}
        <Link className="read-more-btn" to={linkPath}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCards;
