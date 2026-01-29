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
  title: "Apply for Health Insurance | Get Enrolled Fast",
  description:
    "Ready to apply? Get connected with licensed insurance professionals to compare options and understand enrollment steps.",
  alternates: { canonical: "https://healthcoveragesearch.com/apply-enroll" },
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
