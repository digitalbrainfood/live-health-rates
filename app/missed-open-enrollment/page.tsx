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
  title: "Missed Open Enrollment? See Your Options",
  description:
    "Missed open enrollment? You may still have coverage options depending on eligibility. Connect with licensed insurance professionals for clear next steps.",
  alternates: { canonical: "https://healthcoveragesearch.com/missed-open-enrollment" },
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
