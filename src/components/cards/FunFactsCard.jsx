import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cards.css";
import "./cards-cont.css";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const FunFactsCard = ({ page, stat }) => {
  return (
    <div
      className={page === "aboutUs" ? "aboutUsFunFactsCard" : "funFactsCard"}
      key={stat.id}
    >
      <div
        className={page === "aboutUs" ? "aboutUsFunFactsIcon" : "funFactsIcon"}
      >
        <FontAwesomeIcon icon={faPeopleGroup} />
      </div>
      <div
        className={page === "aboutUs" ? "aboutUsFunFactsText" : "funFactsText"}
      >
        <h2>{stat.statCount}</h2>
        <p>{stat.title}</p>
      </div>
    </div>
  );
};

export default FunFactsCard;
