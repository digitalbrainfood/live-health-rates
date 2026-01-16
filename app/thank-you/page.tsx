'use client';

import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-cyan-50 to-gray-100 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#10385b] mb-4">
            Thank You for Inquiring with Health Coverage Search
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            We just need to confirm eligibility with you over the phone. You will be getting a phone call and text message from us shortly.
          </p>

          {/* Call Button */}
          <a
            href="tel:833-741-1902"
            className="inline-block bg-[#f97316] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#ea580c] transition-colors mb-6"
          >
            Call: 833-741-1902
          </a>

          <p className="text-gray-600">
            Call now to speak with a licensed agent to confirm your eligibility.
          </p>
        </div>
      </div>

    </div>
  );
}
