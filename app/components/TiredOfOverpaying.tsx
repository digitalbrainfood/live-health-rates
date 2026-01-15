'use client';

import Link from 'next/link';

export default function TiredOfOverpaying() {
  return (
    <section className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Icon */}
          <div className="w-full h-[350px] md:h-[400px] bg-gradient-to-br from-[#FED7AA] to-[#FFFBEB] rounded-2xl flex items-center justify-center text-8xl">
            💭
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
              Health Insurance Shouldn&apos;t Be This Confusing
            </h2>

            <p className="text-[#4B5563] text-lg leading-relaxed">
              If you&apos;re self-employed, running your own show, or simply looking beyond traditional employer plans, you&apos;ve probably discovered that the insurance maze can feel impossible to navigate alone.
            </p>

            <p className="text-[#4B5563] text-lg leading-relaxed">
              High premiums. Complex jargon. Endless options. We simplify the entire process by pairing you with knowledgeable agents who actually speak human and genuinely want to help you succeed.
            </p>

            <Link
              href="#quote-form"
              className="inline-block bg-[#EA580C] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#C2410C] hover:-translate-y-0.5 hover:shadow-lg transition-all mt-2"
            >
              Let&apos;s Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
