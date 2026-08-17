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
      name: "Bridesmaid Two",
      role: "Bridesmaid",
      image: "/images/bridesmaid-2.jpg",
    },
    {
      name: "Bridesmaid Three",
      role: "Bridesmaid",
      image: "/images/bridesmaid-3.jpg",
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