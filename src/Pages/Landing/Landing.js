import React from "react";

import Navbar from "../../Components/Landing/Navbar/Navbar";
import Hero from "../../Components/Landing/Hero/Hero";
import Features from "../../Components/Features/Features";
import FAQ from "../../Components/Landing/FAQ/FAQ";

export default function Landing() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
            <FAQ />
        </div>
    );
}
