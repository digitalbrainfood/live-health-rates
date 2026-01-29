import type { LandingPageCopy } from "../types/landingPageCopy";

export const copy: LandingPageCopy = {
  hero: {
    headlineTop: "Self-Employed?",
    headlineHighlight: "Find Coverage That Fits",
    subheadline:
      "No employer plan? No problem. Explore health insurance options with licensed professionals who understand self-employed needs and budgets.",
    testimonial: {
      quote:
        "As a freelancer, I needed a plan that made sense. I got clear guidance and real options.",
      name: "Alex R",
      title: "Verified Customer",
      imageSrc: "/images/health-insurance-agent.webp",
      imageAlt: "Alex R",
    },
    formTitle: "Find Self-Employed Options",
    formSubtitle: "Takes less than 60 seconds",
    submitButtonText: "See My Options",
  },
  tired: {
    heading: "Coverage Without Employer Benefits",
    paragraph1:
      "When you’re self-employed, you’re responsible for everything—including health insurance. That usually means confusing options and high prices.",
    paragraph2:
      "We simplify the search with licensed guidance and plain-English comparisons so you can find a plan type that fits your lifestyle and budget.",
    ctaText: "Let's Get Started",
  },
  how: {
    heading: "A Simple Way to Compare",
    steps: [
      { step: 1, title: "Share the Basics", description: "Tell us your needs and preferences." },
      { step: 2, title: "Compare Plan Types", description: "Explore options beyond employer plans." },
      { step: 3, title: "Talk to a Licensed Pro", description: "Get answers and clear cost expectations." },
      { step: 4, title: "Enroll If Eligible", description: "Apply with guided support when you’re ready." },
    ],
  },
  why: {
    headingTop: "Why This Works",
    headingBottom: "For Self-Employed",
    benefits: [
      "Options beyond employer plans",
      "Plain-English plan comparisons",
      "Help balancing budget & coverage",
      "Licensed guidance without pressure",
      "Compare plan types quickly",
      "Fast application—minutes to complete",
      "Clear next steps & timelines",
      "Support for independent workers",
    ],
  },
  who: {
    heading: "Who This Page Helps",
    audiences: [
      { title: "Freelancers:", description: "Independent workers needing flexible coverage." },
      { title: "Business Owners:", description: "Entrepreneurs who want practical options." },
      { title: "Contractors:", description: "1099 workers without employer benefits." },
    ],
    ctaText: "See My Options",
  },
  testimonials: {
    headingTop: "Self-Employed",
    headingBottom: "Success Stories",
    testimonials: [
      {
        quote:
          "I’m self-employed and was tired of guessing. This gave me clear options and a plan.",
        name: "Alex R",
        title: "Verified Customer",
        image: "/images/health-insurance-agent.webp",
      },
      {
        quote:
          "Straightforward guidance and no pressure. I finally understood what fit my needs.",
        name: "Dana P",
        title: "Verified Customer",
        image: "/images/woman-buying-health-insurance.webp",
      },
    ],
  },
}
