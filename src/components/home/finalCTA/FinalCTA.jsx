import React from "react";
import "./finalCTA.css";

const FinalCTA = () => {
  return (
    <section className="final-cta">

      <div className="final-cta-overlay"></div>

      <div className="final-cta-content">

        <p>AND SO OUR NEXT CHAPTER BEGINS</p>

        <h2>
          Our Forever
          <span>Starts Here.</span>
        </h2>

        <div className="final-heart">
          ♥
        </div>

        <div className="final-names">
          Amondi <i>&</i> Ajuma
        </div>

        <div className="final-date">
          12 · 12 · 2026
        </div>

        <a href="#rsvp">
          RSVP WITH US
        </a>

      </div>

    </section>
  );
};

export default FinalCTA;