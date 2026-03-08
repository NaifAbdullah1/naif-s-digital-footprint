import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <HighlightsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
