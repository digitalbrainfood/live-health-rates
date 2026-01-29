import { Metadata } from "next";
import HeroSection from "../components/HeroSection";
import InsurancePartners from "../components/InsurancePartners";
import TiredOfOverpaying from "../components/TiredOfOverpaying";
import HowItWorks from "../components/HowItWorks";
import WhyOurPlans from "../components/WhyOurPlans";
import WhoWeHelp from "../components/WhoWeHelp";
import Testimonials from "../components/Testimonials";
import { needInsuranceNowCopy } from "../content/landingCopy";

export const metadata: Metadata = {
  title: "Need Health Insurance Now? Immediate Coverage Options",
  description:
    "Need health insurance now? Explore coverage options that may start soon—based on eligibility. Get clear next steps from licensed insurance professionals.",
  alternates: { canonical: "https://healthcoveragesearch.com/need-insurance-now" },
};

export default function NeedInsuranceNowPage() {
  return (
    <>
      <HeroSection {...needInsuranceNowCopy.hero} />
      <InsurancePartners />
      <TiredOfOverpaying {...needInsuranceNowCopy.tired} />
      <HowItWorks {...needInsuranceNowCopy.how} />
      <WhyOurPlans {...needInsuranceNowCopy.why} />
      <WhoWeHelp {...needInsuranceNowCopy.who} />
      <Testimonials {...needInsuranceNowCopy.testimonials} />
    </>
  );
}
