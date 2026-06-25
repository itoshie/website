import React from "react";
import Carousel from "./Carousel";
import contactImage from "../assets/images/itoshie_logo.webp";

const Home = () => {

  return (
    <div className="sub-container">
      <Carousel />
      <section className="contact-section">
        <div className="contact-image-container">
          <img src={contactImage} alt="Contact us" className="contact-image" />
        </div>
        <div className="contact-text-container">
          <h2>Contact Us</h2>
          <div className="info-card">
            <div className="icon">✉</div>
            <div className="details">
              <p>we@itoshie.com</p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon">☎</div>
            <div className="details">
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon">📍</div>
            <div className="details">
              <p>Bangalore, Karnataka, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;