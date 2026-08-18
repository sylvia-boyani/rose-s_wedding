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
            Come as you are, feel comfortable,
            and celebrate with us in your own style.
          </p>

        </div>


        <div className="dress-code-grid">

          <div className="dress-card">

            <div className="dress-card-number">
              01
            </div>

            <div className="dress-symbol">
              ✦
            </div>

            <p>EVERYONE</p>

            <h3>
              Free
              <em>or African Attire</em>
            </h3>

            <div className="dress-line"></div>

            <span>
              There is no strict dress code.
              Wear something that makes you
              feel comfortable and confident,
              or celebrate with us in beautiful
              African attire.
            </span>

          </div>

        </div>


        <div className="dress-note">

          <span>STYLE NOTE</span>

          <p>
            Come comfortable, come joyful,
            and most importantly, come ready
            to celebrate Rose & Ted.
          </p>

        </div>

      </div>

    </section>
  );
};

export default DressCode;