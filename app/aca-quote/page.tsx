'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Options for dropdowns
const PURCHASE_TIMING_OPTIONS = [
  { value: '', label: 'Please select' },
  { value: 'Immediately', label: 'Immediately' },
  { value: 'Within 30 days', label: 'Within 30 days' },
  { value: 'Within 60 days', label: 'Within 60 days' },
  { value: 'Within 90 days', label: 'Within 90 days' },
  { value: 'Just researching', label: 'Just researching' },
];

const COVERAGE_TYPE_OPTIONS = [
  { value: '', label: 'Please select' },
  { value: 'None', label: 'None' },
  { value: 'Employer', label: 'Employer' },
  { value: 'Marketplace/ACA', label: 'Marketplace/ACA' },
  { value: 'Medicare', label: 'Medicare' },
  { value: 'Medicaid', label: 'Medicaid' },
  { value: 'Private Insurance', label: 'Private Insurance' },
  { value: 'COBRA', label: 'COBRA' },
  { value: 'Other', label: 'Other' },
];

const US_STATES = [
  { value: '', label: 'Please select' },
  { value: 'AL', label: 'Alabama' }, { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' }, { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' }, { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' }, { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' }, { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' }, { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' }, { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' }, { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' }, { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' }, { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' }, { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' }, { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' }, { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' }, { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' }, { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' }, { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' }, { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' }, { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' }, { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' }, { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' }, { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' }, { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' }, { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' }, { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' }, { value: 'WY', label: 'Wyoming' },
];

const INCOME_OPTIONS = [
  { value: '$0 - $34,999', label: '$0 - $34,999' },
  { value: '$35,000 - $44,999', label: '$35,000 - $44,999' },
  { value: '$45,000 - $74,999', label: '$45,000 - $74,999' },
  { value: '$75,000 - $99,999', label: '$75,000 - $99,999' },
  { value: '$100,000 and up', label: '$100,000 and up' },
];

const AGE_OPTIONS = [
  { value: '', label: 'Please select' },
  ...Array.from({ length: 82 }, (_, i) => ({ value: String(i + 18), label: String(i + 18) })),
];

interface FormData {
  purchaseTiming: string;
  coverageType: string;
  firstName: string;
  lastName: string;
  state: string;
  zipCode: string;
  householdIncome: string;
  age: string;
  email: string;
  phone: string;
  consent: boolean;
  verificationCode: string;
}

function LandingQuoteContent() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteExpiry, setQuoteExpiry] = useState(180); // 3 minutes in seconds
  const [formData, setFormData] = useState<FormData>({
    purchaseTiming: '',
    coverageType: '',
    firstName: '',
    lastName: '',
    state: '',
    zipCode: '',
    householdIncome: '$35,000 - $44,999',
    age: '',
    email: '',
    phone: '',
    consent: false,
    verificationCode: '',
  });

  const totalSteps = 8;

  // Set zip code from URL params on mount
  useEffect(() => {
    const zip = searchParams.get('zip');
    if (zip) {
      setFormData(prev => ({ ...prev, zipCode: zip }));
    }
  }, [searchParams]);

  // Quote expiry countdown for final step
  useEffect(() => {
    if (currentStep === 8 && quoteExpiry > 0) {
      const timer = setInterval(() => {
        setQuoteExpiry(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentStep, quoteExpiry]);

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.purchaseTiming !== '';
      case 2: return formData.coverageType !== '';
      case 3: return formData.firstName.trim() && formData.lastName.trim();
      case 4: return formData.state !== '' && formData.zipCode.length === 5;
      case 5: return formData.householdIncome !== '';
      case 6: return formData.age !== '';
      case 7: return formData.email.includes('@') && formData.phone.length >= 14 && formData.consent;
      default: return true;
    }
  };

  const handleNext = async () => {
    if (!canProceed()) return;

    if (currentStep === 7) {
      // Submit lead data
      setIsSubmitting(true);
      try {
        await fetch('/api/submit-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            source: 'landing-page',
          }),
        });
      } catch (error) {
        console.error('Error submitting lead:', error);
      }
      setIsSubmitting(false);
    }

    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };


  const progressPercentage = Math.round((currentStep / totalSteps) * 100);

  // Trust Badges Component
  const TrustBadges = () => (
    <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
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
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Progress Bar */}
        {currentStep < 8 && (
          <div className="max-w-2xl mx-auto w-full px-4 pt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-gray-500">{progressPercentage}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="max-w-lg w-full">
            {/* Step 1: Purchase Timing */}
            {currentStep === 1 && (
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] mb-8">
                  How soon are you considering to purchasing health insurance?
                </h1>
                <select
                  value={formData.purchaseTiming}
                  onChange={(e) => updateField('purchaseTiming', e.target.value)}
                  className="w-full max-w-sm mx-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none bg-white"
                >
                  {PURCHASE_TIMING_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Step 2: Current Coverage */}
            {currentStep === 2 && (
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] mb-8">
                  What type of health insurance coverage do you currently have?
                </h1>
                <select
                  value={formData.coverageType}
                  onChange={(e) => updateField('coverageType', e.target.value)}
                  className="w-full max-w-sm mx-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none bg-white"
                >
                  {COVERAGE_TYPE_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Step 3: Full Name */}
            {currentStep === 3 && (
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] mb-8">
                  What&apos;s your full name?
                </h1>
                <div className="space-y-4 max-w-sm mx-auto">
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateField('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateField('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: State and Zip */}
            {currentStep === 4 && (
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] mb-8">
                  What&apos;s your state and zip code?
                </h1>
                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <select
                      value={formData.state}
                      onChange={(e) => updateField('state', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none bg-white"
                    >
                      {US_STATES.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Zip code</label>
                    <input
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) => updateField('zipCode', e.target.value.replace(/\D/g, '').slice(0, 5))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                      maxLength={5}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Household Income */}
            {currentStep === 5 && (
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] mb-8">
                  What&apos;s your household income?
                </h1>
                <select
                  value={formData.householdIncome}
                  onChange={(e) => updateField('householdIncome', e.target.value)}
                  className="w-full max-w-sm mx-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none bg-white"
                >
                  {INCOME_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Step 6: Age */}
            {currentStep === 6 && (
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] mb-8">
                  What&apos;s your age?
                </h1>
                <select
                  value={formData.age}
                  onChange={(e) => updateField('age', e.target.value)}
                  className="w-full max-w-sm mx-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none bg-white"
                >
                  {AGE_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Step 7: Contact Info */}
            {currentStep === 7 && (
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] mb-8">
                  Thanks {formData.firstName}, your quote is ready!
                </h1>
                <div className="space-y-4 max-w-sm mx-auto">
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', formatPhone(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={formData.consent}
                      onChange={(e) => updateField('consent', e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#f97316] focus:ring-[#f97316]"
                    />
                    <label htmlFor="consent" className="text-xs text-gray-600">
                      By clicking the &quot;Get Quote&quot; button above, I am providing my ESIGN signature and express written consent to the Live Health Rates privacy policy and terms and conditions. I permit Live Health Rates and its partners to contact me by email, text message, pre-recorded message, AI, or automated telephone technology on a recorded line for marketing purposes, even if my phone number is on any national or state &quot;Do Not Call&quot; list. Consent is not a condition of purchase. Message and data rates may apply. You may revoke your express consent at any time by emailing{' '}
                      <a href="mailto:info@livehealthrates.com" className="text-blue-600 underline">info@livehealthrates.com</a>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 8: Quote Ready */}
            {currentStep === 8 && (
              <div className="text-center">
                {/* Agent Status */}
                <div className="bg-white rounded-xl shadow-md p-4 mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded font-semibold">
                        LIVE
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-gray-500 uppercase">Agent Status</p>
                      <p className="font-semibold text-green-600">Agent Assigned!</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">QUOTE EXPIRES:</p>
                    <p className="text-xl font-bold text-red-500">{formatTime(quoteExpiry)}</p>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-[#10385b] mb-4">
                  Your Quote is Ready
                </h1>
                <p className="text-gray-600 mb-8">
                  <span className="text-red-500 font-semibold">Final Step:</span> Call now to verify eligibility and lock in your rate with a licensed agent.
                </p>

                {/* Call Card */}
                <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                  <p className="text-4xl font-bold text-[#10385b] mb-4">833-741-1902</p>
                  <a
                    href="tel:833-741-1902"
                    className="inline-flex items-center gap-2 bg-[#f97316] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ea580c] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    CLICK TO CALL NOW
                  </a>
                  <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Wait time: 0 mins
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      No Obligation
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 8 && (
              <div className="mt-8 space-y-4 max-w-sm mx-auto">
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceed() || isSubmitting}
                  className="w-full bg-[#f97316] text-white py-4 rounded-full font-semibold text-lg hover:bg-[#ea580c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Processing...' : currentStep === 7 ? 'Find My Health Plan' : 'Next'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="w-full text-gray-600 py-2 font-medium hover:text-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                )}
              </div>
            )}

            {/* Trust Badges */}
            <TrustBadges />
          </div>
        </div>


      </div>
    </div>
  );
}

export default function LandingQuotePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f97316] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <LandingQuoteContent />
    </Suspense>
  );
}
