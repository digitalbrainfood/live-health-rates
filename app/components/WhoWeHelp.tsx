'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WhoWeHelp() {
  const audiences = [
    {
      title: 'Independent Workers:',
      description: 'Freelancers, contractors, and gig economy professionals who need flexible coverage without corporate benefits.',
    },
    {
      title: 'Entrepreneurs:',
      description: "Small business owners and startup founders searching for practical coverage solutions that won't drain the budget.",
    },
    {
      title: 'Families & Individuals:',
      description: 'Anyone tired of cookie-cutter options who wants genuine guidance in finding the right coverage fit.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#10385b]">
              Who Thrives With Our Service
            </h2>

            <div className="space-y-6">
              {audiences.map((audience, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#10385b] rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-[#10385b]">{audience.title}</span>{' '}
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-[#f97316] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#ea580c] transition-colors"
            >
              Begin Your Search
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Image */}
          <div className="relative order-1 md:order-2">
            <Image
              src="/images/woman-buying-health-insurance.webp"
              alt="Woman buying health insurance"
              width={600}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
