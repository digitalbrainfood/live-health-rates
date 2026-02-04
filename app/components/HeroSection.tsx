'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Config type for landing page variants
type HeroConfig = {
  headline: string;
  headlineHighlight: string;
  subheadline: string;
  disclaimer?: string;
  testimonial: {
    quote: string;
    name: string;
    title: string;
    image: string;
  };
  form: {
    heading: string;
    buttonText: string;
  };
};

type HeroSectionProps = {
  config?: HeroConfig;
};

// Default config for the main homepage
const defaultConfig: HeroConfig = {
  headline: 'Save Up to 77% on',
  headlineHighlight: 'Health Insurance',
  subheadline: "Connect with experienced insurance professionals who'll help you navigate your options and find coverage that aligns with your lifestyle and budget.",
  testimonial: {
    quote: "I had no idea navigating insurance could be this straightforward. My agent explained everything in plain English and helped me make a confident choice.",
    name: 'Amanda W',
    title: 'UX Designer',
    image: '/images/woman-buying-health-insurance.webp',
  },
  form: {
    heading: 'Start Your Coverage Search',
    buttonText: 'Connect With Agents',
  },
};

export default function HeroSection({ config }: HeroSectionProps) {
  // Merge provided config with defaults
  const content = config || defaultConfig;
  
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

    // Redirect to quote page with zip code and Get the landing page slug
    const slug = window.location.pathname.split('/').pop() || 'homepage';
    router.push(`/quote?zip=${zipCode}&src=${slug}`);
  };

  return (
    <section className="relative bg-gradient-to-r from-[#e0f2fa] via-[#bde5f4] to-[#38b7e8] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#10385b] leading-tight">
                {content.headline}
                <br />
                <span className="text-[#f97316]">{content.headlineHighlight}</span>
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                {content.subheadline}
              </p>
              {content.disclaimer && (
                <p className="mt-3 text-xs text-gray-600">
                  {content.disclaimer}
                </p>
              )}
            </div>

            {/* Testimonial */}
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6">
              <p className="text-gray-700 italic text-lg">
                "{content.testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 flex-shrink-0 relative">
                  <Image
                    src={content.testimonial.image}
                    alt={content.testimonial.name}
                    fill
                    className="object-cover object-top rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#10385b]">{content.testimonial.name}</p>
                  <p className="text-sm text-gray-600">{content.testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Quote Form */}
          <div id="quote-form" className="bg-white rounded-2xl shadow-xl p-8 order-1 lg:order-2">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-[#10385b]">
                {content.form.heading}
              </h2>
              <p className="text-gray-600 mt-2">Takes less than 60 seconds</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  placeholder="12345"
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
                {isSubmitting ? 'Loading...' : content.form.buttonText}
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

            {/* Consent Text */}
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500 leading-relaxed text-left">
                By submitting this form, you agree that <strong>Health Coverage Search</strong> may contact you by phone, text message, or email regarding your request, including through automated technology, even if your number is on a state or national Do Not Call list. Your information may be shared with licensed insurance professionals for contact by <strong> phone call or email only</strong>. <strong>Only Health Coverage Search may send text messages.</strong>{' '}Message and data rates may apply. No purchase required. See our{' '}
                <Link href="/terms" className="text-blue-600 underline">Terms</Link> and{' '}
                <Link href="/privacy" className="text-blue-600 underline">Privacy Policy</Link>. Standard messaging rates apply. No purchase necessary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
