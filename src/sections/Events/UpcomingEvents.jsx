import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import "./events.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpcomingEventsCard from "../../components/cards/UpcomingEventsCard";
import Slider from "react-slick";
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
    <section className="upcomingEvents">
      <div className="eventsHeader">
        <h3>Upcoming Events</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          iusto sunt{" "}
        </p>
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
