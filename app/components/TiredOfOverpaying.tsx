'use client';

import Image from 'next/image';
import Link from 'next/link';

export type TiredOfOverpayingProps = {
  heading: string;
  paragraph1: string;
  paragraph2: string;
  ctaText: string;
  ctaHref?: string;
};

export default function TiredOfOverpaying({
  heading,
  paragraph1,
  paragraph2,
  ctaText,
  ctaHref = '/quote',
}: TiredOfOverpayingProps) {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/health-insurance-consumer.webp"
              alt="Health insurance consumer"
              width={600}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#10385b]">{heading}</h2>

            <p className="text-gray-700 leading-relaxed">{paragraph1}</p>

            <p className="text-gray-700 leading-relaxed">{paragraph2}</p>

            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-[#f97316] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#ea580c] transition-colors"
            >
              {ctaText}
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
