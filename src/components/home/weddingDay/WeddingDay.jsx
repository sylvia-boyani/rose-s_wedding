import React from "react";
import "./WeddingDay.css";

const WeddingDay = () => {
  return (
    <section className="wedding-day" id="wedding-day">

      <div className="wedding-day-container">

        <div className="wedding-day-header">

          <p>THE CELEBRATION</p>

          <h2>
            The
            <span>Wedding Day</span>
          </h2>

          <p className="wedding-day-intro">
            A day filled with love, laughter,
            family and beautiful memories.
          </p>

        </div>


        <div className="events-grid">

          <article className="event-card ceremony">

            <div className="event-number">
              01
            </div>

            <div className="event-icon">
              ♡
            </div>

            <p className="event-label">
              THE CEREMONY
            </p>

            <h3>
              Exchange
              <em>of Vows</em>
            </h3>

            <div className="event-details">

              <strong>01:00 PM</strong>

              <span>
                Saturday, 12 December 2026
              </span>

              <span>
                Venue Name
                <br />
                Nairobi, Kenya
              </span>

            </div>

            <a href="#location">
              VIEW LOCATION
            </a>

          </article>


          <article className="event-card reception">

            <div className="event-number">
              02
            </div>

            <div className="event-icon">
              ✦
            </div>

            <p className="event-label">
              THE RECEPTION
            </p>

            <h3>
              Dinner &
              <em>Celebration</em>
            </h3>

            <div className="event-details">

              <strong>04:00 PM</strong>

              <span>
                Saturday, 12 December 2026
              </span>

              <span>
                Reception Venue
                <br />
                Nairobi, Kenya
              </span>

            </div>

            <a href="#location">
              VIEW LOCATION
            </a>

          </article>

        </div>


        <div className="wedding-schedule">

          <div className="schedule-title">
            <span>THE DAY AT A GLANCE</span>
            <h3>Our Schedule</h3>
          </div>

          <div className="schedule-list">

            <div className="schedule-item">
              <time>12:00</time>
              <div>
                <h4>Guest Arrival</h4>
                <p>Welcome drinks & seating</p>
              </div>
            </div>

            <div className="schedule-item">
              <time>13:00</time>
              <div>
                <h4>Wedding Ceremony</h4>
                <p>The moment we've been waiting for</p>
              </div>
            </div>

            <div className="schedule-item">
              <time>14:30</time>
              <div>
                <h4>Photography</h4>
                <p>Family & wedding party portraits</p>
              </div>
            </div>

            <div className="schedule-item">
              <time>16:00</time>
              <div>
                <h4>Reception</h4>
                <p>Dinner, speeches & celebration</p>
              </div>
            </div>

            <div className="schedule-item">
              <time>19:00</time>
              <div>
                <h4>First Dance</h4>
                <p>Our first dance as husband and wife</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WeddingDay;