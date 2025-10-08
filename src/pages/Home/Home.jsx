import React from "react";
import "./Home.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import CategoryList from "../../components/CategoryCard/CategoryCard";
import AboutMe from "../../components/AboutMe/AboutMe";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategoryList />
      <AboutMe />
    </>
  );
};

export default Home;
