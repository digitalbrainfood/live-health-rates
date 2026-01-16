import { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import InsurancePartners from "./components/InsurancePartners";
import TiredOfOverpaying from "./components/TiredOfOverpaying";
import HowItWorks from "./components/HowItWorks";
import WhyOurPlans from "./components/WhyOurPlans";
import WhoWeHelp from "./components/WhoWeHelp";
import Testimonials from "./components/Testimonials";

export const metadata: Metadata = {
  title: "Health Coverage Search - Save Up to 77% on Health Insurance",
  description: "Connect with licensed insurance professionals who simplify your health coverage search. Find personalized options from top carriers—no jargon, no pressure, just real guidance.",
  alternates: {
    canonical: "https://healthcoveragesearch.com",
  },
};

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
