import React, { useState} from "react";
import { Link } from "react-router-dom";
import logo from "./movate1.jpg";
import "./Home.css";


function Projects() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="homepage">
      {/* Navbar */}
<header className="navbar">
  <div className="logo-section">
    <img src={logo} alt="Logo" className="logo" />
    {/* <span className="brand">LifelineConnect</span> */}
  </div>

  <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
    <div></div>
    <div></div>
    <div></div>
  </div>

  <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
    <Link to="/">Home</Link>
    <Link to="/about">About us</Link>
    <Link to="/services">Services</Link>
    <Link to="/projects">Our projects</Link>
    <Link to="/careers" >Careers</Link>
    {/* <Link to="/blog"></Link>
    <Link to="/how-it-works">How it Works</Link> */}
    <Link to="/contact" className="contact-btn">Contact us</Link>
  </nav>
</header>
</div>
  );
}

export default Projects;