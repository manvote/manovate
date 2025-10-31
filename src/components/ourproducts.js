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

const products = [
{
  id: 1,
  title: "Messaging Application",
  subtitle: "Modern Communication Platform",
  description: `<b>The Messaging Application</b> is a next-generation communication platform designed to enable secure, reliable, and real-time interaction among users across the globe.<br><br>
Built with a focus on <b>speed, simplicity, and scalability</b>, the system allows individuals and groups to connect seamlessly through text messages, multimedia sharing, and voice or video calls.<br><br>
The application is engineered with a <b>user-first approach</b>, delivering an intuitive interface that enhances accessibility while maintaining top-tier performance.<br><br>
Through its robust <b>cloud-backed infrastructure</b>, it supports uninterrupted data synchronization, ensuring users can transition effortlessly between devices without losing their chat history or preferences.<br><br>
Beyond messaging, the platform fosters engagement through features like <b>media sharing, stories, and real-time notifications</b>.<br><br>
Each interaction is backed by <b>state-of-the-art encryption protocols</b>, ensuring total privacy and data integrity.<br><br>
With <b>cloud-based backup</b> and intelligent data handling, users can securely store and restore their conversations with ease.<br><br>
The system architecture follows <b>modern design principles</b>, combining scalability, responsiveness, and efficiency.<br><br>
It supports <b>millions of concurrent users</b> through WebSocket-driven communication channels, providing instant message delivery and live updates.<br><br>
The integration of <b>analytics and administrative tools</b> allows system operators to monitor platform performance, maintain compliance, and deliver an optimized user experience.<br><br>
In essence, this project redefines the standards of digital communication by offering a <b>unified, secure, and user-centric messaging ecosystem</b>.<br><br>
It merges <b>technology, convenience, and privacy</b> into a single platform that empowers individuals, teams, and organizations to stay connected anytime, anywhere.<br><br>`,
  image: message,
  info: {
    Category: "Web App",
  }
},

{
  id: 2,
  title: "Swiggy-Style Food Delivery Application",
  subtitle: "Smart Food Ordering & Delivery System",
  description: `<b>The Swiggy-Style Food Delivery Application</b> is a comprehensive digital ecosystem designed to streamline the end-to-end food ordering and delivery process.<br><br>
Built with a focus on <b>convenience, efficiency, and security</b>, the platform connects customers, restaurants, and delivery partners in real time to deliver an unparalleled ordering experience.<br><br>
At its core, the application enables users to explore nearby restaurants, browse digital menus, customize their orders, and complete secure transactions — all within a modern and responsive interface.<br><br>
From first-time users to frequent customers, the system ensures <b>intuitive navigation, personalized recommendations, and effortless reordering</b> through intelligent caching and role-based access.<br><br>
The platform is engineered for <b>scalability and reliability</b>, supporting thousands of concurrent users through real-time synchronization and cloud-based infrastructure.<br><br>
Delivery partners benefit from optimized route management, live order tracking, and transparent earnings reports, while restaurants can efficiently manage menus, monitor orders, and review performance through an integrated dashboard.<br><br>
Every transaction is protected through <b>secure payment gateways, encrypted sessions, and verified authentication protocols</b>.<br><br>
Customers enjoy real-time updates from order placement to delivery completion, backed by <b>GPS-based tracking and automated notifications</b>.<br><br>
Additionally, a robust review system promotes transparency and continuous service improvement across all stakeholders.<br><br>
Administrative users are equipped with powerful tools to oversee operations, monitor platform activity, and generate <b>data-driven insights</b>.<br><br>
Advanced analytics visualize key metrics such as <b>top-performing restaurants, delivery efficiency, and peak demand hours</b>, empowering decision-makers with actionable intelligence.<br><br>
Designed with a <b>mobile-first architecture</b> and built on modular APIs, this food delivery system represents a seamless blend of <b>user experience, operational excellence, and technological innovation</b> — redefining the way people order, deliver, and experience food in the digital era.<br><br>`,
  image: food,
  info: {
    Category: "Web App",
  }
},

{
  id: 3,
  title: "Textile & Clothing Billing Software",
  subtitle: "Smart Retail Management System",
  description: `<b>The Textile & Clothing Billing Software</b> is a fully integrated retail management system engineered to streamline operations across textile stores, fashion boutiques, and apparel warehouses.<br><br>
Designed with a focus on <b>accuracy, efficiency, and scalability</b>, the system unifies billing, inventory, purchasing, and accounting processes into one seamless platform.<br><br>
This solution empowers businesses to handle day-to-day transactions with <b>precision and speed</b>.<br><br>
From point-of-sale billing to supplier management, every workflow is digitally optimized to reduce manual effort and operational errors.<br><br>
The system automatically manages inventory levels, tracks product variants such as <b>size and color</b>, and synchronizes stock movements across branches or warehouses in real time.<br><br>
Advanced billing and payment modules ensure <b>flexible transactions</b> through multiple modes, including cash, card, and UPI, while <b>secure authentication mechanisms</b> safeguard sensitive business data.<br><br>
With <b>barcode integration</b>, each product can be identified, billed, and tracked instantly, improving accuracy at every touchpoint.<br><br>
The platform’s powerful <b>reporting and analytics engine</b> provides actionable insights into <b>sales trends, customer preferences, and profit performance</b>.<br><br>
It supports <b>data-driven decision-making</b> through interactive dashboards and downloadable summaries, helping management optimize business growth and operational efficiency.<br><br>
From backend controls to staff permissions, every function is built on a <b>robust security framework</b> that ensures transparency and accountability.<br><br>
<b>Audit logs, expense tracking, and automated profit calculations</b> further enhance reliability.<br><br>
By combining <b>automation, intelligence, and ease of use</b>, this software redefines how textile and clothing retailers operate.<br><br>
It not only simplifies daily business workflows but also enables <b>long-term scalability and digital transformation</b> within the retail environment — helping businesses focus less on processes and more on delivering quality customer experiences.<br><br>`,
  image: texttile,
  info: {
    Category: "Software",
  }
}
,
{
  id: 4,
  title: "Healthcare & Medical Billing Software",
  subtitle: "Comprehensive Hospital Management Platform",
  description: `<b>The Healthcare & Medical Billing Software</b> is a comprehensive hospital management platform engineered to optimize every aspect of <b>patient care, administrative workflow, and financial processing</b>.<br><br>
Designed with <b>precision, scalability, and data integrity</b> at its core, the system enables hospitals, clinics, and healthcare networks to deliver high-quality service while maintaining operational efficiency.<br><br>
This solution seamlessly integrates <b>patient registration, appointment scheduling, inpatient management, pharmacy operations, laboratory coordination, and billing</b> into one centralized platform.<br><br>
It automates routine administrative tasks, reduces manual errors, and ensures <b>accurate, real-time data flow</b> between departments.<br><br>
From a patient’s first visit to their final discharge, every record is <b>securely stored, easily accessible, and systematically organized</b>.<br><br>
The billing engine is built to handle <b>complex hospital transactions</b> effortlessly — including consultations, diagnostics, surgeries, pharmacy sales, and room charges.<br><br>
It supports <b>multi-mode payments, insurance claims, and automated invoice generation</b> with complete tax and compliance management.<br><br>
By connecting <b>finance, clinical, and inventory systems</b>, it offers hospitals a single source of truth for financial and operational data.<br><br>
Doctors, administrators, and staff benefit from <b>real-time dashboards</b> that provide visibility into hospital operations — patient occupancy, revenue flow, and departmental performance.<br><br>
The system’s <b>advanced analytics and reporting tools</b> empower decision-makers to monitor key metrics, identify inefficiencies, and make data-driven improvements.<br><br>
<b>Security</b> is a top priority. With <b>role-based access control, encrypted authentication, and audit logging</b>, the platform ensures that sensitive medical and financial data is always protected.<br><br>
<b>Notifications and alerts</b> enhance responsiveness, while the built-in audit trail upholds accountability and regulatory compliance.<br><br>
Designed for <b>multi-branch scalability</b>, the software adapts effortlessly to various healthcare environments — from small clinics to large hospitals.<br><br>
By combining <b>automation, intelligence, and reliability</b>, it redefines medical administration into a seamless, transparent, and patient-focused experience.<br><br>`,
  image: medical,
  info: {
    Category: "Software",
  }
}
,
{
  id: 5,
  title: "Beauty & Wellness Billing Software",
  subtitle: "Smart Management Platform for Salons, Spas & Wellness Centers",
  description: `<b>The Beauty & Wellness Billing Software</b> is a comprehensive management platform developed to simplify and enhance operations across <b>salons, spas, gyms, and wellness centers</b>.<br><br>
It unifies essential business functions — including <b>appointment scheduling, billing, customer management, staff coordination, and analytics</b> — into a single, intelligent system.<br><br>
Designed with a deep understanding of the <b>wellness industry</b>, the software provides an elegant and efficient user experience for both service providers and customers.<br><br>
Front-desk teams can <b>schedule appointments, assign staff, and generate bills</b> in seconds, while customers enjoy <b>personalized, streamlined service interactions</b>.<br><br>
At its core, the solution integrates <b>robust billing and point-of-sale capabilities</b>, allowing businesses to process payments across multiple methods — from cash and cards to UPI and digital wallets.<br><br>
<b>Loyalty and membership modules</b> automatically apply discounts, track benefits, and boost customer retention with minimal effort.<br><br>
For management, the platform offers <b>complete visibility into operations</b> through a centralized dashboard.<br><br>
It tracks <b>sales performance, staff productivity, service popularity, and customer engagement trends</b>.<br><br>
<b>Advanced reporting and analytics</b> transform raw data into actionable business insights, empowering owners to make smarter, growth-oriented decisions.<br><br>
<b>Security and reliability</b> are built into every layer.<br><br>
<b>Role-based access controls</b> ensure data privacy, while <b>cloud-based backups</b> guarantee business continuity and peace of mind.<br><br>
The software’s <b>modular and scalable architecture</b> allows it to adapt to both small independent studios and multi-branch franchise networks.<br><br>
In essence, this solution transforms <b>beauty and wellness businesses</b> into digitally empowered, customer-centric enterprises — enabling them to deliver exceptional service experiences while maintaining operational excellence and sustainable growth.<br><br>`,
  image: beauty,
  info: {
    Category: "Software",
  }
}
,
{
  id: 6,
  title: "Educational Sector Billing Software",
  subtitle: "Smart Financial & Administrative Management Platform for Institutions",
  description: `<b>The Educational Sector Billing Software</b> is a comprehensive digital platform designed to modernize and automate the <b>financial and administrative operations</b> of educational institutions.<br><br>
Suitable for <b>schools, colleges, coaching centers, and training academies</b>, it brings together all essential processes — from <b>fee billing and payment tracking to attendance management and academic scheduling</b> — into one integrated ecosystem.<br><br>
The platform provides a <b>unified interface</b> for administrators, teachers, accountants, and students to manage daily activities with precision and ease.<br><br>
It automates the billing lifecycle, handling <b>fee structures, discounts, scholarships, and installments</b> seamlessly while ensuring transparent financial operations.<br><br>
Payments are processed through <b>multiple secure gateways</b>, and all transactions are automatically logged for <b>auditing and reporting</b>.<br><br>
Beyond billing, the system enhances the academic experience through modules that manage <b>student profiles, course enrollments, attendance records, and examination results</b>.<br><br>
<b>Real-time dashboards</b> give administrators visibility into institutional performance, while detailed <b>analytics</b> support informed decision-making.<br><br>
Staff can efficiently manage batches, schedules, and faculty assignments without manual errors or duplication.<br><br>
<b>Data security and reliability</b> are at the foundation of this solution.<br><br>
With <b>encrypted authentication, role-based access control, and cloud-based backup architecture</b>, it ensures that all academic and financial information remains safe and recoverable.<br><br>
The platform also supports <b>seamless scalability</b>, making it suitable for institutions of any size — from small learning centers to multi-branch organizations.<br><br>
By combining <b>automation, analytics, and accessibility</b>, this software redefines educational management.<br><br>
It not only simplifies operations but also fosters <b>transparency, accountability, and growth</b> across every department, empowering institutions to focus more on learning outcomes and less on administrative challenges.<br><br>`,
  image: educational,
  info: {
    Category: "Software",
  }
}
,
{
  id: 7,
  title: "Hospitality & Tourism Billing Software",
  subtitle: "End-to-End Management System for Hotels, Resorts & Travel Agencies",
  description: `<b>The Hospitality & Tourism Billing Software</b> is an advanced digital platform built to modernize the operations of <b>hotels, resorts, and travel agencies</b>.<br><br>
It delivers an end-to-end solution for <b>guest management, reservations, billing, staff coordination, and analytics</b> — transforming traditional hospitality workflows into a seamless, technology-driven experience.<br><br>
The platform brings together all key functions under one system, ensuring that every department — from <b>front desk to housekeeping</b> — works in perfect synchronization.<br><br>
<b>Guest information, room bookings, restaurant orders, and service requests</b> are centrally managed, reducing manual tasks and improving efficiency.<br><br>
Whether handling individual stays or group tours, the software ensures a consistent, high-quality experience for every guest.<br><br>
At its core, the <b>billing engine</b> is built for <b>speed, accuracy, and transparency</b>.<br><br>
It automatically generates invoices for <b>room stays, services, and packages</b>, integrating <b>tax calculations, discounts, and loyalty rewards</b> in real time.<br><br>
<b>Secure payment gateways</b> support multiple transaction methods, enabling guests to pay effortlessly through cash, card, or digital wallets.<br><br>
Managers and administrators gain access to <b>powerful analytics</b> that provide actionable insights into <b>occupancy, revenue, and staff productivity</b>.<br><br>
<b>Visual dashboards</b> highlight performance metrics, helping decision-makers identify trends, optimize pricing, and improve profitability.<br><br>
The platform also supports <b>multi-property management</b>, allowing hotel chains and travel groups to oversee operations across different locations from a centralized interface.<br><br>
<b>Data security</b> is built into every layer, with <b>encrypted authentication, cloud backups, and role-based access</b> ensuring complete control and protection.<br><br>
Whether it’s a single boutique resort or a large hospitality group, the software adapts to every scale with <b>reliability and scalability</b>.<br><br>
By combining <b>automation, intelligence, and user-friendly design</b>, this solution redefines the standards of hospitality management.<br><br>
It empowers businesses to deliver <b>personalized guest experiences</b>, streamline administrative workflows, and maximize operational efficiency — setting the foundation for <b>long-term growth and customer loyalty</b> in the modern tourism industry.<br><br>`,
  image: hospitality,
  info: {
    Category: "Software",
  }
}
,
{
  id: 8,
  title: "Automation Testing Software",
  subtitle: "Intelligent Quality Assurance Platform for Web, Mobile & API Testing",
  description: `<b>The Automation Testing Software</b> is an advanced testing platform engineered to streamline and automate <b>quality assurance</b> across web, mobile, and API applications.<br><br>
Built for modern development teams, it simplifies complex testing workflows while delivering <b>precision, speed, and scalability</b> in every stage of the software testing process.<br><br>
This platform centralizes all testing activities — from <b>planning and test creation to execution, analysis, and reporting</b>.<br><br>
Its intelligent architecture supports multiple testing levels, empowering <b>QA professionals, developers, and automation engineers</b> to collaborate efficiently within a unified environment.<br><br>
The system supports various automation approaches, allowing both <b>no-code test creation</b> for non-technical users and <b>full-code scripting</b> for advanced developers.<br><br>
A key strength of this solution lies in its <b>AI-driven self-healing engine</b>.<br><br>
The platform automatically detects <b>UI or structural changes</b> within applications, updates locators, and repairs failing tests in real time — drastically reducing maintenance costs.<br><br>
It ensures that automated test suites remain <b>resilient</b> even as products evolve rapidly.<br><br>
The platform integrates seamlessly with <b>continuous integration and deployment (CI/CD) tools</b>, enabling teams to trigger automated test runs directly from their pipelines.<br><br>
<b>Parallel test execution</b> across multiple browsers, operating systems, and devices ensures comprehensive coverage with minimal time investment.<br><br>
<b>Detailed reports and analytics dashboards</b> provide visibility into execution results, performance trends, and areas requiring optimization.<br><br>
<b>Security and scalability</b> are built into the core of the system.<br><br>
With <b>encrypted data handling, cloud-ready infrastructure, and role-based access control</b>, it guarantees the integrity of sensitive testing data.<br><br>
Whether deployed for small development teams or enterprise-level environments, the platform scales effortlessly to meet the demands of diverse projects.<br><br>
In essence, this <b>Automation Testing Software</b> transforms quality assurance into an <b>intelligent, data-driven process</b>.<br><br>
It empowers organizations to release faster, reduce manual effort, and maintain product quality at scale — redefining how teams approach <b>software reliability in the modern DevOps ecosystem</b>.<br><br>`,
  image: automation,
  info: {
    Category: "Software",
  }
}
,
{
  id: 9,
  title: "Email System Application",
  subtitle: "Smart, Secure, and Collaborative Communication Platform",
  description: `<b>The Email System Application</b> is a comprehensive communication platform designed to enhance <b>productivity, collaboration, and security</b> across organizational communication.<br><br>
It integrates <b>advanced email functionalities</b>, intelligent organization tools, and collaborative features into a single, unified ecosystem that adapts to both individual and enterprise needs.<br><br>
Built with a focus on <b>speed, usability, and data integrity</b>, the system allows users to send, receive, and manage emails seamlessly across web and mobile platforms.<br><br>
It consolidates all communication into structured inboxes, supports threaded conversations, and ensures that every interaction — from composing messages to managing attachments — happens efficiently and securely.<br><br>
Beyond traditional emailing, the application promotes <b>workplace collaboration</b> by introducing shared inboxes, internal notes, and real-time team discussions.<br><br>
Departments can coordinate tasks, assign responsibilities, and manage communication workflows directly within the platform, eliminating the need for external tools.<br><br>
<b>Integration</b> is at the heart of the system.<br><br>
It connects effortlessly with <b>calendars, contact directories, CRM systems, and third-party applications</b>, creating a unified workspace that supports scheduling, data sharing, and event management.<br><br>
With <b>smart search, automated filters, and customizable labels</b>, users can organize their digital communication landscape with precision and clarity.<br><br>
<b>Security</b> is a cornerstone of the solution.<br><br>
It employs <b>strong encryption, spam detection, and access control mechanisms</b> to ensure that sensitive data remains confidential and compliant with industry standards.<br><br>
The system also supports <b>multi-device synchronization, offline access, and cloud-based backups</b>, ensuring consistent availability and protection of user data.<br><br>
By combining <b>intuitive design, advanced technology, and enterprise-grade reliability</b>, this Email System Application reimagines how organizations communicate.<br><br>
It delivers an <b>intelligent, secure, and collaborative environment</b> that empowers teams to connect efficiently, manage communication effectively, and operate with confidence in a <b>digital-first world</b>.<br><br>`,
  image: email,
  info: {
    Category: "Web App",
  }
}
,
{
  id: 10,
  title: "Embedded Business Intelligence (BI) Software",
  subtitle: "Integrated Analytics for Smarter Decision-Making",
  description: `<b>The Embedded Business Intelligence (BI) Software</b> is an advanced analytics platform designed to integrate seamlessly within existing applications, providing users with <b>powerful, real-time insights</b> without leaving their workflow.<br><br>

It bridges the gap between raw data and strategic decision-making by embedding <b>dynamic dashboards, reports, and AI-driven analytics</b> directly into your product ecosystem.<br><br>

Built for <b>developers, data analysts, and enterprise users</b> alike, this solution transforms how organizations access, visualize, and interact with data.<br><br>

Through a unified interface, businesses can embed intuitive dashboards, generate interactive reports, and deliver <b>personalized analytics experiences</b> tailored to each user’s role and context.<br><br>

The platform ensures <b>real-time data connectivity</b> with multiple sources, enabling accurate and timely insights across all levels of decision-making.<br><br>

The system’s <b>AI-powered analytics engine</b> automatically identifies patterns, forecasts outcomes, and highlights key performance indicators, empowering users to move from observation to action.<br><br>

With <b>responsive visualizations</b> and interactive elements such as filters, drill-downs, and contextual commenting, teams can collaborate effectively and uncover deeper business insights.<br><br>

<b>Scalability and security</b> are at the heart of this solution.<br><br>

Built on a <b>cloud-ready architecture</b>, it supports large data volumes, high concurrency, and <b>enterprise-level encryption</b>, ensuring complete reliability and data protection.<br><br>

<b>White-label customization</b> allows organizations to align every visual and interface element with their branding, offering a cohesive user experience within their existing environment.<br><br>

In essence, the Embedded BI Software redefines business intelligence by integrating <b>advanced analytics where decisions happen</b> — inside the applications users rely on every day.<br><br>

It enables businesses to deliver <b>intelligent insights</b>, foster <b>data-driven cultures</b>, and accelerate growth by turning every product interaction into a source of <b>strategic value</b>.<br><br>`,
  image: embedded,
  info: {
    Category: "Web App",
  }
},

{
  id: 14,
  title: "Data Analysis & DataPrep System",
  subtitle: "Transforming Raw Data into Actionable Intelligence",
  description: `<b>The Data Analysis & DataPrep System</b> is a comprehensive platform engineered to simplify and streamline the entire data lifecycle — from raw data acquisition to insightful analytics.<br><br>

Designed for businesses and professionals who rely on <b>data-driven decision-making</b>, it bridges the gap between complex datasets and meaningful outcomes.<br><br>

At its core, the system automates the process of <b>data cleaning, transformation, and integration</b>. It intelligently detects errors, removes inconsistencies, and standardizes formats, ensuring that every dataset is reliable and analysis-ready.<br><br>

This automation eliminates the need for tedious manual intervention, drastically improving efficiency and accuracy across analytical workflows.<br><br>

The platform supports <b>seamless data connectivity</b> with multiple sources — including spreadsheets, databases, APIs, and cloud storage — enabling users to unify disparate data into a single, cohesive structure.<br><br>

Through its intelligent processing engine, it identifies <b>patterns, outliers, and correlations</b>, helping users discover insights that might otherwise remain hidden.<br><br>

Once data is prepared, users can explore it through an <b>interactive, visual dashboard</b> that provides an in-depth understanding of business performance, trends, and key metrics.<br><br>

These dashboards are designed for clarity, making it easy for both technical and non-technical users to interpret complex data with ease.<br><br>

<b>Security, scalability, and collaboration</b> are at the foundation of this solution.<br><br>

Role-based access controls ensure data privacy, while <b>cloud-based architecture</b> guarantees reliability and performance even under large-scale workloads.<br><br>

Teams can collaborate in real time, share reports, and maintain data consistency across departments.<br><br>

In essence, this <b>Data Analysis & DataPrep System</b> transforms how organizations handle and utilize data.<br><br>

By automating the most time-consuming parts of data management and empowering users with <b>actionable insights</b>, it enables faster, smarter, and more strategic business decisions — turning data into a true <b>competitive advantage</b>.<br><br>`,
  image: data,
  info: {
    Category: "Web App",
  }
},

{
  id: 15,
  title: "Payroll Application (Web + Mobile)",
  subtitle: "Automated, Secure, and Scalable Payroll Management",
  description: `<b>The Payroll Application (Web + Mobile)</b> is a comprehensive, cloud-based payroll management solution designed to automate and simplify every aspect of employee compensation and workforce administration.<br><br>

Built for scalability and precision, it serves organizations of all sizes — from startups to enterprises — ensuring <b>compliance, accuracy, and efficiency</b> in payroll operations.<br><br>

At its foundation, the system centralizes <b>employee information, attendance, leave, and salary structures</b>, providing a unified view of the workforce.<br><br>

The payroll engine automates complex calculations — including gross pay, deductions, bonuses, and tax withholdings — while integrating directly with attendance systems to ensure seamless synchronization.<br><br>

This not only minimizes human intervention but also ensures <b>real-time accuracy and transparency</b>.<br><br>

The application extends beyond payroll management by empowering employees with a <b>self-service portal</b> accessible via web and mobile devices.<br><br>

Employees can securely view their payslips, download tax documents, update personal details, and submit leave or reimbursement requests — reducing HR dependency and promoting autonomy.<br><br>

<b>Compliance and security</b> are integral to the system’s architecture.<br><br>

It automatically handles statutory obligations such as <b>PF, ESI, and TDS</b>, and generates detailed reports aligned with government regulations.<br><br>

With advanced <b>encryption protocols, cloud-based backups, and role-based access control</b>, sensitive payroll data remains fully protected.<br><br>

In addition, the platform features robust <b>analytics and dashboards</b> that deliver actionable insights into workforce costs, tax summaries, and payroll trends.<br><br>

Multi-branch organizations can manage distributed payrolls from a single dashboard, standardizing processes while maintaining flexibility at each level.<br><br>

Ultimately, the <b>Payroll Application</b> redefines payroll management by combining <b>automation, compliance, and mobility</b>.<br><br>

It enhances organizational productivity, empowers employees, and ensures every payment is processed accurately, securely, and on time — paving the way for a smarter, more efficient payroll experience.<br><br>`,
  image: payroll,
  info: {
    Category: "Web + Mobile App",
  }
},

{
  id: 16,
  title: "E-Commerce Application (Amazon / Flipkart Style)",
  subtitle: "Smart, Scalable, and Customer-Centric Online Marketplace",
  description: `<b>The E-Commerce Application (Amazon / Flipkart Style)</b> is a full-scale digital commerce platform engineered to redefine how businesses sell and customers shop online.<br><br>

It combines <b>intuitive design, secure technology, and data intelligence</b> to create a marketplace that delivers convenience, transparency, and engagement at every step.<br><br>

This system provides an end-to-end framework that unites <b>buyers, sellers, and administrators</b> on a single, efficient ecosystem.<br><br>

From product listing and catalog management to order fulfillment and post-delivery feedback, every workflow is automated for precision and speed.<br><br>

Customers enjoy effortless browsing through intelligent search and filtering, secure payments, and real-time tracking, while sellers gain comprehensive dashboards to manage inventory, pricing, and sales performance.<br><br>

The platform’s architecture ensures <b>high performance and scalability</b>, capable of handling large user volumes and product catalogs without compromise.<br><br>

Integrated analytics deliver actionable insights on sales, customer behavior, and marketing performance — empowering data-driven decisions that fuel business growth.<br><br>

<b>Security and reliability</b> are fundamental to its design.<br><br>

Every transaction and user interaction is protected through <b>encryption, authentication, and compliance-ready frameworks</b>, while cloud integration ensures seamless backups and synchronization across multiple devices.<br><br>

Beyond functionality, the system focuses on delivering a <b>customer-centric experience</b>.<br><br>

Personalized recommendations, loyalty programs, and efficient return management foster trust and repeat engagement.<br><br>

Its responsive design ensures accessibility across web and mobile devices, maintaining consistency and performance throughout the user journey.<br><br>

In essence, this <b>E-Commerce Application</b> transforms traditional online retail into a smart, connected, and scalable digital ecosystem.<br><br>

It empowers businesses to operate efficiently, reach wider audiences, and deliver <b>world-class shopping experiences</b> that inspire loyalty and growth.<br><br>`,
  image: ecommerce,
  info: {
    Category: "Web + Mobile App",
  }
},

{
  id: 17,
  title: "HR Management System (Employee & Workforce Platform)",
  subtitle: "Streamlined, Automated, and Data-Driven Workforce Management",
  description: `<b>The HR Management System (Employee & Workforce Platform)</b> is a comprehensive digital solution designed to transform traditional HR operations into a streamlined, automated, and data-driven experience.<br><br>

It provides a unified ecosystem where all aspects of human resource management — including <b>employee information, attendance, performance, payroll, and analytics</b> — are interconnected for maximum efficiency and transparency.<br><br>

At its foundation, the platform centralizes employee data, ensuring that HR teams can manage every stage of the employee lifecycle through a single interface.<br><br>

This integration eliminates data redundancy, improves accuracy, and enables cross-department collaboration. From recruitment and onboarding to attendance tracking and performance evaluation, every process is simplified and seamlessly connected.<br><br>

<b>Automation</b> lies at the core of the system, allowing repetitive administrative tasks — such as approvals, notifications, and workflow routing — to be executed intelligently without manual effort.<br><br>

The system also ensures <b>compliance</b> with organizational policies and statutory requirements, providing complete reliability in payroll, taxation, and data security.<br><br>

Employees benefit from an <b>intuitive self-service portal</b> where they can view their attendance, manage leave requests, access payslips, and update personal details independently.<br><br>

Managers and HR professionals gain access to <b>insightful analytics and visual dashboards</b> that showcase workforce trends, performance statistics, and operational efficiency in real time.<br><br>

The platform is built with a strong focus on <b>scalability, performance, and security</b>.<br><br>

Role-based access, encrypted data handling, and audit trails safeguard sensitive information while maintaining transparency.<br><br>

Its modular design ensures flexibility, making it suitable for organizations of any size — from small teams to multi-branch enterprises.<br><br>

In essence, this <b>HR Management System</b> redefines workforce management by combining automation, intelligence, and human-centered design.<br><br>

It empowers organizations to operate efficiently, engage employees effectively, and make data-backed strategic decisions — ultimately creating a connected, compliant, and future-ready HR ecosystem.<br><br>`,
  image: hrms,
  info: {
    Category: "Web + Mobile App",
  }
},

{
  id: 18,
  title: "Customer Relationship Management (CRM) System",
  subtitle: "Streamline Relationships, Sales, and Customer Engagement",
  description: `<b>The Customer Relationship Management (CRM) System</b> is a comprehensive digital platform designed to streamline how organizations manage their relationships with leads, customers, and partners.<br><br>

It integrates <b>sales, marketing, and support operations</b> into a single ecosystem that drives productivity, accountability, and customer satisfaction.<br><br>

This system provides businesses with a <b>unified view of every client interaction</b> — from the first inquiry to post-sale service. It enables teams to track leads, manage opportunities, and convert prospects into loyal customers through structured and data-driven workflows.<br><br>

The built-in <b>communication framework</b> ensures that every call, email, and meeting is recorded and accessible, giving organizations full visibility into their customer lifecycle.<br><br>

By leveraging <b>intelligent automation</b>, the CRM minimizes repetitive tasks such as follow-ups, reminders, and lead assignments. This automation not only enhances efficiency but also ensures timely responses and consistent customer engagement.<br><br>

<b>Advanced analytics and reporting tools</b> transform operational data into actionable insights, helping businesses measure performance, forecast trends, and refine strategies in real time.<br><br>

Marketing and sales teams benefit from <b>seamless collaboration</b>, with integrated campaign management tools that monitor engagement metrics and ROI.<br><br>

Customer support departments can efficiently handle service requests through a <b>ticketing system</b> that tracks queries, assigns priorities, and ensures swift resolutions — strengthening long-term trust and loyalty.<br><br>

<b>Security and scalability</b> form the foundation of this system. It uses encrypted communication, role-based permissions, and cloud-based infrastructure to ensure data integrity and accessibility across devices and locations.<br><br>

Whether implemented in small businesses or large enterprises, the platform adapts to varying operational needs without compromising performance.<br><br>

In essence, this <b>CRM System</b> redefines customer engagement through automation, intelligence, and collaboration.<br><br>

It enables organizations to nurture relationships, optimize workflows, and achieve sustainable growth — turning every interaction into an opportunity for success.<br><br>`,
  image: crm,
  info: {
    Category: "Web + Mobile App",
  }
},

{
  id: 19,
  title: "Appointment & Booking Management System",
  subtitle: "Seamless Scheduling and Smart Automation",
  description: `<b>The Appointment & Booking Management System</b> is a robust, cloud-based platform designed to simplify scheduling, automate workflows, and deliver a seamless booking experience for both businesses and customers.<br><br>

It provides an <b>end-to-end solution</b> that covers appointment management, calendar synchronization, payments, reminders, analytics, and customer engagement — all in one integrated system.<br><br>

Built with <b>flexibility at its core</b>, the platform enables businesses to manage bookings across multiple locations, time zones, and staff members effortlessly.<br><br>

Customers can view real-time availability, book appointments online, and receive instant confirmations, while staff can manage their calendars, track schedules, and make adjustments in real time.<br><br>

This level of automation reduces manual coordination and eliminates double bookings, creating a smooth and professional experience for all users.<br><br>

The system seamlessly integrates with <b>major calendar and payment platforms</b>, ensuring synchronization and secure transactions.<br><br>

<b>Automated notifications and reminders</b> enhance customer engagement, reducing missed appointments and improving overall service efficiency.<br><br>

The platform also supports <b>customizable workflows and templates</b> that allow businesses to tailor communication and operations according to their brand identity.<br><br>

From a management perspective, the application offers a <b>powerful analytics dashboard</b> that provides real-time insights into bookings, revenue, and staff performance.<br><br>

Administrators can identify high-performing time slots, monitor customer activity, and make informed strategic decisions based on accurate data.<br><br>

<b>Security and reliability</b> are fundamental to its design. With end-to-end encryption, role-based access control, and audit logging, the system ensures that customer and business data remain protected.<br><br>

Its scalable architecture supports a wide range of industries — from salons, clinics, and educational centers to consulting agencies and professional services.<br><br>

In essence, this <b>Appointment & Booking Management System</b> revolutionizes scheduling by combining automation, analytics, and user-centric design.<br><br>

It enhances operational efficiency, reduces manual intervention, and empowers businesses to deliver a seamless, convenient, and professional booking experience every time.<br><br>`,
  image: appointment,
  info: {
    Category: "Web + Mobile App",
  }
},

{
  id: 20,
  title: "Recruitment & Applicant Tracking System (ATS)",
  subtitle: "AI-Powered Recruitment Automation Platform",
  description: `<b>The Recruitment & Applicant Tracking System (ATS)</b> is a comprehensive, AI-enabled hiring platform designed to simplify, automate, and optimize the recruitment process for organizations of any scale.<br><br>

It provides a <b>unified ecosystem</b> that connects recruiters, hiring managers, and candidates through a seamless workflow — from job posting to final onboarding.<br><br>

At its core, the system consolidates all recruitment activities into one central hub.<br><br>

It enables recruiters to post job openings across multiple portals, receive applications in real time, and automatically parse resumes using <b>advanced AI and NLP technologies</b>.<br><br>

This intelligent automation not only reduces manual effort but also ensures <b>faster candidate screening</b> and <b>improved matching accuracy</b>.<br><br>

The platform supports complete applicant lifecycle management through <b>structured pipelines</b> that visualize each candidate’s progress — from application submission to interview and final hiring.<br><br>

<b>Integrated calendar synchronization</b> simplifies interview scheduling, while automated reminders and notifications ensure no step in the process is missed.<br><br>

A key strength of the system lies in its <b>analytics and reporting capabilities</b>.<br><br>

HR managers can track recruitment KPIs such as <b>time-to-hire</b>, <b>source efficiency</b>, and <b>candidate conversion rates</b>, allowing for strategic decision-making and continuous process improvement.<br><br>

The system also offers a <b>built-in communication framework</b> for email automation, bulk messaging, and candidate engagement, ensuring consistent communication throughout the recruitment journey.<br><br>

With <b>enterprise-grade security</b>, role-based access, and GDPR compliance, sensitive candidate data is fully protected.<br><br>

The <b>modular and cloud-ready architecture</b> allows organizations to scale seamlessly as their hiring needs evolve — whether managing a handful of roles or thousands of applications across departments.<br><br>

Ultimately, this <b>Recruitment & Applicant Tracking System</b> transforms traditional hiring into a <b>data-driven, automated, and candidate-focused experience</b>.<br><br>

It empowers organizations to build stronger teams, improve operational efficiency, and deliver a more personalized and professional recruitment experience.<br><br>`,
  image: recruit,
  info: {
    Category: "Web + Mobile App",
  }
},

{
  id: 21,
  title: "Event Management System (Web + Mobile)",
  subtitle: "Smart, Automated Event Planning and Coordination",
  description: `<b>The Event Management System (Web + Mobile)</b> is an all-in-one digital platform designed to simplify and automate the end-to-end management of events — from planning and registration to hosting and post-event analysis.<br><br>

It provides a <b>complete solution</b> for organizers, attendees, and sponsors, enabling seamless coordination and engagement across physical, virtual, and hybrid events.<br><br>

At its core, the system integrates multiple aspects of event management into one cohesive platform.<br><br>

Organizers can create and configure events, manage speakers, sponsors, and attendees, handle registrations and payments, and monitor progress in real time.<br><br>

The system supports both <b>single and multi-event management</b>, allowing organizations to oversee multiple events simultaneously from a unified dashboard.<br><br>

A key component of the platform is its <b>automation-driven design</b>.<br><br>

Processes such as ticketing, confirmations, reminders, and communication are fully automated to minimize manual work and enhance efficiency.<br><br>

Integrated payment gateways ensure <b>secure transactions</b>, while <b>QR-coded tickets</b> simplify entry management and tracking.<br><br>

For <b>virtual and hybrid events</b>, the platform includes live streaming, audience interaction features, and digital engagement tools such as polls, Q&As, and networking sessions — ensuring participants remain connected and engaged regardless of location.<br><br>

The <b>mobile application</b> extends the platform’s functionality, offering real-time updates, notifications, and offline accessibility for attendees and staff alike.<br><br>

Comprehensive <b>analytics and reporting tools</b> provide actionable insights into event performance.<br><br>

Organizers can monitor ticket sales, attendee engagement, revenue, and satisfaction levels through visual dashboards, helping them make data-informed decisions for future events.<br><br>

<b>Security, scalability, and reliability</b> form the backbone of the system.<br><br>

With robust encryption, role-based access control, and cloud-based infrastructure, it guarantees data protection and consistent performance even under large-scale operations.<br><br>

In essence, this <b>Event Management System</b> transforms traditional event management into a <b>smart, connected, and data-driven experience</b>.<br><br>

It empowers organizations to deliver exceptional events with precision, engagement, and professionalism — all through one powerful platform.<br><br>`,
  image: event,
  info: {
    Category: "Web + Mobile App",
  }
},

{
  id: 22,
  title: "Retail POS System (Web + Mobile)",
  subtitle: "Smart Retail Management for Modern Businesses",
  description: `<b>The Retail POS System (Web + Mobile)</b> is a comprehensive retail management solution developed to streamline point-of-sale operations, enhance customer experience, and optimize business performance across multiple branches.<br><br>

Designed for both small and large retail enterprises, it brings <b>billing, inventory, customer management, and analytics</b> under one intelligent, integrated platform.<br><br>

The system provides a <b>unified environment</b> where every retail function operates in harmony.<br><br>

It facilitates quick and error-free billing, real-time inventory tracking, and customer engagement while ensuring seamless data synchronization between stores, mobile devices, and the cloud.<br><br>

With <b>offline functionality</b>, retailers can continue billing and processing transactions even during network outages, eliminating downtime and revenue loss.<br><br>

At the heart of the platform lies a <b>dynamic inventory engine</b> that automates stock management — updating quantities with each sale, generating alerts for low-stock items, and simplifying reorders with supplier integration.<br><br>

Its <b>multi-branch management</b> capabilities allow organizations to operate multiple outlets with centralized control, ensuring consistency in pricing, promotions, and reporting.<br><br>

The system enhances operational efficiency through <b>automation and role-based access control</b>, empowering store managers, cashiers, and administrators to perform their tasks effectively while maintaining data security.<br><br>

It also supports a <b>customer-focused approach</b>, allowing businesses to track purchase history, reward loyalty, and create personalized experiences that drive retention and growth.<br><br>

Comprehensive <b>analytics and reporting tools</b> provide real-time visibility into sales performance, inventory movement, and branch-wise profitability.<br><br>

These insights enable business owners to make <b>data-driven decisions</b> and identify opportunities for optimization.<br><br>

<b>Scalability and security</b> are core to the platform’s design.<br><br>

Built on a <b>robust cloud architecture</b>, it adapts effortlessly to expanding business needs while ensuring data protection through encryption and secure user authentication.<br><br>

In essence, the <b>Retail POS System</b> transforms the retail landscape by combining <b>speed, intelligence, and reliability</b>.<br><br>

It empowers businesses to deliver superior service, maximize efficiency, and maintain complete control — all through a single, seamless platform.<br><br>`,
  image: retail,
  info: {
    Category: "Web + Mobile App",
  }
},

{
  id: 23,
  title: "Privacy-Based Browser (Web + Mobile)",
  subtitle: "Secure, Private, and Intelligent Web Experience",
  description: `<b>The Privacy-Based Browser (Web + Mobile)</b> is a next-generation web browsing solution engineered to provide a <b>secure, private, and efficient</b> online experience.<br><br>

Built with a <b>“privacy-first” philosophy</b>, it eliminates intrusive tracking, data collection, and advertising surveillance — giving users complete control over their digital footprint.<br><br>

At its foundation, the browser leverages <b>end-to-end encryption</b> and advanced resource optimization to deliver both <b>security and speed</b>.<br><br>

Every aspect of user interaction — from login credentials to browsing history, bookmarks, and saved sessions — is stored in an <b>encrypted format</b>, ensuring confidentiality and integrity.<br><br>

By design, the browser avoids reliance on third-party analytics or data monetization, setting a new benchmark for <b>ethical technology</b>.<br><br>

The browser introduces <b>intelligent privacy layers</b> such as real-time ad and tracker blocking, private search integration, and customizable browsing modes.<br><br>

Users can switch between profiles like <b>Work, Personal, Kids, or Developer</b>, each with tailored security configurations and content preferences.<br><br>

This adaptability ensures that <b>productivity and safety coexist</b> harmoniously, regardless of user type or environment.<br><br>

<b>Performance optimization</b> is another core focus of the system.<br><br>

The browser intelligently allocates system resources, reducing memory consumption and CPU usage to maintain smooth operations across both high-end and low-spec devices.<br><br>

<b>Offline capabilities</b> and secure synchronization further enhance usability, enabling continuous and protected access to bookmarks, passwords, and sessions across multiple devices.<br><br>

The platform’s built-in <b>Privacy Dashboard</b> offers full transparency, allowing users to monitor blocked trackers, scripts, and advertisements in real time.<br><br>

Integrated developer tools, extension support, and customizable APIs ensure that the browser remains open for innovation while upholding strict <b>data isolation standards</b>.<br><br>

In essence, the <b>Privacy-Based Browser</b> redefines what a modern browser should be — <b>fast, private, transparent, and user-centric</b>.<br><br>

It empowers individuals and organizations to browse confidently, knowing that their data remains secure, their activity remains anonymous, and their experience remains uncompromised.<br><br>`,
  image: privacy,
  info: {
    Category: "Web + Mobile App",
  }
},

{
  id: 24,
  title: "Food and Beverages (Café) Billing Software",
  subtitle: "Smart Café & Restaurant Management Solution",
  description: `<b>The Food and Beverages (Café) Billing Software</b> is an advanced, all-in-one management solution developed to streamline café and restaurant operations.<br><br>

It combines <b>billing, inventory management, staff coordination, and analytics</b> into a unified, user-friendly platform.<br><br>

Designed for <b>speed, accuracy, and scalability</b>, it caters to cafés, restaurants, and food outlets of all sizes.<br><br>

At its core, the system simplifies day-to-day operations by automating key processes such as <b>order management, billing, and stock updates</b>.<br><br>

Orders placed at the counter or through table service are processed instantly through an <b>integrated POS system</b> that calculates totals, applies taxes, and generates digital receipts.<br><br>

This ensures faster customer service, reduced errors, and improved billing efficiency.<br><br>

The platform integrates seamlessly with a <b>Kitchen Display System (KDS)</b> to enable real-time communication between service and kitchen teams.<br><br>

Orders appear instantly on kitchen screens, allowing chefs to prioritize and prepare items efficiently.<br><br>

The <b>inventory module</b> intelligently tracks ingredient consumption, updates stock levels automatically, and generates low-stock alerts — helping businesses control costs and avoid shortages.<br><br>

Managers and owners can access <b>comprehensive analytics</b> through interactive dashboards.<br><br>

Sales data, customer trends, top-performing menu items, and expense insights are visualized clearly to support <b>data-driven decision-making</b>.<br><br>

The system also provides robust <b>employee management capabilities</b>, including role-based permissions, activity tracking, and attendance monitoring.<br><br>

<b>Security and compliance</b> are central to its design.<br><br>

The software includes <b>encrypted data storage</b>, GST-ready billing, and secure payment integrations for cash, card, and digital methods.<br><br>

Its <b>cloud-enabled architecture</b> ensures that data remains synchronized and accessible across multiple branches and devices.<br><br>

In essence, the <b>Food and Beverages (Café) Billing Software</b> delivers the perfect blend of <b>efficiency, intelligence, and simplicity</b>.<br><br>

It empowers café owners to optimize daily operations, reduce manual effort, and elevate the customer experience — transforming ordinary cafés into <b>data-driven, high-performing businesses</b>.<br><br>`,
  image: beverage,
  info: {
    Category: "Web + Mobile App",
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
