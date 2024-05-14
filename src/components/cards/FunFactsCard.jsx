import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cards.css";
import "./cards-cont.css";
import { faCity, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
const FunFactsCard = () => {
  return (
    <div className="funFactsCard">
      <div className="funFactsIcon">
        <FontAwesomeIcon icon={faPeopleGroup} />
      </div>
      <div className="funFactsText">
        <h2>42,459</h2>
        <p>Population</p>
      </div>
    </div>
  );
};

export default FunFactsCard;
