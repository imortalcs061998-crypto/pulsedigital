import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import FounderSection from "@/components/FounderSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <PortfolioSection />
      <FounderSection />
      <DifferentialsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
