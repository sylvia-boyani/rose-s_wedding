import React from "react";
import "./gifts.css";

const Gifts = () => {
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
          If you would like to bless us further,
          we've provided a few options below.
        </p>

        <div className="gift-options">

          <div className="gift-option">
            <span>01</span>

            <div>
              <small>MOBILE GIFT</small>
              <h3>M-Pesa</h3>
            </div>

            <button>VIEW DETAILS</button>
          </div>

          <div className="gift-option">
            <span>02</span>

            <div>
              <small>TRADITIONAL</small>
              <h3>Wedding Gift</h3>
            </div>

            <button>VIEW DETAILS</button>
          </div>

          <div className="gift-option">
            <span>03</span>

            <div>
              <small>OUR DREAM</small>
              <h3>Honeymoon Fund</h3>
            </div>

            <button>VIEW DETAILS</button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Gifts;