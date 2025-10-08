import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Master Tech Skills for Your Future</h1>
        <p className="hero-subtitle">
          Learn Python, React, AI, and more with hands-on courses.
        </p>
        <a href="/login" className="hero-cta">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
