import React, { useEffect, useState } from "react";
import "./Countdown.css";

const weddingDate = new Date("December 12, 2026 14:00:00").getTime();

const Countdown = () => {

  const calculateTime = () => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {

    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (
    <section className="countdown" id="countdown">

      <div className="countdown-bg-letter">
        A&A
      </div>

      <div className="countdown-content">

        <p className="countdown-eyebrow">
          THE COUNTDOWN
        </p>

        <h2>
          Until we say
          <span>I do.</span>
        </h2>

        <div className="countdown-date">
          12 · 12 · 2026
        </div>

        <div className="countdown-grid">

          <div className="countdown-item">
            <strong>{String(time.days).padStart(3, "0")}</strong>
            <span>Days</span>
          </div>

          <div className="countdown-item">
            <strong>{String(time.hours).padStart(2, "0")}</strong>
            <span>Hours</span>
          </div>

          <div className="countdown-item">
            <strong>{String(time.minutes).padStart(2, "0")}</strong>
            <span>Minutes</span>
          </div>

          <div className="countdown-item">
            <strong>{String(time.seconds).padStart(2, "0")}</strong>
            <span>Seconds</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Countdown;