import React, { useState } from "react"; // Removed unused useEffect import
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiXCircle, FiArrowRight } from "react-icons/fi";
import { FaMapMarkerAlt,FaLinkedin,FaInstagram } from "react-icons/fa";
import "./Home.css";
import "./solution.css";
import logo from "./movate1.png";

function Solution() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [contentVisible, setContentVisible] = useState(false);

  const solutions = [
    {
      title: "EdTech",
      description: "Educational technology solutions that transform learning experiences through innovative digital tools and platforms.",
      content: "Our EdTech solutions include learning management systems, virtual classrooms, interactive educational content, and student performance analytics. We help educational institutions transition to digital learning environments that enhance engagement and improve outcomes.",
      icon: "📚"
    },
    {
      title: "EdTech for E-government",
      description: "Government-focused educational technology for public sector training and development programs.",
      content: "We develop specialized EdTech platforms for government training programs, citizen education initiatives, and public servant skill development. Our solutions include compliance training systems, digital literacy programs, and interactive platforms for public policy education.",
      icon: "🏛️"
    },
    {
      title: "E-Commerce",
      description: "Complete e-commerce solutions from platform development to payment integration and analytics.",
      content: "Our e-commerce solutions include custom online store development, shopping cart systems, payment gateway integration, inventory management, and customer relationship management tools. We create seamless shopping experiences across all devices.",
      icon: "🛒"
    },
    {
      title: "Blockchain",
      description: "Secure, transparent blockchain solutions for various industries including finance, supply chain, and more.",
      content: "We develop blockchain-based solutions including smart contracts, decentralized applications, cryptocurrency wallets, and supply chain transparency systems. Our blockchain expertise helps businesses increase security, transparency, and efficiency in their operations.",
      icon: "🔗"
    },
    {
      title: "FinTech",
      description: "Innovative financial technology solutions that revolutionize banking, investing, and payment systems.",
      content: "Our FinTech solutions include mobile banking applications, digital payment systems, investment platforms, financial analytics tools, and regulatory technology (RegTech) solutions. We help financial institutions modernize their services and improve customer experiences.",
      icon: "💹"
    },
    {
      title: "E-government",
      description: "Digital transformation solutions for government agencies to improve citizen services and operational efficiency.",
      content: "We develop e-government platforms including citizen portals, digital service delivery systems, online permit applications, and government resource planning tools. Our solutions help governments become more efficient, transparent, and accessible to citizens.",
      icon: "🏢"
    },
    {
      title: "Healthcare in E-government",
      description: "Technology solutions that bridge healthcare services with government systems for better public health management.",
      content: "Our healthcare e-government solutions include electronic health records systems, telehealth platforms, public health monitoring tools, and healthcare resource management systems. We help government health agencies improve service delivery and public health outcomes.",
      icon: "🏥"
    },
    {
      title: "Software Development Consulting",
      description: "Expert consulting services to guide your software development projects from conception to deployment.",
      content: "Our consulting services include technology strategy development, architecture design, project management, quality assurance, and DevOps implementation. We help businesses build robust, scalable software solutions that align with their strategic objectives.",
      icon: "💻"
    },
    {
      title: "Digital Transformation Consulting",
      description: "Strategic guidance to help businesses adapt to digital technologies and transform their operations.",
      content: "We provide comprehensive digital transformation consulting including process digitization, technology adoption strategies, change management, and digital maturity assessment. Our consultants help organizations navigate digital disruption and leverage new technologies for competitive advantage.",
      icon: "🔄"
    },
    {
      title: "Demand Forecasting Software Development",
      description: "Custom software solutions for accurate demand prediction and inventory optimization.",
      content: "Our demand forecasting solutions use advanced algorithms and machine learning to predict market demand, optimize inventory levels, and improve supply chain efficiency. We develop custom forecasting tools integrated with your existing business systems.",
      icon: "📊"
    },
    {
      title: "CRM Development Services",
      description: "Tailored customer relationship management systems to improve customer engagement and retention.",
      content: "We develop custom CRM solutions that include customer data management, sales pipeline tracking, marketing automation, customer service tools, and analytics dashboards. Our CRMs are tailored to your specific business processes and customer engagement strategies.",
      icon: "👥"
    }
  ];

  const handleCardClick = (solution) => {
    setSelectedSolution(solution);
    setContentVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const closeContent = () => {
    setContentVisible(false);
    setTimeout(() => setSelectedSolution(null), 300);
    document.body.style.overflow = 'auto';
  };

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
          <Link to="/contact" className="contact-icon">
            📞
          </Link>
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

      {/* Solutions Section */}
      <section className="solutions">
        <div className="solutions-header">
          <h1 className="solutions-title">Our Solutions</h1>
          <p className="solutions-subtitle">Innovative technology solutions tailored to your business needs</p>
        </div>
        
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="solution-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCardClick(solution)}
            >
              <div className="solution-icon">{solution.icon}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <div className="solution-link">
                Learn More <FiArrowRight />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solution Content Modal */}
      {selectedSolution && (
        <div className={`solution-modal ${contentVisible ? 'active' : ''}`}>
          <div className="solution-modal-content">
            <button className="solution-modal-close" onClick={closeContent}>
              <FiXCircle size={24} />
            </button>
            <div className="solution-modal-header">
              <span className="modal-icon">{selectedSolution.icon}</span>
              <h2>{selectedSolution.title}</h2>
            </div>
            <p className="solution-modal-description">{selectedSolution.description}</p>
            <div className="solution-modal-details">
              <h3>Overview</h3>
              <p>{selectedSolution.content}</p>
              
              <div className="features-benefits">
                <div className="features">
                  <h3>Key Features</h3>
                  <ul>
                    <li>Customized to your specific needs</li>
                    <li>Scalable architecture for future growth</li>
                    <li>Integration with existing systems</li>
                    <li>Ongoing support and maintenance</li>
                  </ul>
                </div>
                
                <div className="benefits">
                  <h3>Benefits</h3>
                  <ul>
                    <li>Improved efficiency and productivity</li>
                    <li>Enhanced user experience</li>
                    <li>Data-driven insights</li>
                    <li>Competitive advantage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
  );
}

export default Solution;