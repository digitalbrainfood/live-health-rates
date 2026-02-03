'use client';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#10385b] mb-8">Partners</h1>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed">
              Health Coverage Search works with trusted insurance partners to connect you with the right coverage options.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              <li>Hippo Health Insurance</li>
              <li>Rising Health Insurance Agency</li>
              <li>Healthie Insurance Agency</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
