import type { LandingPageCopy } from "../types/landingPageCopy";

export const copy: LandingPageCopy = {
  hero: {
    headlineTop: "Missed Open Enrollment?",
    headlineHighlight: "See Your Options",
    subheadline:
      "Even if enrollment has passed, you may still have coverage options depending on eligibility. Get clear next steps from licensed insurance professionals.",
    testimonial: {
      quote:
        "I missed open enrollment and thought I was out of luck. My agent explained my options clearly.",
      name: "Amanda W",
      title: "Verified Customer",
      imageSrc: "/images/woman-buying-health-insurance.webp",
      imageAlt: "Amanda W",
    },
    formTitle: "Check Missed Enrollment Options",
    formSubtitle: "Takes less than 60 seconds",
    submitButtonText: "Check My Options",
    noteText: "Coverage options vary by eligibility. Not for Medicare or Medicaid enrollment.",
  },
  tired: {
    heading: "Health Insurance Shouldn't Be This Confusing",
    paragraph1:
      "If you missed open enrollment, it’s easy to assume you have to wait. In reality, some people may still have options depending on eligibility.",
    paragraph2:
      "We simplify the process by connecting you with licensed professionals who explain what you can do next—without pressure.",
    ctaText: "Let's Get Started",
  },
  how: {
    heading: "Your Simple Path Forward",
    steps: [
      { step: 1, title: "Share the Basics", description: "Quick form. Just the essentials to understand your situation." },
      { step: 2, title: "Check Eligibility Paths", description: "See what routes may be available after enrollment." },
      { step: 3, title: "Speak With a Licensed Pro", description: "Get clear answers about timelines and next steps." },
      { step: 4, title: "Enroll If Eligible", description: "Complete the process with guided support." },
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
    heading: "Who We Help Most",
    audiences: [
      { title: "Missed the Deadline:", description: "People who want to know what options may still exist." },
      { title: "Coverage Changes:", description: "Anyone whose coverage changed recently and needs next steps." },
      { title: "Ready to Act:", description: "People who want clear answers fast—without hours of research." },
    ],
    ctaText: "Begin Your Search",
  },
  testimonials: {
    headingTop: "Stories From",
    headingBottom: "Real People",
    testimonials: [
      {
        quote:
          "I assumed I had to wait. The agent explained what I could do and helped me move forward.",
        name: "Amanda W",
        title: "Verified Customer",
        image: "/images/woman-buying-health-insurance.webp",
      },
      {
        quote:
          "Clear steps and no pressure. I finally understood my options after enrollment ended.",
        name: "Brandon T",
        title: "Verified Customer",
        image: "/images/health-insurance-consumer.webp",
      },
    ],
  },
}
