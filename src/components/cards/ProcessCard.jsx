import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./cards.css";
import "./cards-cont.css";
const ProcessCard = ({ name, summary }) => {
  return (
    <div className="processCard">
      <FontAwesomeIcon icon={faFile} className="processCardIcon" />
      <h4>
        <Link to={"/"}>{name}</Link>
      </h4>
      <p>{summary}</p>
    </div>
  );
};

export default ProcessCard;
