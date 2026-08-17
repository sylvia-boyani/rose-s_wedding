import React from "react";
import "./Ourstory.css";

const OurStory = () => {
  return (
    <section className="story" id="story">

      <div className="story-container">

        <div className="story-heading">

          <p>THEIR JOURNEY</p>

          <h2>
            Our
            <span>Story</span>
          </h2>

          <div className="story-line"></div>

        </div>


        <div className="story-intro">

          <div className="story-image">
            <img
              src="/images/us.jpg"
              alt="Amondi and Ajuma"
            />

            <div className="story-image-label">
              A & A
            </div>
          </div>


          <div className="story-text">

            <span className="story-number">
              01
            </span>

            <h3>
              It all started
              <em>with a hello.</em>
            </h3>

            <p>
              Every beautiful love story begins somewhere.
              Ours began with two people crossing paths,
              discovering friendship, building trust, and
              slowly realizing that what they had found
              was something truly special.
            </p>

            <p>
              Through laughter, dreams, challenges and
              countless memories, our journey brought us
              closer to the moment we've been waiting for.
            </p>

            <div className="story-signature">
              Amondi <span>&</span> Ajuma
            </div>

          </div>

        </div>


        <div className="story-timeline">

          <div className="timeline-item">
            <span>01</span>
            <small>THE BEGINNING</small>
            <h4>First Hello</h4>
            <p>
              The moment our paths crossed.
            </p>
          </div>

          <div className="timeline-item">
            <span>02</span>
            <small>THE JOURNEY</small>
            <h4>Growing Together</h4>
            <p>
              Memories became moments,
              and moments became a story.
            </p>
          </div>

          <div className="timeline-item">
            <span>03</span>
            <small>THE QUESTION</small>
            <h4>Forever?</h4>
            <p>
              One question changed everything.
            </p>
          </div>

          <div className="timeline-item active">
            <span>04</span>
            <small>THE BEGINNING</small>
            <h4>Our Forever</h4>
            <p>
              And now, we begin the next chapter.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default OurStory;