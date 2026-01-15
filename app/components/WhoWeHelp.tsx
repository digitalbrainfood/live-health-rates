'use client';

import Link from 'next/link';

export default function WhoWeHelp() {
  const audiences = [
    {
      icon: '💼',
      title: 'Independent Workers',
      description: 'Freelancers, contractors, and gig economy professionals who need flexible coverage without corporate benefits.',
    },
    {
      icon: '🏢',
      title: 'Entrepreneurs',
      description: "Small business owners and startup founders searching for practical coverage solutions that won't drain the budget.",
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Families & Solo Explorers',
      description: 'Anyone tired of cookie-cutter options who wants genuine guidance in finding the right coverage fit.',
    },
  ];

  return (
    <section className="bg-[#2563EB] py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16">
          Who Thrives With Our Service
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 md:p-10 text-center"
            >
              <div className="w-20 h-20 bg-[#FED7AA] text-[#EA580C] rounded-full flex items-center justify-center text-4xl mx-auto mb-5">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold text-[#EA580C] mb-4">
                {audience.title}
              </h3>
              <p className="text-[#4B5563] leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#quote-form"
            className="inline-block bg-[#EA580C] text-white px-9 py-4 rounded-lg font-bold text-lg hover:bg-[#C2410C] hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            Begin Your Search
          </Link>
        </div>
      </div>
    </section>
  );
}
