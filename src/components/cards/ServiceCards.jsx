import React from "react";
import "./cards.css";
import "./cards-cont.css";
import servImg from "../../assets/business.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { shortenDescription } from "../../utils/ShortenDesc";

const ServiceCards = ({ carDFor, page, service }) => {
  const isServiceCard = carDFor === "serviceCards";
  const isLatestBlog = carDFor === "latestBlogs";
  const pageTypeClass = page === "aboutUs" ? "aboutUsServCard" : "serviceCard";
  const linkPath =
    isServiceCard && service ? `/services/${service.link}` : "/blogs/3";
  const linkText = isServiceCard && service ? service.title : "BlogTitle";

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
  const renderServiceDesc = () => {
    if (isServiceCard) {
      return <p>{shortenDescription(service?.description, 35)}</p>;
    }
    return (
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis sequi
        cumque autem, quia vero saepe! Veritatis molestias delectus placeat ex,
        ratione sunt reprehenderit excepturi quaerat adipisci mollitia
        accusantium repellat veniam.
      </p>
    );
  };

  const renderBlogDetailsText = () => {
    if (isLatestBlog) {
      return <div>blogdetails</div>;
    }
    return null;
  };

  return (
    <div className={pageTypeClass}>
      <div className="serviceCardImgCont">
        <Link to={linkPath}>
          <img src={servImg} alt="" className="serviceCardImg" loading="lazy" />
        </Link>
        {renderIcon()}
      </div>
      <div className="serviceCardText">
        {renderBlogDetailsText()}
        <h4>
          <Link to={linkPath}>{linkText}</Link>
        </h4>
        {renderServiceDesc()}
        <Link className="read-more-btn" to={linkPath}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCards;
