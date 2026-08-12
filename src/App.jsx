import React from "react";

import Navbar from "./components/common/Navbar/Navbar";

import Hero from "./components/home/Hero/Hero";
import Invitation from "./components/home/Invitation/Invitation";
import Countdown from "./components/home/Countdown/Countdown";
import Ourstory from "./components/home/OurStory/Ourstory";
import WeddingDay from "./components/home/weddingDay/WeddingDay";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>

        <Hero />

        <Invitation />

        <Countdown />

        <Ourstory />

        <WeddingDay />

      </main>

    </div>
  );
}

export default App;