import HeroSection from "./components/HeroSection";
import InsurancePartners from "./components/InsurancePartners";
import TiredOfOverpaying from "./components/TiredOfOverpaying";
import HowItWorks from "./components/HowItWorks";
import WhyOurPlans from "./components/WhyOurPlans";
import WhoWeHelp from "./components/WhoWeHelp";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InsurancePartners />
      <TiredOfOverpaying />
      <HowItWorks />
      <WhyOurPlans />
      <WhoWeHelp />
      <Testimonials />
    </>
  );
}
