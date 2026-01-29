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
  title: "Health Insurance Starting Soon | No Waiting Surprises",
  description:
    "Need coverage to start soon? Explore fast-start options and timelines based on eligibility with licensed guidance.",
  alternates: { canonical: "https://healthcoveragesearch.com/starting-soon" },
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
