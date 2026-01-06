'use client';

import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-cyan-50 to-gray-100 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
            Thank You for Inquiring with Live Health Rates
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            We just need to confirm eligibility with you over the phone. You will be getting a phone call and text message from us shortly.
          </p>

          {/* Call Button */}
          <a
            href="tel:877-468-0308"
            className="inline-block bg-[#f97316] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#ea580c] transition-colors mb-6"
          >
            Call: 877-468-0308
          </a>

          <p className="text-gray-600">
            Call now to speak with a licensed agent to confirm your eligibility.
          </p>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="border-t border-gray-200 py-8 px-4">
        <div className="max-w-5xl mx-auto text-xs text-gray-500 space-y-4">
          <p>
            Participating sales agencies represent Medicare Advantage (HMO, PPO and PFFS) organizations and stand-alone PDP prescription drug plans that are contracted with Medicare. Enrollment depends on the plan&apos;s contract renewal.
          </p>
          <p>
            Enrollment in the described plan type may be limited to certain times of the year unless you qualify for a special enrollment period.
          </p>
          <p>
            *Some plans may include a grocery benefit which helps cover the cost of groceries. This benefit is not universally available and may vary by plan and location. For more information on plans that offer a grocery benefit and to determine if you are eligible for such benefits, please consult with a licensed insurance agent.
          </p>
          <p>
            We are not affiliated with any plan or endorsed by any government entity or agency. We connect individuals with insurance providers and other affiliates (collectively, &ldquo;Partners&rdquo;) to give you, the consumer, an opportunity to get insurance information and connect with licensed insurance agents. By completing the quote form or calling the number listed above, you will be directed to a Partner who can connect you to an appropriately licensed insurance agent who can answer your questions and discuss plan options.
          </p>
          <p>
            Plans are insured or covered by a Medicare Advantage (HMO, HMO SNP, PPO, PPO SNP, and PFFS) organization with a Medicare contract and/or a By using this site, you acknowledge that you have read and agree to the Privacy Policy and Terms & Conditions.
          </p>
          <p>
            To get a complete list of available plans, please contact 1-800-MEDICARE (TTY users should call 1-877-486-2048), 24 hours a day/7 days a week, or visit www.medicare.gov. All Medicare plans comply with applicable federal civil rights laws and do not discriminate based on race, color, nationality, age, disability, or sex. Some benefits may not be available in your state and plans and services may vary in your area. Medicare has not reviewed or endorsed this information.
          </p>
          <p className="text-gray-400">
            SMID: MULTIPLAN_ELVCHPWEB2025
          </p>
        </div>

        {/* Footer Links */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link href="/terms" className="text-blue-600 hover:underline">Terms and Condition</Link>
          <span className="text-gray-300">|</span>
          <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
          <span className="text-gray-300">|</span>
          <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
          <span className="text-gray-300">|</span>
          <Link href="/do-not-sell" className="text-blue-600 hover:underline">Do Not Sell</Link>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          © 2026 Live Health Rates - All rights reserved.
        </p>
      </div>
    </div>
  );
}
