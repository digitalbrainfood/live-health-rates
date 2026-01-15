'use client';

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      label: 'STEP ONE',
      title: 'Share the Basics',
      description: 'Quick form. No essays required. Just the essentials to get you matched.',
    },
    {
      step: 2,
      label: 'STEP TWO',
      title: 'Discover Your Fit',
      description: 'See which coverage paths might make sense based on your unique situation.',
    },
    {
      step: 3,
      label: 'STEP THREE',
      title: 'Talk to the Pros',
      description: 'Licensed agents reach out to walk you through options without pressure or jargon.',
    },
    {
      step: 4,
      label: 'STEP FOUR',
      title: 'Choose Confidently',
      description: 'Make an informed decision that gives you peace of mind and financial security.',
    },
  ];

  return (
    <section className="bg-[#FFFBEB] py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] text-center mb-12 md:mb-16">
          Your Simple Path Forward
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white p-6 md:p-8 rounded-2xl text-center shadow-lg hover:-translate-y-1 transition-transform"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#EA580C] text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-5">
                {item.step}
              </div>
              <p className="text-xs font-semibold text-[#EA580C] uppercase tracking-wider mb-2">
                {item.label}
              </p>
              <h3 className="text-lg font-bold text-[#111827] mb-3">
                {item.title}
              </h3>
              <p className="text-[#4B5563] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
