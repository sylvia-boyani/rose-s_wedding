import React, { useState } from "react";
import "./gifts.css";

const Gifts = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="gifts" id="gifts">

      <div className="gifts-container">

        <p className="gifts-eyebrow">
          A LITTLE SOMETHING
        </p>

        <h2>
          Your presence
          <span>is our greatest gift.</span>
        </h2>

        <p className="gifts-intro">
          Having you celebrate this special day with us
          means more than we could ever ask for.
        </p>

        <div className="gift-options">

          <div className={`gift-option ${showDetails ? "active" : ""}`}>

            <span>01</span>

            <div className="gift-main">

              <small>TRADITIONAL</small>

              <h3>Wedding Gift</h3>

              {showDetails && (
                <div className="gift-details">

                  <p>
                    Your thoughtfulness means so much to us.
                    If you would like to bring a wedding gift,
                    you are warmly welcome to do so
                    <strong> on the wedding day.</strong>
                  </p>

                  <p className="gift-note">
                    Most importantly, come celebrate,
                    laugh, dance and make beautiful
                    memories with us.
                  </p>

                </div>
              )}

            </div>

            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "HIDE DETAILS" : "VIEW DETAILS"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Gifts;