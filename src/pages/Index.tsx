import { useState, useCallback, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import DesignShowcase from "@/components/DesignShowcase";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackToTopButton from "@/components/BackToTopButton";
import SplashScreen from "@/components/SplashScreen";
import SplashPentagon from "@/components/SplashPentagon";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {showSplash && (
        isMobile
          ? <SplashPentagon onComplete={handleSplashComplete} />
          : <SplashScreen onComplete={handleSplashComplete} />
      )}
      <ScrollProgressBar />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <DesignShowcase />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
