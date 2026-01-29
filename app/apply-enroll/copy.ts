import type { LandingPageCopy } from "../types/landingPageCopy";

export const copy: LandingPageCopy = {
  hero: {
    headlineTop: "Apply for Coverage Today",
    headlineHighlight: "Get Enrolled Fast",
    subheadline:
      "Ready to apply? We’ll connect you with licensed insurance professionals who can explain options and help you understand the enrollment process.",
    testimonial: {
      quote:
        "I wanted to enroll quickly. The agent explained the steps and helped me apply with confidence.",
      name: "Chris M",
      title: "Verified Customer",
      imageSrc: "/images/health-insurance-consumer.webp",
      imageAlt: "Chris M",
    },
    formTitle: "Start Your Application",
    formSubtitle: "Takes less than 60 seconds",
    submitButtonText: "Start My Application",
    noteText: "Coverage options vary by eligibility. Not for Medicare or Medicaid enrollment.",
  },
  tired: {
    heading: "Applying Shouldn't Be Complicated",
    paragraph1:
      "If you’re ready to apply for health insurance, the hardest part is usually figuring out which plan type fits and what the next steps are.",
    paragraph2:
      "We make it simple: licensed professionals answer questions, explain plan differences, and guide you through the application process—without pressure.",
    ctaText: "Let's Get Started",
  },
  how: {
    heading: "How Enrollment Works Here",
    steps: [
      { step: 1, title: "Share the Basics", description: "Quick form to understand your needs and timeline." },
      { step: 2, title: "Review Options", description: "Compare plan types and see what may fit." },
      { step: 3, title: "Confirm Details", description: "Get help understanding costs, networks, and benefits." },
      { step: 4, title: "Apply If Eligible", description: "Complete enrollment with guided support." },
    ],
  },
  why: {
    headingTop: "Why People Choose",
    headingBottom: "Guided Enrollment",
    benefits: [
      "Licensed guidance throughout",
      "Plain-English plan comparisons",
      "Help choosing plan types",
      "Clear timelines & next steps",
      "Fast application—minutes to complete",
      "No-pressure conversations",
      "Options beyond employer plans",
      "Support when you're ready to enroll",
    ],
  },
  who: {
    heading: "Who This Page Is For",
    audiences: [
      { title: "Ready to Apply:", description: "People who want to enroll now and need a clear path." },
      { title: "Comparing Options:", description: "Anyone deciding between plan types and networks." },
      { title: "Need Help Fast:", description: "People who want quick answers from licensed professionals." },
    ],
    ctaText: "Start My Application",
  },
  testimonials: {
    headingTop: "Enrollment",
    headingBottom: "Made Simple",
    testimonials: [
      {
        quote:
          "I had questions about plan types and networks. The agent explained everything clearly and helped me apply.",
        name: "Chris M",
        title: "Verified Customer",
        image: "/images/health-insurance-consumer.webp",
      },
      {
        quote:
          "Fast, straightforward, and no pressure. I finally felt confident choosing an option.",
        name: "Taylor S",
        title: "Verified Customer",
        image: "/images/woman-buying-health-insurance.webp",
      },
    ],
  },
}
