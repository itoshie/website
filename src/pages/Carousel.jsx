import React, { useState, useEffect } from "react";
import slide1 from "../assets/images/home_slide1.webp";
import slide2 from "../assets/images/home_slide2.webp";
import slide3 from "../assets/images/home_slide3.webp";
import "./Carousel.css";

const slides = [
  {
    image: slide1,
    text: "Welcome to Our Website"
  },
  {
    image: slide2,
    text: "We Build Amazing Things"
  },
  {
    image: slide3,
    text: "Start Your Journey Today"
  }
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
        >
          <img src={slide.image} alt="slide" />
          <div className="overlay">
            <h2>{slide.text}</h2>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Carousel;