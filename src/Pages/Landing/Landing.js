import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Features from "../../Components/Features/Features";
import FAQ from "../../Components/FAQ/FAQ";

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
