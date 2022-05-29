import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        THE SWORDMAN
      </a>
      <ul className={active}>
       
        <li className="nav__item">
          <a href="https://en.wikipedia.org/wiki/Swordsmanship" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="https://www.sportsrec.com/types-sword-fighting-styles-6744937.html" className="nav__link">
            Types
          </a>
        </li>
        <li className="nav__item">
          <a href="https://character-tiers.fandom.com/wiki/Skilled_Swordsman" className="nav__link">
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a href="https://www.facebook.com/markkenneth.frondoza/" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;