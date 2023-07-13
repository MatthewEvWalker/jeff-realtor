// import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Home.scss";
import lake from "../../assets/images/lake.jpg";
import austinNight from "../../assets/images/nighttime-austin.jpg";
import austinBridge from "../../assets/images/landscape-austin-house.jpeg";
import skyline from "../../assets/images/skyline-min.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [austinNight, lake, austinBridge, skyline];

  const handleNextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((currentImage - 1) % images.length);
  };

  const handleJumpToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <>
      <div className="home container">
        <div className="photo-carousel">
          <FontAwesomeIcon
            className="icon left"
            icon={faChevronLeft}
            onClick={handlePrevImage}
          />
          <FontAwesomeIcon
            className="icon right"
            icon={faChevronRight}
            onClick={handleNextImage}
          />

          <ul>
            <li class="slide" data-active>
              <img src={images[currentImage]} alt="" />
            </li>
          </ul>
        </div>

        <div className="carousel-nav">
          {images.map((image, index) => (
            <button
              key={index}
              className={`carousel-circle ${
                index === currentImage ? "active-slide" : ""
              }`}
              onClick={() => handleJumpToImage(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
