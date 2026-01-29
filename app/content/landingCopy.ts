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

export const homeCopy: LandingPageCopy = {
  hero: {
    headlineTop: "Save Up to 77% on",
    headlineHighlight: "Health Insurance",
    subheadline:
      "Connect with experienced insurance professionals who'll help you navigate your options and find coverage that aligns with your lifestyle and budget.",
    testimonial: {
      quote:
        "I had no idea navigating insurance could be this straightforward. My agent explained everything in plain English and helped me make a confident choice.",
      name: "Amanda W",
      title: "UX Designer",
      imageSrc: "/images/woman-buying-health-insurance.webp",
      imageAlt: "Amanda W",
    },
    formTitle: "Start Your Coverage Search",
    formSubtitle: "Takes less than 60 seconds",
    submitButtonText: "Connect With Agents",
  },
  tired: {
    heading: "Health Insurance Shouldn't Be This Confusing",
    paragraph1:
      "If you're self-employed, running your own show, or simply looking beyond traditional employer plans, you've probably discovered that the insurance maze can feel impossible to navigate alone.",
    paragraph2:
      "High premiums. Complex jargon. Endless options. We simplify the entire process by pairing you with knowledgeable agents who actually speak human and genuinely want to help you succeed.",
    ctaText: "Let's Get Started",
  },
  how: {
    heading: "Your Simple Path Forward",
    steps: [
      { step: 1, title: "Share the Basics", description: "Quick form. No essays required. Just the essentials to get you matched." },
      { step: 2, title: "Discover Your Fit", description: "See which coverage paths might make sense based on your unique situation." },
      { step: 3, title: "Talk to the Pros", description: "Licensed agents reach out to walk you through options without pressure or jargon." },
      { step: 4, title: "Choose Confidently", description: "Make an informed decision that gives you peace of mind and financial security." },
    ],
  },
  why: {
    headingTop: "What Makes This",
    headingBottom: "Process Different",
    benefits: [
      "Nationwide PPO Network Access",
      "Potential Savings Compared to Traditional Plans",
      "Reduced Out-of-Pocket Expense Options",
      "Plans With Minimal or Zero Deductibles",
      "Cost-Effective Solutions for Healthier Individuals",
      "Rapid Coverage Start—Sometimes Next Day",
      "Fast Application—Just Minutes to Complete",
      "No Income Requirements to Qualify",
    ],
  },
  who: {
    heading: "Who Thrives With Our Service",
    audiences: [
      { title: "Independent Workers:", description: "Freelancers, contractors, and gig economy professionals who need flexible coverage without corporate benefits." },
      { title: "Entrepreneurs:", description: "Small business owners and startup founders searching for practical coverage solutions that won't drain the budget." },
      { title: "Families & Individuals:", description: "Anyone tired of cookie-cutter options who wants genuine guidance in finding the right coverage fit." },
    ],
    ctaText: "Begin Your Search",
  },
  testimonials: {
    headingTop: "Stories From",
    headingBottom: "Real People",
    testimonials: [
      {
        quote:
          "Losing my job meant losing my coverage. I was panicking until I found this service. The agent who called understood my situation immediately and presented options I never knew existed. Honestly saved me.",
        name: "Brandon T",
        title: "Marketing Manager",
        image: "/images/health-insurance-consumer.webp",
      },
      {
        quote:
          "Running a bakery means every dollar counts. I was skeptical at first, but the agent took real time to understand my business needs. Found coverage that actually fits my reality—not just my wallet's nightmare.",
        name: "Carla P",
        title: "Bakery Owner",
        image: "/images/health-insurance-agent.webp",
      },
    ],
  },
};

export const missedOpenEnrollmentCopy: LandingPageCopy = {
  hero: {
    headlineTop: "Missed Open Enrollment?",
    headlineHighlight: "See Your Options",
    subheadline:
      "Even if open enrollment has passed, you may still have coverage options depending on eligibility. We connect you with licensed insurance professionals who explain next steps clearly.",
    testimonial: {
      quote:
        "I missed open enrollment and thought I was out of luck. My agent explained my options clearly and helped me take the next step.",
      name: "Amanda W",
      title: "Verified Customer",
      imageSrc: "/images/woman-buying-health-insurance.webp",
      imageAlt: "Amanda W",
    },
    formTitle: "Check Missed Enrollment Options",
    formSubtitle: "Takes less than 60 seconds",
    submitButtonText: "Check My Options",
    noteText: "Coverage options and availability vary by eligibility. Not for Medicare or Medicaid enrollment.",
  },
  tired: {
    heading: "Health Insurance Shouldn't Be This Confusing",
    paragraph1:
      "If you missed open enrollment, it’s easy to assume you have to wait. In reality, some people may still have coverage options depending on their situation and eligibility.",
    paragraph2:
      "High premiums. Confusing rules. Endless choices. We simplify the process by pairing you with licensed professionals who explain next steps clearly—without jargon or pressure.",
    ctaText: "Let's Get Started",
  },
  how: {
    heading: "Your Simple Path Forward",
    steps: [
      { step: 1, title: "Share the Basics", description: "Quick form. Just the essentials to understand your situation." },
      { step: 2, title: "Check Eligibility Paths", description: "See what coverage routes may be available after open enrollment." },
      { step: 3, title: "Speak With a Licensed Pro", description: "Get clear explanations of options, timelines, and next steps." },
      { step: 4, title: "Enroll If Eligible", description: "Choose confidently and complete next steps with guided support." },
    ],
  },
  why: {
    headingTop: "What Makes This",
    headingBottom: "Process Different",
    benefits: [
      "Eligibility help in plain English",
      "Clear next steps & timelines",
      "Compare plan types quickly",
      "Licensed support—no guesswork",
      "Fast application—minutes to complete",
      "Guidance after missed enrollment",
      "Options beyond employer plans",
      "Help without pressure",
    ],
  },
  who: {
    heading: "Who Thrives With Our Service",
    audiences: [
      { title: "Missed the Deadline:", description: "People who missed open enrollment and want to know what options may still exist." },
      { title: "Coverage Changes:", description: "Anyone whose coverage changed recently and needs guidance on next steps." },
      { title: "Ready to Act:", description: "People who want clear answers fast—without spending hours researching." },
    ],
    ctaText: "Begin Your Search",
  },
  testimonials: {
    headingTop: "Stories From",
    headingBottom: "Real People",
    testimonials: [
      {
        quote:
          "I missed open enrollment and assumed I had to wait. The agent explained what I could do and helped me move forward with a clear plan.",
        name: "Amanda W",
        title: "Verified Customer",
        image: "/images/woman-buying-health-insurance.webp",
      },
      {
        quote:
          "After enrollment ended, I didn’t know where to start. This made it simple—clear steps, real help, and no pressure.",
        name: "Brandon T",
        title: "Verified Customer",
        image: "/images/health-insurance-consumer.webp",
      },
    ],
  },
};

export const needInsuranceNowCopy: LandingPageCopy = {
  hero: {
    headlineTop: "Need Health Insurance Now?",
    headlineHighlight: "Get Covered Fast",
    subheadline:
      "If you need coverage right away, we’ll help you explore options that may start soon—based on eligibility. Get clear next steps from licensed insurance professionals.",
    testimonial: {
      quote:
        "I needed coverage quickly. The agent explained what could start soon and walked me through next steps—no pressure.",
      name: "Jordan K",
      title: "Verified Customer",
      imageSrc: "/images/health-insurance-consumer.webp",
      imageAlt: "Jordan K",
    },
    formTitle: "Get Coverage Fast",
    formSubtitle: "Takes less than 60 seconds",
    submitButtonText: "See Fast Options",
    noteText: "Coverage options and availability vary by eligibility. Not for Medicare or Medicaid enrollment.",
  },
  tired: {
    heading: "Health Insurance Shouldn't Be This Confusing",
    paragraph1:
      "Need insurance right away? It’s stressful to be without coverage. We help you explore options that may start soon—based on your situation and eligibility.",
    paragraph2:
      "No coverage. Tight timelines. Too many choices. We simplify the process by connecting you with licensed professionals who can explain fast-start options and next steps clearly.",
    ctaText: "Let's Get Started",
  },
  how: {
    heading: "Your Simple Path Forward",
    steps: [
      { step: 1, title: "Share the Basics", description: "Quick form. We’ll understand your timeline and needs." },
      { step: 2, title: "See Fast-Start Options", description: "Explore coverage paths that may start soon—based on eligibility." },
      { step: 3, title: "Talk to a Licensed Pro", description: "Get clear answers today and understand next steps." },
      { step: 4, title: "Enroll If Eligible", description: "Complete enrollment with guided support and clear expectations." },
    ],
  },
  why: {
    headingTop: "What Makes This",
    headingBottom: "Process Different",
    benefits: [
      "Explore fast-start options",
      "Clear timelines & next steps",
      "Licensed guidance without pressure",
      "Compare plan types quickly",
      "Fast application—minutes to complete",
      "Help when coverage is urgent",
      "Options beyond employer plans",
      "Plain-English explanations",
    ],
  },
  who: {
    heading: "Who Thrives With Our Service",
    audiences: [
      { title: "No Coverage Right Now:", description: "People currently uninsured who want to explore options that may start soon." },
      { title: "Starting Soon:", description: "Anyone with a deadline coming up who needs clear next steps and timelines." },
      { title: "Want Fast Answers:", description: "People who want quick, plain-English guidance from licensed professionals." },
    ],
    ctaText: "Begin Your Search",
  },
  testimonials: {
    headingTop: "Stories From",
    headingBottom: "Real People",
    testimonials: [
      {
        quote:
          "I needed coverage quickly. The agent explained what could start soon and helped me understand my next steps.",
        name: "Jordan K",
        title: "Verified Customer",
        image: "/images/health-insurance-consumer.webp",
      },
      {
        quote:
          "I was overwhelmed and on a deadline. This made it simple—clear guidance and no pressure.",
        name: "Samantha R",
        title: "Verified Customer",
        image: "/images/woman-buying-health-insurance.webp",
      },
    ],
  },
};
