import SectionHeader from "../../components/Headers/SectionHeader";
import ProcessCard from "../../components/cards/ProcessCard";
import "./process.css";
const Process = () => {
  return (
    <section className="process">
      <SectionHeader
        title={"How We Work"}
        subtitle={
          "Our approach to governance and development is systematic and transparent. Here’s how we ensure the success of our projects:"
        }
      />
      <div className="processSectionContent">
        <ProcessCard
          name={"Application"}
          summary={
            "We identify community needs and apply for funding from relevant authorities."
          }
        />
        <ProcessCard
          name={"Processing"}
          summary={
            "Proposals are evaluated, and qualified contractors are hired for implementation."
          }
        />
        <ProcessCard
          name={"Completion"}
          summary={
            "Projects are completed on time, and residents benefit from improved infrastructure and services."
          }
        />
      </div>
    </section>
  );
};

export default Process;
