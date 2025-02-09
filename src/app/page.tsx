import HeroSection from "@/app/components/HeroSection";
import WorkManagement from "@/app/components/WorkManagement";
import CustomiseSection from "./components/CustomiseSection";
import PricingSection from "./components/PricingSection";
import YourWorkSection from "./components/YourWorkSection";
import YourDataSection from "./components/YourDataSection";
import SponsorSection from "./components/SponsorSection";
import AppsSection from "./components/AppsSection";
import ClientSection from "./components/ClientSection";
import FreeTrialSection from "./components/FreeTrialSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WorkManagement />
      <CustomiseSection />
      <PricingSection />
      <YourWorkSection />
      <YourDataSection />
      <SponsorSection />
      <AppsSection />
      <ClientSection />
      <FreeTrialSection />
      <FooterSection />
    </div>
  );
}
