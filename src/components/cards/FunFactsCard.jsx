import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cards.css";
import "./cards-cont.css";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
const FunFactsCard = ({ page }) => {
  return (
    <div
      className={page === "aboutUs" ? "aboutUsFunFactsCard" : "funFactsCard"}
    >
      <div
        className={page === "aboutUs" ? "aboutUsFunFactsIcon" : "funFactsIcon"}
      >
        <FontAwesomeIcon icon={faPeopleGroup} />
      </div>
      <div
        className={page === "aboutUs" ? "aboutUsFunFactsText" : "funFactsText"}
      >
        <h2>42,459</h2>
        <p>Population</p>
      </div>
    </div>
  );
};

export default FunFactsCard;
