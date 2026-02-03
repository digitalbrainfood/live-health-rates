// Landing Page Configuration
// Add new landing page variants here - no code changes needed elsewhere

export type LandingPageConfig = {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    disclaimer?: string;
    testimonial: {
      quote: string;
      name: string;
      title: string;
      image: string;
    };
    form: {
      heading: string;
      buttonText: string;
    };
  };
};

export const landingPages: LandingPageConfig[] = [
  // ============================================
  // 1. Default / Main Landing Page
  // ============================================
  {
    slug: 'quotes',
    meta: {
      title: 'Health Coverage Search - Save Up to 77% on Health Insurance',
      description: 'Connect with licensed insurance professionals who simplify your health coverage search. Find personalized options from top carriers—no jargon, no pressure, just real guidance.',
    },
    hero: {
      headline: 'Save Up to 77% on',
      headlineHighlight: 'Health Insurance',
      subheadline: "Connect with experienced insurance professionals who'll help you navigate your options and find coverage that aligns with your lifestyle and budget.",
      testimonial: {
        quote: "I had no idea navigating insurance could be this straightforward. My agent explained everything in plain English and helped me make a confident choice.",
        name: 'Amanda W',
        title: 'UX Designer',
        image: '/images/woman-buying-health-insurance.webp',
      },
      form: {
        heading: 'Start Your Coverage Search',
        buttonText: 'Connect With Agents',
      },
    },
  },

  // ============================================
  // 2. Missed Open Enrollment
  // ============================================
  {
    slug: 'missed-enrollment',
    meta: {
      title: 'Missed Open Enrollment? You May Still Have Options | Health Coverage Search',
      description: 'Missed the health insurance enrollment deadline? Connect with licensed professionals who can explain your coverage options. No jargon, no pressure.',
    },
    hero: {
      headline: 'Missed Open Enrollment?',
      headlineHighlight: 'You Still Have Options',
      subheadline: "Even if open enrollment has passed, you may still have coverage options depending on eligibility. We connect you with licensed insurance professionals who explain next steps clearly.",
      disclaimer: 'Coverage options and availability vary by eligibility. Not for Medicare or Medicaid enrollment.',
      testimonial: {
        quote: "I missed open enrollment and thought I was out of luck. My agent explained my options clearly and helped me take the next step.",
        name: 'Amanda W',
        title: 'Verified Customer',
        image: '/images/woman-buying-health-insurance.webp',
      },
      form: {
        heading: 'Check Your Options',
        buttonText: 'See What\'s Available',
      },
    },
  },

  // ============================================
  // 3. Apply / Enroll Now
  // ============================================
  {
    slug: 'apply',
    meta: {
      title: 'Apply for Health Insurance Today | Health Coverage Search',
      description: 'Ready to enroll in health coverage? Connect with licensed agents who can help you apply for the right plan today. Fast, simple, no pressure.',
    },
    hero: {
      headline: 'Ready to Enroll in',
      headlineHighlight: 'Health Coverage?',
      subheadline: "Skip the confusion and lengthy applications. We connect you with licensed professionals who streamline the enrollment process and help you get covered quickly.",
      testimonial: {
        quote: "I expected a painful application process. Instead, my agent handled everything and I was enrolled within days.",
        name: 'Michael R',
        title: 'Small Business Owner',
        image: '/images/woman-buying-health-insurance.webp',
      },
      form: {
        heading: 'Start Your Application',
        buttonText: 'Apply Now',
      },
    },
  },

  // ============================================
  // 4. No Waiting / Immediate Coverage
  // ============================================
  {
    slug: 'immediate',
    meta: {
      title: 'Immediate Health Coverage - No Waiting Period | Health Coverage Search',
      description: 'Need health insurance that starts right away? Explore plans with no waiting periods. Connect with licensed agents who can get you covered fast.',
    },
    hero: {
      headline: 'Need Coverage',
      headlineHighlight: 'That Starts Now?',
      subheadline: "Don't wait months for your coverage to kick in. We connect you with licensed professionals who specialize in plans with immediate or minimal waiting periods.",
      testimonial: {
        quote: "I needed coverage right away for an upcoming procedure. My agent found a plan that started almost immediately.",
        name: 'Sarah K',
        title: 'Verified Customer',
        image: '/images/woman-buying-health-insurance.webp',
      },
      form: {
        heading: 'Get Immediate Coverage',
        buttonText: 'Get Covered Now',
      },
    },
  },

  // ============================================
  // 5. Self-Employed
  // ============================================
  {
    slug: 'self-employed',
    meta: {
      title: 'Health Insurance for Self-Employed | Health Coverage Search',
      description: 'Find affordable health coverage designed for self-employed professionals. Connect with licensed agents who understand your unique needs.',
    },
    hero: {
      headline: 'Self-Employed?',
      headlineHighlight: 'Get Covered Your Way',
      subheadline: "Being your own boss shouldn't mean going without quality health coverage. We connect you with licensed professionals who specialize in plans for entrepreneurs and business owners.",
      testimonial: {
        quote: "As a self-employed consultant, I thought affordable coverage was impossible. My agent found me a plan that fits my budget perfectly.",
        name: 'Marcus T',
        title: 'Business Consultant',
        image: '/images/woman-buying-health-insurance.webp',
      },
      form: {
        heading: 'Find Self-Employed Coverage',
        buttonText: 'See My Options',
      },
    },
  },

  // ============================================
  // 6. 1099 / Independent Contractor
  // ============================================
  {
    slug: '1099',
    meta: {
      title: 'Health Insurance for 1099 Workers & Contractors | Health Coverage Search',
      description: 'Independent contractor or 1099 worker? Find health coverage that fits the gig economy. Connect with licensed agents who specialize in contractor coverage.',
    },
    hero: {
      headline: '1099 Worker?',
      headlineHighlight: 'You Deserve Great Coverage',
      subheadline: "Working as an independent contractor shouldn't mean sacrificing health benefits. We connect you with licensed professionals who understand the unique needs of 1099 workers.",
      testimonial: {
        quote: "As a 1099 contractor, I was always nervous about not having benefits. My agent found me solid coverage that I can actually afford.",
        name: 'Jason L',
        title: 'Freelance Developer',
        image: '/images/woman-buying-health-insurance.webp',
      },
      form: {
        heading: 'Find 1099 Coverage',
        buttonText: 'Get My Options',
      },
    },
  },

  // ============================================
  // 7. Private Health Insurance
  // ============================================
  {
    slug: 'private',
    meta: {
      title: 'Private Health Insurance Plans | Health Coverage Search',
      description: 'Explore private health insurance options outside the marketplace. Connect with licensed agents who can help you find flexible, personalized coverage.',
    },
    hero: {
      headline: 'Looking for',
      headlineHighlight: 'Private Health Insurance?',
      subheadline: "Want more flexibility than marketplace plans offer? We connect you with licensed professionals who specialize in private coverage options tailored to your specific needs.",
      testimonial: {
        quote: "I wanted more control over my coverage options. My agent showed me private plans I didn't even know existed.",
        name: 'Jennifer M',
        title: 'Real Estate Agent',
        image: '/images/woman-buying-health-insurance.webp',
      },
      form: {
        heading: 'Explore Private Plans',
        buttonText: 'See Private Options',
      },
    },
  },

  // ============================================
  // 8. PPO Health Insurance
  // ============================================
  {
    slug: 'ppo',
    meta: {
      title: 'PPO Health Insurance Plans - Keep Your Doctors | Health Coverage Search',
      description: 'Want a PPO plan with freedom to choose your doctors? Connect with licensed agents who can help you find flexible PPO coverage.',
    },
    hero: {
      headline: 'Want a PPO Plan?',
      headlineHighlight: 'Keep Your Doctors',
      subheadline: "Love your current doctors? PPO plans let you see specialists without referrals and keep your preferred providers. We connect you with professionals who specialize in PPO options.",
      testimonial: {
        quote: "I refused to give up my doctors. My agent found me a PPO that let me keep every one of them.",
        name: 'David H',
        title: 'Verified Customer',
        image: '/images/woman-buying-health-insurance.webp',
      },
      form: {
        heading: 'Find PPO Coverage',
        buttonText: 'See PPO Plans',
      },
    },
  },

  // ============================================
  // 9. Unemployed / Between Jobs
  // ============================================
  {
    slug: 'unemployed',
    meta: {
      title: 'Health Insurance When Unemployed or Between Jobs | Health Coverage Search',
      description: 'Lost your job or between positions? Find affordable health coverage without expensive COBRA. Connect with licensed agents today.',
    },
    hero: {
      headline: 'Between Jobs?',
      headlineHighlight: 'Stay Covered for Less',
      subheadline: "Losing your job doesn't mean losing your health coverage—or paying a fortune for COBRA. We connect you with licensed professionals who find affordable alternatives.",
      testimonial: {
        quote: "COBRA was going to cost me $1,800/month. My agent found comparable coverage for a fraction of the price while I job searched.",
        name: 'Chris P',
        title: 'Marketing Manager',
        image: '/images/woman-buying-health-insurance.webp',
      },
      form: {
        heading: 'Find Affordable Coverage',
        buttonText: 'See My Options',
      },
    },
  },

  // ============================================
  // 10. Early Retirement
  // ============================================
  {
    slug: 'early-retirement',
    meta: {
      title: 'Health Insurance for Early Retirees (Under 65) | Health Coverage Search',
      description: 'Retiring before Medicare kicks in? Find health coverage to bridge the gap until 65. Connect with licensed agents who specialize in early retirement coverage.',
    },
    hero: {
      headline: 'Retiring Early?',
      headlineHighlight: 'Bridge the Gap to Medicare',
      subheadline: "Congratulations on early retirement! But what about health coverage until Medicare kicks in at 65? We connect you with professionals who specialize in bridging that gap affordably.",
      disclaimer: 'Not for Medicare enrollment. For individuals under 65 seeking coverage before Medicare eligibility.',
      testimonial: {
        quote: "I retired at 58 and was worried about 7 years without coverage. My agent found me a plan that protects me until Medicare.",
        name: 'Robert S',
        title: 'Early Retiree',
        image: '/images/woman-buying-health-insurance.webp',
      },
      form: {
        heading: 'Find Pre-Medicare Coverage',
        buttonText: 'Explore My Options',
      },
    },
  },
// ============================================
  // 11. Short-Term / Temporary
  // ============================================
  {
    slug: 'short-term',
    meta: {
      title: 'Short-Term Health Insurance - Temporary Coverage | Health Coverage Search',
      description: 'Need temporary health coverage? Find short-term plans that protect you during life transitions. Connect with licensed agents today.',
    },
    hero: {
      headline: 'Need Temporary',
      headlineHighlight: 'Health Coverage?',
      subheadline: "Whether you're between jobs, waiting for benefits to start, or just need a few months of protection, we connect you with licensed professionals who specialize in short-term coverage solutions.",
      testimonial: {
        quote: "I only needed coverage for 4 months. My agent found me a short-term plan that was exactly what I needed without locking me into a year.",
        name: 'Kevin M',
        title: 'Verified Customer',
        image: '/images/woman-buying-health-insurance.webp',
      },
      form: {
        heading: 'Find Short-Term Coverage',
        buttonText: 'Get Temporary Coverage',
      },
    },
  },
// ============================================
  // 12. Non-ACA Health Insurance
  // ============================================
  {
    slug: 'non-aca',
    meta: {
      title: 'Non-ACA Health Insurance Plans | Health Coverage Search',
      description: 'Explore health insurance options outside the ACA marketplace. No open enrollment restrictions, no income requirements. Connect with licensed agents today.',
    },
    hero: {
      headline: 'Want Coverage',
      headlineHighlight: 'Outside the ACA?',
      subheadline: "Skip the marketplace restrictions. Non-ACA plans offer year-round enrollment, no income requirements, and more flexibility. We connect you with licensed professionals who specialize in these options.",
      testimonial: {
        quote: "I made too much for subsidies and the marketplace plans were overpriced. My agent found me a non-ACA plan that saved me hundreds per month.",
        name: 'Brian T',
        title: 'Verified Customer',
        image: '/images/woman-buying-health-insurance.webp',
      },
      form: {
        heading: 'Explore Non-ACA Plans',
        buttonText: 'See My Options',
      },
    },
  },
// ============================================
  // 13. COBRA Alternative
  // ============================================
  {
    slug: 'cobra-alternative',
    meta: {
      title: 'COBRA Alternative - Save Money on Health Coverage | Health Coverage Search',
      description: 'COBRA too expensive? Find affordable alternatives to COBRA coverage. Connect with licensed agents who can save you hundreds per month.',
    },
    hero: {
      headline: 'COBRA Too',
      headlineHighlight: 'Expensive?',
      subheadline: "COBRA can cost $1,500-$2,000+ per month. We connect you with licensed professionals who specialize in finding comparable coverage at a fraction of the price.",
      testimonial: {
        quote: "My COBRA quote was $1,800/month. My agent found me similar coverage for $400. I couldn't believe the difference.",
        name: 'Michelle S',
        title: 'Verified Customer',
        image: '/images/woman-buying-health-insurance.webp',
      },
      form: {
        heading: 'Find COBRA Alternatives',
        buttonText: 'Compare My Options',
      },
    },
  },

  // ============================================
  // 14. Turning 26
  // ============================================
  {
    slug: 'turning-26',
    meta: {
      title: 'Turning 26? Find Your Own Health Insurance | Health Coverage Search',
      description: "Aging off your parents' health insurance? Find affordable coverage before you turn 26. Connect with licensed agents who make it simple.",
    },
    hero: {
      headline: 'Turning 26?',
      headlineHighlight: "Time for Your Own Plan",
      subheadline: "Aging off your parents' insurance doesn't have to be stressful. We connect you with licensed professionals who help young adults find affordable coverage before the deadline.",
      testimonial: {
        quote: "I had no idea where to start when I turned 26. My agent walked me through everything and found me a great plan in my budget.",
        name: 'Alex P',
        title: 'Graduate Student',
        image: '/images/woman-buying-health-insurance.webp',
      },
      form: {
        heading: 'Find Coverage Before 26',
        buttonText: 'Get Started Now',
      },
    },
  },

  // ============================================
  // 15. Family Health Insurance
  // ============================================
  {
    slug: 'family',
    meta: {
      title: 'Family Health Insurance Plans | Health Coverage Search',
      description: 'Find affordable health coverage for your entire family. Connect with licensed agents who specialize in family plans.',
    },
    hero: {
      headline: 'Protect Your',
      headlineHighlight: 'Whole Family',
      subheadline: "Finding one plan that covers everyone at a price you can afford isn't easy. We connect you with licensed professionals who specialize in family coverage options.",
      testimonial: {
        quote: "With 3 kids, I was overwhelmed by options. My agent found us a plan that covers everyone for less than I was paying before.",
        name: 'Sarah M',
        title: 'Mother of 3',
        image: '/images/woman-buying-health-insurance.webp',
      },
      form: {
        heading: 'Find Family Coverage',
        buttonText: 'Cover My Family',
      },
    },
  },
];

// Helper function to get a landing page by slug
export function getLandingPage(slug: string): LandingPageConfig | undefined {
  return landingPages.find((page) => page.slug === slug);
}

// Get all slugs for static generation
export function getAllLandingPageSlugs(): string[] {
  return landingPages.map((page) => page.slug);
}
