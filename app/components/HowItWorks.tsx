'use client';

export type HowItWorksStep = {
  step: number;
  title: string;
  description: string;
};

export type HowItWorksProps = {
  heading: string;
  steps: HowItWorksStep[];
};

export default function HowItWorks({ heading, steps }: HowItWorksProps) {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#10385b] mb-12">{heading}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="space-y-3">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">STEP {item.step}:</p>
              <h3 className="text-xl font-bold text-[#10385b]">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
