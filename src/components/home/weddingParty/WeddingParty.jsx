import React from "react";
import "./weddingParty.css";

const WeddingParty = () => {
  const bridesmaids = [
    {
      name: "Irene Odeny",
      role: "Maid of Honour",
      image: "/images/Irene-Odeny.jpg",
      message: "What God cannot DO DOES NOT EXIST! 🥹❤️ From prayers to this beautiful moment. God has truly been faithful. So happy to witness you step into your forever. May your marriage be filled with God’s love, endless laughter, peace, friendship and beautiful memories. May you always choose each other, through every season. I’m so proud of you and excited for this new chapter, bestie! 🤍💍 Love you always!",
    },
    {
      name: "Noelle Kate",
      role: "Bridesmaid",
      image: "/images/kate.jpg",
      message: "Rose, You have been to me as the flower you were named after is to a girl: a source of joy, comfort, beauty, love and those feelings that only one gifted a rose can describe. Of course as a rose does your thorns of correction come with love😂 Mostly, you came to me as a rose does, a gift from God in time of need. A well timed gift. I love you Rose. I can't wait to explore this life and see you in different seasons and phrases in life. Nyasaye nong'eyo ni nadwaro maua mar Rose e ngimana, omiyo nomia in.",
    },
    {
      name: "Fridah Kamau",
      role: "Bridesmaid",
      image: "/images/kadot.png",
      message: "To the beautiful bride to be whose love language has always been calling us 'cows,' thank you for filling our lives with laughter, love, and unforgettable memories. As you begin this beautiful new chapter, I pray that your marriage is filled with joy, friendship, peace, and a love that grows stronger every day. Thank you for being the amazing, funny, and kind friend that you are. I love you dearly, and I couldn't be happier for you. Congratulations, beautiful.",
    },
    {
      name: "Rahab Joyce",
      role: "Bridesmaid",
      image: "/images/rahab.jpeg",
      message: " I celebrate not just the beautiful bride you are about to be,but the beautiful woman you are. 🤍 May this new journey be filled with a love that grows deeper, laughter that never ends. I’m so happy for you Rossitta❤️. My girl, look at you! 😭😂 From all the random conversations, crazy laughs, unforgettable memories… to now watching you become a WIFE🥹❤️You deserve a love that makes you feel  seen❤️. You found the collar man you desired. 🥹😂. I love you ❤️ I’m so excited for this chapter and I cannot wait to watch your love story unfold. Now go be someone’s forever person",
    },
  ];

  const groomsmen = [
    {
      name: "Groomsman One",
      role: "Best Man",
      image: "/images/groomsman-1.jpg",
    },
    {
      name: "Groomsman Two",
      role: "Groomsman",
      image: "/images/groomsman-2.jpg",
    },
    {
      name: "Groomsman Three",
      role: "Groomsman",
      image: "/images/groomsman-3.jpg",
    },
  ];

  return (
    <section className="wedding-party" id="party">

      <div className="party-container">

        <div className="party-header">

          <p>THE PEOPLE WE LOVE</p>

          <h2>
            Our
            <span>People</span>
          </h2>

          <p className="party-intro">
            The wonderful people standing beside us
            as we begin this beautiful chapter.
          </p>

        </div>

        <div className="party-group">

          <div className="party-group-title">
            <span>HER SIDE</span>
            <h3>The Bridesmaids</h3>
          </div>

          <div className="party-grid">
            {bridesmaids.map((person, index) => (
              <div className="party-card" key={index}>

                <div className="party-image">
                  <img src={person.image} alt={person.name} />

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="party-info">
                  <small>{person.role}</small>
                  <h4>{person.name}</h4>
                  <p className="party-message">
                     {person.message}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

        <div className="party-group groom-group">

          <div className="party-group-title">
            <span>HIS SIDE</span>
            <h3>The Groomsmen</h3>
          </div>

          <div className="party-grid">
            {groomsmen.map((person, index) => (
              <div className="party-card" key={index}>

                <div className="party-image">
                  <img src={person.image} alt={person.name} />

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="party-info">
                  <small>{person.role}</small>
                  <h4>{person.name}</h4>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default WeddingParty;