'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white text-center py-3 px-4">
        <p className="text-sm sm:text-base">
          Coverage search available now through <strong className="text-[#FED7AA] font-bold">January 15, 2026</strong>.{' '}
          <Link href="#quote-form" className="text-[#FED7AA] underline font-semibold hover:text-white">
            See if you qualify
          </Link>{' '}
          for personalized options.
        </p>
      </div>

      {/* Main Header */}
      <header className="bg-white px-4 shadow-md h-[60px] flex items-center sticky top-0 z-50">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/health-coverage-search.png"
              alt="Live Health Rates"
              width={140}
              height={42}
              className="max-h-[42px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Call Now */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-[#4B5563] text-sm font-semibold">
              Talk to a specialist
            </span>
            <a
              href="tel:833-741-1902"
              className="bg-[#EA580C] text-white px-5 py-2.5 rounded-lg font-bold text-base hover:bg-[#C2410C] hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              <span className="sm:hidden">Call Now</span>
              <span className="hidden sm:inline">833-741-1902</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
