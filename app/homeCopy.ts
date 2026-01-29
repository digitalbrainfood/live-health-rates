import type { LandingPageCopy } from "./types/landingPageCopy";

export const copy: LandingPageCopy = {
  hero: {
    headlineTop: "Save Up to 77% on",
    headlineHighlight: "Health Insurance",
    subheadline:
      "Connect with experienced insurance professionals who'll help you navigate options and find coverage that fits your needs and budget.",
    testimonial: {
      quote:
        "My agent explained everything in plain English and helped me make a confident choice.",
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
      "If you're self-employed, between jobs, or simply looking beyond employer plans, the insurance maze can feel impossible to navigate alone.",
    paragraph2:
      "High premiums. Complex jargon. Endless options. We simplify the process by pairing you with licensed professionals who explain next steps clearly.",
    ctaText: "Let's Get Started",
  },
  how: {
    heading: "Your Simple Path Forward",
    steps: [
      { step: 1, title: "Share the Basics", description: "Quick form. Just the essentials to get you matched." },
      { step: 2, title: "See Your Options", description: "Explore coverage paths that may fit your needs and timeline." },
      { step: 3, title: "Talk to a Licensed Pro", description: "Get clear answers—no pressure, no jargon." },
      { step: 4, title: "Enroll If Eligible", description: "Choose confidently and complete enrollment with help." },
    ],
  },
  why: {
    headingTop: "What Makes This",
    headingBottom: "Process Different",
    benefits: [
      "Nationwide PPO network access (plan dependent)",
      "Compare plan types quickly",
      "Plain-English guidance",
      "Fast application—minutes to complete",
      "Support from licensed professionals",
      "Options beyond employer plans",
      "Clear next steps & timelines",
      "Help without pressure",
    ],
  },
  who: {
    heading: "Who We Help Most",
    audiences: [
      { title: "Self-Employed:", description: "People who need coverage without employer benefits." },
      { title: "Between Jobs:", description: "Anyone who needs a plan during a transition." },
      { title: "Budget-Focused:", description: "People comparing options and trying to avoid overpaying." },
    ],
    ctaText: "Begin Your Search",
  },
  testimonials: {
    headingTop: "Stories From",
    headingBottom: "Real People",
    testimonials: [
      {
        quote:
          "I was overwhelmed, but the agent made it simple and helped me understand my options quickly.",
        name: "Brandon T",
        title: "Marketing Manager",
        image: "/images/health-insurance-consumer.webp",
      },
      {
        quote:
          "The process was straightforward. I got clear guidance and the next steps were easy.",
        name: "Carla P",
        title: "Small Business Owner",
        image: "/images/health-insurance-agent.webp",
      },
    ],
  },
};
