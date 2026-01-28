import { Metadata } from "next";
import HeroSection from "../components/HeroSection";
import InsurancePartners from "../components/InsurancePartners";
import TiredOfOverpaying from "../components/TiredOfOverpaying";
import HowItWorks from "../components/HowItWorks";
import WhyOurPlans from "../components/WhyOurPlans";
import WhoWeHelp from "../components/WhoWeHelp";
import Testimonials from "../components/Testimonials";

export const metadata: Metadata = {
  title: "Health Coverage Search - Missed Open Enrollment? See Your Options",
  description:
    "Missed open enrollment? You may still have coverage options depending on eligibility. Connect with licensed insurance professionals for clear next steps.",
  alternates: {
    canonical: "https://healthcoveragesearch.com/missed-open-enrollment",
  },
};

export default function MissedOpenEnrollmentPage() {
  return (
    <>
      <HeroSection variant="missedOpenEnrollment" />
      <InsurancePartners />
      <TiredOfOverpaying variant="missedOpenEnrollment" />
      <HowItWorks variant="missedOpenEnrollment" />
      <WhyOurPlans variant="missedOpenEnrollment" />
      <WhoWeHelp variant="missedOpenEnrollment" />
      <Testimonials variant="missedOpenEnrollment" />
    </>
  );
}
