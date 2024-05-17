import FunFactsCard from "../../components/cards/FunFactsCard";
import "./funFacts.css";

const FunFacts = ({ page }) => {
  return (
    <section className={page === "aboutUs" ? "aboutUsFunFacts" : "funFacts"}>
      <div className="funFactsWrapper">
        <FunFactsCard page={page} />
        <FunFactsCard page={page} />
        <FunFactsCard page={page} />
        <FunFactsCard page={page} />
      </div>
    </section>
  );
};

export default FunFacts;
