import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TerminalSection from "@/components/TerminalSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <TerminalSection />
        <AboutSection />
      </main>
    </div>
  );
};

export default Index;
