import React from "react";
import Carousel from "./Carousel";
import contactImage from "../assets/images/itoshie_logo.webp";

const Home = () => {

  return (
    <div className="sub-container">
      <Carousel />
      <section className="contact-info">
        <div className="info-card">
          <div className="icon">
            ✉
          </div>
          <div className="details">
            <p>we@itoshie.com</p>
          </div>
        </div>

        <div className="info-card">
          <div className="icon">
            ☎
          </div>
          <div className="details">
            <p>+91 98765 43210</p>
          </div>
        </div>

        <div className="info-card">
          <div className="icon">
            📍
          </div>
          <div className="details">
            <p>Bangalore, Karnataka, India</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;