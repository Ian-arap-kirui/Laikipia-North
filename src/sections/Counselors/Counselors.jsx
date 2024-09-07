import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SectionHeader from "../../components/Headers/SectionHeader";
import Counselor from "../../components/cards/Counselor";
import { faX } from "@fortawesome/free-solid-svg-icons";
import DummyProfile from "../../assets/dummyProfile.jpg";
import "./counselors.css";
const Counselors = () => {
  const counselDataProfile = [
    {
      name: "Honorable Sarah Lekorere",
      designation: "Member of Parliament",
      image: DummyProfile,
      socialIcons: [faFacebook, faLinkedin, faX], // Add social icons here
    },
    {
      name: "Mr. Adan",
      designation: "Fund Manager",
      image: DummyProfile,
      socialIcons: [faFacebook, faLinkedin, faX], // Add social icons here
    },
    {
      name: "Mr. Paul",
      designation: "Constituency",
      image: DummyProfile,
      socialIcons: [faFacebook, faLinkedin, faX], // Add social icons here
    },
    {
      name: "Jane Smith",
      designation: "Chairperson (NGDCF)",
      image: DummyProfile,
      socialIcons: [faFacebook, faLinkedin, faX], // Add social icons here
    },
    // Add more counselor data objects as needed
  ];

  return (
    <section className="counselors">
      <SectionHeader
        title={"Meet Our Leadership Team"}
        subtitle={
          "Our team is led by dedicated individuals committed to fostering development and ensuring that every resident of Laikipia North has access to essential services and opportunities."
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
