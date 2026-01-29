import type { LandingPageCopy } from "../types/landingPageCopy";

export const copy: LandingPageCopy = {
  hero: {
    headlineTop: "Coverage Starting Soon!",
    headlineHighlight: "See Fast Options",
    subheadline:
      "If you need a plan to start soon, we’ll help you explore coverage paths and timelines based on eligibility. Get clear next steps today.",
    testimonial: {
      quote:
        "I had a deadline coming up. The agent explained what could start soon and what to expect.",
      name: "Jamie L",
      title: "Verified Customer",
      imageSrc: "/images/woman-buying-health-insurance.webp",
      imageAlt: "Jamie L",
    },
    formTitle: "Check Fast-Start Options",
    formSubtitle: "Takes less than 60 seconds",
    submitButtonText: "See Options",
    noteText: "Coverage start dates vary by plan and eligibility. Not for Medicare or Medicaid enrollment.",
  },
  tired: {
    heading: "Deadlines Make Insurance Harder",
    paragraph1:
      "When you need coverage starting soon, searching alone can be overwhelming—different plan types, rules, and start dates.",
    paragraph2:
      "We simplify the process by connecting you with licensed professionals who explain realistic timelines and options based on your situation.",
    ctaText: "Let's Get Started",
  },
  how: {
    heading: "A Clear Timeline, Not Guesswork",
    steps: [
      { step: 1, title: "Share Your Deadline", description: "Tell us your timing and what you need coverage for." },
      { step: 2, title: "Explore Options", description: "See plan paths that may start soon—based on eligibility." },
      { step: 3, title: "Confirm Start Dates", description: "Get clear expectations about timelines and next steps." },
      { step: 4, title: "Enroll If Eligible", description: "Complete enrollment with help and clear guidance." },
    ],
  },
  why: {
    headingTop: "Why This Helps",
    headingBottom: "When Time Matters",
    benefits: [
      "Clear start-date expectations",
      "Fast application—minutes to complete",
      "Licensed guidance without pressure",
      "Compare plan types quickly",
      "Plain-English explanations",
      "Help navigating tight timelines",
      "Options beyond employer plans",
      "Clear next steps & follow-up",
    ],
  },
  who: {
    heading: "Who This Page Is For",
    audiences: [
      { title: "Starting Soon:", description: "People with a coverage deadline coming up." },
      { title: "No Waiting Surprises:", description: "Anyone who wants clarity on start dates and timelines." },
      { title: "Need Quick Answers:", description: "People who want plain-English guidance fast." },
    ],
    ctaText: "See Fast Options",
  },
  testimonials: {
    headingTop: "When Timing",
    headingBottom: "Is Urgent",
    testimonials: [
      {
        quote:
          "I needed something that could start soon. This made it clear and helped me decide quickly.",
        name: "Jamie L",
        title: "Verified Customer",
        image: "/images/woman-buying-health-insurance.webp",
      },
      {
        quote:
          "The agent explained timelines clearly—no guessing. I knew exactly what to expect.",
        name: "Morgan K",
        title: "Verified Customer",
        image: "/images/health-insurance-consumer.webp",
      },
    ],
  },
}
