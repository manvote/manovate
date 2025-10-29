// OurProducts.js
import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { HeadProvider, Meta } from "react-head";
import proweb from "./project1.jpg";
import introImage from "./solution.jpg";
import "./ourproducts.css"; // ✅ linked external CSS

const products = [
  {
    id: 1,
    title: "E-Commerce Platform",
    subtitle: "Modern Online Storefront",
    description:
      "A scalable and responsive e-commerce platform designed for smooth customer experiences. Features integrated payment gateways, real-time inventory tracking, and analytics dashboard.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 2,
    title: "AI Chatbot Assistant",
    subtitle: "Conversational Automation",
    description:
      "Smart AI chatbot for customer support with NLP-based query handling and multilingual support, improving efficiency and response time.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 3,
    title: "HRMS Dashboard",
    subtitle: "Human Resource Management System",
    description:
      "An interactive dashboard for managing employee data, payroll, leave requests, and performance insights.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 4,
    title: "Mobile Banking App",
    subtitle: "Fintech Security & Simplicity",
    description:
      "A secure mobile banking app offering fund transfers, card management, and biometric authentication.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 5,
    title: "Healthcare Appointment System",
    subtitle: "Smart Scheduling Solution",
    description:
      "A medical appointment system with real-time doctor availability, patient record tracking, and integrated telehealth options.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 6,
    title: "Logistics Tracking Portal",
    subtitle: "Fleet & Delivery Monitoring",
    description:
      "A logistics management platform offering GPS tracking, delivery route optimization, and fleet analytics.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 7,
    title: "Education LMS Platform",
    subtitle: "Learning Management System",
    description:
      "An online learning portal supporting video lessons, exams, course certifications, and instructor analytics.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 8,
    title: "Real Estate Website",
    subtitle: "Property Listing Platform",
    description:
      "Dynamic website for real estate listings, advanced search filters, and client-agent communication tools.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 9,
    title: "Portfolio Showcase",
    subtitle: "Creative Agency Portfolio",
    description:
      "A sleek portfolio website featuring animation transitions, gallery display, and case study sections.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 10,
    title: "Restaurant Ordering App",
    subtitle: "Food Delivery Integration",
    description:
      "Mobile-first ordering system for restaurants with table reservations, order tracking, and payment integration.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 11,
    title: "CRM Dashboard",
    subtitle: "Customer Relationship Management",
    description:
      "A unified CRM dashboard offering sales pipeline visibility, lead tracking, and automated client follow-ups.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 12,
    title: "Travel Booking Website",
    subtitle: "Flights, Hotels & Packages",
    description:
      "Complete travel booking solution with real-time availability, reviews, and secure payment modules.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 13,
    title: "Cybersecurity Monitoring Tool",
    subtitle: "Network & Threat Detection",
    description:
      "A live security monitoring dashboard featuring intrusion alerts, data encryption, and analytics.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 14,
    title: "SaaS Analytics Platform",
    subtitle: "Data Visualization & Metrics",
    description:
      "A SaaS analytics dashboard providing business intelligence, KPI tracking, and real-time reporting.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 15,
    title: "Event Management System",
    subtitle: "Online Registration & Ticketing",
    description:
      "Platform for event organizers to manage registrations, sell tickets, and analyze attendee engagement.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 16,
    title: "Inventory Control App",
    subtitle: "Warehouse & Stock Management",
    description:
      "A warehouse automation solution offering barcode scanning, live stock updates, and supply chain tracking.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 17,
    title: "AI Resume Screener",
    subtitle: "Recruitment Automation",
    description:
      "AI-powered resume analysis tool that ranks applicants based on skill match and keyword relevance.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 18,
    title: "Hospital ERP",
    subtitle: "Healthcare Resource Planning",
    description:
      "An integrated ERP solution connecting departments like pharmacy, billing, and records for hospitals.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 19,
    title: "IoT Home Automation App",
    subtitle: "Smart Living Control",
    description:
      "A mobile app enabling control of lights, temperature, and appliances through IoT connectivity.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 20,
    title: "Digital Marketing Dashboard",
    subtitle: "Campaign & Analytics Tool",
    description:
      "Dashboard integrating SEO, PPC, and social analytics for data-driven marketing insights.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
  {
    id: 21,
    title: "Blockchain Wallet",
    subtitle: "Secure Crypto Transactions",
    description:
      "A decentralized wallet application supporting multiple cryptocurrencies and enhanced transaction security.",
    image: proweb,
    info: {
    Manager: "Omshikat Rinali",
    Location: "Bengaluru, India",
    Customer: "Acme Co.",
    Category: "Web App",
    Value: "51000 USD",
    Date: "Nov 10, 2022"
  }
  },
];


// --- animations
const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// --- Styled components for the card layout
const PageOuter = styled("div")({
  minHeight: "100vh",
  background: "linear-gradient(180deg,#001a33 0%, #002b4a 100%)",
  padding: "48px",
  boxSizing: "border-box",
  fontFamily: "'Poppins', sans-serif",
  color: "#e8f4ff",

  "@media (max-width: 1024px)": {
    padding: "32px 24px",
  },
});

const Layout = styled("div")({
  display: "flex",
  gap: "32px",
  alignItems: "flex-start",
  maxWidth: "1400px",
  margin: "0 auto",

  "@media (max-width: 1024px)": {
    flexDirection: "column",
    gap: "24px",
  },
});

const ContentArea = styled(motion("div"))({
  width: "62%",
  minWidth: 650,
  borderRadius: 14,
  overflow: "hidden",
  background: "transparent",

  "@media (max-width: 1024px)": {
    width: "100%",
    minWidth: "auto",
  },
});

const Banner = styled("div")({
  position: "relative",
  borderRadius: 14,
  overflow: "hidden",
  boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
  backgroundColor: "#fff",
  height: 360,

  "@media (max-width: 1024px)": {
    height: 260,
  },
  "@media (max-width: 600px)": {
    height: 220,
  },
});

const BannerImage = styled("img")({
  width: "100%",
  height: "360px",
  objectFit: "cover",
  display: "block",

  "@media (max-width: 1024px)": {
    height: 260,
  },
  "@media (max-width: 600px)": {
    height: 220,
  },
});

const InfoCard = styled(motion("div"))({
  position: "absolute",
  right: 32,
  bottom: -20,
  width: 360,
  background: "linear-gradient(180deg,#2b9bff,#1d7be6)",
  color: "#fff",
  padding: "28px",
  borderRadius: 18,
  boxShadow: "0 30px 60px rgba(13,83,168,0.35)",

  "@media (max-width: 1024px)": {
    position: "static",
    width: "100%",
    marginTop: 16,
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },
});

const TextSection = styled("div")({
  padding: "48px 36px 36px 36px",
  background: "#fff",
  borderRadius: "0 0 14px 14px",
  color: "#0b2540",
  boxShadow: "0 6px 30px rgba(0,0,0,0.06)",

  "@media (max-width: 600px)": {
    padding: "24px 16px",
  },
});

const Title = styled(Typography)({
  fontSize: 38,
  fontWeight: 700,
  marginBottom: 18,
  color: "#07203a",
});

const Desc = styled(Typography)({
  fontSize: 16,
  lineHeight: 1.9,
  color: "#4b6578",
});

const Sidebar = styled("aside")({
  width: "36%",
  minWidth: 420,
  maxWidth: 520,
  position: "relative",

  "@media (max-width: 1024px)": {
    width: "100%",
    minWidth: "auto",
    order: -1,
  },
});

const SidebarBox = styled("div")({
  position: "sticky",
  top: 120,
  background: "rgba(255,255,255,0.04)",
  borderRadius: 16,
  padding: 28,
  height: 620,
  overflowY: "auto",
  border: "1px solid rgba(255,255,255,0.06)",
  boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
  scrollbarWidth: "thin",
  scrollbarColor: "#64b5ff rgba(255,255,255,0.02)",

  "&::-webkit-scrollbar": {
    width: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "linear-gradient(180deg,#64b5ff,#1976d2)",
    borderRadius: 10,
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },

  /* ✅ Fixed mobile horizontal scroll behavior */
  "@media (max-width: 1024px)": {
    position: "relative",
    top: 0,
    height: "auto",
    maxHeight: "none",
    overflowY: "hidden",
    overflowX: "auto",
    whiteSpace: "nowrap",
    display: "flex",
    flexWrap: "nowrap",
    background: "transparent",
    border: "none",
    boxShadow: "none",
    padding: "8px 0 16px 0",
    scrollBehavior: "smooth",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});


const ProductButton = styled(Button)(({ active }) => ({
  width: "100%",
  justifyContent: "space-between",
  gap: 12,
  textTransform: "none",
  padding: "14px 16px",
  marginBottom: 12,
  borderRadius: 12,
  fontWeight: 600,
  color: active ? "#001b33" : "#cde9ff",
  background: active ? "linear-gradient(90deg,#a7d9ff,#66b8ff)" : "transparent",
  border: active ? "none" : "1px solid rgba(255,255,255,0.06)",
  boxShadow: active ? "0 10px 30px rgba(32,124,214,0.2)" : "none",
  transition: "all 0.3s ease",

  "&:hover": {
    transform: "translateY(-2px)",
    background: active
      ? "linear-gradient(90deg,#92d4ff,#4f9ff0)"
      : "rgba(255,255,255,0.03)",
  },

  /* ✅ Inline horizontal buttons for mobile */
  "@media (max-width: 1024px)": {
    display: "inline-block",
    verticalAlign: "top",
    whiteSpace: "normal",
    minWidth: "220px",
    width: "auto",
    margin: "0 8px",
    padding: "10px 14px",
    fontSize: 14,
    flexShrink: 0,
  },
}));


const SmallKey = styled("div")({
  fontSize: 14,
  fontWeight: 700,
  color: "#bfe6ff",
  marginBottom: 6,
});

const SmallVal = styled("div")({
  fontSize: 15,
  fontWeight: 600,
  color: "#eaf6ff",
  marginBottom: 12,
});

// --- Main Component
export default function OurProducts() {
  const [selected, setSelected] = useState(products[0]);

  return (
    <>
      <HeadProvider>
        <Title>
          Our Expertise | Digital Transformation & IT Mastery – Manovate
        </Title>
        <Meta
          name="description"
          content="Explore Manovate’s expertise in digital transformation and strategic business solutions."
        />
      </HeadProvider>

      {/* HERO SECTION */}
      <div className="services-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Our Products</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a> &gt; <span>Our Products</span>
          </div>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="solutions-intro-section">
        <div className="intro-image">
          <img src={introImage} alt="Solutions Illustration" />
        </div>
        <div className="intro-text">
          <h2>Solutions That Transform Businesses</h2>
          <p>
            At <strong>Manovate Technology</strong>, we turn challenges into
            scalable IT and Non-IT solutions that drive efficiency and growth.
          </p>
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <PageOuter>
        <Layout>
          {/* Left content */}
          <ContentArea variants={fadeInLeft} initial="hidden" animate="visible">
            <Banner>
              <BannerImage src={selected.image} alt={selected.title} />
              <InfoCard
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.12 }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Project Information
                </Typography>

                <Box display="flex" gap={4}>
                  <Box>
                    <SmallKey>Manager</SmallKey>
                    <SmallVal>{selected.info.Manager}</SmallVal>

                    <SmallKey>Customer</SmallKey>
                    <SmallVal>{selected.info.Customer}</SmallVal>

                    <SmallKey>Value</SmallKey>
                    <SmallVal>{selected.info.Value}</SmallVal>
                  </Box>

                  <Box>
                    <SmallKey>Location</SmallKey>
                    <SmallVal>{selected.info.Location}</SmallVal>

                    <SmallKey>Category</SmallKey>
                    <SmallVal>{selected.info.Category}</SmallVal>

                    <SmallKey>Date</SmallKey>
                    <SmallVal>{selected.info.Date}</SmallVal>
                  </Box>
                </Box>
              </InfoCard>
            </Banner>

            <TextSection>
              <Title>{selected.title}</Title>
              <Typography variant="subtitle1" sx={{ mb: 2, color: "#7b97a9" }}>
                {selected.subtitle}
              </Typography>
              <Desc>{selected.description}</Desc>
            </TextSection>
          </ContentArea>

          {/* Right Sidebar */}
          <Sidebar>
            <SidebarBox>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  color: "#e8f8ff",
                  textAlign: "center",
                  fontSize: 18,
                }}
              >
                All Projects
              </Typography>

              <Box>
                {products.map((p) => (
                  <ProductButton
                    key={p.id}
                    active={selected.id === p.id ? 1 : 0}
                    onClick={() => setSelected(p)}
                  >
                    <Box textAlign="left">
                      <Typography sx={{ fontWeight: 800, color: "inherit" }}>
                        {p.title}
                      </Typography>
                      <Typography sx={{ fontSize: 13, opacity: 0.8 }}>
                        {p.subtitle}
                      </Typography>
                    </Box>
                    <Box sx={{ minWidth: 60, textAlign: "right" }}>
                      <Typography sx={{ fontSize: 13, opacity: 0.9 }}>
                        {p.info.Date}
                      </Typography>
                    </Box>
                  </ProductButton>
                ))}
              </Box>
            </SidebarBox>
          </Sidebar>
        </Layout>

        {/* Scroll to top */}
        <IconButton
          aria-label="top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          sx={{
            position: "fixed",
            right: 22,
            bottom: 26,
            background: "linear-gradient(180deg,#fff,#e6f3ff)",
            color: "#0b2540",
            boxShadow: "0 12px 30px rgba(9,48,85,0.25)",
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      </PageOuter>
    </>
  );
}
