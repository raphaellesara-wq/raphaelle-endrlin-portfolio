import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import DesignShowcase from "@/components/DesignShowcase";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 15%, #FFFFFF 30%, #FAFAFA 50%, #FFFFFF 65%, #FAFAFA 80%, #FFFFFF 100%)" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <DesignShowcase />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
