import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cards.css";
import "./cards-cont.css";
import { Link } from "react-router-dom";

const Counselor = ({ key, name, designation, image, socialIcons }) => {
  return (
    <div className="teamCard" key={key}>
      <div className="teamCardImg">
        <img src={image} alt="" loading="lazy" />
        <div className="teamSocialIcons">
          <ul>
            {socialIcons.map((icon, index) => (
              <li key={index}>
                <Link to={"/"} className="teamSocialIcon">
                  <FontAwesomeIcon icon={icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="teamCardText">
        <h4>{name}</h4>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default Counselor;
