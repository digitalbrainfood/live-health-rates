'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#10385b] text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-base">
              Health Coverage Search is available now through <strong>March 15, 2026</strong>. See if you qualify for personalized options.
            </p>
          </div>
          <Link
            href="/aca"
            className="bg-white text-[#10385b] px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Check Eligibility
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white px-4 shadow-sm h-[60px] flex items-center sticky top-0 z-50">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/hcs-logo.svg"
              alt="Health Coverage Search"
              className="h-[40px] w-auto"
            />
          </Link>

          {/* Call Now */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-gray-600 text-sm">
              Talk to a specialist <strong>Call Now:</strong>
            </span>
            <a
              href="tel:833-741-1902"
              className="bg-[#f97316] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#ea580c] transition-colors"
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
