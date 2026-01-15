'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Disclaimer */}
        <div className="bg-white/5 rounded-lg p-5 mb-8">
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            <strong className="text-white">Important Legal Disclosure:</strong> This is not a government agency. Live Health Rates is a private lead generation service. Plans referenced may not meet ACA requirements. By submitting information, you consent to contact via phone (including autodialed/prerecorded calls), text, and email, even if on Do Not Call registries. Your information may be sold to third parties for marketing. See our{' '}
            <Link href="/terms" className="text-[#FED7AA] underline hover:text-white">Terms</Link> and{' '}
            <Link href="/privacy" className="text-[#FED7AA] underline hover:text-white">Privacy Policy</Link>. No guarantee of coverage or pricing. Plans not available in all states.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 pt-5 border-t border-white/10">
          <Link href="/terms" className="text-[#9CA3AF] hover:text-[#FED7AA] transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-[#9CA3AF] hover:text-[#FED7AA] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/do-not-sell" className="text-[#9CA3AF] hover:text-[#FED7AA] transition-colors">
            Do Not Sell
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-center text-[#6B7280] mt-5 text-sm">
          © 2026 Live Health Rates - All rights reserved.
        </p>
      </div>
    </footer>
  );
}
