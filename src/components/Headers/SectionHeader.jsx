import "./sectionHeader.css";
const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="sectionHeader">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
