import Slider from "react-slick";
import ServiceCards from "../../components/cards/ServiceCards";
import "./servSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "../../components/Headers/SectionHeader";
const ServSection = ({ page, services }) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <FontAwesomeIcon icon={faLongArrowAltRight} />,
    prevArrow: <FontAwesomeIcon icon={faLongArrowAltLeft} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section
      className={`${page === "aboutUs" ? "aboutUsServSection" : "servSection"}`}
    >
      <div
        className={
          page === "aboutUs"
            ? "aboutUsServSectionContainer"
            : "servSectionContainer"
        }
      >
        <SectionHeader
          title={"Find Governmental Services"}
          subtitle={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse"
          }
        />
        <div
          className={
            page === "aboutUs"
              ? "aboutUsServSectionContent"
              : "servSectionContent"
          }
        >
          {page === "aboutUs" ? (
            <>
              {services?.map((item) => (
                <ServiceCards
                  carDFor={"serviceCards"}
                  service={item}
                  key={item.id}
                  page={page}
                />
              ))}
            </>
          ) : (
            <>
              {services?.map((item) => (
                // <Slider {...settings}>
                <ServiceCards
                  carDFor={"serviceCards"}
                  service={item}
                  key={item.id}
                  page={page}
                />
                // </Slider>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServSection;
