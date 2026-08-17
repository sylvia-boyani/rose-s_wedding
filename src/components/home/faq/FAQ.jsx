import React, { useState } from "react";
import "./faq.css";

const questions = [
  {
    question: "What should I wear?",
    answer:
      "We would love for our guests to dress in elegant formal wear. Neutral tones, black and soft yellow accents are especially welcome.",
  },
  {
    question: "Can I bring a plus-one?",
    answer:
      "Please refer to your invitation or RSVP confirmation for information about your allocated guests.",
  },
  {
    question: "Are children invited?",
    answer:
      "Children are welcome where specifically indicated on the invitation.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes. Parking will be available at the venue. Additional directions will be shared closer to the wedding.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "We recommend arriving at least 30 minutes before the ceremony begins so that everyone can be comfortably seated.",
  },
];

const FAQ = () => {

  const [active, setActive] = useState(null);

  return (
    <section className="faq">

      <div className="faq-container">

        <div className="faq-header">

          <p>GOOD TO KNOW</p>

          <h2>
            Frequently Asked
            <span>Questions</span>
          </h2>

        </div>

        <div className="faq-list">

          {questions.map((item, index) => {

            const isOpen = active === index;

            return (
              <div
                className={`faq-item ${isOpen ? "open" : ""}`}
                key={index}
              >

                <button
                  onClick={() =>
                    setActive(isOpen ? null : index)
                  }
                >

                  <span>
                    {item.question}
                  </span>

                  <strong>
                    {isOpen ? "−" : "+"}
                  </strong>

                </button>

                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
};

export default FAQ;