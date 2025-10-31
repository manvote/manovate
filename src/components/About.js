import React from "react";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import aboutBanner from "./breadcrumb.jpg"; // Hero banner
import mainPhoto from "./experience.jpg";   // Big image
import hoverPhoto from "./hover-image.jpg"; // Small corner image
import LanguageIcon from "@mui/icons-material/Language";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useState } from "react";
import "./about.css";
import { useEffect } from "react";
import logo from "./manovate.png";
import { FiMenu, FiX } from "react-icons/fi";
import {FaMapMarkerAlt,FaLinkedin,FaInstagram,FaFacebook } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";        // for SEO
import BrushIcon from "@mui/icons-material/Brush";          // for Designing


const OfferIcon = ({ icon, label, color }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
    setTimeout(() => setActive(false), 1000); // reset animation
  };

  return (

    
    

    <Box
      onClick={handleClick}
      sx={{
        cursor: "pointer",
        position: "relative",
        borderRadius: "15px",
        p: 2,
        transition: "all 0.3s ease",
        "&:hover": { transform: "scale(1.1)", boxShadow: `0 0 20px ${color}` },
        perspective: "1000px",
      }}
    >
      {/* Flip Icon */}
      <Box
        sx={{
          fontSize: "2.5rem",
          color: "#fff",
          transition: "transform 0.8s",
          transformStyle: "preserve-3d",
          transform: active ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {icon}
      </Box>

      <Typography
        variant="body1"
        sx={{ mt: 1, fontFamily: '"Rajdhani", sans-serif', fontWeight: 600 }}
      >
        {label}
      </Typography>

      {/* Pulses to opposite corners */}
      {active && (
        <>
          <Box
            sx={{
              position: "absolute",
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              background: "rgba(93, 169, 255,0.6)",
              top: "50%",
              left: "50%",
              animation: "pulseTL 0.8s forwards",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              background: "rgba(93, 169, 255,0.6)",
              top: "50%",
              left: "50%",
              animation: "pulseBR 0.8s forwards",
            }}
          />
        </>
      )}

      {/* Keyframes */}
      <Box
        sx={{
          "@keyframes pulseTL": {
            "0%": { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
            "100%": { transform: "translate(-120px, -120px) scale(2)", opacity: 0 },
          },
          "@keyframes pulseBR": {
            "0%": { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
            "100%": { transform: "translate(120px, 120px) scale(2)", opacity: 0 },
          },
        }}
      />
    </Box>
  );
};


// Hero Banner
const HeroSection = styled(Box)({
  position: "relative",
  height: "400px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `linear-gradient(rgba(10,25,80,0.7), rgba(30,90,200,0.6)), url(${aboutBanner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#fff",
  textAlign: "center",
});

// Hero Content
const HeroContent = styled(Box)({
  position: "relative",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  textAlign: "center",
});

// Animated floating box
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// About Section wrapper using flex
const AboutWrapperFlex = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "40px",
  padding: "80px 16px",
});

// Left Image Box
const ImageBoxFlex = styled(Box)({
  position: "relative",
  flex: "1 1 450px",
  maxWidth: "500px",
});

// Main Image
const MainImage = styled("img")({
  width: "100%",
  borderRadius: "10px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  objectFit: "cover",
});

// Small corner image
const SmallImage = styled("img")({
  position: "absolute",
  bottom: "-20px",
  right: "-20px",
  width: "120px",
  height: "120px",
  borderRadius: "10px",
  border: "3px solid #fff",
  objectFit: "cover",
  boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  transition: "transform 0.3s",
  "&:hover": { transform: "scale(1.05)" },
});

// Animated experience box
const ExperienceBox = styled(Box)({
  position: "absolute",
  bottom: "-20px",
  left: "-20px",
  background: "#384BFF",
  color: "#fff",
  padding: "20px 25px",
  borderRadius: "10px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
  animation: `${float} 3s ease-in-out infinite`,
  fontWeight: 700,
  textAlign: "center",
  fontFamily: '"Rajdhani", sans-serif',
});

// Right Content Box
const RightContentFlex = styled(Box)({
  flex: "1 1 450px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "16px",
});

const About = () => {

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
  return (
    <>
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
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </nav>

      {/* Hero Banner */}
      <HeroSection>
        <HeroContent>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
              fontFamily: '"Rajdhani", sans-serif',
              textTransform: "none",
              color: "#fff",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            About Us
          </Typography>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              color: "#ddd",
              "& .MuiLink-root": { color: "#ddd", textDecoration: "none" },
            }}
          >
            <Link underline="hover" href="/">
              Home
            </Link>
            <Typography color="inherit">About Us</Typography>
          </Breadcrumbs>
        </HeroContent>
      </HeroSection>

      {/* About Section */}
      <AboutWrapperFlex>
        {/* Left Image */}
        <ImageBoxFlex>
          <MainImage src={mainPhoto} alt="About Main" />
          <SmallImage src={hoverPhoto} alt="Small Corner" />
          <ExperienceBox>8 Years Experience</ExperienceBox>
        </ImageBoxFlex>

        {/* Right Content */}
        <RightContentFlex>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#384BFF",
              fontWeight: 700,
              letterSpacing: 1,
              fontFamily: '"Rajdhani", sans-serif',
              textTransform: "none",
            }}
          >
            &lt;--- About Manovate ---&gt;
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: 700,
              fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
              lineHeight: 1.3,
              color: "#0F0D1D",
            }}
          >
            We Bring Innovation to Your Business
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: 1.7,
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            At Manovate Technologies, ideas evolve into intelligent solutions that drive growth and
innovation. We help businesses shape smarter systems, automate workflows, and create digital
experiences that move people and performance forward.

          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: 1.7,
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Our strength lies in uniting technology and business strategy to help organizations operate
intelligently and grow sustainably.
From IT solutions to strategic Non-IT services, every project we take on is built to solve real
challenges and unlock measurable results.
          </Typography>
        </RightContentFlex>


      </AboutWrapperFlex>
      {/* ================= OUR OFFERING SECTION ================= */}
{/* ================= OUR OFFERING SECTION ================= */}
{/* ================= OUR OFFERING SECTION ================= */}
<Box
  sx={{
    background: "radial-gradient(circle at 30% 30%, #0E144A 0%, #050A24 80%)",
    color: "#fff",
    textAlign: "center",
    py: { xs: 8, md: 10 },
    px: { xs: 3, md: 6 },
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Section Heading */}
  <Typography
    variant="h6"
    sx={{
      fontFamily: '"Rajdhani", sans-serif',
      color: "#5DA9FF",
      fontWeight: 700,
      mb: 2,
      textTransform: "uppercase",
      letterSpacing: 2,
    }}
  >
    Our Offering
  </Typography>

  <Typography
    variant="h3"
    sx={{
      fontWeight: 700,
      fontFamily: '"Rajdhani", sans-serif',
      mb: 6,
      fontSize: { xs: "2rem", md: "2.8rem" },
      lineHeight: 1.3,
    }}
  >
    Enhance And Pioneer Using <br /> Technology Trends
  </Typography>

  {/* Offer Grid */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "repeat(2, 1fr)",
        sm: "repeat(3, 1fr)",
        md: "repeat(6, 1fr)",
      },
      gap: 3,
      justifyItems: "center",
      alignItems: "center",
      position: "relative",
    }}
  >
    {[
      { icon: <LanguageIcon />, label: "Website", color: "#2196F3" },
      { icon: <AndroidIcon />, label: "Android", color: "#00E676" },
      { icon: <AppleIcon />, label: "iOS", color: "#E5E5E5" },
      { icon: <SearchIcon />, label: "SEO", color: "#FF6F61" },
      { icon: <BrushIcon />, label: "Designing", color: "#FBC02D" },
      { icon: <RocketLaunchIcon />, label: "IoT", color: "#7C4DFF" },
    ].map((item, i) => (
      <OfferIcon key={i} icon={item.icon} label={item.label} color={item.color} />
    ))}
  </Box>
</Box>

{/* ================= OUR MISSION & VISION SECTION ================= */}
<Box
  sx={{
    py: { xs: 8, md: 10 },
    px: { xs: 3, md: 8 },
    background: "linear-gradient(180deg, #F9FBFF 0%, #EEF3FF 100%)",
    textAlign: "center",
    overflow: "hidden",
  }}
>
  <Typography
    variant="h6"
    sx={{
      fontFamily: '"Rajdhani", sans-serif',
      color: "#384BFF",
      fontWeight: 700,
      mb: 2,
      textTransform: "uppercase",
      letterSpacing: 2,
    }}
  >
    Our Core Philosophy
  </Typography>
  <Typography
    variant="h3"
    sx={{
      fontFamily: '"Rajdhani", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "2rem", md: "2.5rem" },
      mb: 6,
    }}
  >
    Mission, Vision & Values
  </Typography>

  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
      gap: 4,
    }}
  >
    {[
      {
        title: "Our Mission",
        desc: "To empower businesses to lead digital innovation with cutting-edge strategy, design, and development solutions.",
        icon: "🚀",
      },
      {
        title: "Our Vision",
        desc: "To become a global leader recognized for creating intelligent, future-ready digital ecosystems that transform industries.",
        icon: "🌍",
      },
      {
        title: "Our Values",
        desc: "We value integrity, innovation, collaboration, and impact — ensuring every solution we deliver makes a measurable difference.",
        icon: "💡",
      },
    ].map((item, i) => (
      <Box
        key={i}
        className="mission-card"
        sx={{
          p: 4,
          borderRadius: "20px",
          background: "#fff",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "translateY(-10px) scale(1.02)",
            boxShadow: "0 15px 40px rgba(56,75,255,0.2)",
          },
        }}
      >
        <Typography sx={{ fontSize: "2.5rem" }}>{item.icon}</Typography>
        <Typography
          variant="h5"
          sx={{
            mt: 2,
            mb: 1,
            fontWeight: 700,
            fontFamily: '"Rajdhani", sans-serif',
            color: "#0F0D1D",
          }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#555",
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            lineHeight: 1.6,
          }}
        >
          {item.desc}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>

{/* ================= OUR PROCESS SECTION ================= */}
<Box
  sx={{
    background: "radial-gradient(circle at 30% 30%, #0E144A 0%, #050A24 80%)",
    color: "#fff",
    py: { xs: 8, md: 10 },
    px: { xs: 3, md: 8 },
    textAlign: "center",
  }}
>
  <Typography
    variant="h6"
    sx={{
      fontFamily: '"Rajdhani", sans-serif',
      color: "#5DA9FF",
      fontWeight: 700,
      mb: 2,
      textTransform: "uppercase",
      letterSpacing: 2,
    }}
  >
    Our Priniciples
  </Typography>
  <Typography
    variant="h3"
    sx={{
      fontFamily: '"Rajdhani", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "2rem", md: "2.5rem" },
      mb: 6,
    }}
  >
    How We Build Digital Success
  </Typography>

  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "space-between",
      alignItems: "center",
      gap: 4,
      position: "relative",
    }}
  >
    {[
      { title: "Integrity", desc: "Transparency and accountability in every partnership." },
      { title: "Innovation", desc: "New ideas that drive smarter solutions." },
      { title: "Excellence", desc: "Precision and quality in execution." },
      { title: "Collaboration", desc: " To deliver measurable outcomes" },
      { title: "Adaptability", desc: "Evolving with change to stay ahead." },
    ].map((item, i) => (
      <Box
        key={i}
        sx={{
          flex: 1,
          minWidth: "150px",
          position: "relative",
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "translateY(-10px)",
          },
        }}
      >
        <Box
          sx={{
            background: "rgba(255,255,255,0.1)",
            borderRadius: "15px",
            p: 3,
            boxShadow: "0 0 20px rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#5DA9FF",
              fontFamily: '"Rajdhani", sans-serif',
            }}
          >
            {item.step}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mt: 1,
              fontFamily: '"Rajdhani", sans-serif',
            }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#ccc",
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              mt: 1,
            }}
          >
            {item.desc}
          </Typography>
        </Box>
      </Box>
    ))}
  </Box>
</Box>

{/* ================= WHY CHOOSE US SECTION ================= */}
<Box
  sx={{
    py: { xs: 8, md: 10 },
    px: { xs: 3, md: 8 },
    background: "#F9FBFF",
    textAlign: "center",
  }}
>
  <Typography
    variant="h6"
    sx={{
      fontFamily: '"Rajdhani", sans-serif',
      color: "#384BFF",
      fontWeight: 700,
      mb: 2,
      textTransform: "uppercase",
      letterSpacing: 2,
    }}
  >
    Why Choose Us
  </Typography>
  <Typography
    variant="h3"
    sx={{
      fontFamily: '"Rajdhani", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "2rem", md: "2.5rem" },
      mb: 6,
    }}
  >
    Innovation Meets Excellence
  </Typography>

  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
      gap: 4,
    }}
  >
    {[
      { title: "Result-Oriented Strategy", icon: "🎯" },
      { title: "Certified Experts", icon: "👨‍💻" },
      { title: "On-Time Delivery", icon: "⏰" },
      { title: "Cutting-Edge Technology", icon: "⚙️" },
      { title: "Transparent Communication", icon: "💬" },
      { title: "24/7 Support", icon: "📞" },
    ].map((item, i) => (
      <Box
        key={i}
        sx={{
          p: 4,
          background: "#fff",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "translateY(-8px) scale(1.03)",
            boxShadow: "0 12px 30px rgba(56,75,255,0.2)",
          },
        }}
      >
        <Typography sx={{ fontSize: "2.5rem" }}>{item.icon}</Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            fontWeight: 700,
            fontFamily: '"Rajdhani", sans-serif',
            color: "#0F0D1D",
          }}
        >
          {item.title}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>

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
          <li><Link to="/solution">SOLUTIONS</Link></li>
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


    </>
  );
};

export default About;