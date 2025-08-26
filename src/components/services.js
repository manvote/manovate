import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "./movate1.png";
import "./Home.css";
import "./services.css";
import vedio1 from "./vedio (2).mp4";
import p1 from "./scyber.jpg";
import p2 from "./scloud.jpg";
import p3 from "./sdata.jpg";
import p4 from "./ssoft.jpg";
import p5 from "./smobile.jpg";
import p6 from "./sweb.jpg";
import p7 from "./sdev.jpg";
import p8 from "./serp.jpg";
import p9 from "./sit.jpg";
import p10 from "./sitm.jpg";
import p11 from "./sai.jpg";
import p12 from "./sblock.jpg";



function Services() {
    const [menuOpen, setMenuOpen] = useState(false);

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
   
   <section class="services-hero">
  <div class="services-content">
    <h1>Our Services</h1>
    
  </div>
</section>

{/*services section start*/}
<section className="services-feature">
  <div className="services-container">
    {/* Left Content */}
    <div className="services-text">
      <span className="services-label">OUR SERVICE</span>
      <h2>Software Cloud Development</h2>
      <h4>Custom Software Solutions</h4>
      <p>
        We provide tailored cloud solutions that optimize business processes, 
        improve scalability, and increase efficiency. Our services ensure 
        long-term value and innovation for your business.
      </p>
      {/* <button className="services-btn">Learn More</button> */}
    </div>

    {/* Right Image / Video */}
    <div className="services-media">
      
      {/* If video */}
      <div className="video-overlay">
        <video autoPlay loop muted playsInline >
          <source src={vedio1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> 
    </div>
  </div>
</section>

<section className="services1-showcase">
  <h4 className="section1-label">OUR PROJECTS</h4>
  <h2 className="section1-title">Our Success Stories</h2>

  <div className="services1-grid">
    <div className="serviceS1-card" style={{ backgroundImage: `url(${p1})` }}>
      {/* <img src={code} alt="Cybersecurity Enhancement" /> */}
      <div className="serviceS1-content">
        <h3>CYBERSECURITY ENHANCEMENT</h3>
        <p>A leading global retailer relied on us to strengthen their cybersecurity posture. By upgrading legacy systems with modern security frameworks, we reduced risks, 
                streamlined compliance, and safeguarded customer trust across multiple regions.</p>
      </div>
    </div>

    <div className="serviceS1-card"style={{ backgroundImage: `url(${p2})` }}>
      {/* <img src={cloud} alt="Cloud Migration" /> */}
      <div className="serviceS1-content">
        <h3>CLOUD MIGRATION</h3>
        <p>we executed a seamless cloud migration — modernizing legacy systems, improving scalability, and enabling real-time insights. The result:
                 faster decision-making, reduced operational expenses, and the agility to scale across regions.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p3})` }}>
      {/* <img src={chart} alt="Data Analytics Success" /> */}
      <div className="serviceS1-content">
        <h3>DATA ANALYTICS</h3>
        <p>An e-commerce retailer was overwhelmed with fragmented data, limiting their ability to act quickly. By implementing a modern analytics solution, we unified their data streams and turned information into actionable insights. 
                The result: smarter strategies, faster decision-making, and measurable business impact.</p>
      </div>
    </div>
     <div className="serviceS1-card" style={{ backgroundImage: `url(${p4})` }}>
      {/* <img src={chart} alt="Custom Software Development" /> */}
      <div className="serviceS1-content">
        <h3>CUSTOM SOFTWARE DEVELOPMENT</h3>
        <p>Custom Solutions Designed to Address Unique Business Challenges and Optimize OperationsWe create tailored applications that meet your specific business needs, enhancing efficiency and driving growth. Our solutions are built to streamline workflows, solve complex problems, and deliver measurable results.</p>
      </div>
    </div>
      <div className="serviceS1-card" style={{ backgroundImage: `url(${p5})` }}>
      {/* <img src={chart} alt="mobile app Development" /> */}
      <div className="serviceS1-content">
        <h3>MOBILE APP DEVELOPMENT</h3>
        <p>Seamless Native and Cross-Platform Mobile Apps for iOS and Android We design and develop high-performance mobile applications that deliver a smooth, intuitive experience on both iOS and Android. Whether native or cross-platform, our apps are built to scale and engage users across all devices</p>
      </div>
    </div>
    <div className="serviceS1-card" style={{ backgroundImage: `url(${p6})` }}>
      {/* <img src={chart} alt="web Development" /> */}
      <div className="serviceS1-content">
        <h3>WEB DEVELOPMENT</h3>
        <p>Responsive, High-Performance, and Secure Websites Built with Cutting-Edge Frameworks We create visually stunning, fast-loading websites that adapt seamlessly across devices. Leveraging the latest frameworks, we ensure robust security and optimized performance, providing an exceptional user experience that keeps your business ahead of the curve</p>
      </div>
    </div>
 <div className="serviceS1-card" style={{ backgroundImage: `url(${p7})` }}>
      {/* <img src={chart} alt="devops" /> */}
      <div className="serviceS1-content">
        <h3>DevOps </h3>
        <p>Efficient CI/CD Pipelines, Infrastructure Automation, and Continuous Deployment Solutions We streamline your development process with fully automated CI/CD pipelines, ensuring faster, more reliable code delivery. Our infrastructure automation solutions minimize manual effort, while continuous deployment ensures your applications are always up-to-date and running smoothly.</p>
      </div>
    </div>
    <div className="serviceS1-card" style={{ backgroundImage: `url(${p9})` }}>
      {/* <img src={chart} alt="it consulting" /> */}
      <div className="serviceS1-content">
        <h3>IT CONSULTING </h3>
        <p>Strategic IT Consulting to Align Technology with Your Business Objectives
Our expert consultants work closely with you to craft IT strategies that drive business growth. We help bridge the gap between technology and your core business goals, ensuring your IT investments deliver maximum value and support long-term success</p>
      </div>
    </div>
     <div className="serviceS1-card" style={{ backgroundImage: `url(${p10})` }}>
      {/* <img src={chart} alt="managed it services" /> */}
      <div className="serviceS1-content">
        <h3>MANAGED IT SERVICES</h3>
        <p>Round-the-Clock Monitoring, Support, and Maintenance for Your IT Infrastructure
We provide 24/7 monitoring and proactive support to ensure your IT infrastructure runs smoothly and efficiently. Our dedicated team swiftly addresses any issues, minimizing downtime and maintaining peak performance for your critical systems</p>
      </div>
    </div>
      <div className="serviceS1-card" style={{ backgroundImage: `url(${p11})` }}>
      {/* <img src={chart} alt="Artificial Intelligence & Machine Learning" /> */}
      <div className="serviceS1-content">
        <h3>ARTIFICIAL INTELLIGENCE & MACHINE LEARNING</h3>
        <p>AI-Powered Solutions: Chatbots, Recommendation Engines, and Predictive Analytics
Harness the power of artificial intelligence to transform your business. From intelligent chatbots that enhance customer engagement to recommendation engines that drive conversions, we create custom AI solutions that deliver actionable insights and predictive capabilities to fuel data-driven decision-making.</p>
      </div>
    </div>
        <div className="serviceS1-card" style={{ backgroundImage: `url(${p12})` }}>
      {/* <img src={chart} alt="Blockchain technology" /> */}
      <div className="serviceS1-content">
        <h3>BLOCKCHAIN DEVELOPMENT</h3>
        <p>Tailored Blockchain Solutions for Secure, Transparent Transactions
We develop custom blockchain applications that ensure secure, transparent, and tamper-proof transactions. Our solutions are designed to streamline processes, enhance trust, and deliver verifiable data in real-time, empowering your business with the full potential of blockchain technology</p>
      </div>
    </div>
       <div className="serviceS1-card" style={{ backgroundImage: `url(${p1})` }}>
      {/* <img src={chart} alt="UI/UX Design" /> */}
      <div className="serviceS1-content">
        <h3>UI/UX Design</h3>
        <p>Intuitive, User-Centric Interfaces for a Seamless Experience
We design engaging, easy-to-navigate interfaces that prioritize the user experience. Our goal is to create visually appealing and functional designs that make interactions effortless, ensuring your users have a smooth and enjoyable journey every time</p>
      </div>
    </div>
     <div className="serviceS1-card" style={{ backgroundImage: `url(${p8})` }}>
      {/* <img src={chart} alt="Enterprise Resource Planning" /> */}
      <div className="serviceS1-content">
        <h3>ENTERPRISE RESOURCE PLANNING (ERP)</h3>
        <p>Custom ERP Solutions for Finance, HR, and Operations
We specialize in developing and customizing ERP systems that streamline and optimize your core business functions. From financial management to HR and operations, our tailored solutions improve efficiency, enhance decision-making, and ensure seamless integration across all departments.</p>
      </div>
    </div>
     <div className="serviceS1-card" style={{ backgroundImage: `url(${p1})` }}>
      {/* <img src={chart} alt="Enterprise Resource Planning" /> */}
      <div className="serviceS1-content">
        <h3>CUSTOMER RELATIONSHIP MANAGEMENT (CRM)</h3>
        <p>Custom CRM Development and Integration for Enhanced Customer Engagement
We develop and integrate CRM platforms tailored to your business needs, enabling you to efficiently manage customer data and build stronger relationships. Our solutions help improve engagement, drive sales, and provide valuable insights to foster long-term customer loyalty.</p>
      </div>
    </div>
     <div className="serviceS1-card" style={{ backgroundImage: `url(${p1})` }}>
      {/* <img src={chart} alt="Enterprise Resource Planning" /> */}
      <div className="serviceS1-content">
        <h3>INTERNET OF THINGS(IoT)</h3>
        <p>IoT Solutions for Connected Devices, Remote Monitoring, and Automation We specialize in developing IoT systems that connect devices, enable real-time remote monitoring, and automate processes. Our solutions enhance operational efficiency, provide actionable insights, and empower businesses to make smarter, data-driven decisions.</p>
      </div>
    </div>
     <div className="serviceS1-card" style={{ backgroundImage: `url(${p1})` }}>
      {/* <img src={chart} alt="Enterprise Resource Planning" /> */}
      <div className="serviceS1-content">
        <h3>IT INFRASTRUCTURE SETUP</h3>
        <p>Expert Network Design, Server Configuration, and Office IT Setup
We provide comprehensive IT infrastructure services, including custom network design, efficient server configuration, and complete office IT setups. Our solutions ensure a secure, scalable, and optimized environment that supports your business operations seamlessly</p>
      </div>
    </div>
     <div className="serviceS1-card" style={{ backgroundImage: `url(${p1})` }}>
      {/* <img src={chart} alt="Enterprise Resource Planning" /> */}
      <div className="serviceS1-content">
        <h3>QA & TESTING SERVICES</h3>
        <p>Thorough Manual and Automated Testing for Unmatched Product Reliability and Performance We deliver comprehensive manual and automated testing to ensure your products perform flawlessly. Our rigorous testing process identifies potential issues, guaranteeing that your applications are both reliable and high-performing across all environments</p>
      </div>
    </div>
     <div className="serviceS1-card" style={{ backgroundImage: `url(${p1})` }}>
      {/* <img src={chart} alt="Enterprise Resource Planning" /> */}
      <div className="serviceS1-content">
        <h3>E-COMMERCE DEVELOPMENT</h3>
        <p>Scalable E-Commerce Platforms with Secure Payment Gateways and Streamlined Product Management
We build robust, scalable e-commerce platforms that deliver seamless shopping experiences. Our solutions include secure payment gateways and efficient product management systems, designed to grow with your business and drive conversions</p>
      </div>
    </div>
    {/* Repeat for other services/projects */}
  </div>
</section>


  
     
                   
 



      <footer className="footer">
        <div className="footer-container">
          {/* Map Section */}
          <div className="footer-column footer-map">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2449058361417!2d80.24510617377567!3d12.956174487357748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d598dfdff9b%3A0xce67fc14aa2cc711!2sManovate%20Technologies!5e0!3m2!1sen!2sin!4v1755758103475!5m2!1sen!2sin"
              width="100%"
              height="220"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      
          {/* Useful Links */}
          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
      
          {/* Contact */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>
              📍 Greeta TechPark - GREETA TOWERS,<br />
              Industrial Estate, Perungudi,<br />
              Chennai, Tamil Nadu 600096
            </p>
          </div>
        </div>
      
        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© Manovate Technologies | Innovating The Future</p>
          <img src={logo} alt="Manovate Logo" className="bottom-logo" />
        </div>
      </footer>
      
      
      
</div>
  );
}

export default Services;