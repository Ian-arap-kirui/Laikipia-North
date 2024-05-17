import "./cards.css";
import "./cards-cont.css";
import servImg from "../../assets/business.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const ServiceCards = ({ carDFor, page }) => {
  return (
    <div
      className={` ${page === "aboutUs" ? "aboutUsServCard" : "serviceCard"}`}
    >
      <div className="serviceCardImgCont">
        <Link to={"/"}>
          <img src={servImg} alt="" className="serviceCardImg" loading="lazy" />
        </Link>
        {carDFor === "latestBlogs" ? (
          <>blogdetails</>
        ) : carDFor === "serviceCards" ? (
          <>
            <div className="servCardIcon">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
          </>
        ) : null}
      </div>
      <div className="serviceCardText">
        <h4>
          <Link to={"/"}>Business Strategy</Link>
        </h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          sequi cumque autem, quia vero saepe! Veritatis molestias delectus
          placeat ex, ratione sunt reprehenderit excepturi quaerat adipisci
          mollitia accusantium repellat veniam.
        </p>
        <Link className="read-more-btn">Read More</Link>
      </div>
    </div>
  );
};

export default ServiceCards;
