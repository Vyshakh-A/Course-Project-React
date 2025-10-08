// CategoriesSection.jsx
import React from "react";
import "./CategoryCard.css";
const categories = [
  {
    id: 1,
    title: "Programming",
    description: "Learn coding fundamentals, problem solving, and modern languages.",
    courses: ["Python", "Data Structures", "Machine Learning"],
  },
  {
    id: 2,
    title: "Web Development",
    description: "Build responsive, modern websites with powerful frameworks.",
    courses: ["React", "Full Stack Development"],
  },
  {
    id: 3,
    title: "Design & UX",
    description: "Understand design principles and craft user-friendly interfaces.",
    courses: ["UI/UX Fundamentals"],
  },
  {
    id: 4,
    title: "Tech Essentials",
    description: "Core technical skills to boost your career and projects.",
    courses: ["Cybersecurity", "AWS Cloud"],
  },
];

const CategoryList = () => {
  return (
    <section style={{ padding: "3rem 2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Explore Categories
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
            }}
          >
            <h3 style={{ marginBottom: "0.5rem", color: "#4f46e5" }}>
              {cat.title}
            </h3>
            <p style={{ marginBottom: "1rem", color: "#374151" }}>
              {cat.description}
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
              {cat.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
