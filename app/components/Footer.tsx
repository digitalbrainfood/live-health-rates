'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Disclaimer Section */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center text-xs text-gray-500 space-y-4">
          <p>
            <strong>Important Legal Disclosure:</strong> This website is not a government agency. <strong>Health Coverage Search</strong> is a private lead generation service owned and operated by <strong>Rising Health Insurance Agency FL LLC</strong>. Insurance plans referenced may not meet Affordable Care Act (ACA) requirements and may not be available in all states. By submitting your information, you provide express written consent to be contacted by <strong>Rising Health Insurance Agency FL LLC</strong> and <strong>healthcoveragesearch.com</strong> via phone call, text message, or email, including through autodialed, AI, or prerecorded messages, even if your number is on a state or national Do Not Call registry. Message frequency may vary and message and data rates may apply. <strong>Only Rising Health Insurance Agency FL LLC and healthcoveragesearch.com may send text messages.</strong>
          </p>
          <p>
            Your personal information may be shared with licensed insurance agents or third-party partners for marketing purposes or to contact you via <strong>voice call or email only</strong>; <strong>text messaging originator opt-in data and consent will not be shared with any third parties</strong>. Submitting your information constitutes permission for an agent to contact you regarding available health insurance coverage options, which may include Major Medical, Short-Term, Fixed Indemnity, or other insurance products. Plan availability, descriptions, and quotes may vary. By using this site, you agree to the<Link href="/terms" className="text-gray-700 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-gray-700 hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Health Coverage Search - All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/do-not-sell" className="text-sm text-gray-600 hover:text-gray-900">
              Do Not Sell
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
