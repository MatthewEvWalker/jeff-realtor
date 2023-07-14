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

        <section className="text-area">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque egestas diam in arcu. Tristique sollicitudin nibh sit amet commodo. Quis ipsum suspendisse ultrices gravida dictum. Tincidunt tortor aliquam nulla facilisi cras. Duis at tellus at urna condimentum mattis. Tortor at auctor urna nunc id cursus. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Id faucibus nisl tincidunt eget nullam. Varius morbi enim nunc faucibus a pellentesque. Massa massa ultricies mi quis hendrerit dolor. Id faucibus nisl tincidunt eget. Ut faucibus pulvinar elementum integer enim neque. Dictum sit amet justo donec enim. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Imperdiet proin fermentum leo vel orci porta. Morbi tristique senectus et netus et malesuada. Sed blandit libero volutpat sed cras ornare arcu dui. Tortor consequat id porta nibh.
            </p>

            <p>
            Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Magnis dis parturient montes nascetur. Tincidunt tortor aliquam nulla facilisi. Id porta nibh venenatis cras sed felis eget. Neque viverra justo nec ultrices dui sapien eget mi. Vitae suscipit tellus mauris a diam maecenas. Eleifend donec pretium vulputate sapien nec sagittis. Dolor purus non enim praesent elementum facilisis leo vel. Condimentum lacinia quis vel eros donec ac. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Habitant morbi tristique senectus et netus et malesuada.
            </p>
            <p>
            Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Magnis dis parturient montes nascetur. Tincidunt tortor aliquam nulla facilisi. Id porta nibh venenatis cras sed felis eget. Neque viverra justo nec ultrices dui sapien eget mi. Vitae suscipit tellus mauris a diam maecenas. Eleifend donec pretium vulputate sapien nec sagittis. Dolor purus non enim praesent elementum facilisis leo vel. Condimentum lacinia quis vel eros donec ac. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Habitant morbi tristique senectus et netus et malesuada.
            </p>
            <p>
            Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Magnis dis parturient montes nascetur. Tincidunt tortor aliquam nulla facilisi. Id porta nibh venenatis cras sed felis eget. Neque viverra justo nec ultrices dui sapien eget mi. Vitae suscipit tellus mauris a diam maecenas. Eleifend donec pretium vulputate sapien nec sagittis. Dolor purus non enim praesent elementum facilisis leo vel. Condimentum lacinia quis vel eros donec ac. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Habitant morbi tristique senectus et netus et malesuada.
            </p>
            <p>
            Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Magnis dis parturient montes nascetur. Tincidunt tortor aliquam nulla facilisi. Id porta nibh venenatis cras sed felis eget. Neque viverra justo nec ultrices dui sapien eget mi. Vitae suscipit tellus mauris a diam maecenas. Eleifend donec pretium vulputate sapien nec sagittis. Dolor purus non enim praesent elementum facilisis leo vel. Condimentum lacinia quis vel eros donec ac. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Habitant morbi tristique senectus et netus et malesuada.
            </p>



        </section>


      </div>
    </>
  );
};

export default Home;
