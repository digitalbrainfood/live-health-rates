'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
    <section className="relative bg-gradient-to-br from-cyan-50 via-cyan-100 to-cyan-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] leading-tight">
                Save Up to 80%
                <br />
                on Health Insurance
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                Get your customized quote now and see how much you could be saving.
              </p>
            </div>

            {/* Testimonial */}
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6">
              <p className="text-gray-700 italic text-lg">
                &ldquo;I was paying over $900 a month before. Now I have better coverage for less than $300.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 flex-shrink-0 relative">
                  <Image
                    src="/images/woman-buying-health-insurance.webp"
                    alt="Lisa K"
                    fill
                    className="object-cover object-top rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#1a365d]">Lisa K</p>
                  <p className="text-sm text-gray-600">Graphic Designer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Quote Form */}
          <div id="quote-form" className="bg-white rounded-2xl shadow-xl p-8 order-1 lg:order-2">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-[#1a365d]">
                Get a Quote for Health Insurance
                <br />
                Coverage in Under 5 Minutes
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  placeholder=""
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all"
                  maxLength={5}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#f97316] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#ea580c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Loading...' : 'Get Quote'}
              </button>
            </form>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
              <div className="h-5 flex items-center">
                <Image
                  src="/images/review4u.svg"
                  alt="Review4U"
                  width={70}
                  height={20}
                  className="max-h-5 w-auto object-contain"
                />
              </div>
              <div className="h-5 flex items-center">
                <Image
                  src="/images/mcafee.webp"
                  alt="McAfee Secure"
                  width={70}
                  height={20}
                  className="max-h-5 w-auto object-contain"
                />
              </div>
              <div className="h-5 flex items-center">
                <Image
                  src="/images/ratingfox.svg"
                  alt="RatingFox"
                  width={70}
                  height={20}
                  className="max-h-5 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
