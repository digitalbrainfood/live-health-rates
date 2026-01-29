import { Metadata } from "next";
import HeroSection from "../components/HeroSection";
import InsurancePartners from "../components/InsurancePartners";
import TiredOfOverpaying from "../components/TiredOfOverpaying";
import HowItWorks from "../components/HowItWorks";
import WhyOurPlans from "../components/WhyOurPlans";
import WhoWeHelp from "../components/WhoWeHelp";
import Testimonials from "../components/Testimonials";
import { copy } from "./copy";

export const metadata: Metadata = {
  title: "Health Insurance for Self-Employed | Compare Options",
  description:
    "Self-employed? Compare health insurance options with licensed guidance—plan types, costs, and next steps in plain English.",
  alternates: { canonical: "https://healthcoveragesearch.com/self-employed" },
};

export default function Page() {
  return (
    <>
      <HeroSection {...copy.hero} />
      <InsurancePartners />
      <TiredOfOverpaying {...copy.tired} />
      <HowItWorks {...copy.how} />
      <WhyOurPlans {...copy.why} />
      <WhoWeHelp {...copy.who} />
      <Testimonials {...copy.testimonials} />
    </>
  );
}
