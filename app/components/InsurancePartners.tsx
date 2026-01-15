'use client';

import Image from 'next/image';

export default function InsurancePartners() {
  return (
    <section className="bg-[#F9FAFB] py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-[#4B5563] mb-8 text-base">
          Our network connects you with agents representing carriers like:
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {/* Allstate */}
          <div className="w-[120px] h-[60px] bg-white rounded-lg shadow-sm flex items-center justify-center">
            <Image
              src="/images/allstate.webp"
              alt="Allstate Health Solutions"
              width={100}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* BlueCross BlueShield */}
          <div className="w-[120px] h-[60px] bg-white rounded-lg shadow-sm flex items-center justify-center">
            <Image
              src="/images/blue-cross-blue-shield.webp"
              alt="BlueCross BlueShield"
              width={100}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Cigna */}
          <div className="w-[120px] h-[60px] bg-white rounded-lg shadow-sm flex items-center justify-center">
            <Image
              src="/images/cigna.webp"
              alt="Cigna"
              width={100}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* United Healthcare */}
          <div className="w-[120px] h-[60px] bg-white rounded-lg shadow-sm flex items-center justify-center">
            <Image
              src="/images/united-healthcare.webp"
              alt="United Healthcare"
              width={100}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
