import React, { useState } from "react";
import "./rsvp.css";

const RSVP = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="rsvp" id="rsvp">

      <div className="rsvp-container">

        <div className="rsvp-header">

          <p>WE HOPE YOU'LL JOIN US</p>

          <h2>
            Will you
            <span>be there?</span>
          </h2>

          <p>
            Your presence would make our celebration
            even more special.
          </p>

        </div>

        {!submitted ? (

          <form className="rsvp-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label>YOUR NAME</label>
              <input
                type="text"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-group">
              <label>EMAIL ADDRESS</label>
              <input
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label>WILL YOU ATTEND?</label>

              <div className="attendance-options">

                <label>
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    required
                  />
                  <span>YES, I'LL BE THERE</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                  />
                  <span>UNFORTUNATELY, I CAN'T</span>
                </label>

              </div>
            </div>

            <div className="form-group">
              <label>NUMBER OF GUESTS</label>

              <select required>
                <option value="">Select</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </div>

            <div className="form-group">
              <label>MESSAGE FOR AMONDI & AJUMA</label>

              <textarea
                placeholder="Leave a little note..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit">
              SEND MY RSVP
            </button>

          </form>

        ) : (

          <div className="rsvp-success">

            <span>♥</span>

            <h3>Thank you!</h3>

            <p>
              We've received your RSVP and can't wait
              to celebrate with you.
            </p>

            <strong>
              Amondi & Ajuma
            </strong>

          </div>

        )}

      </div>

    </section>
  );
};

export default RSVP;