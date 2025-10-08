import React from "react";
import "./AboutMe.css";

const features = [
  {
    icon: "🧑‍🏫",
    title: "Expert Instructors",
    desc: "Learn from industry professionals with real-world experience.",
  },
  {
    icon: "💻",
    title: "Hands-on Projects",
    desc: "Build practical skills with interactive, project-based learning.",
  },
  {
    icon: "📈",
    title: "Career Growth",
    desc: "Boost your career with in-demand tech skills and guidance.",
  },
  {
    icon: "🎓",
    title: "Certificates",
    desc: "Earn certificates to showcase your achievements.",
  },
];

const AboutMe = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Why Choose Us?</h2>
      <div className="features-row">
        {features.map((feature, idx) => (
          <div className="feature-card" key={idx}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-name">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
