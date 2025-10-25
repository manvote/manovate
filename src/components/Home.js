import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMapMarkerAlt,FaLinkedin,FaInstagram,FaFacebook } from "react-icons/fa";
import "./Home.css";
import { HeadProvider, Title, Meta } from 'react-head';
import { Menu, X, ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";

 // Unused? Consider removing if not used.
// import phone from "./phone-solid-full.svg";
// import mail from "./envelope-solid-full.svg";
import logo from "./movate1.png";
import brand from "./branding.png";
import tech from "./technology.png";
import digit from "./digital.png";
import content from "./content.jpg";
import webdev from "./web.png";
import bussinesslogo from "./bussiness.png";
import p1 from "./network-project-bg.jpg";
import p2 from "./cyberproject.jpg";
import p3 from "./cloudproject.jpg";
import p4 from "./dataaproject.jpg";
import p5 from "./softproject.jpg";
import p6 from "./aiproject.png";
import p7 from "./softtest.jpg";
import heroright from"./home-hero-bvg1.png";


function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar");
      if (window.scrollY > 50) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
     <>
      <HeadProvider>
        <Title>Manovate | AI-Powered IT Solutions, Web & Digital Growth Experts</Title>
        <Meta
          name="description"
          content="Manovate delivers next-gen IT solutions, AI-powered web development, and digital marketing strategies to drive traffic, leads, and business growth in 2025."
        />
        <Meta
          name="keywords"
          content="Manovate, IT solutions 2025, AI-powered web development, digital marketing experts, business innovation services, enterprise IT consulting, software solutions, app development, cloud services, digital growth strategies, best IT company India, technology consulting"
        />
      </HeadProvider>
      {/* <h1>Welcome to Manovate</h1> */}

    <div className="homepage">
      {/* Navbar */}
    <nav className="navbar">
        <div className="nav-logo">
          <img
            src={logo}
            alt="Logo"
            className="logo"
          />
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              Digital IT <br />
              <span>Innovating IT, Empowering Technology</span>
            </h1>
            <p className="hero-subtitle">
              Your trusted partner in driving innovation and growth through next-gen solutions.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-outline">Learn More</button>
            </div>
          </div>

          <div className="hero-image">
            <img
              src={heroright}
              alt="Placeholder"
            />
          </div>
        </div>
        <div className="background-text">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="heading">
            <p className="sub-title">WHAT WE CAN DO FOR YOU</p>
            <h2 className="title">
              Our Services We <br /> The Manovate Promise You
            </h2>
            <p className="description">
              In the world of technology innovation, Manovate is committed to driving business
              growth and digital value by building intelligent solutions through cutting-edge AI
              and robust software development. 
              {/* <br/>Our approach simplifies complexity and ensures
              reliable delivery, resulting in reduced costs and improved customer satisfaction.
            
            <br/>
              With a foundation in first principles thinking, we have streamlined our product
              ecosystem into scalable AI models, powerful software platforms, and integrated APIs —
              significantly accelerating transformation and innovation for our clients.
            <br/>
              Backed by our in-house technologies and IP — ranging from custom AI frameworks to
              end-to-end software development tools — Manovate delivers enterprise-grade solutions
              with agility, high performance, and ease of deployment. */}
            </p>
          </div>

          <div className="services-grid">
            {[
              { icon: brand, title: "Branding & Design", text: "We design professional yet simple logos. Our designs are search engine and user friendly." },
              { icon: tech, title: "Technology", text: "Scalable technology solutions built for business efficiency and growth." },
              { icon: digit, title: "Digital Marketing", text: "Drive customer engagement and growth through creative digital strategies." },
              { icon: webdev, title: "Web Development", text: "Responsive, secure, and fast websites using modern frameworks." },
              { icon: bussinesslogo, title: "Business Growth", text: "Scale your business with innovative digital transformation strategies." }
            ].map((service, idx) => (
              <div className="service-card" key={idx}>
                <img src={service.icon} alt={service.title} className="icon" />
                <h3 className="card-title">{service.title}</h3>
                <p className="card-text">{service.text}</p>
                <Link to="/services" className="card-link">Find out more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/*core values */}
<section class="core-values">
  <div class="core-values-container">
    <div class="core-values-text">
      <h2>All The Core Values We Stand For</h2>
      <p>
        We are guided by these principles in everything we do to serve you the best services and get the best result as its goals.
      </p>
    </div>
    <div class="core-values-grid">
      <div class="value-item">
        <div class="icon">📚</div>
        <h4>Innovation</h4>
        <p>Constantly seeking new and better ways to solve IT challenges.</p>
      </div>
      <div class="value-item">
        <div class="icon">🔍</div>
        <h4>Integrity</h4>
        <p>Operating with honesty, transparency, and ethical behavior.</p>
      </div>
      <div class="value-item">
        <div class="icon">🤝</div>
        <h4>Customer-Centricity</h4>
        <p>Putting clients' needs at the forefront of our operations.</p>
      </div>
      <div class="value-item">
        <div class="icon">👥</div>
        <h4>Collaboration</h4>
        <p>Working closely with clients to achieve mutual success.</p>
      </div>
      <div class="value-item">
        <div class="icon">⚙️</div>
        <h4>Quality</h4>
        <p>Delivering top-notch IT solutions, prices, and services.</p>
      </div>
      <div class="value-item">
        <div class="icon">⏱</div>
        <h4>Flexibility</h4>
        <p>Delivering the result with flexible times and solutions.</p>
      </div>
    </div>
  </div>
</section>



   
 <section className="projects-section">
      <div className="projects-text">
        <h2>See Our Successful Projects</h2>
        <p>Explore Our Success Stories</p>
        <Link to="/services" className="view-all-btn">See all projects →</Link>
      </div>

      <div className="projects-scroll">
        <div className="projects-track">
          <div className="project-card" style={{ backgroundImage: `url(${p1})` }}>
            <div className="card-content">
              <h3>Network Optimization</h3>
              <p>We partnered with a leading global retailer struggling to streamline operations across multiple regions. Their outdated legacy systems created bottlenecks — slowing decision-making, driving up costs, and holding back customer satisfaction. Together, we reimagined their operations with modern, scalable solutions 
                that unlocked agility, reduced costs, and improved customer experiences worldwide.</p>
            </div>
          </div>

          <div className="project-card" style={{ backgroundImage: `url(${p2})` }}>
            <div className="card-content">
              <h3>Cybersecurity Enhancement</h3>
              <p>A leading global retailer relied on us to strengthen their cybersecurity posture. By upgrading legacy systems with modern security frameworks, we reduced risks, 
                streamlined compliance, and safeguarded customer trust across multiple regions.</p>
            </div>
          </div>

          <div className="project-card" style={{ backgroundImage: `url(${p3})` }}>
            <div className="card-content">
              <h3>Cloud Migration</h3>
              <p>we executed a seamless cloud migration — modernizing legacy systems, improving scalability, and enabling real-time insights. The result:
                 faster decision-making, reduced operational expenses, and the agility to scale across regions.</p>
            </div>
          </div>

          <div className="project-card" style={{ backgroundImage: `url(${p4})` }}>
            <div className="card-content">
              <h3>Data Analytics Success</h3>
              <p>An e-commerce retailer was overwhelmed with fragmented data, limiting their ability to act quickly. By implementing a modern analytics solution, we unified their data streams and turned information into actionable insights. 
                The result: smarter strategies, faster decision-making, and measurable business impact.</p>
            </div>
          </div>
          <div className="project-card" style={{ backgroundImage: `url(${p5})` }}>
            <div className="card-content">
              <h3>software Development</h3>
              <p>A growing business was held back by outdated software that couldn’t keep pace with its ambitions. We redefined their digital infrastructure with modern, agile applications 
                — accelerating innovation, reducing costs, and creating a foundation for long-term success.</p>
            </div>
          </div>
           <div className="project-card" style={{ backgroundImage: `url(${p6})` }}>
            <div className="card-content">
              <h3>Artificial Intelligence & Machine Learning</h3>
              <p>A fast-growing company struggled to keep up with market changes using traditional analytics. We introduced AI-powered automation
                 and machine learning-driven forecasting, empowering them to anticipate customer needs, improve efficiency, and stay ahead of the competition.</p>
            </div>
          </div>
           <div className="project-card" style={{ backgroundImage: `url(${p7})` }}>
            <div className="card-content">
              <h3>QA & Testing Services</h3>
              <p>A leading product company faced customer churn due to recurring bugs and inconsistent performance. Our QA & Testing Services introduced automation
                , performance benchmarking, and real-time monitoring, enabling them to release high-quality software faster while boosting customer satisfaction.</p>
            </div>
          </div>
           <div className="project-card" style={{ backgroundImage: `url(${p1})` }}>
            <div className="card-content">
              <h3>Network Optimization</h3>
              <p>We partnered with a leading global retailer struggling to streamline operations across multiple regions. Their outdated legacy systems created bottlenecks — slowing decision-making, driving up costs, and holding back customer satisfaction. Together, we reimagined their operations with modern, scalable solutions 
                that unlocked agility, reduced costs, and improved customer experiences worldwide.</p>
            </div>
          </div>

          <div className="project-card" style={{ backgroundImage: `url(${p2})` }}>
            <div className="card-content">
              <h3>Cybersecurity Enhancement</h3>
              <p>A leading global retailer relied on us to strengthen their cybersecurity posture. By upgrading legacy systems with modern security frameworks, we reduced risks, 
                streamlined compliance, and safeguarded customer trust across multiple regions.</p>
            </div>
          </div>

          <div className="project-card" style={{ backgroundImage: `url(${p3})` }}>
            <div className="card-content">
              <h3>Cloud Migration</h3>
              <p>we executed a seamless cloud migration — modernizing legacy systems, improving scalability, and enabling real-time insights. The result:
                 faster decision-making, reduced operational expenses, and the agility to scale across regions.</p>
            </div>
          </div>

          <div className="project-card" style={{ backgroundImage: `url(${p4})` }}>
            <div className="card-content">
              <h3>Data Analytics Success</h3>
              <p>An e-commerce retailer was overwhelmed with fragmented data, limiting their ability to act quickly. By implementing a modern analytics solution, we unified their data streams and turned information into actionable insights. 
                The result: smarter strategies, faster decision-making, and measurable business impact.</p>
            </div>
          </div>
          <div className="project-card" style={{ backgroundImage: `url(${p5})` }}>
            <div className="card-content">
              <h3>software Development</h3>
              <p>A growing business was held back by outdated software that couldn’t keep pace with its ambitions. We redefined their digital infrastructure with modern, agile applications 
                — accelerating innovation, reducing costs, and creating a foundation for long-term success.</p>
            </div>
          </div>
           <div className="project-card" style={{ backgroundImage: `url(${p6})` }}>
            <div className="card-content">
              <h3>Artificial Intelligence & Machine Learning</h3>
              <p>A fast-growing company struggled to keep up with market changes using traditional analytics. We introduced AI-powered automation
                 and machine learning-driven forecasting, empowering them to anticipate customer needs, improve efficiency, and stay ahead of the competition.</p>
            </div>
          </div>
           <div className="project-card" style={{ backgroundImage: `url(${p7})` }}>
            <div className="card-content">
              <h3>QA & Testing Services</h3>
              <p>A leading product company faced customer churn due to recurring bugs and inconsistent performance. Our QA & Testing Services introduced automation
                , performance benchmarking, and real-time monitoring, enabling them to release high-quality software faster while boosting customer satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


 {/* Timeline Section */}
 <section className="journey-section">
  <h2 className="journey-title">
    The <span>Journey</span> of <strong>Manovate</strong>
  </h2>
  <div className="journey-timeline">
    {[
      { year: 2017, text: "Manovate was born with a bold vision — to redefine how businesses embrace technology. What started as a small team with big dreams quickly grew into a movement of innovation." },
      { year: 2018, text: "Within a year, our passion transcended borders. We expanded globally, bringing smart, scalable solutions to enterprises navigating digital transformation." },
      { year: 2019, text: "Recognized as a pioneer in scalable software frameworks, Manovate became the trusted partner for organizations seeking agility, speed, and future-ready architectures." },
      { year: 2020, text: "Amid a world of disruption, we turned challenge into opportunity — launching breakthrough innovations in AI and automation that redefined industry benchmarks." },
      { year: 2021, text: "Our relentless drive and customer-first approach propelled us to unicorn status — a testament to the trust we earned and the impact we created globally." }
    ].map((item, index) => (
      <div className="journey-item" key={index}>
        <div className="journey-dot"></div>
        <div className={`journey-content ${index % 2 === 0 ? 'left' : 'right'}`}>
          <h3>{item.year}</h3>
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    <div className="journey-line"></div>
  </div>
</section>





      {/* Contact Section */}
      <section class="cta-section">
  <div class="cta-container">
    <h2>Ready to elevate your IT infrastructure,<br/> enhance security, and drive growth?</h2>
    <p>Contact us today to discuss customized solutions for your business.</p>
    <Link to="/contact" class="cta-button">Contact Us</Link>
  </div>
</section>


      {/* Footer */}
      
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
    <a
            href="https://www.facebook.com/profile.php?id=61581412741189"
            target="_blank"
            rel="noreferrer"
            >
            <FaFacebook />
            </a>
        </div>
      </div>
    </footer>





</div>
</>
  );
}

export default Home;
