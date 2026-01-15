'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function HeroSection() {
  const router = useRouter();
  const [zipCode, setZipCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!zipCode || zipCode.length !== 5) {
      alert('Please enter a valid 5-digit zip code');
      return;
    }

    setIsSubmitting(true);

    // Store zip code and redirect to quote form
    if (typeof window !== 'undefined') {
      localStorage.setItem('userZipCode', zipCode);
    }

    // Redirect to quote page with zip code
    router.push(`/quote?zip=${zipCode}`);
  };

  return (
    <section className="bg-gradient-to-br from-[#FFFBEB] to-white py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
                Your Journey to{' '}
                <span className="text-[#EA580C]">Smarter Coverage</span>{' '}
                Starts Here
              </h1>
              <p className="mt-5 text-lg text-[#4B5563] leading-relaxed">
                Connect with experienced insurance professionals who&apos;ll help you navigate your options and find coverage that aligns with your lifestyle and budget.
              </p>
            </div>

            <Link
              href="#quote-form"
              className="inline-block bg-[#EA580C] text-white px-9 py-4 rounded-lg font-bold text-lg hover:bg-[#C2410C] hover:-translate-y-0.5 hover:shadow-xl transition-all"
            >
              Find Your Match
            </Link>

            {/* Testimonial */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#EA580C]">
              <p className="text-[#4B5563] italic text-lg leading-relaxed">
                &ldquo;I had no idea navigating insurance could be this straightforward. My agent explained everything in plain English and helped me make a confident choice.&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-5">
                <div className="w-12 h-12 flex-shrink-0 bg-[#FED7AA] rounded-full flex items-center justify-center font-bold text-[#78350F]">
                  AW
                </div>
                <div>
                  <p className="font-semibold text-[#111827]">Amanda W</p>
                  <p className="text-sm text-[#4B5563]">UX Designer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Quote Form */}
          <div id="quote-form" className="bg-white rounded-2xl shadow-xl p-8 order-1 lg:order-2">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-[#111827]">
                Start Your Coverage Search
              </h2>
              <p className="text-[#4B5563] mt-2">Takes less than 60 seconds</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="zipCode" className="block text-sm font-semibold text-[#111827] mb-2">
                  Enter Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  placeholder="12345"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg text-base focus:border-[#EA580C] transition-colors"
                  maxLength={5}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#EA580C] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#C2410C] hover:-translate-y-0.5 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Loading...' : 'Connect With Agents'}
              </button>
            </form>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-4 mt-5 flex-wrap">
              <div className="px-3 py-1.5 bg-[#F9FAFB] rounded-md text-xs text-[#4B5563]">
                Review4U ✓
              </div>
              <div className="px-3 py-1.5 bg-[#F9FAFB] rounded-md text-xs text-[#4B5563]">
                🔒 McAfee
              </div>
              <div className="px-3 py-1.5 bg-[#F9FAFB] rounded-md text-xs text-[#4B5563]">
                RatingFox ⭐
              </div>
            </div>

            {/* Consent Text */}
            <div className="mt-4 p-3 bg-[#F9FAFB] rounded-lg">
              <p className="text-xs text-[#4B5563] leading-relaxed text-left">
                Submitting this form means you&apos;re giving Live Health Rates and our partner network explicit permission to reach you via phone (including automated dialing), text, or email—even if you&apos;re on a Do Not Call list. Your details may be sold or shared with licensed insurance pros for marketing. See our{' '}
                <Link href="/terms" className="text-[#2563EB] underline">Terms</Link> and{' '}
                <Link href="/privacy" className="text-[#2563EB] underline">Privacy Policy</Link>. Standard messaging rates apply. No purchase necessary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
