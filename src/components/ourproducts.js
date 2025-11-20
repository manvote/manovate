// OurProducts.js
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import introImage from "./solution.jpg";
import "./ourproducts.css"; // ✅ linked external CSS
import logo from "./manovate.png";
import { FiMenu, FiX } from "react-icons/fi";
import {FaMapMarkerAlt,FaLinkedin,FaInstagram,FaFacebook } from "react-icons/fa";
import {Link} from "react-router-dom";
import data from "./data.jpg";
import hospitality from "./hospitality.jpg";
import embedded from "./embedded.jpg";
import email from "./email.jpg";
import automation from "./automation.jpg";
import educational from "./educational.jpg";
import beauty from "./beauty.jpg";
import medical from "./medical.jpg";
import texttile from "./texttile.jpg";
import food from "./food.jpg";
import message from "./message.jpg"; 
import payroll from "./payroll.jpg";
import ecommerce from "./ecommerce.jpg";
import hrms from "./hrms.jpg";
import crm from "./crm.jpg";
import appointment from "./appointment.jpg";
import recruit from "./recruit.jpg";
import event from "./event.jpg";
import retail from "./retail.jpg";
import privacy from "./privacy.jpg";
import beverage from "./beverage.jpg";
import { useNavigate } from "react-router-dom";

const products = [
{
  id: 1,
  title: "Messaging Application",
  subtitle: "Modern Communication Platform",
  description: `
  <b>A fast, secure, and intuitive messaging solution</b> for personal, group, and business communication.<br><br>
  Stay connected through <b>real-time chat, calls, media sharing, privacy controls,</b> and <b>multi-device access</b> — fully protected with <b>end-to-end encryption</b>.<br><br>

  <b>Key Features</b><br><br>
  • Quick and secure login with OTP or password<br>
  • Smart user profiles with photo, status, and privacy settings<br>
  • Auto-sync contacts to find existing users + invite new ones<br>
  • Real-time chat with typing, delivery, and read indicators<br>
  • Group chats with admin controls and media sharing<br>
  • HD voice and video calls (1-to-1 and group)<br>
  • 24-hour status/stories with text, photo, and video<br>
  • Fast media sharing with auto-compression and preview<br>
  • Smart search for users, chats, files, and media<br>
  • Star and archive conversations for easy organization<br>
  • Safe communication with block, report, and privacy controls<br>
  • Push notifications with mute and custom preferences<br>
  • Cloud backup and restore with auto-schedule options<br>
  • Multi-device sync across web and mobile<br>
  • Usage analytics for engagement and performance insights<br><br>

  <b>Benefits</b><br><br>
  • Smooth, secure & engaging messaging experience<br>
  • Boosts user activity with groups, stories & rich media<br>
  • Ideal for personal, social & professional communication<br>
  • Scalable & reliable for large user networks<br><br>

  <b>Customization</b><br><br>
  We provide flexible customization options to align the product with your business workflows, branding, and operational needs.<br><br>
  Our approach focuses on adapting features and user experience to suit your processes — ensuring the solution fits your business rather than the other way around.<br><br>

  <b>Ideal For</b><br><br>
  Personal & Community Apps, Startups, Schools, Teams, Organizations, and Branded Messaging Platforms.<br><br>
  `,
  image: message,
  info: {
    Category: "Web App",
  },
},

{
  id: 2,
  title: "Online Food Ordering & Delivery Platform",
  subtitle: "End-to-End Food Delivery Ecosystem",
  description: `
  <b>A complete online food ordering and delivery platform</b> designed for customers, restaurants, and delivery partners.<br><br>
  Manage menus, orders, payments, tracking, delivery operations, and customer engagement seamlessly across web and mobile.<br><br>

  A <b>scalable and user-friendly food delivery system</b> that connects customers with nearby restaurants, enables smooth ordering, secure payments, real-time delivery tracking, and efficient partner & admin operations.<br><br>
  Built to support <b>single-city or multi-city food delivery businesses</b> with automation, analytics, and powerful admin controls.<br><br>

  <b>Key Features</b><br>
  • Customer app for browsing restaurants, placing orders & live tracking<br>
  • Restaurant management for menu, pricing, orders, and earnings<br>
  • Delivery partner app for accepting orders, navigation & daily earnings<br>
  • Smart search, filters, cuisines & personalized recommendations<br>
  • Secure login with role-based access (Customer, Partner, Admin)<br>
  • Multiple delivery addresses & saved preferences<br>
  • Real-time order tracking with live GPS map & ETA updates<br>
  • Online & offline payment options with automated receipts<br>
  • Optimized order lifecycle<br>
  • Promo codes, offers & automated discounts<br>
  • Push notifications for orders, offers & delivery updates<br>
  • In-app chat & support ticket system<br>
  • Analytics for sales, orders, top items, peak hours & performance<br>
  • Admin dashboard to manage users, partners, restaurants & reports<br>
  • Daily cloud backup, multi-device sync & data security<br><br>

  <b>Business Benefits</b><br>
  • Launch your own food delivery ecosystem with low operational effort<br>
  • Enhances customer experience with fast, transparent ordering<br>
  • Streamlines restaurant and delivery partner operations<br>
  • Boosts sales with offers, recommendations & repeat customer engagement<br>
  • Real-time insights for business growth and decision-making<br><br>

  <b>Customization</b><br>
  We provide flexible customization options to align the product with your business workflows, branding, and operational needs.<br><br>
  Our approach focuses on adapting features and user experience to suit your processes — ensuring the solution fits your business rather than the other way around.<br><br>

  <b>Ideal For</b><br>
  Entrepreneurs, Food Delivery Startups, Restaurants, Cloud Kitchens, Food Courts, and Businesses planning to launch their own food delivery platform.<br><br>
  `,
  image: food, // replace with your actual image variable or import
  info: {
    Category: "Web & Mobile App",
  },
},

{
  id: 3,
  title: "Textile & Clothing Billing Software",
  subtitle: "Smart Retail Software for Textile Businesses",
  description: `
  <b>A complete billing and inventory solution</b> tailored for garment stores, boutiques, fabric shops, and multi-brand clothing outlets.<br><br>
  Streamline sales, stock, purchases, and customer management with fast POS, barcode billing, variant tracking, and smart insights to grow your textile business with ease.<br><br>

  Built for the <b>apparel and textile industry</b>, this software handles end-to-end store operations including billing, stock, supplier purchases, size and color variants, offers, returns, staff control, and branch management.<br><br>
  The intuitive interface makes counter billing faster, reduces stock errors, and improves profitability.<br><br>
  Works on web and mobile with <b>cloud sync</b> for single or multi-store use.<br><br>

  <b>Core Features</b><br>
  • Fast POS billing with barcode / QR scanning, discounts, and GST<br>
  • Product, category, and brand management with images and SKUs<br>
  • Size, color, and variant-wise stock tracking<br>
  • Inventory with low stock alerts, stock transfer, and multi-branch support<br>
  • Expense tracking and profit summary dashboard<br><br>

  <b>Business Value</b><br>
  • Faster billing and improved customer experience<br>
  • Reduced stock loss with accurate variant-wise tracking<br>
  • Better control of expenses, purchases, and supplier payments<br>
  • Smart insights to boost sales, repeat customers, and margins<br>
  • Transparency and accountability with staff roles and logs<br><br>

  <b>Customization</b><br>
  Easily configure product variants, tax, invoice template, print format, barcode labels, loyalty rules, and user permissions to match your textile business workflow.<br><br>

  <b>Ideal For</b><br>
  Garment stores, boutiques, ethnic wear outlets, kids wear shops, fabric and textile retailers, saree and suit stores, innerwear shops, wholesale clothing traders, and multi-branch apparel brands.<br><br>

  <b>Why Choose Us</b><br>
  Simple, fast, and industry-ready. Get secure cloud access, reliable support, easy onboarding, and regular enhancements designed specifically for textile businesses.<br><br>
  `,
  image: texttile, // replace with your actual image import or variable
  info: {
    Category: "Web & Desktop App",
  },
},

{
  id: 4,
  title: "Hospital Billing & Revenue Management System",
  subtitle: "Smart, Secure & Streamlined Healthcare Billing",
  description: `
  <b>Simplify hospital billing, boost accuracy, and deliver a seamless patient payment experience.</b><br><br>
  Our smart medical billing system brings together <b>patient records, appointments, insurance, payments, pharmacy, lab, and IPD billing</b> in one secure platform — helping hospitals speed up operations, reduce manual errors, and ensure faster revenue recovery.<br><br>

  A <b>complete billing and revenue management solution</b> for hospitals, clinics, and healthcare centers. From patient registration and doctor consultation billing to IPD, lab, insurance, and pharmacy invoicing — everything is centralized for efficiency.<br><br>

  <b>Core Features</b><br>
  • Patient registration with visit history and digital records<br>
  • Automated invoice generation with tax, discounts, and insurance splits<br>
  • Partial payments, dues tracking, receipts, and mode-wise collection reports<br>
  • Doctor management with schedules and consultation fee mapping<br>
  • Daily, weekly, and monthly revenue, department-wise, and doctor-wise analytics<br>
  • GST-compliant invoices, exports, and audit-ready reports<br><br>

  <b>Business Value</b><br>
  • Faster billing and reduced wait times for patients<br>
  • Accurate revenue tracking with minimal leakages<br>
  • Better compliance with insurance and financial audits<br>
  • Centralized data for smarter medical and business decisions<br>
  • Improved coordination between reception, billing, pharmacy, lab, and wards<br><br>

  <b>Customization</b><br>
  We provide flexible customization options to align the product with your business workflows, branding, and operational needs.<br><br>
  Our approach focuses on adapting features and user experience to suit your processes — ensuring the solution fits your business rather than the other way around.<br><br>

  <b>Ideal For</b><br>
  Hospitals, clinics, multi-specialty centers, nursing homes, diagnostic centers, day-care centers, and healthcare chains.<br><br>

  <b>Why Choose Us</b><br>
  Trusted, secure, and healthcare-ready. Quick onboarding, reliable support, and configurable modules to match your hospital workflow and scale.<br><br>
  `,
  image: medical, // replace with your actual image import or variable
  info: {
    Category: "Web & Mobile App",
  },
},

{
  id: 5,
  title: "Salon, Spa & Wellness Management System",
  subtitle: "All-in-One Beauty & Wellness Business Software",
  description: `
  <b>Give your customers a premium experience while simplifying your daily operations.</b><br><br>
  This all-in-one software helps you manage <b>bookings, staff, billing, memberships, packages, POS,</b> and <b>customer loyalty</b> — all from one smart platform.<br><br>

  A <b>modern billing and customer management system</b> built for beauty and wellness businesses.<br><br>
  From appointment scheduling to service catalog, memberships, product sales, inventory, and loyalty — everything works seamlessly across web and mobile.<br><br>
  Deliver faster service, boost revenue, and build customer relationships that last.<br><br>

  <b>Core Features</b><br>
  • Customer profiles with service history, preferences & memberships<br>
  • Service catalog with pricing, duration, combos & packages<br>
  • Smart appointment booking with staff selection & instant confirmations<br>
  • POS billing for services & product sales with offers and loyalty points<br>
  • Cloud backup, privacy-focused security & multi-role access<br><br>

  <b>Business Value</b><br>
  • Faster check-ins, smoother billing & better customer experience<br>
  • Higher repeat visits with loyalty, memberships & reminders<br>
  • Better staff efficiency with scheduling & performance insights<br>
  • Real-time view of sales, services, expenses & business health<br>
  • Reduced manual work with automation and digital records<br><br>

  <b>Customization</b><br>
  We provide flexible customization options to align the product with your business workflows, branding, and operational needs.<br><br>
  Our approach focuses on adapting features and user experience to suit your processes — ensuring the solution fits your business rather than the other way around.<br><br>

  <b>Ideal For</b><br>
  Salons, beauty clinics, spas, massage centers, nail bars, gyms, yoga studios, and wellness centers looking to digitize operations and grow revenue.<br><br>

  <b>Why Choose Us</b><br>
  Modern UI, quick setup, reliable performance, and built-in growth tools. Designed to help beauty and wellness businesses run smarter, increase repeat customers, and scale with ease.<br><br>
  `,
  image: beauty, // replace with your actual image import or variable
  info: {
    Category: "Web & Mobile App",
  },
}

,
{
  id: 6,
  title: "School & College Management System",
  subtitle: "Smart ERP for Education Institutions",
  description: `
  <b>A smart, user-friendly platform</b> built for Schools, Colleges, Coaching Centers, and Training Institutes to digitalize student records, automate fee billing, and streamline daily academic and administrative operations.<br><br>
  Manage admissions, courses, batches, fees, payments, exams, attendance, reports, and communication effortlessly on web and mobile.<br><br>

  <b>Key Features</b><br>
  • Secure login with role-based access for Admin, Staff, Teachers & Students<br>
  • Complete student profile with attendance, academics, and fee history<br>
  • Course & batch management with timetable scheduling and teacher mapping<br>
  • Custom fee structures with installments, discounts & scholarships<br>
  • Auto-generated invoices, receipts, due alerts & fee reminders<br>
  • Supports cash, card, UPI & net-banking payments with receipt tracking<br>
  • Student & staff attendance with summary and reports<br>
  • Exam scheduling, marks entry & online results for students<br>
  • Library, hostel & transport management modules included<br>
  • Centralized reports & analytics for fees, academics & attendance<br>
  • Smart notifications through SMS, Email or App<br>
  • Cloud backup and data security for safe and reliable access anytime<br><br>

  <b>Benefits</b><br>
  • Saves time through automated billing and fee collection<br>
  • Reduces manual workload with centralized digital management<br>
  • Improves transparency for parents, students, staff, and management<br>
  • Enhances efficiency in academics, operations & communication<br>
  • Ensures accuracy, security, and error-free data handling<br><br>

  <b>Customization</b><br>
  We provide flexible customization options to align the product with your business workflows, branding, and operational needs.<br><br>
  Our approach focuses on adapting features and user experience to suit your processes — ensuring the solution fits your business rather than the other way around.<br><br>

  <b>Ideal For</b><br>
  Schools, Colleges, Universities, Coaching Centers, Training Institutes, and Education Groups looking to modernize administration and fee management.<br><br>
  `,
  image: educational, // replace with your actual image import or variable
  info: {
    Category: "Web & Mobile App",
  },
}
,
{
  id: 7,
  title: "Hotel & Hospitality Management System",
  subtitle: "All-in-One Hotel & Guest Experience Platform",
  description: `
  <b>A complete billing, reservation, and guest experience management solution</b> for hotels, resorts, travel agencies, and tour operators.<br><br>
  Streamline bookings, billing, room service, payments, staff, and guest experience from a single platform.<br><br>
  Designed for <b>front desk, operations, and guest convenience</b> with secure access and automation.<br><br>

  A <b>smart hospitality management system</b> that centralizes reservations, room allocation, billing, restaurant & room service orders, tour packages, payments, staff scheduling, loyalty, and guest history.<br><br>
  It improves occupancy, enhances guest experience, reduces manual work, and ensures accurate billing across services.<br><br>

  <b>Key Features</b><br>
  • Secure login for Admin, Staff, and Guests with role-based access<br>
  • Guest profiles with stay history, preferences, and loyalty points<br>
  • Room management with real-time availability and status tracking<br>
  • Online and front desk booking with instant confirmation<br>
  • Automated room allocation and occupancy overview<br>
  • Front desk billing for room charges, services, packages & add-ons<br>
  • Restaurant and room service order management linked to billing<br>
  • Notifications for bookings, check-in/out, payments, and service updates<br><br>

  <b>Business Benefits</b><br>
  • Boost guest satisfaction and repeat visits<br>
  • Reduce billing errors and manual overhead<br>
  • Increase occupancy and revenue with packages & upselling<br>
  • Real-time visibility of rooms, services, and staff performance<br>
  • Faster check-in/check-out and paperless operations<br><br>

  <b>Customization</b><br>
  We provide flexible customization options to align the product with your business workflows, branding, and operational needs.<br><br>
  Our approach focuses on adapting features and user experience to suit your processes — ensuring the solution fits your business rather than the other way around.<br><br>

  <b>Ideal For</b><br>
  Hotels, Resorts, Boutique Stays, Homestays, Serviced Apartments, Travel Agencies, Tour Operators, Guest Houses, and Hospitality Chains.<br><br>
  `,
  image: hospitality, // replace with your actual image import or variable
  info: {
    Category: "Web & Mobile App",
  },
}
,
{
  id: 8,
  title: "Automation Testing Platform",
  subtitle: "Smarter, Faster & Reliable Software Testing",
  description: `
  <b>A simple, smart, and time-saving automation testing solution</b> that helps teams test faster, deliver bug-free software, and reduce manual work.<br><br>
  Create, run, and manage tests effortlessly across <b>Web, Mobile, and API</b> — all in one platform.<br><br>

  <b>Key Features</b><br>
  • Easy login with secure role access for Testers, Leads & Admins<br>
  • Create test cases with simple No-Code steps, or advanced scripting if needed<br>
  • Manage all projects, test plans & test cases from one place<br>
  • Test Web, Mobile & API apps without switching tools<br>
  • Run multiple tests at the same time to speed up execution<br>
  • Data-driven testing using Excel/CSV to cover more scenarios<br>
  • Smart AI auto-fixes broken tests to avoid repeated failures<br>
  • Live dashboard showing test progress, results, logs & screenshots<br>
  • Connect with CI/CD tools to run tests automatically on every update<br>
  • Import API collections and convert them into ready test cases<br>
  • Team collaboration with comments, issue notes & alerts<br>
  • Download reports in PDF/Excel and schedule auto-reports<br>
  • Strong role-based access and secure project data control<br>
  • Cloud backup & version tracking to avoid losing test data<br><br>

  <b>Benefits</b><br>
  • Saves hours of manual testing and speeds up software releases<br>
  • Reduces errors and ensures more stable, high-quality products<br>
  • Makes automation easy for beginners and powerful for experts<br>
  • Helps teams work faster, smarter, and more efficiently<br><br>

  <b>Customization</b><br>
  We provide flexible customization options to align the product with your business workflows, branding, and operational needs.<br><br>
  Our approach focuses on adapting features and user experience to suit your processes — ensuring the solution fits your business rather than the other way around.<br><br>

  <b>Ideal For</b><br>
  QA Teams, Developers, Software Companies, IT Teams, Startups, and Enterprises wanting faster, accurate, and hassle-free automation testing.<br><br>
  `,
  image: automation, // replace with your actual image import
  info: {
    Category: "Web Platform",
  },
}
,
{
  id: 9,
  title: "Business Email Platform",
  subtitle: "Smart, Secure & Efficient Communication for Teams",
  description: `
  <b>A smart and secure email platform</b> for businesses, teams, and organizations to communicate efficiently, manage emails, contacts, calendars, files, and collaboration — all from one centralized system, accessible on both web and mobile.<br><br>

  This email solution makes communication <b>simple, organized, and secure</b>. It includes easy login access, a clean mailbox interface, contact management, calendar scheduling, collaboration tools, and strong data protection. Designed for smooth performance across devices, it helps individuals and teams stay productive and well-connected.<br><br>

  <b>Key Features</b><br>
  • Secure sign-in with role-based access<br>
  • Organized mailbox: Inbox, Sent, Drafts, Spam, Trash & Conversation View<br>
  • Smart folders, labels, and filters to auto-organize emails<br>
  • Fast search and sorting for quick email retrieval<br>
  • Calendar for meetings, reminders, and event invites<br>
  • Contact list with add, edit, import, export & group options<br>
  • File and attachment management with preview & download<br>
  • Strong spam protection and security controls<br>
  • Admin dashboard for user, domain, storage & policy management<br>
  • Shared inbox, internal notes, team chat & collaboration tools<br>
  • Integrations with CRM, project tools, Slack & more<br>
  • Email usage reports and analytics for performance tracking<br>
  • Mobile app with instant alerts, syncing & offline access<br><br>

  <b>Benefits</b><br>
  • Clear and organized communication<br>
  • Saves time with smart automation and filters<br>
  • Boosts team productivity and coordination<br>
  • High-level security protection for emails and data<br>
  • Works smoothly on both web and mobile for anytime access<br><br>

  <b>Customization</b><br>
  We provide flexible customization options to align the product with your business workflows, branding, and operational needs.<br><br>
  Our approach focuses on adapting features and user experience to suit your processes — ensuring the solution fits your business rather than the other way around.<br><br>

  <b>Ideal For</b><br>
  Businesses, Teams, Startups, Corporates, Schools, Agencies, and any organization that needs a reliable and secure email system.<br><br>
  `,
  image: email, // replace with your image import
  info: {
    Category: "Communication Platform",
  },
}
,
{
  id: 10,
  title: "Embedded BI & Analytics Platform",
  subtitle: "Real-Time Dashboards, AI Insights & Reporting Inside Your App",
  description: `
  <b>A powerful embedded BI solution</b> that brings real-time dashboards, AI insights, reporting, and data analytics directly inside your web and mobile applications. Enable users to access, analyze, and act on data instantly without switching tools. Fully secure, customizable, white-labelled, and built for scale.<br><br>

  <b>Key Features</b><br>
  • Secure login with role-based access, SSO, and granular permissions<br>
  • No-code report builder with drag-and-drop widgets and visualizations for self-service analytics<br>
  • Real-time interactive dashboards with charts, KPIs, drill-downs, and multi-layer data exploration<br>
  • Embed dashboards in web & mobile apps using APIs, SDK, or iFrame with token-based access<br>
  • Connect multiple data sources — databases, APIs, cloud apps, or files with auto-refresh<br>
  • AI-powered insights with trend analysis, forecasting, anomaly alerts & smart recommendations<br>
  • White-labelling with custom branding, themes, fonts & layout for a native experience<br>
  • Role-based dashboards showing personalized data for Admins, Managers, or Customers<br>
  • API integration for connecting with external systems or 3rd-party analytics tools<br>
  • Enterprise-grade security with encryption, audit logs, and compliance support<br><br>

  <b>Benefits</b><br>
  • Empowers users with analytics directly inside your product — no external tools required<br>
  • Enables data-driven decisions across teams and departments<br>
  • Reduces development effort with ready-to-embed dashboards, access control & APIs<br>
  • Enhances user engagement, product value & customer retention<br>
  • Saves time with automated reporting, scheduled insights & instant alerts<br>
  • Ensures full brand consistency with white-labelled design<br>
  • Scales effortlessly with your application’s growth from small to enterprise level<br><br>

  <b>Customization</b><br>
  We provide flexible customization options to align the product with your workflows, branding, and operational needs.<br>
  Our approach focuses on adapting features and user experience to suit your processes — ensuring the solution fits your business rather than the other way around.<br><br>

  <b>Ideal For</b><br>
  SaaS products, ERPs, CRMs, FinTech, EdTech, HealthTech, HRMS, Ecommerce Platforms, and any application that wants to offer built-in BI analytics to users.<br><br>
  `,
  image: embedded, // replace with your imported image variable
  info: {
    Category: "Analytics & Business Intelligence",
  },
}
,

{
  id: 11,
  title: "Data Analysis & DataPrep System",
  subtitle: "Turn Raw Data into Actionable Insights Effortlessly",
  description: `
  <b>Turn raw, scattered data into meaningful business intelligence</b> with speed, accuracy, and zero complexity. Our Data Analysis & DataPrep System simplifies the entire data lifecycle — from data collection and cleaning to transformation, visualization, and insights — all in one smart platform.<br><br>

  Built for businesses, analysts, and data-driven teams, this system converts complex datasets into clean, structured, and analysis-ready information. It automates data cleaning, standardization, and integration to eliminate manual effort, reduce errors, and accelerate decision-making.<br><br>

  <b>Core Features</b><br>
  • Automated data cleaning, transformation, and enrichment<br>
  • Connect spreadsheets, databases, APIs, apps, and cloud storage<br>
  • Merge and unify multiple datasets into a single data model<br>
  • Identify patterns, outliers, anomalies, and correlations<br>
  • Visual dashboards for KPI tracking, trends, and performance insights<br>
  • Export processed data to BI tools or share directly with teams<br>
  • Scalable cloud-based architecture with fast processing<br>
  • Role-based access, version control, and secure data governance<br>
  • Real-time collaboration and report sharing across departments<br><br>

  <b>Business Value</b><br>
  • Saves hours of manual data preparation and formatting<br>
  • Improves data accuracy, consistency, and trust<br>
  • Enables faster and smarter business decisions<br>
  • Uncovers insights hidden in raw data<br>
  • Ensures standardized reporting across the organization<br><br>

  <b>Customization</b><br>
  We provide flexible customization options to align the product with your business workflows, branding, and operational needs.<br>
  Our approach focuses on adapting features and user experience to suit your processes — ensuring the solution fits your business rather than the other way around.<br><br>

  <b>Ideal For</b><br>
  Organizations, analytics teams, consultants, finance, marketing, HR, operations, startups, enterprises, and anyone who works with data-driven insights.<br><br>

  <b>Why Choose Us</b><br>
  A powerful, intuitive, and secure platform that automates the hard part of data preparation and delivers insights with clarity. Easy to deploy, quick to learn, and flexible enough to scale with business growth.<br><br>
  `,
  image: data, // replace with your actual imported image variable
  info: {
    Category: "Data Analytics & Preparation",
  },
},

{
  id: 12,
  title: "Payroll Management System",
  subtitle: "Smart, Accurate & Hassle-Free Payroll Automation",
  description: `
  <b>A complete payroll management system</b> designed to simplify salary processing, employee management, attendance, tax compliance, and payslip distribution. Accessible on both web and mobile, it ensures accuracy, transparency, and hassle-free payroll operations for businesses of all sizes.<br><br>

  This Payroll Application automates end-to-end payroll activities including employee onboarding, attendance tracking, salary calculation, tax deductions, reimbursement claims, and payslip generation. With built-in compliance support and employee self-service access, it reduces manual work and ensures timely and error-free payroll every month.<br><br>

  <b>Key Features</b><br>
  • Secure login for Admin, HR & Employees with role-based access<br>
  • Employee records with salary, job role, attendance & leave details<br>
  • Salary structure setup with earnings, deductions & allowances<br>
  • Automated payroll processing with net salary calculation<br>
  • Payslip generation, email delivery & mobile download access<br>
  • Attendance & leave tracking with approval workflows<br>
  • Compliance for PF, ESI, TDS & statutory deductions<br>
  • Employee tax declarations & proof submission<br>
  • Reimbursement & expense claim management<br>
  • Real-time payroll, tax & attendance reports (Excel/PDF export)<br>
  • Employee Self-Service Portal (ESS) for payslips, tax & leave info<br>
  • Multi-branch/company support for large organizations<br>
  • Cloud backup, data security & access control settings<br>
  • Integrations with HR, accounting and third-party systems<br><br>

  <b>Benefits</b><br>
  • Saves time with automated monthly payroll runs<br>
  • Reduces errors with accurate calculations & compliance checks<br>
  • Improves transparency with employee self-service access<br>
  • Enhances HR productivity with integrated workflows<br>
  • Secure and reliable for both web and mobile users<br><br>

  <b>Customization</b><br>
  We provide flexible customization options to align the product with your business workflows, branding, and operational needs.<br>
  Our approach focuses on adapting features and user experience to suit your processes — ensuring the solution fits your business rather than the other way around.<br><br>

  <b>Ideal For</b><br>
  Companies, SMEs, Corporates, Startups, HR Teams, Payroll Service Providers, Multi-branch Businesses, Schools, Hospitals, and Organizations managing staff salaries.<br><br>
  `,
  image: payroll, // replace with your actual image import
  info: {
    Category: "HR & Payroll Automation",
  },
},

{
  id: 13,
  title: "E-Commerce Platform",
  subtitle: "Modern, Scalable & Feature-Rich Online Shopping System",
  description: `
  <b>A modern and scalable e-commerce platform</b> designed for online stores and marketplaces. Sell products, manage orders, accept payments, track deliveries, handle returns, and deliver a seamless shopping experience across web and mobile.<br><br>

  <b>Key Features</b><br>
  • Secure login with role-based access for Customer, Seller & Admin<br>
  • User profiles with multiple addresses, saved payment methods & synced wishlist<br>
  • Product catalog with categories, variants, images, pricing & stock visibility<br>
  • Smart search with filters for price, brand, rating, category & quick suggestions<br>
  • Personalized recommendations & related product suggestions for higher conversions<br>
  • Cart management with auto-calculated pricing, tax, discounts & delivery charges<br>
  • Smooth checkout with wallet, promo codes, gift cards & multiple payment options<br>
  • Real-time order tracking with status updates from purchase to delivery<br>
  • Easy cancellations, returns, refunds & replacement support<br>
  • Seller dashboard to manage products, pricing, stock, orders & performance analytics<br>
  • Inventory auto-sync with orders, low-stock alerts & SKU-wise stock tracking<br>
  • Ratings & reviews with moderation for quality and authenticity<br>
  • Offers, coupons, deals & flash sale management<br>
  • Notifications via App/SMS/Email for orders, deliveries & promotions<br>
  • Admin panel for users, sellers, products, payments, revenue & marketplace control<br>
  • Real-time sales, product & customer analytics for business insights<br>
  • Cloud backup, security & multi-device data sync<br><br>

  <b>Benefits</b><br><br>
  • Boosts online sales with a smooth and intuitive shopping experience<br>
  • Reduces manual operations with automation & analytics<br>
  • Improves customer engagement and repeat purchases<br>
  • Enables sellers to manage listings, stock & orders efficiently<br>
  • Ensures secure, reliable, and scalable e-commerce operations<br><br>

  <b>Customization</b><br><br>
  We provide flexible customization options to align the product with your business workflows, branding, and operational needs.<br>
  Our approach focuses on adapting features and user experience to suit your processes — ensuring the solution fits your business rather than the other way around.<br><br>

  <b>Ideal For</b><br><br>
  Online Stores, Multi-Vendor Marketplaces, Retailers, D2C Brands, Wholesalers, Distributors, and Startups looking to build a powerful e-commerce platform.<br><br>
  `,
  image: ecommerce, // replace with your actual image import
  info: {
    Category: "E-Commerce & Marketplace",
  },
},

{
  id: 14,
  title: "Human Resource Management System (HRMS)",
  subtitle: "Smart, Automated & Scalable Workforce Management Platform",
  description: `
  <b>Streamline HR operations, empower employees with self-service access, and manage your entire workforce on one intelligent platform.</b> From onboarding to attendance, payroll, performance reviews, and workflows, this HRMS reduces manual work, boosts transparency, and helps HR teams focus on people — not paperwork.<br><br>

  <b>A modern HR and employee management software</b> designed to simplify workforce administration for growing companies. The platform unifies employee records, attendance, shifts, leave, performance, payroll sync, documents, and approvals into one secure system accessible on web and mobile. With role-based access and automation, HR teams, managers, and employees stay connected and efficient.<br><br>

  <b>Core Features</b><br>
  • Centralized employee database with digital records & documents<br>
  • Attendance tracking with check-in/out, GPS, biometrics & leave management<br>
  • Timesheets & project-wise work hour logging with manager approvals<br>
  • Shift scheduling with automated reminders and swap options<br>
  • Payroll-ready data with salary structure mapping & payslip history<br>
  • Performance reviews with goals, feedback, scorecards & appraisals<br>
  • Employee Self-Service (ESS) portal for profile, requests, and updates<br>
  • API integrations with payroll, finance & third-party tools<br><br>

  <b>Business Value</b><br>
  • Reduces manual HR workload and accelerates approvals<br>
  • Enables accurate attendance–to–payroll mapping with zero errors<br>
  • Improves employee experience, engagement, and transparency<br>
  • Supports data-driven HR decisions through real-time insights<br>
  • Ensures compliance, data security & centralized control<br><br>

  <b>Customization</b><br>
  We provide flexible customization options to align the product with your business workflows, branding, and operational needs.<br>
  Our approach focuses on adapting features and user experience to suit your processes — ensuring the solution fits your business rather than the other way around.<br><br>

  <b>Ideal For</b><br>
  Small to large businesses, IT companies, startups, BPOs, manufacturing, retail, healthcare, education, agencies, and multi-branch organizations.<br><br>

  <b>Why Choose Us</b><br>
  Easy to implement, highly configurable, and built to scale. With automation, mobile access, and strong controls, it transforms HR from paperwork to productivity.<br><br>
  `,
  image: hrms, // replace with your actual imported image
  info: {
    Category: "HR & Workforce Management",
  },
},

{
  id: 15,
  title: "Customer Relationship Management (CRM) System",
  subtitle: "Smarter Sales, Stronger Relationships, Seamless Collaboration",
  description: `
  <b>Unlock smarter customer relationships, faster sales cycles, and seamless team collaboration</b> with a modern CRM designed for growth. Manage leads, contacts, deals, tasks, communication, and customer support in one place. Gain real-time visibility of your pipeline, improve conversions, and deliver personalized experiences that keep customers loyal.<br><br>

  <b>A unified Customer Relationship Management platform</b> built to streamline sales, marketing, and support operations. The intuitive interface helps teams work efficiently from day one by bringing all customer touchpoints into a single view.<br><br>

  <b>Core Features</b><br>
  • Lead tracking with source tagging and conversion history<br>
  • Contact and account management with communication timeline<br>
  • Kanban-style sales pipeline for clear deal movement and forecasting<br>
  • Built-in email, calls, chat, and activity logging<br>
  • Tasks, reminders, calendar sync, and meeting alerts<br>
  • Integrations with email, payment, marketing, and third-party apps<br><br>

  <b>Business Value</b><br>
  • Faster lead-to-deal conversion and higher revenue<br>
  • Centralized customer data reduces manual work and errors<br>
  • Better team collaboration and accountability<br>
  • Improved customer experience and long-term retention<br>
  • Actionable insights for strategic decision-making<br>
  • Scales with your business without operational complexity<br><br>

  <b>Customization</b><br>
  Flexible to match your business processes, industry needs, team structure, and data rules.<br>
  Configure fields, modules, pipelines, approvals, automations, and reports based on your workflows.<br><br>

  <b>Ideal For</b><br>
  Businesses aiming to centralize customer data, boost sales productivity, automate workflows, and improve customer service.<br>
  Perfect for growing companies that handle recurring customer interactions, multi-channel sales, or field and remote teams.<br><br>

  <b>Why Choose Us</b><br>
  Simple to use, secure, and performance-driven.<br>
  Backed by continuous product upgrades, reliable support, and flexible integration capabilities to help you achieve growth with confidence.<br><br>
  `,
  image: crm, // replace with your actual imported image
  info: {
    Category: "Sales & Customer Management",
  },
},

{
  id: 16,
  title: "Appointment & Booking Management System",
  subtitle: "Smart Scheduling, Seamless Bookings, and Automated Management",
  description: `
  <b>Deliver a seamless booking experience</b> that boosts customer satisfaction and business efficiency. This smart Appointment and Booking Management System lets customers book services online with real-time availability, while helping businesses manage schedules, staff, payments, reminders, and locations from one platform. Designed for web and mobile with automation, security, and fast onboarding.<br><br>

  <b>A complete appointment scheduling solution</b> for service-based businesses. Customers can book appointments anytime through a user-friendly interface, while staff and admins manage calendars, services, customer records, and payments with ease. The system prevents double booking, syncs with external calendars, automates reminders, and centralizes booking data. Accessible on web and mobile, it increases show-up rates, reduces manual work, and drives more bookings.<br><br>

  <b>Core Features</b><br>
  • Online booking with staff, date, time, and service selection<br>
  • Real-time availability and instant confirmations<br>
  • Service catalog with pricing, duration, and categories<br>
  • Staff scheduling with working hours, skills, and role assignment<br>
  • Calendar with day, week, and month views<br>
  • Payment integrations with invoicing and refunds<br>
  • Mobile app for staff with push alerts and calendar sync<br><br>

  <b>Business Value</b><br>
  • Reduces no-shows with smart reminders<br>
  • Saves time and eliminates manual scheduling<br>
  • Increases bookings via online and social channels<br>
  • Enhances customer experience and retention<br>
  • Provides clear insights into staff productivity and occupancy<br>
  • Enables data-based business decisions<br><br>

  <b>Customization</b><br>
  Tailor services, pricing, timing, branding, workflows, notifications, locations, and user access to match your business needs.<br><br>

  <b>Ideal For</b><br>
  Salons, spas, clinics, fitness centers, coaching institutes, repair services, photographers, consultants, wellness centers, and any appointment-based business.<br><br>

  <b>Why Choose Us</b><br>
  Easy to use, secure, and scalable. Built with automation and flexibility to help you grow and deliver a smooth booking journey.<br><br>
  `,
  image: appointment, // replace with your actual imported image
  info: {
    Category: "Service & Appointment Management",
  },
},

{
  id: 17,
  title: "Recruitment & Applicant Tracking System",
  subtitle: "Smarter Hiring, Simplified Recruitment, and Data-Driven Decisions",
  description: `
  <b>Streamline hiring and build a strong workforce</b> with a modern Recruitment & Applicant Tracking System that simplifies sourcing, screening, interviewing, and hiring. The platform digitizes end-to-end recruitment operations, reduces manual work, and enables faster, data-driven decisions for HR teams, recruiters, and hiring managers.<br><br>

  <b>A complete web and mobile-based recruitment solution</b> that centralizes job posting, candidate sourcing, resume parsing, applicant tracking, interview scheduling, communication, reporting, and talent management. Role-based access ensures secure and controlled usage for Admins, Recruiters, and Hiring Managers. Suitable for startups, SMEs, enterprises, and staffing firms, with scalable workflows to support different hiring models.<br><br>

  <b>Core Features</b><br>
  • Secure login with role-based dashboards and permissions<br>
  • Job posting and management with multi-channel publishing<br>
  • AI-enabled resume parsing with structured candidate profiles<br>
  • Applicant tracking pipeline from Applied to Hired or Rejected<br>
  • Interview scheduling with calendar sync and automated reminders<br>
  • Email tools with templates, bulk send, and communication logs<br>
  • Candidate CRM with talent pool, tagging, and history tracking<br>
  • Reports and analytics on key hiring metrics and recruiter performance<br>
  • Integration-ready for job boards, HRMS, email, and calendar systems<br>
  • Mobile access for quick updates, schedules, and notifications<br><br>

  <b>Business Value</b><br>
  • Faster and more efficient hiring cycles<br>
  • Reduced manual tasks through automation<br>
  • Better collaboration between hiring teams<br>
  • Improved candidate experience and engagement<br>
  • Clear visibility into recruitment metrics and performance<br><br>

  <b>Customization</b><br>
  Flexible settings allow tailoring of hiring stages, workflows, access levels, communication templates, and approval structures. Optional modules include background verification, onboarding, vendor hiring, assessments, and automation—making the system adaptable for growing hiring needs.<br><br>

  <b>Why Choose Us</b><br>
  Reliable, secure, and easy to use. Regular enhancements, strong data protection, responsive support, and configurable features help organizations hire smarter, faster, and with confidence.<br><br>
  `,
  image: recruit, // replace with your actual imported image file
  info: {
    Category: "HR & Recruitment Management",
  },
},

{
  id: 18,
  title: "Event Management System",
  subtitle: "Plan, Organize, and Deliver Seamless Event Experiences",
  description: `
  <b>Plan, organize, and manage events of any scale</b> with an all-in-one Event Management System designed to simplify operations, boost attendee engagement, and deliver seamless event experiences. From registrations to scheduling, communication, check-ins, and post-event insights, the platform ensures end-to-end event execution without complexity.<br><br>

  <b>A powerful web and mobile-based solution</b> that centralizes event planning, attendee management, ticketing, communication, and analytics. The intuitive interface allows organizers to set up events quickly and manage everything in one place. Suitable for corporate events, conferences, seminars, workshops, expos, cultural programs, and hybrid formats. Customizable modules make the system adaptable to diverse event requirements and workflows.<br><br>

  <b>Core Features</b><br>
  • Event creation, branding, agenda, and session management<br>
  • Online registrations, ticketing, passes, and payment options<br>
  • Attendee profiles, confirmation emails, and smart reminders<br>
  • QR/digital check-in and access management<br>
  • Multi-channel announcements, alerts, and communication<br>
  • Vendor and staff coordination with tasks and permissions<br>
  • Exhibitor and sponsor mapping with allocation options<br>
  • Real-time dashboards and performance analytics<br>
  • Web and mobile access with secure authentication<br>
  • Integration-ready for payment, CRM, email, and marketing tools<br><br>

  <b>Business Value</b><br>
  • Saves time through automation and centralized control<br>
  • Enhances attendee experience with smooth interactions<br>
  • Provides better visibility with real-time tracking and analytics<br>
  • Enables collaboration among organizers, vendors, and teams<br>
  • Scales effortlessly for single or multi-event management<br><br>

  <b>Customization</b><br>
  Configurable modules and add-ons allow customization of workflows, access levels, branding, registration flows, and communication styles — making it ideal for small, mid, and large-scale organizers.<br><br>

  <b>Why Choose Us</b><br>
  Reliable, secure, and user-friendly. Regular enhancements, strong data handling, and responsive support empower organizers to manage events professionally and deliver memorable experiences with confidence.<br><br>
  `,
  image: event, // replace with your actual imported image file
  info: {
    Category: "Event Planning & Management",
  },
},

{
  id: 19,
  title: "Retail POS System (Web + Mobile)",
  subtitle: "Smart Retail Management for Modern Businesses",
  description: `Accelerate business growth and streamline store operations with a POS that speeds up checkout, reduces billing errors and improves workflow efficiency.<br><br>

Clear dashboards and focused reports help you understand performance, control costs and make informed decisions that support steady revenue growth.<br><br>

<b>Product Overview</b><br>



<b>Core Features</b><br>

• Fast billing with product search, barcode and QR scanning<br>
• Real-time inventory with low stock alerts and adjustments<br>
• Centralized catalog, pricing and tax configuration<br>
• Customer profiles, purchase history and loyalty options<br>
• Support for cards, UPI, wallets, cash, split payments, returns and refunds<br>
• GST compliant invoicing, tax settings and reporting<br>
• User roles, access control and activity logs<br>
• Cash register handling with shift and day-end summaries<br>
• Works on web and mobile with secure access<br>
• Integration ready for accounting, ecommerce and payment gateways<br><br>

<b>Business Value</b><br>

• Faster checkout and improved customer experience<br>
• Reduced stock loss through accurate tracking<br>
• Better decisions using sales and performance insights<br>
• Simplified tax management and audit-friendly records<br>
• Scales with store expansion and business growth<br>
• Less manual work and higher staff efficiency<br><br>

<b>Customization</b><br>

Configuration and customization options align the POS with your workflows, store format, user roles and reporting needs.<br>

Optional modules and add-ons can be enabled based on requirements.<br><br>

<b>Suitable For</b><br>

Supports a wide range of retail formats from small independent stores to multi-outlet retail operations across various categories and business sizes.<br><br>

<b>Why Choose Our Product</b><br>

Reliable, practical and easy to use.<br>

Regular improvements, secure data handling, responsive support and flexible customization help retailers run operations smoothly and achieve consistent business growth.<br><br>`,
  image: retail,
  info: {
    Category: "Web + Mobile App",
  }
},

{
  id: 20,
  title: "Privacy-Focused Browser",
  subtitle: "Fast, Secure, and Private Browsing Experience",
  description: `
  <b>Experience fast, secure, and private browsing</b> without trackers, intrusive ads, or data profiling. 
  A modern browser built for people who value privacy, control, and a distraction-free online experience. 
  Surf the web with built-in protection, encrypted sync, and smart performance tools that enhance productivity 
  across web and mobile.<br><br>

  <b>A next-generation privacy-first browser</b> that puts user data protection at the core. 
  Unlike traditional browsers that track behavior for ads, this browser stores all user information in encrypted form 
  and gives complete control over what is shared. With private sync across devices, multiple browsing modes, ad 
  and tracker blocking, a secure password vault, and an intuitive interface, users enjoy safe browsing without 
  compromising speed or functionality. Ideal for personal, work, family, or developer use with customizable settings 
  and a clean, user-friendly design.<br><br>

  <b>Core Features</b><br>
  • Encrypted login and account sync for bookmarks, tabs, and history<br>
  • Customizable start page with shortcuts, top sites, and news feed<br>
  • Built-in ad, pop-up, and tracker blocking<br>
  • Multiple browsing modes for Work, Personal, Kids, and Developer<br>
  • Tab management with grouping, pinning, and session restore<br>
  • Privacy dashboard with tracker and ad blocking stats<br>
  • Extensions support and built-in developer tools<br><br>

  <b>Business Value</b><br>
  • Protects users from tracking and data misuse<br>
  • Speeds up browsing by blocking heavy ads and scripts<br>
  • Enhances productivity with focused modes and tab control<br>
  • Safe option for kids and family devices<br>
  • Strong security and encryption reduce cyber risks<br><br>

  <b>Customization</b><br>
  Users can personalize browsing modes, homepage layout, privacy preferences, 
  resource settings, shortcuts, and extensions to suit individual or professional needs.<br><br>

  <b>Ideal For</b><br>
  Privacy-conscious users, students, professionals, families, developers, researchers, remote workers, 
  startups, and businesses that need secure browsing without data tracking or ads.<br><br>

  <b>Why Choose Us</b><br>
  A secure, fast, and user-friendly browser built for privacy, transparency, and performance. 
  Regular updates, zero data tracking, encrypted sync, and reliable support ensure a safe and smooth browsing experience.<br><br>
  `,
  image: privacy, // replace with your actual imported image
  info: {
    Category: "Privacy & Productivity Tools",
  },
},

{
  id: 3,
  title: "Restaurant & Café Billing System",
  subtitle: "Smart POS for F&B Businesses",
  description: `
  <b>Run your restaurant or café with faster billing, smooth order handling, and real-time coordination.</b><br><br>
  Designed for <b>cafes, bakeries, cloud kitchens, restaurants, and food trucks,</b> this solution helps you speed up service, reduce errors, and deliver a delightful dining experience.<br><br>

  A <b>modern F&B billing and POS system</b> built to simplify dine-in, takeaway, and online orders. From menu setup, smart billing, and table management to kitchen display, payments, and GST-ready reports — everything works in one place.<br><br>
  The intuitive interface helps staff learn quickly and serve customers faster. Works on <b>web, tablet, and mobile</b> with secure cloud access and multi-outlet support.<br><br>

  <b>Key Features</b><br>
  • Fast billing for dine-in, takeaway, delivery, and counter sales<br>
  • Digital menu, table and order management with KOT printing<br>
  • Inventory and ingredient tracking with low stock alerts<br>
  • Menu management with categories, pricing, add-ons and variants<br>
  • KDS for real-time kitchen order display and updates<br>
  • Multiple payment modes: cash, UPI, card, wallet, split bill<br>
  • Day-wise, product-wise, GST and sales reports with exports<br>
  • Employee roles, permissions and activity logs<br>
  • Works with thermal and A4 invoice printing<br><br>

  <b>Business Benefits</b><br>
  • Faster order processing and reduced wait times<br>
  • Lower inventory wastage and better cost control<br>
  • Smart insights to grow sales and repeat visits<br>
  • Error-free billing with GST and audit-ready reports<br>
  • Improved coordination between kitchen and service staff<br><br>

  <b>Customization</b><br>
  Easily configure <b>menu items, pricing, tax, KOT format, table layout, permissions, and reports</b> to match your restaurant’s workflow and service style.<br><br>
  Our approach ensures the system fits your business operations — not the other way around.<br><br>

  <b>Ideal For</b><br>
  Cafes, Restaurants, QSRs, Cloud Kitchens, Bakeries, Chai Outlets, Ice Cream Shops, Food Trucks, Bars, Canteens, Franchise Chains, and Multi-Outlet Brands.<br><br>
  `,
  image: beverage, // replace with your actual image variable or import
  info: {
    Category: "Web & Mobile POS",
  },
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
  background: "linear-gradient(135deg, #0B0F3D 0%, #1B2360 100%)",
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
  minHeight: "1900px",
  overflowY: "auto",
  border: "1px solid rgba(255,255,255,0.06)",
  boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
  scrollbarWidth: "thin",
  scrollbarColor: "#64b5ff rgba(255,255,255,0.02)",
  maxHeight: "80vh",

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
    minHeight: "auto", // ✅ override this so no long empty space
    height: "auto", // ✅ allow it to resize properly
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

  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact");
  };

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

      {/* HERO SECTION */}
      <div className="services-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Our Products</h1>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="solutions-intro-section">
        <div className="intro-image">
          <img src={introImage} alt="Solutions Illustration" />
        </div>
        <div className="intro-text">
  <h2>Products That Empower Digital Growth</h2>
  <p>
    At <strong>Manovate Technologies</strong>, we design and build intelligent digital 
    products that simplify workflows, enhance user experience, and accelerate business success.
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
                    <SmallKey>Category</SmallKey>
                    <SmallVal>{selected.info.Category}</SmallVal>
                  </Box>
                </Box>
              </InfoCard>
            </Banner>

            <TextSection>
              <Title>{selected.title}</Title>
              <Typography variant="subtitle1" sx={{ mb: 2, color: "#7b97a9" }}>
                {selected.subtitle}
              </Typography>
              <Desc dangerouslySetInnerHTML={{__html: selected.description }}></Desc>
              <button className="cta-button" onClick={handleContactClick}>
            Contact Us
          </button>
            </TextSection>
          </ContentArea>

          {/* Right Sidebar */}
          <Sidebar>
            <SidebarBox>
              

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



    </>
  );
}
