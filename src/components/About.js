import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMapMarkerAlt,FaLinkedin,FaInstagram } from "react-icons/fa";
import logo from "./movate1.png";
import aboutwho from "./aboutwhobgremoved.png";
import pc from "./pc.png";
import laptop from "./laptop.png";
import cellphone from "./cellphone.png";
import smartphone from "./smartphone.png";
import tab from "./tablet.png";
import smartwatch from "./smartwatch.png";
import hybrid from "./hybridcar.png";
import www from "./www.jpg";
import vr from "./vr.png";
import clouda from "./clouda.png";
import space from "./space.png";
import roboat from "./robota.png";
import aia from "./aia.png";
import "./Home.css";
import "./about.css";


function About() {
    const [menuOpen, setMenuOpen] = useState(false);

    
const values = [
  {
    icon: "💡",
    title: "Innovation",
    desc: "Constantly seeking new and better ways to solve IT challenges."
  },
  {
    icon: "🤝",
    title: "Integrity",
    desc: "Operating with honesty, transparency, and ethical behavior."
  },
  {
    icon: "🎯",
    title: "Customer-Centricity",
    desc: "Putting clients’ needs at the forefront of our operations."
  },
  {
    icon: "👥",
    title: "Collaboration",
    desc: "Working closely with clients to achieve mutual success."
  },
  {
    icon: "✅",
    title: "Quality",
    desc: "Delivering top-notch IT solutions, prices, and services."
  },
  {
    icon: "⚡",
    title: "Flexibility",
    desc: "Delivering the result with flexible times and solutions."
  }
];
const awards = [
  { icon: "🏆", title: "Tech Innovator of the Year Award" },
  { icon: "🔒", title: "Cybersecurity Excellence Award" },
  { icon: "💻", title: "IT Services Provider of the Year" },
  { icon: "☁️", title: "Cloud Integration Pioneer Award" },
  { icon: "📊", title: "Data Analytics Excellence Award" },
  { icon: "🤝", title: "Client Satisfaction Champion" }
];
  return (
<div className="homepage">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="ProTech Logo" />
          
        </div>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
         <Link to="/careers">Careers</Link>
         <Link to="/solution">Solution</Link>
         <Link to="/expertise">Expertise</Link>
          <Link to="/contact" className="contact-icon">📞</Link>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </header>

{/* <div className="about"> */}
<section class="about-hero">
  <div class="about-content">
    <h1>About<br/> Manovate Technologies</h1>
    
  </div>
</section>
{/*who we are*/}
<section className="who-we-are">
      <div className="who-container">
        
        {/* Left Content */}
        <div className="who-text">
          <p className="who-subtitle">WHO WE ARE</p>
          <h2 className="who-title">Your Partner in IT Excellence</h2>
          <p className="who-desc">
            Manovate is a dynamic IT company with over two decades of experience,
            dedicated to delivering innovative IT solutions. We’ve helped
            businesses of all sizes navigate the ever-evolving tech landscape.
          </p>
          <p className="who-desc">
            Our team of 300+ certified IT professionals is passionate about
            exceeding your expectations—whether it’s managing IT systems,
            fortifying cybersecurity, optimizing networks, or harnessing the
            power of data analytics.
          </p>
        </div>

        {/* Right Image */}
        <div className="who-image">
          <img
            src={aboutwho}
            alt="Who We Are"
          />
        </div>
      </div>
    </section>

{/*about core sction*/}
  <section className="about-core-values">
      <div className="about-core-values-container">
        <p className="about-core-values-subtitle">CORE VALUES</p>
        <h2 className="about-core-values-title">
          We are guided by these principles in everything we do
        </h2>

        <div className="about-core-values-grid">
          {values.map((item, index) => (
            <div key={index} className="about-core-values-card">
              <div className="about-core-values-icon">{item.icon}</div>
              <h3 className="about-core-values-heading">{item.title}</h3>
              <p className="about-core-values-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/*awards section */}
      <section className="about-awards">
      <div className="about-awards-container">
        
        {/* Left Content */}
        <div className="about-awards-text">
          <p className="about-awards-subtitle">AWARDS & RECOGNITION</p>
          <h2 className="about-awards-title">
            Celebrating Manovate Excellence
          </h2>
        </div>

        {/* Right Awards Grid */}
        <div className="about-awards-grid">
          {awards.map((award, index) => (
            <div key={index} className="about-awards-card">
              <div className="about-awards-icon">{award.icon}</div>
              <p className="about-awards-name">{award.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

   
  


    <section className="mcards-sections">
     <div className="mpromise-cards">
          <div className="mpromise-card">
            {/* <img src={code} alt="Drive FI Business Growth" /> */}
            <h3>Visionary Leadership</h3><p>Our leaders combine decades of expertise in IT, operations, and customer success to deliver cutting-edge solutions.</p>
          </div>
          <div className="mpromise-card">
            {/* <img src={mobile} alt="Operational Efficiency" /> */}
            <h3>Customer-Centric Approach</h3>
            <p>We prioritize understanding your unique challenges to create solutions that meet your goals.</p>
          </div>
          <div className="mpromise-card">
            {/* <img src={code} alt="Implementation Certainty" /> */}
            <h3>Proven Solutions </h3>
      <p>Our team’s experience spans diverse industries, ensuring measurable results powered by the ServiceNow platform.</p>
      
      </div>
          <div className="mpromise-card">
            {/* <img src={code} alt="Implementation Certainty" /> */}
            <h3> Innovation-Driven Culture </h3>
      <p>Empowering our teams to explore new technologies, solve complex challenges, and deliver impactful digital experiences.</p>
      
      </div>
      </div>
    </section>

{/* advancing section*/}
  <section className="advancing-humanity">
      <div className="advancing-container">
        <h2 className="advancing-title">Advancing Humanity</h2>
        <p className="advancing-text">
          The future is ours to create. Whether it’s a driverless car, VR
          experience, or factory robotics, we help turn theory into possibility.
          We help create technological devices and ideas that transform our
          future and shape our current life.
        </p>
        <p className="advancing-text">
          We are proud to be part of the most significant technological
          breakthroughs. Virtually no laptop, smartphone, wearable device,
          voice-controlled gadget, VR device, or smart car would have made it
          into your hands without us.
        </p>

        {/* Timeline Icons */}
        <div className="timeline">
          <div className="timeline-item">
            <img src={pc} alt="PC" />
            <p>Personal Computer</p>
          </div>
          <div className="timeline-item">
            <img src={laptop} alt="Laptop" />
            <p>Portable Computer</p>
          </div>
          <div className="timeline-item">
            <img src={cellphone} alt="Phone" />
            <p>Cellular Phone</p>
          </div>
          <div className="timeline-item">
            <img src={smartphone} alt="Smartphone" />
            <p>Smart Phone</p>
          </div>
          <div className="timeline-item">
            <img src={tab} alt="Tablet" />
            <p>Tablet Computer</p>
          </div>
          <div className="timeline-item">
            <img src={smartwatch} alt="Smart Watch" />
            <p>Smart Watch</p>
          </div>
          <div className="timeline-item">
            <img src={hybrid} alt="Car" />
            <p>Hybrid Car</p>
          </div>
          <div className="timeline-item">
            <img src={www}alt="Internet" />
            <p>Internet</p>
          </div>
          <div className="timeline-item">
            <img src={vr} alt="VR" />
            <p>VR</p>
          </div>
          <div className="timeline-item">
            <img src={clouda} alt="Cloud" />
            <p>Cloud</p>
          </div>
          <div className="timeline-item">
            <img src={space} alt="Space" />
            <p>Space Exploration</p>
          </div>
          <div className="timeline-item">
            <img src={roboat}alt="Robotics" />
            <p>Robotics</p>
          </div>
          <div className="timeline-item">
            <img src={aia} alt="AI" />
            <p>AI</p>
          </div>
        </div>

        <h3 className="belief">
          We believe in the power of technology to make this world a brighter
          place. We are excited by all that humanity can achieve.
        </h3>

        {/* Bottom 3 Columns */}
        <div className="three-columns">
          <div className="column">
            <h4>We Are</h4>
            <p>
              A global technology leader. We make an impact by creating solutions
              that drive progress and transform industries. Collaboration is the
              key to our success.
            </p>
          </div>
          <div className="column">
            <h4>We Provide</h4>
            <p>
              Leading-edge technology and devices using advanced inspection
              tools, metrology systems, and computational analytics. Our
              solutions accelerate tomorrow’s electronic devices.
            </p>
          </div>
          <div className="column">
            <h4>We Enable</h4>
            <p>
              The evolution and innovation in the data era across key industries
              including automotive, mobile, and data center.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/*commement section*/}

    <section className="commitment-section">
  <div className="commitment-content">
    <h2>Experience Manovate Commitment to Excellence</h2>
    <Link to="/contact" className="commitment-btn">Contact Us</Link>
  </div>
</section>


{/* Footer */}
      
<footer className="footer">
  {/* <div className="footer-logo">
          <img src={logo} alt="footer-logo" />
        </div> */}
      <div className="footer-top">
        {/* Logo */}
        {/* <div className="footer-logo">
          <img src={logo} alt="footer-logo" />
        </div> */}

        {/* Navigation Links */}
        <ul className="footer-nav">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/careers">CAREERS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
        </ul>
      </div>
 <hr className="footer-divider" />

      <div className="footer-bottom">
        {/* Copyright */}
        <p>© 2025 Manovate Technologies | Innovating The Future</p>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="https://www.linkedin.com/company/108395213/admin/dashboard/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          
          <a href="https://share.google/1muxM9QFVEQhZBK1k" target="_blank" rel="noreferrer">
 <FaMapMarkerAlt />
          </a>
                   <a
            href="https://www.instagram.com/manovate_tech/"
            target="_blank"
            rel="noreferrer"
            >
            <FaInstagram />
           </a>
        </div>
      </div>
    </footer>




</div>
// </div>


  );
}

export default About;