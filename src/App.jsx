import React from "react";

import Navbar from "./components/common/Navbar/Navbar";

import Hero from "./components/home/Hero/Hero";
import Invitation from "./components/home/Invitation/Invitation";
import Countdown from "./components/home/Countdown/Countdown";
import Ourstory from "./components/home/OurStory/Ourstory";
import WeddingDay from "./components/home/weddingDay/WeddingDay";
import DressCode from "./components/home/dressCode/DressCode";
import WeddingParty from "./components/home/weddingParty/WeddingParty";
import Gallery from "./components/home/gallery/Gallery";
import RSVP from "./components/home/rsvp/RSVP";
import Gifts from "./components/home/gifts/Gifts";
import Location from "./components/home/location/Location";
import FAQ from "./components/home/faq/FAQ";
import FinalCTA from "./components/home/finalCTA/FinalCTA";
import Footer from "./components/home/footer/Footer";

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

        <DressCode />
        
        <WeddingParty />

        <Gallery />

        <RSVP />

        <Gifts />

        <Location />

        <FAQ />

        <FinalCTA />

        <Footer />

      </main>

    </div>
  );
}

export default App;