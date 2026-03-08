import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LanguageToggle />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />

      {/* Placeholder for contact */}
      <section id="contact" className="min-h-[50vh]" />
    </div>
  );
};

export default Index;
