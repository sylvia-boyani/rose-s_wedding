import React, { useState } from "react";
import "./gifts.css";

const Gifts = () => {
  const [activeGift, setActiveGift] = useState(null);

  const toggleGift = (gift) => {
    setActiveGift(activeGift === gift ? null : gift);
  };

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
          If you would like to bless us further,
          we've provided a few options below.
        </p>

        <div className="gift-options">

          {/* =========================
              M-PESA
          ========================= */}

          <div
            className={`gift-option ${
              activeGift === "mpesa" ? "active" : ""
            }`}
          >

            <span>01</span>

            <div className="gift-main">
              <small>MOBILE GIFT</small>

              <h3>M-Pesa</h3>

              {activeGift === "mpesa" && (
                <div className="gift-details">

                  <p>
                    If you'd like to send us a gift
                    through M-Pesa, you can use the
                    number below.
                  </p>

                  <div className="mpesa-number">
                    <small>M-PESA NUMBER</small>

                    <strong>
                      0741144434
                    </strong>
                  </div>

                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => toggleGift("mpesa")}
            >
              {activeGift === "mpesa"
                ? "HIDE DETAILS"
                : "VIEW DETAILS"}
            </button>

          </div>


          {/* =========================
              WEDDING GIFT
          ========================= */}

          <div
            className={`gift-option ${
              activeGift === "wedding" ? "active" : ""
            }`}
          >

            <span>02</span>

            <div className="gift-main">

              <small>TRADITIONAL</small>

              <h3>Wedding Gift</h3>

              {activeGift === "wedding" && (
                <div className="gift-details">

                  <p>
                    Your thoughtfulness means so much
                    to us. If you'd like to bring a
                    wedding gift, you are warmly
                    welcome to do so <strong>on the
                    wedding day.</strong>
                  </p>

                  <p className="gift-note">
                    Most importantly, come celebrate,
                    laugh, dance and make memories
                    with us.
                  </p>

                </div>
              )}

            </div>

            <button
              type="button"
              onClick={() => toggleGift("wedding")}
            >
              {activeGift === "wedding"
                ? "HIDE DETAILS"
                : "VIEW DETAILS"}
            </button>

          </div>


          {/* =========================
              HONEYMOON
          ========================= */}

          <div
            className={`gift-option ${
              activeGift === "honeymoon" ? "active" : ""
            }`}
          >

            <span>03</span>

            <div className="gift-main">

              <small>OUR DREAM</small>

              <h3>Honeymoon Fund</h3>

              {activeGift === "honeymoon" && (
                <div className="gift-details">

                  <p>
                    Instead of a traditional gift,
                    you can contribute towards our
                    honeymoon and help us create
                    memories that will last a lifetime.
                  </p>

                  <div className="honeymoon-details">

                    <small>
                      HONEYMOON CONTRIBUTION
                    </small>

                    <strong>
                      M-Pesa: 0741144434
                    </strong>

                    <span>
                      Amondi & Ajuma
                    </span>

                  </div>

                </div>
              )}

            </div>

            <button
              type="button"
              onClick={() => toggleGift("honeymoon")}
            >
              {activeGift === "honeymoon"
                ? "HIDE DETAILS"
                : "VIEW DETAILS"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Gifts;