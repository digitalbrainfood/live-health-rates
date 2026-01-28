'use client';

import Image from 'next/image';

type WhyOurPlansProps = {
  variant?: 'default' | 'missedOpenEnrollment';
};

export default function WhyOurPlans({ variant = 'default' }: WhyOurPlansProps) {
  const isMissed = variant === 'missedOpenEnrollment';
  const benefits = isMissed
    ? [
        'Eligibility help in plain English',
        'Clear next steps & timelines',
        'Compare plan types quickly',
        'Licensed support—no guesswork',
        'Fast application—minutes to complete',
        'Guidance after missed enrollment',
        'Options beyond employer plans',
        'Help without pressure',
      ]
    : [
        'Nationwide PPO Network Access',
        'Potential Savings Compared to Traditional Plans',
        'Reduced Out-of-Pocket Expense Options',
        'Plans With Minimal or Zero Deductibles',
        'Cost-Effective Solutions for Healthier Individuals',
        'Rapid Coverage Start—Sometimes Next Day',
        'Fast Application—Just Minutes to Complete',
        'No Income Requirements to Qualify',
      ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-1 md:order-1">
            <Image
              src="/images/health-insurance-agent.webp"
              alt="Health insurance agent"
              width={600}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 order-2 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#10385b] italic">
              What Makes This
              <br />
              Process Different
            </h2>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#f97316] mt-1">•</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
