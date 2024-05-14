import SectionHeader from "../../components/Headers/SectionHeader";
import ProcessCard from "../../components/cards/ProcessCard";
import "./process.css";
const Process = () => {
  return (
    <section className="process">
      <SectionHeader
        title={"Tackling the Process"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse"
        }
      />
      <div className="processSectionContent">
        <ProcessCard
          name={"Application"}
          summary={
            "There are many variations of passages of the lorem Ipsum available but this is a majority have suffered."
          }
        />
        <ProcessCard
          name={"Processing"}
          summary={
            "There are many variations of passages of the lorem Ipsum available but this is a majority have suffered."
          }
        />
        <ProcessCard
          name={"Complete"}
          summary={
            "There are many variations of passages of the lorem Ipsum available but this is a majority have suffered."
          }
        />
      </div>
    </section>
  );
};

export default Process;
