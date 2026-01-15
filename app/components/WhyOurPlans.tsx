'use client';

export default function WhyOurPlans() {
  const benefits = [
    { icon: '🌐', text: 'Nationwide PPO Network Access' },
    { icon: '💰', text: 'Potential Savings Compared to Traditional Plans' },
    { icon: '📉', text: 'Reduced Out-of-Pocket Expense Options' },
    { icon: '🚫', text: 'Plans With Minimal or Zero Deductibles' },
    { icon: '💪', text: 'Cost-Effective Solutions for Healthier Individuals' },
    { icon: '⚡', text: 'Rapid Coverage Start—Sometimes Next Day' },
    { icon: '⏱️', text: 'Fast Application—Just Minutes to Complete' },
    { icon: '📋', text: 'No Income Requirements to Qualify' },
  ];

  return (
    <section className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] text-center mb-12 md:mb-16">
          What Makes This Process Different
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] p-5 rounded-xl flex items-start gap-4 hover:bg-[#FED7AA] hover:translate-x-1 transition-all"
            >
              <div className="w-10 h-10 bg-[#EA580C] text-white rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                {benefit.icon}
              </div>
              <span className="text-[#111827] font-semibold text-sm md:text-base pt-2">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
