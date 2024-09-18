import FunFactsCard from "../../components/cards/FunFactsCard";
import "./funFacts.css";
const stats = [
  {
    id: 0,
    title: "Population",
    statCount: "36,184",
  },
  {
    id: 1,
    title: "Land Area (km²)",
    statCount: "2,575 km²",
  },
  {
    id: 2,
    title: "Population Density (Per km²)",
    statCount: "14.05/km²",
  },
  {
    id: 3,
    title: "Annual Population change(%) [2009 → 2019]",
    statCount: "4.8%",
  },
];
const FunFacts = ({ page }) => {
  return (
    <section className={page === "aboutUs" ? "aboutUsFunFacts" : "funFacts"}>
      <div className="funFactsWrapper">
        {stats.map((stat) => {
          return <FunFactsCard page={page} stat={stat} />;
        })}
      </div>
    </section>
  );
};

export default FunFacts;
