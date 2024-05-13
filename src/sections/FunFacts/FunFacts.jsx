import FunFactsCard from "../../components/cards/FunFactsCard";
import "./funFacts.css";

const FunFacts = () => {
  return (
    <section className="funFacts">
      <div className="funFactsWrapper">
        <FunFactsCard />
        <FunFactsCard />
        <FunFactsCard />
        <FunFactsCard />
      </div>
    </section>
  );
};

export default FunFacts;
