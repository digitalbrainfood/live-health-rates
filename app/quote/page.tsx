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

const PREGNANCY_OPTIONS = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
];

const HEALTH_OPTIONS = [
  { value: 'Yes, I have significant ongoing medical conditions', label: 'Yes, I have significant ongoing medical conditions' },
  { value: "No, I'm generally healthy", label: "No, I'm generally healthy" },
  { value: "I have minor conditions (I'd like to discuss with an agent)", label: "I have minor conditions (I'd like to discuss with an agent)" },
];

const BUDGET_OPTIONS = [
  { value: 'Under $200/month', label: 'Under $200/month' },
  { value: '$200-$400/month', label: '$200\u2013$400/month' },
  { value: '$400-$600/month', label: '$400\u2013$600/month' },
  { value: '$600+/month', label: '$600+/month' },
  { value: 'Not sure yet / Checking options', label: 'Not sure yet / Checking options' },
];

const URGENCY_OPTIONS = [
  { value: 'As soon as possible', label: 'As soon as possible' },
  { value: 'Within 2 weeks', label: 'Within 2 weeks' },
  { value: 'Within 30 days', label: 'Within 30 days' },
  { value: '1-3 months', label: '1\u20133 months' },
  { value: 'Just exploring options for now', label: 'Just exploring options for now' },
];

interface FormData {
  firstName: string;
  lastName: string;
  state: string;
  zipCode: string;
  pregnancy: string;
  healthStatus: string;
  budget: string;
  urgency: string;
  email: string;
  phone: string;
  verificationCode: string;
  tcpaConsent: boolean;
}

function QuoteFormContent() {
  const searchParams = useSearchParams();
  const leadSource = searchParams.get('src') || 'homepage';
  const utmCampaign = searchParams.get('utm_campaign') || '';
  const utmAdset = searchParams.get('utm_adset') || '';
  const utmAd = searchParams.get('utm_ad') || '';
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [codeSent, setCodeSent] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [verifyError, setVerifyError] = useState('');
  const [cooldown, setCooldown] = useState(0);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const codeRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    state: '',
    zipCode: '',
    pregnancy: '',
    healthStatus: '',
    budget: '',
    urgency: '',
    email: '',
    phone: '',
    verificationCode: '',
    tcpaConsent: false,
  });

  useEffect(() => {
    const zip = searchParams.get('zip');
    if (zip) {
      setFormData(prev => ({ ...prev, zipCode: zip }));
    }
  }, [searchParams]);

  useEffect(() => {
    switch (currentStep) {
      case 1: firstNameRef.current?.focus(); break;
      case 6: emailRef.current?.focus(); break;
      case 7: codeRef.current?.focus(); break;
    }
  }, [currentStep]);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const totalSteps = 7;

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.firstName.trim() && formData.lastName.trim() && formData.state && formData.zipCode.length === 5;
      case 2: return formData.pregnancy;
      case 3: return formData.healthStatus;
      case 4: return formData.budget;
      case 5: return formData.urgency;
      case 6: return formData.email.includes('@') && formData.phone.length >= 10;
      case 7: return formData.verificationCode.length === 6 && formData.tcpaConsent;
      default: return false;
    }
  };

  const handleOptionSelect = (field: keyof FormData, value: string) => {
    updateField(field, value);
    setTimeout(() => {
      if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
    }, 300);
  };

  const handleNext = () => {
    if (canProceed() && currentStep < totalSteps) {
      if (currentStep === 6) {
        handleSendCodeAndAdvance();
      } else {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      if (currentStep === 7) {
        setCodeSent(false);
        setVerifyError('');
        updateField('verificationCode', '');
      }
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && canProceed() && currentStep < totalSteps) {
      e.preventDefault();
      handleNext();
    }
  };

  const handleSendCodeAndAdvance = async () => {
    if (formData.phone.length < 10) return;
    setIsSendingCode(true);
    setVerifyError('');
    try {
      const response = await fetch('/api/send-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: formData.phone }),
      });
      const data = await response.json();
      if (data.success) {
        setCodeSent(true);
        setCooldown(60);
        setCurrentStep(7);
      } else {
        setVerifyError('Failed to send code. Please check your phone number.');
      }
    } catch {
      setVerifyError('Something went wrong. Please try again.');
    } finally {
      setIsSendingCode(false);
    }
  };

  const handleResendCode = async () => {
    if (cooldown > 0) return;
    setIsSendingCode(true);
    setVerifyError('');
    try {
      const response = await fetch('/api/send-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: formData.phone }),
      });
      const data = await response.json();
      if (data.success) {
        setCooldown(60);
      } else {
        setVerifyError('Failed to resend code. Please try again.');
      }
    } catch {
      setVerifyError('Something went wrong. Please try again.');
    } finally {
      setIsSendingCode(false);
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;
    setIsSubmitting(true);
    setVerifyError('');

    // Verify code first
    try {
      const verifyResponse = await fetch('/api/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: formData.phone, code: formData.verificationCode }),
      });
      const verifyData = await verifyResponse.json();
      if (!verifyData.success || verifyData.status !== 'approved') {
        setVerifyError('Invalid code. Please check and try again.');
        setIsSubmitting(false);
        return;
      }
    } catch {
      setVerifyError('Failed to verify code. Please try again.');
      setIsSubmitting(false);
      return;
    }

    // Code verified — submit lead
    const trustedFormCertUrl = (document.querySelector('input[name="xxTrustedFormCertUrl"]') as HTMLInputElement)?.value || '';
    const tcpaText = 'By clicking "Submit," you agree to our Terms and Conditions and Privacy Policy and consent to receive calls and text messages, including marketing messages, from Rising Health Insurance Agency FL LLC and healthcoveragesearch.com, including via autodialer, AI, or prerecorded messages, at the number you provide\u2014even if your number is on a state or national Do Not Call list. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for help. Only Rising Health Insurance Agency FL LLC and healthcoveragesearch.com may send text messages. Consent is not a condition of purchase.';

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          state: formData.state,
          zipCode: formData.zipCode,
          pregnancy: formData.pregnancy,
          healthStatus: formData.healthStatus,
          budget: formData.budget,
          urgency: formData.urgency,
          email: formData.email,
          phone: formData.phone,
          trustedFormCertUrl,
          tcpaText,
          leadSource,
          utmCampaign,
          utmAdset,
          utmAd,
        }),
      });
      const data = await response.json();
      console.log('API Response:', data);
      if (data.success) {
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

  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-cyan-50 to-gray-100">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm font-medium text-[#f97316]">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-[#f97316] h-3 rounded-full transition-all duration-500 ease-out" style={{ width: `${progressPercent}%` }}></div>
            </div>
          </div>

          {/* Step 1: Name + State + Zip */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] text-center">Let&apos;s get started</h1>
              <div className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                  <input type="text" id="firstName" ref={firstNameRef} value={formData.firstName} onChange={(e) => updateField('firstName', e.target.value)} onKeyDown={handleKeyDown} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                  <input type="text" id="lastName" value={formData.lastName} onChange={(e) => updateField('lastName', e.target.value)} onKeyDown={handleKeyDown} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <select id="state" value={formData.state} onChange={(e) => updateField('state', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none bg-white">
                      {US_STATES.map((state) => (<option key={state.value} value={state.value}>{state.label}</option>))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">Zip code</label>
                    <input type="text" id="zipCode" value={formData.zipCode} onChange={(e) => updateField('zipCode', e.target.value.replace(/\D/g, '').slice(0, 5))} onKeyDown={handleKeyDown} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none" maxLength={5} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Pregnancy */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] text-center">Are you currently pregnant or planning pregnancy in the next 6 months?</h1>
              <div className="flex justify-center gap-4">
                {PREGNANCY_OPTIONS.map((option) => (
                  <button key={option.value} type="button" onClick={() => handleOptionSelect('pregnancy', option.value)} className={`px-12 py-4 rounded-lg border-2 font-medium transition-all text-lg ${formData.pregnancy === option.value ? 'border-[#f97316] bg-orange-50 text-[#f97316]' : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'}`}>{option.label}</button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Health Status */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] text-center">Do you have significant ongoing medical conditions requiring regular treatment?</h1>
              <p className="text-sm text-gray-500 text-center">Examples: diabetes, heart disease, cancer treatment, dialysis, or other serious chronic conditions</p>
              <div className="space-y-3">
                {HEALTH_OPTIONS.map((option) => (
                  <button key={option.value} type="button" onClick={() => handleOptionSelect('healthStatus', option.value)} className={`w-full px-6 py-4 rounded-lg border-2 font-medium transition-all text-left ${formData.healthStatus === option.value ? 'border-[#f97316] bg-orange-50 text-[#f97316]' : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'}`}>{option.label}</button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Budget */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] text-center">What&apos;s your approximate monthly budget for health insurance?</h1>
              <div className="space-y-3">
                {BUDGET_OPTIONS.map((option) => (
                  <button key={option.value} type="button" onClick={() => handleOptionSelect('budget', option.value)} className={`w-full px-6 py-4 rounded-lg border-2 font-medium transition-all text-left ${formData.budget === option.value ? 'border-[#f97316] bg-orange-50 text-[#f97316]' : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'}`}>{option.label}</button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Urgency */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] text-center">When do you need coverage to start?</h1>
              <div className="space-y-3">
                {URGENCY_OPTIONS.map((option) => (
                  <button key={option.value} type="button" onClick={() => handleOptionSelect('urgency', option.value)} className={`w-full px-6 py-4 rounded-lg border-2 font-medium transition-all text-left ${formData.urgency === option.value ? 'border-[#f97316] bg-orange-50 text-[#f97316]' : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'}`}>{option.label}</button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Email + Phone */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] text-center">Thanks {formData.firstName}, your quote is almost ready!</h1>
              <p className="text-gray-600 text-center">We&apos;ll send a verification code to your phone on the next step.</p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" ref={emailRef} value={formData.email} onChange={(e) => updateField('email', e.target.value)} onKeyDown={handleKeyDown} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={(e) => updateField('phone', formatPhone(e.target.value))} onKeyDown={handleKeyDown} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none" placeholder="(555) 555-5555" />
                </div>
                {verifyError && <p className="text-sm text-red-600">{verifyError}</p>}
              </div>
            </div>
          )}

          {/* Step 7: Verify Code + Consent + Submit */}
          {currentStep === 7 && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-bold text-[#10385b] text-center">Verify your phone number</h1>
              <p className="text-gray-600 text-center">We sent a 6-digit code to <span className="font-semibold">{formData.phone}</span></p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700 mb-2">Enter verification code</label>
                  <input type="text" id="verificationCode" ref={codeRef} value={formData.verificationCode} onChange={(e) => updateField('verificationCode', e.target.value.replace(/\D/g, '').slice(0, 6))} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none text-center text-2xl tracking-widest" placeholder="000000" maxLength={6} />
                </div>
                <div className="text-center">
                  <button type="button" onClick={handleResendCode} disabled={cooldown > 0 || isSendingCode} className="text-sm text-[#10385b] hover:underline disabled:text-gray-400 disabled:no-underline">
                    {isSendingCode ? 'Sending...' : cooldown > 0 ? `Resend code in ${cooldown}s` : "Didn't receive a code? Resend"}
                  </button>
                </div>
                {verifyError && <p className="text-sm text-red-600 text-center">{verifyError}</p>}
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="tcpaConsent" checked={formData.tcpaConsent} onChange={(e) => updateField('tcpaConsent', e.target.checked)} className="mt-1 w-5 h-5 rounded border-gray-300 text-[#f97316] focus:ring-[#f97316]" />
                  <label htmlFor="tcpaConsent" className="text-sm text-gray-600">
                    By clicking &ldquo;Submit,&rdquo; you agree to our{' '}
                    <Link href="/terms" className="text-blue-600 hover:underline">Terms and Conditions</Link>{' '}and{' '}
                    <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>{' '}
                    and consent to receive calls and text messages, including marketing messages, from Rising Health Insurance Agency FL LLC and healthcoveragesearch.com, including via autodialer, AI, or prerecorded messages, at the number you provide—even if your number is on a state or national Do Not Call list. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for help. Only Rising Health Insurance Agency FL LLC and healthcoveragesearch.com may send text messages. Consent is not a condition of purchase.
                  </label>
                </div>
                <p className="text-xs text-gray-500">
                  We may share your personal data with third-party partners and affiliates for marketing purposes or to contact you via voice call or email. This sharing excludes text messaging originator opt-in data and consent, which will not be shared with any third parties.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 space-y-4">
            {currentStep < 6 ? (
              <button type="button" onClick={handleNext} disabled={!canProceed()} className="w-full bg-[#f97316] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#ea580c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                Next
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            ) : currentStep === 6 ? (
              <button type="button" onClick={handleNext} disabled={!canProceed() || isSendingCode} className="w-full bg-[#f97316] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#ea580c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {isSendingCode ? 'Sending Code...' : 'Next'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            ) : (
              <button type="button" onClick={handleSubmit} disabled={!canProceed() || isSubmitting} className="w-full bg-[#f97316] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#ea580c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {isSubmitting ? 'Verifying & Submitting...' : 'Submit'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            )}

            {currentStep > 1 && (
              <button type="button" onClick={handleBack} className="w-full text-gray-600 py-2 font-medium hover:text-gray-800 transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
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