'use client';

import Image from 'next/image';
import Link from 'next/link';

type TiredOfOverpayingProps = {
  variant?: 'default' | 'missedOpenEnrollment';
};

export default function TiredOfOverpaying({ variant = 'default' }: TiredOfOverpayingProps) {
  const isMissed = variant === 'missedOpenEnrollment';
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/images/health-insurance-consumer.webp"
              alt="Health insurance consumer"
              width={600}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#10385b]">
              Health Insurance Shouldn&apos;t Be This Confusing
            </h2>

            <p className="text-gray-700 leading-relaxed">
              {isMissed ? (
              "If you missed open enrollment, it’s easy to assume you have to wait. In reality, some people may still have coverage options depending on their situation and eligibility."
            ) : (
              "If you're self-employed, running your own show, or simply looking beyond traditional employer plans, you've probably discovered that the insurance maze can feel impossible to navigate alone."
            )}
            </p>

            <p className="text-gray-700 leading-relaxed">
              {isMissed ? (
              <>High premiums. Confusing rules. Endless choices. We simplify the process by pairing you with <span className="text-[#10385b] font-semibold">licensed professionals who explain next steps clearly</span>—without jargon or pressure.</>
            ) : (
              <>High premiums. Complex jargon. Endless options. We simplify the entire process by pairing you with <span className="text-[#10385b] font-semibold">knowledgeable agents who actually speak human</span> and genuinely want to help you succeed.</>
            )}
            </p>

            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-[#f97316] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#ea580c] transition-colors"
            >
              Let&apos;s Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
