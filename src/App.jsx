import React from "react";

import Navbar from "./components/common/Navbar/Navbar";
import Hero from "./components/home/Hero/Hero";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
      </main>

    </div>
  );
}

export default App;