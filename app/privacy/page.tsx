'use client';

import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#1a365d] mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated July 25, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <p className="text-gray-700 leading-relaxed">
            Thank you for choosing to be part of our community at Healthie LLC DBA Healthie Insurance Agency, doing business as Live Health Rates (&ldquo;Live Health Rates&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at <a href="mailto:info@livehealthrates.com" className="text-blue-600 hover:underline">info@livehealthrates.com</a>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When you visit our website https://livehealthrates.com (the &ldquo;Website&rdquo;), and more generally, use any of our services (the &ldquo;Services&rdquo;, which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This privacy notice applies to all information collected through our Services (which, as described above, includes our Website), as well as, any related services, sales, marketing or events.
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold">
            Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.
          </p>

          {/* Table of Contents */}
          <section>
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">TABLE OF CONTENTS</h2>
            <ol className="list-decimal pl-6 space-y-1 text-gray-700">
              <li><a href="#section1" className="text-blue-600 hover:underline">WHAT INFORMATION DO WE COLLECT?</a></li>
              <li><a href="#section2" className="text-blue-600 hover:underline">HOW DO WE USE YOUR INFORMATION?</a></li>
              <li><a href="#section3" className="text-blue-600 hover:underline">WILL YOUR INFORMATION BE SHARED WITH ANYONE?</a></li>
              <li><a href="#section4" className="text-blue-600 hover:underline">WHO WILL YOUR INFORMATION BE SHARED WITH?</a></li>
              <li><a href="#section5" className="text-blue-600 hover:underline">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
              <li><a href="#section6" className="text-blue-600 hover:underline">DO WE USE GOOGLE MAPS PLATFORM APIS?</a></li>
              <li><a href="#section7" className="text-blue-600 hover:underline">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
              <li><a href="#section8" className="text-blue-600 hover:underline">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
              <li><a href="#section9" className="text-blue-600 hover:underline">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
              <li><a href="#section10" className="text-blue-600 hover:underline">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
              <li><a href="#section11" className="text-blue-600 hover:underline">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
              <li><a href="#section12" className="text-blue-600 hover:underline">DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
              <li><a href="#section13" className="text-blue-600 hover:underline">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
              <li><a href="#section14" className="text-blue-600 hover:underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
              <li><a href="#section15" className="text-blue-600 hover:underline">HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
            </ol>
          </section>

          {/* Section 1 */}
          <section id="section1">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">1. WHAT INFORMATION DO WE COLLECT?</h2>
            <h3 className="text-xl font-semibold text-[#1a365d] mb-3">Personal information you disclose to us</h3>
            <p className="text-gray-700 leading-relaxed italic">
              <strong>In Short:</strong> We collect personal information that you provide to us.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Personal Information Provided by You.</strong> We collect names; phone numbers; email addresses; mailing addresses; contact preferences; utility company; monthly payment; sunlight on the roof; property type; estimated credit score; and other similar information.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.
            </p>

            <h3 className="text-xl font-semibold text-[#1a365d] mb-3 mt-6">Information automatically collected</h3>
            <p className="text-gray-700 leading-relaxed italic">
              <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Website.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Like many businesses, we also collect information through cookies and similar technologies.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The information we collect includes:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li><strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage and performance information our servers automatically collect when you access or use our Website and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type and settings and information about your activity in the Website (such as the date/time stamps associated with your usage, pages and files viewed, searches and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called &apos;crash dumps&apos;) and hardware settings).</li>
              <li><strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet or other device you use to access the Website. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model Internet service provider and/or mobile carrier, operating system and system configuration information.</li>
              <li><strong>Location Data.</strong> We collect location data such as information about your device&apos;s location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Website. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. Note however, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a365d] mb-3 mt-6">Information collected from other sources</h3>
            <p className="text-gray-700 leading-relaxed italic">
              <strong>In Short:</strong> We may collect limited data from public databases, marketing partners, and other outside sources.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              In order to enhance our ability to provide relevant marketing, offers and services to you and update our records, we may obtain information about you from other sources, such as public databases, joint marketing partners, affiliate programs, data providers, as well as from other third parties. This information includes mailing addresses, job titles, email addresses, phone numbers, intent data (or user behavior data), Internet Protocol (IP) addresses, social media profiles, social media URLs and custom profiles, for purposes of targeted advertising and event promotion.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section2">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">2. HOW DO WE USE YOUR INFORMATION?</h2>
            <p className="text-gray-700 leading-relaxed italic">
              <strong>In Short:</strong> We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We use the information we collect or receive:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li><strong>To facilitate account creation and logon process.</strong> If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract.</li>
              <li><strong>To post testimonials.</strong> We post testimonials on our Website that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If you wish to update, or delete your testimonial, please contact us at info@livehealthrates.com and be sure to include your name, testimonial location, and contact information.</li>
              <li><strong>Request feedback.</strong> We may use your information to request feedback and to contact you about your use of our Website.</li>
              <li><strong>To enable user-to-user communications.</strong> We may use your information in order to enable user-to-user communications with each user&apos;s consent.</li>
              <li><strong>To manage user accounts.</strong> We may use your information for the purposes of managing our account and keeping it in working order.</li>
              <li><strong>Fulfill and manage your orders.</strong> We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Website.</li>
              <li><strong>Administer prize draws and competitions.</strong> We may use your information to administer prize draws and competitions when you elect to participate in our competitions.</li>
              <li><strong>To deliver and facilitate delivery of services to the user.</strong> We may use your information to provide you with the requested service.</li>
              <li><strong>To respond to user inquiries/offer support to users.</strong> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.</li>
              <li><strong>To send you marketing and promotional communications.</strong> We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. For example, when expressing an interest in obtaining information about us or our Website, subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can opt-out of our marketing emails at any time (see the &ldquo;WHAT ARE YOUR PRIVACY RIGHTS&rdquo; below).</li>
              <li><strong>Deliver targeted advertising to you.</strong> We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.</li>
              <li><strong>For other business purposes.</strong> We may use your information for other business purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Website, products, marketing and your experience. We may use and store this information in aggregated and anonymized form so that it is not associated with individual end users and does not include personal information. We will not use identifiable personal information without your consent.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="section3">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
            <p className="text-gray-700 leading-relaxed italic">
              <strong>In Short:</strong> We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We may process or share your data that we hold based on the following legal basis:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
              <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
              <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
              <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
              <li><strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              More specifically, we may need to process your data or share your personal information in the following situations:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              <li><strong>Vendors, Consultants and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the Website, which will enable them to collect data on our behalf about how you interact with our Website over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content, pages or features, and better understand online activity. Unless described in this notice, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes.</li>
              <li><strong>Affiliates.</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.</li>
              <li><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services or promotions.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="section4">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">4. WHO WILL YOUR INFORMATION BE SHARED WITH?</h2>
            <p className="text-gray-700 leading-relaxed italic">
              <strong>In Short:</strong> We only share information with the following third parties.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We only share and disclose your information with the following third parties. We have categorized each party so that you may be easily understand the purpose of our data collection and processing practices. If we have processed your data based on your consent and you wish to revoke your consent, please contact us using the contact details provided in the section below titled &ldquo;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&rdquo;.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              <li><strong>Advertising, Direct Marketing, and Lead Generation:</strong> Google AdSense, Facebook Audience Network, Outbrain and Google Adwords</li>
              <li><strong>Communicate and Chat with Users:</strong> Facebook Customer Chat and Manychat</li>
              <li><strong>Data Backup and Security:</strong> Dropbox</li>
              <li><strong>Retargeting Platforms:</strong> Facebook Remarketing, Google Ads Remarketing, and Google Analytics Remarketing</li>
              <li><strong>Social Media Sharing and Advertising:</strong> Facebook advertising</li>
              <li><strong>Web and Mobile Analytics:</strong> Facebook Analytics and Google Analytics</li>
              <li><strong>Website Hosting:</strong> Cloudways</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="section5">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
            <p className="text-gray-700 leading-relaxed italic">
              <strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
            </p>
          </section>

          {/* Section 6 */}
          <section id="section6">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">6. DO WE USE GOOGLE MAPS PLATFORM APIS?</h2>
            <p className="text-gray-700 leading-relaxed italic">
              <strong>In Short:</strong> Yes, we use Google Maps Platform APIs for the purpose of providing better service.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This Website uses Google Maps Platform APIs which are subject to Google&apos;s Terms of Service. You may find the Google Maps Platform Terms of Service here. To find out more about Google&apos;s Privacy Policy, please refer to this link.
            </p>
          </section>

          {/* Section 7 */}
          <section id="section7">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
            <p className="text-gray-700 leading-relaxed italic">
              <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than twelve (12) months past the start of idle period of the user&apos;s account.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
            </p>
          </section>

          {/* Section 8 */}
          <section id="section8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
            <p className="text-gray-700 leading-relaxed italic">
              <strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Website is at your own risk. You should only access the Website within a secure environment.
            </p>
          </section>

          {/* Section 9 */}
          <section id="section9">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">9. DO WE COLLECT INFORMATION FROM MINORS?</h2>
            <p className="text-gray-700 leading-relaxed italic">
              <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We do not knowingly solicit data from or market to children under 18 years of age. By using the Website, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent&apos;s use of the Website. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at info@livehealthrates.com.
            </p>
          </section>

          {/* Section 10 */}
          <section id="section10">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">10. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
            <p className="text-gray-700 leading-relaxed italic">
              <strong>In Short:</strong> You may review, change, or terminate your account at any time.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you are a resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you are a resident in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you have questions or comments about your privacy rights, you may email us at info@livehealthrates.com.
            </p>

            <h3 className="text-xl font-semibold text-[#1a365d] mb-3 mt-6">Account Information</h3>
            <p className="text-gray-700 leading-relaxed">
              If you would at any time like to review or change the information in your account or terminate your account, you can:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>Log in to your account settings and update your user account.</li>
              <li>Contact us using the contact information provided.</li>
              <li>info@livehealthrates.com</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with applicable legal requirements.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Opting out of email marketing:</strong> You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list — however, we may still communicate with you, for example to send you service-related emails that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes. To otherwise opt-out, you may:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>Access your account settings and update your preferences.</li>
              <li>Contact us using the contact information provided.</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section id="section11">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">11. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
            <p className="text-gray-700 leading-relaxed">
              Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&ldquo;DNT&rdquo;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
            </p>
          </section>

          {/* Section 12 */}
          <section id="section12">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
            <p className="text-gray-700 leading-relaxed italic">
              <strong>In Short:</strong> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              California Civil Code Section 1798.83, also known as the &ldquo;Shine The Light&rdquo; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you are under 18 years of age, reside in California, and have a registered account with the Website, you have the right to request removal of unwanted data that you publicly post on the Website. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Website, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).
            </p>

            <h3 className="text-xl font-semibold text-[#1a365d] mb-3 mt-6">CCPA Privacy Notice</h3>
            <p className="text-gray-700 leading-relaxed">
              The California Code of Regulations defines a &ldquo;resident&rdquo; as:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>(1) every individual who is in the State of California for other than a temporary or transitory purpose and</li>
              <li>(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              All other individuals are defined as &ldquo;non-residents.&rdquo;
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If this definition of &ldquo;resident&rdquo; applies to you, we must adhere to certain rights and obligations regarding your personal information.
            </p>

            <h4 className="text-lg font-semibold text-[#1a365d] mb-3 mt-6">How do we use and share your personal information?</h4>
            <p className="text-gray-700 leading-relaxed">
              More information about our data collection and sharing practices can be found in this privacy notice.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              You may contact us by email at info@livehealthrates.com, by calling toll-free at (833) 741-1902, or by referring to the contact details at the bottom of this document.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you are using an authorized agent to exercise your right to opt-out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.
            </p>

            <h4 className="text-lg font-semibold text-[#1a365d] mb-3 mt-6">Will your information be shared with anyone else?</h4>
            <p className="text-gray-700 leading-relaxed">
              We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be &ldquo;selling&rdquo; of your personal data.
            </p>

            <h4 className="text-lg font-semibold text-[#1a365d] mb-3 mt-6">Your rights with respect to your personal data</h4>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li><strong>Right to request deletion of the data - Request to delete:</strong> You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law.</li>
              <li><strong>Right to be informed - Request to know:</strong> Depending on the circumstances, you have a right to know: whether we collect and use your personal information; the categories of personal information that we collect; the purposes for which the collected personal information is used; whether we sell your personal information to third parties; the categories of personal information that we sold or disclosed for a business purpose; the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and the business or commercial purpose for collecting or selling personal information.</li>
              <li><strong>Right to Non-Discrimination for the Exercise of a Consumer&apos;s Privacy Rights:</strong> We will not discriminate against you if you exercise your privacy rights.</li>
            </ul>
          </section>

          {/* Section 13 */}
          <section id="section13">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">13. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
            <p className="text-gray-700 leading-relaxed italic">
              <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We may update this privacy notice from time to time. The updated version will be indicated by an updated &ldquo;Revised&rdquo; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
            </p>
          </section>

          {/* Section 14 */}
          <section id="section14">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions or comments about this notice, you may email us at <a href="mailto:info@livehealthrates.com" className="text-blue-600 hover:underline">info@livehealthrates.com</a> or by post to:
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Healthie LLC DBA Healthie Insurance Agency<br />
              Live Health Rates<br />
              United States
            </p>
          </section>

          {/* Section 15 */}
          <section id="section15">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">15. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
            <p className="text-gray-700 leading-relaxed">
              Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by clicking here or contact us at <a href="mailto:info@livehealthrates.com" className="text-blue-600 hover:underline">info@livehealthrates.com</a>. We will respond to your request within 30 days.
            </p>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link href="/terms" className="text-blue-600 hover:underline">Terms and Conditions</Link>
            <span className="text-gray-300">|</span>
            <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            <span className="text-gray-300">|</span>
            <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
            <span className="text-gray-300">|</span>
            <Link href="/do-not-sell" className="text-blue-600 hover:underline">Do Not Sell</Link>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            © 2026 Live Health Rates - All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
