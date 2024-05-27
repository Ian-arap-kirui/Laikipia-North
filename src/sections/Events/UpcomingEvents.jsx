import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import "./events.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpcomingEventsCard from "../../components/cards/UpcomingEventsCard";
import Slider from "react-slick";
import SectionHeader from "../../components/Headers/SectionHeader";
const UpcomingEvents = () => {
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
    <section className="upcomingEvents">
      <div className="eventsHeader">
        <SectionHeader
          title={"Upcoming Events"}
          subtitle={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse"
          }
        />
      </div>
      <div className="eventsContent">
        <Slider {...settings}>
          <UpcomingEventsCard />
          <UpcomingEventsCard />
          <UpcomingEventsCard />
          <UpcomingEventsCard />
          <UpcomingEventsCard />
        </Slider>
      </div>
    </section>
  );
};

export default UpcomingEvents;
