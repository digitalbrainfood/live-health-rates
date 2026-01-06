'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#1a365d] text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-base">
              Paying too much for health insurance coverage?
            </p>
            <p className="text-sm sm:text-base">
              Open Enrollment runs <strong>Nov 1, 2025 to Jan 15, 2026</strong>. Find out if you qualify for lower cost alternatives.
            </p>
          </div>
          <Link
            href="#quote-form"
            className="bg-white text-[#1a365d] px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Check Eligibility
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white px-4 shadow-sm h-[60px] flex items-center sticky top-0 z-50">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/live-health-rates.webp"
              alt="Live Health Rates"
              width={200}
              height={60}
              className="max-h-[60px] w-auto object-contain"
              priority
            />
            <span className="text-[#1a365d] font-bold text-lg hidden sm:inline">Live Health Rates</span>
          </Link>

          {/* Call Now */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-gray-600 text-sm">
              Speak to an agent <strong>Call Now:</strong>
            </span>
            <a
              href="tel:833-312-4339"
              className="bg-[#f97316] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#ea580c] transition-colors"
            >
              <span className="sm:hidden">Call Now</span>
              <span className="hidden sm:inline">833-312-4339</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
