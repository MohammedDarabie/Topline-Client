import React from "react";
import HeroSection from "./components/Home/HeroSection";
import AboutSection from "./components/Home/AboutSection";
import OurServices from "./components/Home/OurServices";
import StrategySection from "./components/Home/StrategySection";
import FooterSection from "./components/Home/FooterSection";
import ContactSection from "./components/Home/ContactSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OurServices />
      <StrategySection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default Home;
