'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TiredOfOverpaying() {
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d]">
              Tired of Overpaying for Health Insurance with Limited Options?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              If you're self employed, a small business owner, or part of a family without access to employer based coverage, you know how frustrating it can be to find affordable, quality health insurance.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We get it marketplace plans can cost over $1,000 a month for a family of three, with <span className="text-[#1a365d] font-semibold">high deductibles and restrictive HMO networks</span>. That's why we're here to offer an alternative.
            </p>

            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-[#f97316] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#ea580c] transition-colors"
            >
              Get Started Now
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
