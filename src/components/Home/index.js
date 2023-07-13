import { Link } from "react-router-dom";
import "./Home.scss";
import bridge from "../../assets/images/bridge.jpg";
import austinNight from "../../assets/images/nighttime-austin.jpg";
import jenga from "../../assets/images/skyline-min.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="home container">
        <div className="photo-carousel">
          <FontAwesomeIcon className="icon left" icon={faChevronLeft} />
          <FontAwesomeIcon className="icon right" icon={faChevronRight} />

          <ul>
            <li class="slide" data-active>
              <img src={austinNight} alt="photo 1" />
            </li>

            <li class="slide">
              <img src={jenga} alt="photo 2" />
            </li>

            <li class="slide">
              <img src={bridge} alt="photo 3" />
            </li>
          </ul>
        </div>

        <div className="carousel-nav">
            <button className="carousel-circle"></button>
            <button className="carousel-circle"></button>
            <button className="carousel-circle"></button>            
        </div>
      </div>
    </>
  );
};

export default Home;
