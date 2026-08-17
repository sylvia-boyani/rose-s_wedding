import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        <a href="#home" className="wedding-logo" onClick={closeMenu}>
          <span>Amondi</span>
          <small>WEDS</small>
          <span>Ajuma</span>
        </a>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#story" onClick={closeMenu}>Our Story</a>
          <a href="#wedding-day" onClick={closeMenu}>The Day</a>
          <a href="#party" onClick={closeMenu}>Our People</a>
          <a href="#gallery" onClick={closeMenu}>Memories</a>

          <a
            href="#rsvp"
            className="nav-rsvp"
            onClick={closeMenu}
          >
            RSVP
          </a>
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Navbar;