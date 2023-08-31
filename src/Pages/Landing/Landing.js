import React from "react";
import Navbar from "../../Components/Landing/Navbar/Navbar";
import Hero from "../../Components/Landing/Hero/Hero";
import FAQ from "../../Components/Landing/FAQ/FAQ";
import Waitlist from "../../Components/Landing/Waitlist/Waitlist";
import About from "../../Components/Landing/About/About";
import Footer from "../../Components/Landing/Footer/Footer";

export default function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FAQ />
      <Waitlist />
      <About />
      <Footer />
    </div>
  );
}
