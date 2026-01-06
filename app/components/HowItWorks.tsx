'use client';

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: 'Answer a Few Simple Questions',
      description: 'Take less than 30 seconds to tell us about yourself.',
    },
    {
      step: 2,
      title: 'See If You Qualify',
      description: 'Instantly find out if our plans are a good fit for you.',
    },
    {
      step: 3,
      title: 'Talk to a Licensed Agent',
      description: 'Get expert advice and personalized recommendations.',
    },
    {
      step: 4,
      title: 'Start Saving',
      description: 'Enjoy lower premiums, better coverage, and peace of mind.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-12">
          How It Works
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
