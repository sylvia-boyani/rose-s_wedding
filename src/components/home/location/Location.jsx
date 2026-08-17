import React from "react";
import "./location.css";

const Location = () => {
  return (
    <section className="location" id="location">

      <div className="location-image">
        <div className="location-overlay"></div>
      </div>

      <div className="location-content">

        <p>COME CELEBRATE WITH US</p>

        <h2>
          Find
          <span>Us</span>
        </h2>

        <div className="location-details">

          <h3>Venue Name</h3>

          <p>
            Nairobi, Kenya
          </p>

          <p>
            Saturday, 12 December 2026
            <br />
            1:00 PM
          </p>

        </div>

        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noreferrer"
          className="location-button"
        >
          GET DIRECTIONS
        </a>

      </div>

    </section>
  );
};

export default Location;