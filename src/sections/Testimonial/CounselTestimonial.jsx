import Slider from "react-slick";
import SectionHeader from "../../components/Headers/SectionHeader";
import "./testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CounselTestimonialCards from "../../components/cards/CounselTestimonialCards";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
const CounselTestimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
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
    <section className="counselTestimonials">
      <SectionHeader
        title={"What Your Counselors Says"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse"
        }
      />
      <div className="counselTestimonialContent">
        <Slider {...settings}>
          <CounselTestimonialCards />
          <CounselTestimonialCards />
          <CounselTestimonialCards />
          <CounselTestimonialCards />
          <CounselTestimonialCards />
          <CounselTestimonialCards />
          <CounselTestimonialCards />
          <CounselTestimonialCards />
        </Slider>
      </div>
    </section>
  );
};

export default CounselTestimonial;
