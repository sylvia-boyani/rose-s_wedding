import React from "react";
import "./Invitation.css";

const Invitation = () => {
  return (
    <section className="invitation" id="invitation">

      <div className="invitation-decoration invitation-decoration-left">
        A
      </div>

      <div className="invitation-content">

        <p className="invitation-eyebrow">
          WITH JOY IN THEIR HEARTS
        </p>

        <h2>
          Two hearts.
          <br />
          <span>One beautiful journey.</span>
        </h2>

        <div className="invitation-line">
          <span></span>
          <i>♥</i>
          <span></span>
        </div>

        <p className="invitation-text">
          Together with their families, Amondi and  joyfully
          invite you to celebrate the beginning of their
          forever as they exchange vows and begin a new
          chapter of their lives together.
        </p>

        <div className="invitation-names">
          <span>Amondi</span>
          <i>&</i>
          <span>Ajuma</span>
        </div>

        <div className="invitation-date">
          <span>12</span>
          <div>
            <small>DECEMBER</small>
            <strong>2026</strong>
          </div>
        </div>

      </div>

      <div className="invitation-decoration invitation-decoration-right">
        A
      </div>

    </section>
  );
};

export default Invitation;