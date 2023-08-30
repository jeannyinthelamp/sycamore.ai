import React from "react";
import Navbar from "../../Components/Landing/Navbar/Navbar";
import Hero from "../../Components/Landing/Hero/Hero";
import Waitlist from "../../Components/Landing/Waitlist/Waitlist";
import About from "../../Components/Landing/About/About";
import Footer from "../../Components/Landing/Footer/Footer";

export default function Landing() {
  return (
    <div>
      Landing
      <Navbar />
      {/* <Hero /> */}
      <Waitlist />
      <About />
      <Footer />
    </div>
  );
}
