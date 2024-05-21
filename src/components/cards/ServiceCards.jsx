import "./cards.css";
import "./cards-cont.css";
import servImg from "../../assets/business.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ServiceCards = ({ carDFor, page }) => {
  const isServiceCard = carDFor === "serviceCards";
  const isLatestBlog = carDFor === "latestBlogs";
  const pageTypeClass = page === "aboutUs" ? "aboutUsServCard" : "serviceCard";
  const linkPath = isServiceCard ? "/services/3" : "/blogs/3";
  const linkText = isServiceCard ? "Business Strategy" : "BlogTitle";
  const icon = isServiceCard ? <FontAwesomeIcon icon={faBriefcase} /> : null;
  const detailsText = isLatestBlog ? "blogdetails" : null;

  return (
    <div className={pageTypeClass}>
      <div className="serviceCardImgCont">
        <Link to={linkPath}>
          <img src={servImg} alt="" className="serviceCardImg" loading="lazy" />
        </Link>
        {icon && <div className="servCardIcon">{icon}</div>}
        {detailsText}
      </div>
      <div className="serviceCardText">
        <h4>
          <Link to={linkPath}>{linkText}</Link>
        </h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          sequi cumque autem, quia vero saepe! Veritatis molestias delectus
          placeat ex, ratione sunt reprehenderit excepturi quaerat adipisci
          mollitia accusantium repellat veniam.
        </p>
        <Link className="read-more-btn" to={linkPath}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCards;
