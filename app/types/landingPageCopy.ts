import type { HeroSectionProps } from "../components/HeroSection";
import type { TiredOfOverpayingProps } from "../components/TiredOfOverpaying";
import type { HowItWorksProps } from "../components/HowItWorks";
import type { WhyOurPlansProps } from "../components/WhyOurPlans";
import type { WhoWeHelpProps } from "../components/WhoWeHelp";
import type { TestimonialsProps } from "../components/Testimonials";

export type LandingPageCopy = {
  hero: HeroSectionProps;
  tired: TiredOfOverpayingProps;
  how: HowItWorksProps;
  why: WhyOurPlansProps;
  who: WhoWeHelpProps;
  testimonials: TestimonialsProps;
};
