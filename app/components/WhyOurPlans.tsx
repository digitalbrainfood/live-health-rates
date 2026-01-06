'use client';

import Image from 'next/image';

export default function WhyOurPlans() {
  const benefits = [
    'True National PPO Networks',
    '30% to 60% Less than ACA/Marketplace Plans',
    'Lower Out-of-Pocket Costs',
    'No Deductible',
    'Lower-Cost Coverage Options for Healthy Individuals',
    'Coverage Available as Soon as the Next Day',
    'Quick Online Application (Under 5 Minutes)',
    'No Income Qualification Required',
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] italic">
              Why Our Plans
              <br />
              Are Perfect for You
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
