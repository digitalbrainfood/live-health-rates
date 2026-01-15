'use client';

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: 'Share the Basics',
      description: 'Quick form. No essays required. Just the essentials to get you matched.',
    },
    {
      step: 2,
      title: 'Discover Your Fit',
      description: 'See which coverage paths might make sense based on your unique situation.',
    },
    {
      step: 3,
      title: 'Talk to the Pros',
      description: 'Licensed agents reach out to walk you through options without pressure or jargon.',
    },
    {
      step: 4,
      title: 'Choose Confidently',
      description: 'Make an informed decision that gives you peace of mind and financial security.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-12">
          Your Simple Path Forward
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="space-y-3">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                STEP {item.step}:
              </p>
              <h3 className="text-xl font-bold text-[#1a365d]">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
