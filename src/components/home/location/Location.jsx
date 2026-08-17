import React from "react";
import "./location.css";

const Location = () => {
  return (
    <section className="location" id="location">

      {/* =========================
          LOCATION INFORMATION
      ========================== */}

      <div className="location-content">

        <p className="location-eyebrow">
          COME CELEBRATE WITH US
        </p>

        <h2>
          Find
          <span>Us</span>
        </h2>

        <div className="location-details">

          <h3>KWS-Kisumu Impala Sanctuary</h3>

          <p>
            Kisumu, Kenya
          </p>

          <p>
            Saturday, 12 December 2026
            <br />
            1:00 PM
          </p>

        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=KWS-Kisumu+Impala+Sanctuary"
          target="_blank"
          rel="noreferrer"
          className="location-button"
        >
          GET DIRECTIONS
        </a>

      </div>


      {/* =========================
          GOOGLE MAP
      ========================== */}

      <div className="location-map">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332111.2666675215!2d34.51411244268799!3d-0.07638375045220104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa4cc8c7921ef%3A0x523286ab2730496a!2sKWS-Kisumu%20Impala%20Sanctuary!5e0!3m2!1sen!2ske!4v1786976563476!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="KWS-Kisumu Impala Sanctuary Map"
        />

      </div>

    </section>
  );
};

export default Location;