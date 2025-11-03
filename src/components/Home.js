import React, { useState,useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMapMarkerAlt,FaLinkedin,FaInstagram,FaFacebook } from "react-icons/fa";
import "./Home.css";
import { HeadProvider, Title, Meta } from 'react-head';


 // Unused? Consider removing if not used.
// import phone from "./phone-solid-full.svg";
// import mail from "./envelope-solid-full.svg";
import logo from "./manovate.png";
import brand from "./branding.png";
import tech from "./technology.png";
import digit from "./digital.png";

import webdev from "./web.png";
import bussinesslogo from "./bussiness.png";
import abouthome from "./homeabout.jpg"
import ctahome from "./ctaimg.png";
import hero from "./hero.mp4";
import hero1 from "./hero1.mp4";
import hero2 from "./hero2.mp4"
import { Check } from "lucide-react";


function Home() {
   const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const videoRef = useRef(null);
  const videos = React.useMemo(() => [hero, hero1, hero2], []);
 // Add more video imports here
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    videoElement.addEventListener("ended", handleVideoEnd);
    return () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, [videos.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 3000); // ⏱ Change video every 8 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [videos.length]);

  // Change video when index updates
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.src = videos[currentVideoIndex];
      videoElement.load();
      videoElement.play().catch((err) => console.log("Autoplay blocked:", err));
    }

  }, [currentVideoIndex, videos]);

    const values = [
    { icon: "📚", title: "Innovation", text: "Constantly seeking new and better ways to solve IT challenges." },
    { icon: "🔍", title: "Integrity", text: "Operating with honesty, transparency, and ethical behavior." },
    { icon: "🤝", title: "Customer-Centricity", text: "Putting clients' needs at the forefront of our operations." },
    { icon: "👥", title: "Collaboration", text: "Working closely with clients to achieve mutual success." },
    { icon: "⚙️", title: "Quality", text: "Delivering top-notch IT solutions, prices, and services." },
    { icon: "⏱", title: "Flexibility", text: "Delivering the result with flexible times and solutions." },
  ];


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
  <nav className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "open" : ""}`}>
      <div className="nav-container">
        <div className="nav-left">
          <img src={logo} alt="Kumaran Systems Logo" className="nav-logo" />
        </div>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
            <li><a href="/about" onClick={toggleMenu}>About</a></li>
          <li><a href="/services" onClick={toggleMenu}>Services</a></li>
          <li><a href="/products" onClick={toggleMenu}>Products</a></li>
          <li><a href="/solution" onClick={toggleMenu}>Solutions</a></li>
        
          <li><a href="/careers" onClick={toggleMenu}>Careers</a></li>
          
        </ul>

        <div className="nav-right">
          <a href="/contact" className="get-in-touch">Get In Touch →</a>
         
        </div>
         <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
      </div>
    </nav>


      {/* Hero Section */}
    <section className="hhero-section">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        muted
        playsInline
      />

      {/* Overlay content */}
      <div className="hhero-overlay">
        <div className="hhero-content">
          <h1 className="hhero-title">
            Digital IT <br />
            <span>Innovating IT, Empowering Technology</span>
          </h1>
          <p className="hhero-subtitle">
            Your trusted partner in driving innovation and growth through next-gen solutions.
          </p>
          <div className="hhero-buttons">
            <Link to="/about" className="btn-primary">Get Started</Link>
            <Link to="/services" className="btn-outline">Learn More</Link>
          </div>
        </div>
      </div>

      {/* Optional overlay design */}
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
    <section className="core-values">
      <div className="core-values-container">
        <div className="core-values-text">
          <h2>All The Core Values We Stand For</h2>
          <p>
            We are guided by these principles in everything we do to serve you the best services and get the best result as its goals.
          </p>
        </div>

        {/* Horizontally scrollable section */}
        <div className="core-values-scroll">
          {values.map((item, index) => (
            <div className="value-item" key={index}>
              <span className="value-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>



   
<section className="products-grid-section">
  <div className="products-header">
    <h2>Our Powerful Products</h2>
    <p>Discover intelligent, scalable software crafted to empower your business.</p>
  </div>

  <div className="products-grid">

    <div className="product-card light-pink">
      <div className="product-icon"><i className="fas fa-handshake"></i></div>
      <h3>CRM System</h3>
      <p>Build lasting customer relationships with a smart, integrated CRM that unifies sales, marketing, and support for growth and engagement.</p>
      <Link to="/products" className="read-more">Read More →</Link>
    </div>

    <div className="product-card light-blue">
      <div className="product-icon"><i className="fas fa-users-cog"></i></div>
      <h3>HR Management System</h3>
      <p>Empower your workforce with a unified HR solution that simplifies employee management, payroll, and performance tracking efficiently.</p>
      <Link to="/products" className="read-more">Read More →</Link>
    </div>

    <div className="product-card light-yellow">
      <div className="product-icon"><i className="fas fa-receipt"></i></div>
      <h3>Payroll Application</h3>
      <p>Automate payroll processing with precision. Manage payslips, taxes, and compliance with a secure, cloud-ready payroll solution.</p>
      <Link to="/products" className="read-more">Read More →</Link>
    </div>

    <div className="product-card light-pink">
      <div className="product-icon"><i className="fas fa-store"></i></div>
      <h3>Retail POS System</h3>
      <p>Enhance your retail operations with a modern POS system that connects billing, inventory, and customer engagement seamlessly.</p>
      <Link to="/products" className="read-more">Read More →</Link>
    </div>

    <div className="product-card light-blue">
      <div className="product-icon"><i className="fas fa-utensils"></i></div>
      <h3>Food & Beverages Billing Software</h3>
      <p>Run your café or restaurant effortlessly with smart billing, kitchen coordination, and order tracking for faster customer service.</p>
      <Link to="/products" className="read-more">Read More →</Link>
    </div>

    <div className="product-card light-yellow">
      <div className="product-icon"><i className="fas fa-chalkboard-teacher"></i></div>
      <h3>Educational Sector Billing Software</h3>
      <p>Modernize institutional operations with automated fee billing, attendance tracking, and analytics for schools and colleges.</p>
      <Link to="/products" className="read-more">Read More →</Link>
    </div>

    <div className="product-card light-pink">
      <div className="product-icon"><i className="fas fa-stethoscope"></i></div>
      <h3>Healthcare & Medical Billing Software</h3>
      <p>Manage patient billing, insurance claims, and hospital workflows through a unified, secure, and automated healthcare platform.</p>
      <Link to="/products" className="read-more">Read More →</Link>
    </div>

    <div className="product-card light-blue">
      <div className="product-icon"><i className="fas fa-spa"></i></div>
      <h3>Beauty & Wellness Billing Software</h3>
      <p>Deliver premium client experiences with intelligent billing and scheduling designed for salons, spas, and wellness centers.</p>
      <Link to="/products" className="read-more">Read More →</Link>
    </div>

    <div className="product-card light-yellow">
      <div className="product-icon"><i className="fas fa-hotel"></i></div>
      <h3>Hospitality & Tourism Billing Software</h3>
      <p>Streamline hotel, resort, and travel operations with a billing system that unites reservations, payments, and analytics.</p>
      <Link to="/products" className="read-more">Read More →</Link>
    </div>

    <div className="product-card light-pink">
      <div className="product-icon"><i className="fas fa-calendar-check"></i></div>
      <h3>Appointment & Booking System</h3>
      <p>Deliver a seamless scheduling experience with real-time bookings, automated reminders, and integrated payments.</p>
      <Link to="/products" className="read-more">Read More →</Link>
    </div>

    <div className="product-card light-blue">
      <div className="product-icon"><i className="fas fa-user-tie"></i></div>
      <h3>Recruitment & ATS System</h3>
      <p>Optimize hiring with an AI-powered applicant tracking system that automates candidate screening and collaboration.</p>
      <Link to="/products" className="read-more">Read More →</Link>
    </div>

    <div className="product-card light-yellow">
      <div className="product-icon"><i className="fas fa-calendar-alt"></i></div>
      <h3>Event Management System</h3>
      <p>Plan, manage, and execute events with real-time dashboards, ticketing, and engagement analytics in one place.</p>
      <Link to="/products" className="read-more">Read More →</Link>
    </div>

    <div className="product-card light-pink">
      <div className="product-icon"><i className="fas fa-shield-alt"></i></div>
      <h3>Privacy-Based Browser</h3>
      <p>Browse securely with a next-gen browser that blocks ads, stops trackers, and keeps your data private at all times.</p>
      <Link to="/products" className="read-more">Read More →</Link>
    </div>

    <div className="product-card light-blue">
      <div className="product-icon"><i className="fas fa-chart-line"></i></div>
      <h3>Data Analysis & DataPrep System</h3>
      <p>Transform raw data into actionable insights through automated preparation, cleaning, and visualization workflows.</p>
      <Link to="/products" className="read-more">Read More →</Link>
    </div>

    <div className="product-card light-yellow">
      <div className="product-icon"><i className="fas fa-chart-bar"></i></div>
      <h3>Embedded BI Software</h3>
      <p>Embed interactive analytics and AI-driven dashboards directly into your business applications for faster decisions.</p>
      <Link to="/products" className="read-more">Read More →</Link>
    </div>

    <div className="product-card light-pink">
      <div className="product-icon"><i className="fas fa-robot"></i></div>
      <h3>Automation Testing Software</h3>
      <p>Accelerate QA cycles and improve reliability with intelligent test automation built for speed and accuracy.</p>
      <Link to="/products" className="read-more">Read More →</Link>
    </div>

  </div>
</section>



 <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <span className="about-subtitle">ABOUT US</span>
          <h2 className="about-title">
            We're Leading The <br /> Power Of Technology
          </h2>
          <p className="about-description">
            We are a team of passionate innovators driving businesses forward through technology. 
            Our mission is to empower organizations with intelligent, scalable, and secure 
            solutions that transform challenges into opportunities.
          </p>

          <div className="about-points">
            <ul>
              <li><Check className="check-icon" /> Best IT Solutions & Services</li>
              <li><Check className="check-icon" /> Always Latest Technology</li>
            </ul>
            <ul>
              <li><Check className="check-icon" /> 24/7 Customer Support</li>
              <li><Check className="check-icon" /> World-Class Expertise</li>
            </ul>
          </div>
        </div>

        <div className="about-image">
          <div className="image-wrapper">
            <img src={abouthome} alt="About" />
            <div className="experience-badge">
              <h3>6-Year's</h3>
              <p>years of experience in this industry</p>
            </div>
          </div>
        </div>
      </div>
    </section>






      {/* Contact Section */}
<section className="cta-section">
  <div className="cta-container">
    <div className="cta-left">
      <img src={ctahome} alt="Specialist" className="cta-image" />
    </div>
    <div className="cta-content">
      <h2>
        Ready to elevate your IT infrastructure,<br /> enhance security, and drive growth?
      </h2>
      <p>Contact us today to discuss customized solutions for your business.</p>
      <Link to="/contact" className="cta-button">Contact Us →</Link>
    </div>
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
                          <li><Link to="/about">ABOUT</Link></li>
                          <li><Link to="/services">SERVICES</Link></li>
                       
                          <li><Link to="/products">PRODUCTS</Link></li>
                          <li><Link to="/solution">SOLUTIONS</Link></li>
                           <li><Link to="/careers">CAREERS</Link></li>
                          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>
 <hr className="footer-divider" />

      <div className="footer-bottom">
        {/* Copyright */}
        <p>© 2021 Manovate Technologies | Innovating The Future</p>

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
