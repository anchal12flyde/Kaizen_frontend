import AboutHeroSection from "@/components/abouthero";
import GuidesSection from "@/components/guidesSection";
import KaizenPhilosophySection from "@/components/KaizenPhilosphy";
import LeadershipTeam from "@/components/leadershipTeam";
import LetsConnectSection from "@/components/LetsConnectSection";
import OurStorySection from "@/components/ourStorySectionAbout";
import SectorExperience from "@/components/sectorExperiences";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import WhyChooseSection from "@/components/whyChooseSection";

export default function About() {
  return (
    <div>
      <Header />
      <AboutHeroSection />
      <OurStorySection />
      <KaizenPhilosophySection />
      <GuidesSection />
      <WhyChooseSection />
      <SectorExperience />
      <LeadershipTeam />
      <LetsConnectSection />
      <Footer />
    </div>
  );
}
