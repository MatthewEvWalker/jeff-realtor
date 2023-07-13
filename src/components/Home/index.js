// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const interval = setInterval(handleNextImage, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  const handlePrevImage = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
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

        <section >



        </section>


      </div>
    </>
  );
};

export default Home;
