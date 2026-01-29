import type { LandingPageCopy } from "../types/landingPageCopy";

export const copy: LandingPageCopy = {
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
    noteText: "Coverage options vary by eligibility. Not for Medicare or Medicaid enrollment.",
  },
  tired: {
    heading: "Health Insurance Shouldn't Be This Confusing",
    paragraph1:
      "Need insurance right away? It’s stressful to be without coverage. We help you explore options that may start soon—based on your situation and eligibility.",
    paragraph2:
      "No coverage. Tight timelines. Too many choices. We simplify the process with licensed guidance and clear next steps.",
    ctaText: "Let's Get Started",
  },
  how: {
    heading: "Your Simple Path Forward",
    steps: [
      { step: 1, title: "Share the Basics", description: "Quick form. We’ll understand your timeline and needs." },
      { step: 2, title: "See Fast-Start Options", description: "Explore paths that may start soon—based on eligibility." },
      { step: 3, title: "Talk to a Licensed Pro", description: "Get clear answers today and understand next steps." },
      { step: 4, title: "Enroll If Eligible", description: "Complete enrollment with guided support." },
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
    heading: "Who We Help Most",
    audiences: [
      { title: "Uninsured Right Now:", description: "People who need guidance fast." },
      { title: "Starting Soon:", description: "Anyone with a deadline coming up." },
      { title: "Want Fast Answers:", description: "People who want clear, plain-English help today." },
    ],
    ctaText: "Begin Your Search",
  },
  testimonials: {
    headingTop: "Stories From",
    headingBottom: "Real People",
    testimonials: [
      {
        quote:
          "I needed coverage quickly and got clear answers on what could start soon.",
        name: "Jordan K",
        title: "Verified Customer",
        image: "/images/health-insurance-consumer.webp",
      },
      {
        quote:
          "No pressure, just straight guidance. I understood my next steps immediately.",
        name: "Samantha R",
        title: "Verified Customer",
        image: "/images/woman-buying-health-insurance.webp",
      },
    ],
  },
}
