import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LanguageToggle />
      <Navbar />
      <HeroSection />

      {/* Placeholder sections for scroll targets */}
      <section id="about" className="min-h-[50vh]" />
      <section id="experience" className="min-h-[50vh]" />
      <section id="skills" className="min-h-[50vh]" />
      <section id="contact" className="min-h-[50vh]" />
    </div>
  );
};

export default Index;
