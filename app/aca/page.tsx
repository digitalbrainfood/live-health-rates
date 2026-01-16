'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  const router = useRouter();

  // Reusable ZipCodeForm component for this page
  const ZipCodeForm = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => {
    const [localZip, setLocalZip] = useState('');
    const [localAgree, setLocalAgree] = useState(false);

    const handleLocalSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (localZip.length === 5 && localAgree) {
        router.push(`/aca-quote?zip=${localZip}`);
      }
    };

    const textColor = variant === 'dark' ? 'text-white' : 'text-gray-700';
    const linkColor = variant === 'dark' ? 'text-white underline' : 'text-blue-600 hover:underline';

    return (
      <form onSubmit={handleLocalSubmit} className="space-y-4">
        <div>
          <label className={`block text-sm font-medium ${textColor} mb-2`}>
            Enter your zip code
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={localZip}
              onChange={(e) => setLocalZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none bg-white"
              placeholder=""
              maxLength={5}
            />
            <button
              type="submit"
              disabled={localZip.length !== 5 || !localAgree}
              className="bg-[#f97316] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#ea580c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              Next
            </button>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id={`terms-${variant}`}
            checked={localAgree}
            onChange={(e) => setLocalAgree(e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-gray-300 text-[#f97316] focus:ring-[#f97316]"
          />
          <label htmlFor={`terms-${variant}`} className={`text-xs ${textColor}`}>
            I agree to the <Link href="/privacy" className={linkColor}>Privacy Policy</Link> and{' '}
            <Link href="/terms" className={linkColor}>Terms & Conditions</Link> of Health Coverage Search. By providing my phone number, I consent to receive automated text messages from this business. Message and data rates may apply.
          </label>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className={`text-sm ${textColor}`}>OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <a
          href="tel:833-871-1998"
          className="block w-full bg-[#f97316] text-white text-center py-4 rounded-lg font-semibold hover:bg-[#ea580c] transition-colors"
        >
          <div>Call Us: 833-871-1998</div>
          <div className="text-sm font-normal">TTY: 711</div>
        </a>
      </form>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1920&h=1080&fit=crop"
            alt="Happy family outdoors"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 w-full">
          <div className="max-w-xl w-full">
            <h1 className="text-2xl sm:text-3xl md:text-[36px] text-white leading-tight mb-4">
              <span className="font-normal">Call Now to Find Out if You Qualify for</span>
              <br />
              <span className="font-bold">Health Insurance</span> for{' '}
              <span className="font-bold">$0 a Month</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-[30px] text-white mb-8">
              <span className="font-bold">Affordable Health Insurance</span>{' '}
              <span className="font-light">is Just a Click or Phone Call Away</span>
            </p>

            {/* Form */}
            <div className="bg-transparent w-full max-w-[500px]">
              <ZipCodeForm variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* How Our Platform Helps You */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#10385b] mb-4">
              How Our Platform Helps You
            </h2>
            <p className="text-gray-600 text-lg">
              We streamline your search for the perfect health insurance plan by
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Personalizing Your Options */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#10385b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  <circle cx="18" cy="6" r="3" fill="#22c55e" stroke="#22c55e" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#10385b] mb-2">
                Personalizing Your Options
              </h3>
              <p className="text-gray-600">
                Input your details to see plans tailored to your specific needs.
              </p>
            </div>

            {/* Comparing Plans Easily */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#10385b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#10385b] mb-2">
                Comparing Plans Easily
              </h3>
              <p className="text-gray-600">
                Our comparison tools let you view plans side by side, focusing on benefits, costs, and coverage.
              </p>
            </div>

            {/* Guiding Your Enrollment */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#10385b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#10385b] mb-2">
                Guiding Your Enrollment
              </h3>
              <p className="text-gray-600">
                Once you&apos;ve chosen a plan, enroll directly through our platform with step-by-step assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Choosing an ACA Plan */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#10385b] mb-6">
                Benefits of Choosing an ACA Plan
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Affordable Care Act plans come with essential health benefits, including preventive services, emergency services, and maternity care, ensuring you and your family have access to a wide range of healthcare services. Enjoy peace of mind knowing your plan meets all federal standards for health coverage.
              </p>

              {/* Form */}
              <div className="max-w-[500px]">
                <ZipCodeForm variant="light" />
              </div>
            </div>

            {/* Right Images - Hidden on mobile */}
            <div className="hidden lg:flex gap-4 justify-center">
              <div className="w-48 h-64 relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face"
                  alt="Smiling woman"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-48 h-64 relative rounded-2xl overflow-hidden mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=400&h=600&fit=crop"
                  alt="Father and child"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Coverage for Everyone */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#10385b] mb-4">
                Coverage for Everyone
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re an individual, a family, or seeking specific types of coverage, ACA plans offer a range of options to ensure you find exactly what you need. From essential health benefits to a variety of plan types, ACA coverage is designed to be inclusive and accessible.
              </p>
            </div>

            {/* Start Exploring Your ACA Options Today */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#10385b] mb-4">
                Start Exploring Your ACA Options Today
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ready to get real health insurance coverage? Call us to begin your search for affordable, health insurance coverage. With our help, you&apos;re just steps away from the peace of mind that comes with having great health insurance.
              </p>
            </div>

            {/* Why ACA Plans Are a Smart Choice */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#10385b] mb-4">
                Why ACA Plans Are a Smart Choice
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ACA plans are regulated to provide substantial protections, such as coverage for pre-existing conditions and no lifetime or annual limits on essential health benefits. This makes them a smart choice for anyone looking for reliable, comprehensive health insurance coverage.
              </p>
            </div>

            {/* Open Enrollment and Special Enrollment */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#10385b] mb-4">
                Open Enrollment and Special Enrollment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Understanding Open Enrollment and Special Enrollment periods is key to securing your ACA plan at the right time. Open Enrollment is the annual window when anyone can sign up for health insurance. If you miss this period, Special Enrollment becomes available for those who experience qualifying life events, such as marriage, moving, or losing other health coverage. Our platform guides you through this process in one simple phone call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* We're Here to Help CTA */}
      <section className="py-16 px-4 bg-[#38b7e8]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                We&apos;re Here to Help
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Questions about Health Insurance or need assistance choosing a plan? Our dedicated support team is here to provide expert guidance every step of the way.
              </p>
            </div>

            {/* Right Form */}
            <div className="bg-transparent max-w-[500px]">
              <ZipCodeForm variant="dark" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
