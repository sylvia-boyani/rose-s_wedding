import React from "react";
import "./DressCode.css";

const DressCode = () => {
  return (
    <section className="dress-code" id="dress-code">

      <div className="dress-code-container">

        <div className="dress-code-header">
          <p>COME DRESSED TO CELEBRATE</p>

          <h2>
            The
            <span>Dress Code</span>
          </h2>

          <p className="dress-code-intro">
            We're keeping the celebration elegant,
            timeless and joyful.
          </p>
        </div>

        <div className="dress-code-grid">

          <div className="dress-card">
            <div className="dress-card-number">01</div>

            <div className="dress-symbol">♀</div>

            <p>LADIES</p>

            <h3>
              Elegant
              <em>Formal Wear</em>
            </h3>

            <div className="dress-line"></div>

            <span>
              Long dresses, elegant gowns,
              sophisticated accessories and
              comfortable shoes for celebrating
              throughout the evening.
            </span>
          </div>

          <div className="dress-card dark">
            <div className="dress-card-number">02</div>

            <div className="dress-symbol">♂</div>

            <p>GENTLEMEN</p>

            <h3>
              Classic
              <em>Formal Wear</em>
            </h3>

            <div className="dress-line"></div>

            <span>
              Suits, formal shirts, polished shoes
              and classic accessories are warmly
              encouraged.
            </span>
          </div>

        </div>

        <div className="dress-note">
          <span>STYLE NOTE</span>
          <p>
            Neutral tones, soft yellow accents and
            classic black are especially welcome.
          </p>
        </div>

      </div>

    </section>
  );
};

export default DressCode;