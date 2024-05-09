import Slider from "react-slick";
import ServiceCards from "../../components/cards/ServiceCards";
import "./servSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
const ServSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section className="servSection">
      <div className="servSectionContainer">
        <div className="servSectionHeader">
          <h3>Find Governmental Services</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            suscipit maiores officiis sapiente officia. Dolorem quis rem totam
            commodi quisquam, quas error unde dignissimos, cumque ea iure,
            aspernatur fugiat non.
          </p>
        </div>
        <div className="servSectionContent">
          <Slider {...settings}>
            <ServiceCards />
            <ServiceCards />
            <ServiceCards />
            <ServiceCards />
            <ServiceCards />
            <ServiceCards />
            <ServiceCards />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServSection;
