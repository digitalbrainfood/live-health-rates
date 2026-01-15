'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Disclaimer Section */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center text-xs text-gray-500 space-y-4">
          <p>
            <strong>Important Legal Disclosure:</strong> This is not a government agency. Live Health Rates is a private lead generation service. Plans referenced may not meet ACA requirements. By submitting information, you consent to contact via phone (including autodialed/prerecorded calls), text, and email, even if on Do Not Call registries. Your information may be sold to third parties for marketing.
          </p>
          <p>
            Submitting your information constitutes permission for an agent to contact you with additional information about the cost and coverage details of health plans. Possible options include, but are not limited to, Major Medical Plans, Short Term Plans, Fixed Indemnity Plans, and more. Descriptions are for informational purposes only and subject to change. Insurance plans may not be available in all states. For a complete description, please call us to determine eligibility and to request a copy of the applicable policy. Quotes may vary depending on various factors, including coverage choices, insurance companies' underwriting practices, and others. By using this site, you acknowledge that you have read and agree to the <Link href="/terms" className="text-gray-700 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-gray-700 hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Live Health Rates - All rights reserved.
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
