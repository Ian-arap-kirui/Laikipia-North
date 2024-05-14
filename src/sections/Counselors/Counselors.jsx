import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SectionHeader from "../../components/Headers/SectionHeader";
import Counselor from "../../components/cards/Counselor";
import { faX } from "@fortawesome/free-solid-svg-icons";
import DummyProfile from "../../assets/dummyProfile.jpg";
import "./counselors.css";
const Counselors = () => {
  const counselDataProfile = [
    {
      name: "John Doe",
      designation: "Psychologist",
      image: DummyProfile,
      socialIcons: [faFacebook, faLinkedin, faX], // Add social icons here
    },
    {
      name: "Jane Smith",
      designation: "Therapist",
      image: DummyProfile,
      socialIcons: [faFacebook, faLinkedin, faX], // Add social icons here
    },
    {
      name: "Jane Smith",
      designation: "Therapist",
      image: DummyProfile,
      socialIcons: [faFacebook, faLinkedin, faX], // Add social icons here
    },
    {
      name: "Jane Smith",
      designation: "Therapist",
      image: DummyProfile,
      socialIcons: [faFacebook, faLinkedin, faX], // Add social icons here
    },
    // Add more counselor data objects as needed
  ];

  return (
    <section className="counselors">
      <SectionHeader
        title={"Our Team"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse"
        }
      />
      <div className="teamSectionContent">
        {counselDataProfile.map((counselor, index) => (
          <Counselor
            key={index}
            name={counselor.name}
            designation={counselor.designation}
            image={counselor.image}
            socialIcons={counselor.socialIcons} // Pass social icons here
          />
        ))}
      </div>
    </section>
  );
};

export default Counselors;
