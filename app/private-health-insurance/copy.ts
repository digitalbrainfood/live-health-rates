import type { LandingPageCopy } from "../types/landingPageCopy";

export const copy: LandingPageCopy = {
  hero: {
    headlineTop: "Private Health Insurance",
    headlineHighlight: "Compare Your Options",
    subheadline:
      "Looking for private coverage? We’ll connect you with licensed professionals to compare plan types, networks, and costs—so you can choose confidently.",
    testimonial: {
      quote:
        "I wanted private coverage and didn’t know where to start. The agent made it clear and simple.",
      name: "Sam W",
      title: "Verified Customer",
      imageSrc: "/images/health-insurance-consumer.webp",
      imageAlt: "Sam W",
    },
    formTitle: "Compare Private Options",
    formSubtitle: "Takes less than 60 seconds",
    submitButtonText: "Compare Plans",
  },
  tired: {
    heading: "Private Coverage Can Be Confusing",
    paragraph1:
      "Private health insurance searches often lead to conflicting information—different plan types, networks, and pricing structures.",
    paragraph2:
      "We simplify the comparison with licensed guidance, so you can understand tradeoffs and pick a plan type that fits.",
    ctaText: "Let's Get Started",
  },
  how: {
    heading: "How We Compare Private Options",
    steps: [
      { step: 1, title: "Share the Basics", description: "Tell us what you want from a plan." },
      { step: 2, title: "Compare Plan Types", description: "Review options, costs, and networks (plan dependent)." },
      { step: 3, title: "Get Clear Answers", description: "Licensed pros explain tradeoffs in plain English." },
      { step: 4, title: "Enroll If Eligible", description: "Apply with help if you choose to move forward." },
    ],
  },
  why: {
    headingTop: "Why This Makes",
    headingBottom: "Comparing Easier",
    benefits: [
      "Plain-English comparisons",
      "Licensed support—no guesswork",
      "Understand networks & costs",
      "Compare plan types quickly",
      "Fast application—minutes to complete",
      "Options beyond employer plans",
      "Clear next steps & timelines",
      "Help without pressure",
    ],
  },
  who: {
    heading: "Who This Page Is For",
    audiences: [
      { title: "Private Coverage Shoppers:", description: "People researching private plan options." },
      { title: "Leaving Employer Plans:", description: "Anyone comparing coverage beyond work benefits." },
      { title: "Need Help Comparing:", description: "People who want a clearer path to a decision." },
    ],
    ctaText: "Compare Plans",
  },
  testimonials: {
    headingTop: "Private Coverage",
    headingBottom: "Made Clear",
    testimonials: [
      {
        quote:
          "I got clear comparisons and could finally choose without guessing.",
        name: "Sam W",
        title: "Verified Customer",
        image: "/images/health-insurance-consumer.webp",
      },
      {
        quote:
          "No pressure, just facts. It helped me understand the differences quickly.",
        name: "Riley K",
        title: "Verified Customer",
        image: "/images/woman-buying-health-insurance.webp",
      },
    ],
  },
}
