'use client';

import Image from 'next/image';

export default function InsurancePartners() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-gray-600 mb-8">
          Our network connects you with agents representing carriers like:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {/* Allstate */}
          <Image
            src="/images/allstate.webp"
            alt="Allstate Health Solutions"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />

          {/* BlueCross BlueShield */}
          <Image
            src="/images/blue-cross-blue-shield.webp"
            alt="BlueCross BlueShield"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />

          {/* Cigna */}
          <Image
            src="/images/cigna.webp"
            alt="Cigna"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />

          {/* United Healthcare */}
          <Image
            src="/images/united-healthcare.webp"
            alt="United Healthcare"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />

          {/* First Health Network */}
          <Image
            src="/images/first-health-network.png"
            alt="First Health Network"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
