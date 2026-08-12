import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-kicker">
          THE BEGINNING OF FOREVER
        </p>

        <div className="hero-names">
          <h1>Rose</h1>

          <span className="hero-ampersand">&</span>

          <h1>Ted</h1>
        </div>

        <div className="hero-divider">
          <span></span>
          <i>♥</i>
          <span></span>
        </div>

        <p className="hero-message">
          Together with their families, they invite you
          to celebrate their wedding.
        </p>

        <div className="hero-date">
          <span>12</span>
          <i>•</i>
          <span>12</span>
          <i>•</i>
          <span>2026</span>
        </div>

        <a href="#story" className="hero-button">
          Discover Our Story
        </a>

      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
};

export default Hero;