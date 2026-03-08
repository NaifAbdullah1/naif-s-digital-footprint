import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ParallaxDivider from "@/components/ParallaxDivider";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HighlightsSection />
      <ExperienceSection />
      <ParallaxDivider />
      <EducationSection />
      <SkillsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
