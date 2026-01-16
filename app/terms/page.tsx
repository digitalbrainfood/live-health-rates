'use client';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#10385b] mb-2">Terms &amp; Conditions</h1>
        <p className="text-gray-500 mb-8">Last updated Oct 15, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#10385b] mb-4">General</h2>
            <p className="text-gray-700 leading-relaxed">
              This website (the &ldquo;Site&rdquo;) is owned and operated by Healthie LLC DBA Healthie Insurance Agency d/b/a &ldquo;HealthCoverageSearch.com&rdquo; (&ldquo;COMPANY,&rdquo; &ldquo;we&rdquo; or &ldquo;us&rdquo;). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our Privacy Policy and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from COMPANY. Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms of Service.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We reserve the right to change these Terms of Service or to impose new conditions on use of the Site, from time to time, in which case we will post the revised Terms of Service on this website. By continuing to use the Site after we post any such changes, you accept the Terms of Service, as modified.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By submitting an inquiry you agree that a licensed insurance agent with Health Coverage Search may contact you by phone, text message or email. You expressly consent to receive phone calls (including autodialed and/or pre-recorded calls) text messages and email using automated technology at the phone number and email address you provided, even if it is a wireless number, regardless of whether you are on any Federal or state DNC (&ldquo;Do Not Call&rdquo;) and/or DNE (&ldquo;Do Not Email&rdquo;) list or registry. In addition, you understand and acknowledge that data and message rates may apply. Furthermore, you acknowledge that you are over 18 years of age. You may revoke your express consent at any time by contacting us via (833) 588-1588 or email at contact@healthcoveragesearch.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#10385b] mb-4">Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              Although it is highly unlikely, this policy may be changed at any time at our discretion. If we should update this policy, we will post the updates to this page on our Website.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you have any questions or concerns regarding our privacy policy please direct them to: <a href="mailto:contact@healthcoveragesearch.com" className="text-blue-600 hover:underline">contact@healthcoveragesearch.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
