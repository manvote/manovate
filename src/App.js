// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/services";

import Contact  from "./components/contact";
import Careers  from "./components/careers";
import Loader from "./components/Loader";
import Solution from "./components/solution";
import Expertise from "./components/expertise";
import ScrollToTop from "./components/scrolltop";




function App() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading time (e.g., fetch, assets)
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
        <HelmetProvider>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        
        <Route path="/contact" element={<Contact/>}/>
         <Route path="/careers" element={<Careers/>}/>
         <Route path="/solution" element={<Solution/>}/>
        <Route path="/products" element={<Expertise/>}/> 
        {/* <Route path="/DonorList" element={<DonorList />} />
        <Route path="/DoctorList" element={<DoctorList />} />
        <Route path="/fitness" element={<Fitnesstracker/>}/>
        <Route path="/medician" element={<Mediciantrack/>}/>
        <Route path="/Register" element={<Registeration/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Donorreg" element={<Donorreg/>}/>
        <Route path="/Donorfind" element={<FindDonor/>}/> */}
        
      </Routes>
    </Router>
    </HelmetProvider>
  );
}

export default App;
