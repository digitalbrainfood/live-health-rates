'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// US States for dropdown
const US_STATES = [
  { value: '', label: 'Please select' },
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];

const INCOME_OPTIONS = [
  { value: '$0 - $34,999', label: '$0 - $34,999' },
  { value: '$35,000 - $44,999', label: '$35,000 - $44,999' },
  { value: '$45,000 - $74,999', label: '$45,000 - $74,999' },
  { value: '$75,000 - $99,999', label: '$75,000 - $99,999' },
  { value: '$100,000 and up', label: '$100,000 and up' },
];

const HEALTH_OPTIONS = [
  { value: 'Healthy', label: 'Healthy' },
  { value: 'Relatively Healthy', label: 'Relatively Healthy' },
  { value: 'Not So Healthy', label: 'Not So Healthy' },
];

interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  householdIncome: string;
  healthStatus: string;
  dobMonth: string;
  dobDay: string;
  dobYear: string;
  email: string;
  phone: string;
  tcpaConsent: boolean;
}

function QuoteFormContent() {
  const searchParams = useSearchParams();
  const leadSource = searchParams.get('src') || 'homepage';
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs for auto-focus on each step
  const firstNameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const dobMonthRef = useRef<HTMLInputElement>(null);
  const dobDayRef = useRef<HTMLInputElement>(null);
  const dobYearRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    householdIncome: '$35,000 - $44,999',
    healthStatus: '',
    dobMonth: '',
    dobDay: '',
    dobYear: '',
    email: '',
    phone: '',
    tcpaConsent: false,
  });

  // Set zip code from URL params on mount
  useEffect(() => {
    const zip = searchParams.get('zip');
    if (zip) {
      setFormData(prev => ({ ...prev, zipCode: zip }));
    }
  }, [searchParams]);

  // Auto-focus on first input of each step
  useEffect(() => {
    switch (currentStep) {
      case 1:
        firstNameRef.current?.focus();
        break;
      case 2:
        addressRef.current?.focus();
        break;
      case 5:
        dobMonthRef.current?.focus();
        break;
      case 6:
        emailRef.current?.focus();
        break;
    }
  }, [currentStep]);

  const totalSteps = 6;

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName.trim() && formData.lastName.trim();
      case 2:
        return formData.address.trim() && formData.city.trim() && formData.state && formData.zipCode.length === 5;
      case 3:
        return formData.householdIncome;
      case 4:
        return formData.healthStatus;
      case 5:
        return formData.dobMonth && formData.dobDay && formData.dobYear.length === 4;
      case 6:
        return formData.email.includes('@') && formData.phone.length >= 10 && formData.tcpaConsent;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceed() && currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && canProceed() && currentStep < totalSteps) {
      e.preventDefault();
      handleNext();
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;

    setIsSubmitting(true);

    // Get TrustedForm certificate URL
    const trustedFormCertUrl = (document.querySelector('input[name="xxTrustedFormCertUrl"]') as HTMLInputElement)?.value || '';

    // TCPA consent text
    const tcpaText = 'By clicking "Submit," you agree to our Terms and Conditions and Privacy Policy and consent to receive calls and text messages, including marketing messages, from Rising Health Insurance Agency FL LLC and healthcoveragesearch.com, including via autodialer, AI, or prerecorded messages, at the number you provide—even if your number is on a state or national Do Not Call list. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for help. Only Rising Health Insurance Agency FL LLC and healthcoveragesearch.com may send text messages. Consent is not a condition of purchase.';

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          dob: `${formData.dobMonth}/${formData.dobDay}/${formData.dobYear}`,
          trustedFormCertUrl,
          tcpaText,
          leadSource,
        }),
      });

      const data = await response.json();
      console.log('API Response:', data);

      if (data.success) {
        // Redirect to thank you page or trigger call
        window.location.href = '/thank-you';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-cyan-50 to-gray-100">
      {/* Form Container */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Step 1: Name */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] text-center">
                What&apos;s your full name?
              </h1>

              <div className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    ref={firstNameRef}
                    value={formData.firstName}
                    onChange={(e) => updateField('firstName', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateField('lastName', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Address */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] text-center">
                What&apos;s your home address?
              </h1>

              <div className="space-y-4">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    ref={addressRef}
                    value={formData.address}
                    onChange={(e) => updateField('address', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={formData.city}
                    onChange={(e) => updateField('city', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <select
                      id="state"
                      value={formData.state}
                      onChange={(e) => updateField('state', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none bg-white"
                    >
                      {US_STATES.map((state) => (
                        <option key={state.value} value={state.value}>
                          {state.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                      Zip code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => updateField('zipCode', e.target.value.replace(/\D/g, '').slice(0, 5))}
                      onKeyDown={handleKeyDown}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                      maxLength={5}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Income */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] text-center">
                What&apos;s your household income?
              </h1>

              <div>
                <select
                  id="householdIncome"
                  value={formData.householdIncome}
                  onChange={(e) => updateField('householdIncome', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none bg-white"
                >
                  {INCOME_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Step 4: Health Status */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] text-center">
                Do You Consider Yourself:
              </h1>

              <div className="flex flex-wrap justify-center gap-4">
                {HEALTH_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateField('healthStatus', option.value)}
                    className={`px-6 py-3 rounded-lg border-2 font-medium transition-all ${
                      formData.healthStatus === option.value
                        ? 'border-[#f97316] bg-orange-50 text-[#f97316]'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Date of Birth */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] text-center">
                What&apos;s your date of birth?
              </h1>

              <div className="flex justify-center gap-4">
                <input
                  type="text"
                  placeholder="MM"
                  ref={dobMonthRef}
                  value={formData.dobMonth}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 2);
                    updateField('dobMonth', value);
                    if (value.length === 2) {
                      dobDayRef.current?.focus();
                    }
                  }}
                  className="w-24 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none text-center"
                  maxLength={2}
                />
                <input
                  type="text"
                  placeholder="DD"
                  ref={dobDayRef}
                  value={formData.dobDay}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 2);
                    updateField('dobDay', value);
                    if (value.length === 2) {
                      dobYearRef.current?.focus();
                    }
                  }}
                  className="w-24 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none text-center"
                  maxLength={2}
                />
                <input
                  type="text"
                  placeholder="YYYY"
                  ref={dobYearRef}
                  value={formData.dobYear}
                  onChange={(e) => updateField('dobYear', e.target.value.replace(/\D/g, '').slice(0, 4))}
                  className="w-28 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none text-center"
                  maxLength={4}
                />
              </div>
            </div>
          )}

          {/* Step 6: Contact Info & Submit */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] text-center">
                Thanks {formData.firstName}, your quote is ready!
              </h1>

              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    ref={emailRef}
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', formatPhone(e.target.value))}
                    onKeyDown={handleKeyDown}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                    placeholder="(555) 555-5555"
                  />
                </div>

                {/* TCPA Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="tcpaConsent"
                    checked={formData.tcpaConsent}
                    onChange={(e) => updateField('tcpaConsent', e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-[#f97316] focus:ring-[#f97316]"
                  />
                  <label htmlFor="tcpaConsent" className="text-sm text-gray-600">
                    By clicking &ldquo;Submit,&rdquo; you agree to our{' '}
                    <Link href="/terms" className="text-blue-600 hover:underline">Terms and Conditions</Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>{' '}
                    and consent to receive calls and text messages, including marketing messages, from Rising Health Insurance Agency FL LLC and healthcoveragesearch.com, including via autodialer, AI, or prerecorded messages, at the number you provide—even if your number is on a state or national Do Not Call list. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for help. Only Rising Health Insurance Agency FL LLC and healthcoveragesearch.com may send text messages. Consent is not a condition of purchase.
                  </label>
                </div>

                {/* Additional Disclaimer */}
                <p className="text-xs text-gray-500">
                  We may share your personal data with third-party partners and affiliates for marketing purposes or to contact you via voice call or email. This sharing excludes text messaging originator opt-in data and consent, which will not be shared with any third parties.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 space-y-4">
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={!canProceed()}
                className="w-full bg-[#f97316] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#ea580c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Next
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="w-full bg-[#f97316] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#ea580c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

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
        </div>

      </div>
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-cyan-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f97316] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <QuoteFormContent />
    </Suspense>
  );
}
