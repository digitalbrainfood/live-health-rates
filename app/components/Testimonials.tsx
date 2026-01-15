'use client';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Losing my job meant losing my coverage. I was panicking until I found this service. The agent who called understood my situation immediately and presented options I never knew existed. Honestly saved me.",
      name: 'Brandon T',
      initials: 'BT',
      title: 'Marketing Manager',
    },
    {
      quote: "Running a bakery means every dollar counts. I was skeptical at first, but the agent took real time to understand my business needs. Found coverage that actually fits my reality—not just my wallet's nightmare.",
      name: 'Carla P',
      initials: 'CP',
      title: 'Bakery Owner',
    },
  ];

  return (
    <section className="bg-[#FFFBEB] py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] text-center mb-12 md:mb-16">
          Stories From Real People
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-t-4 border-[#EA580C]"
            >
              <p className="text-[#4B5563] text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FED7AA] rounded-full flex items-center justify-center font-bold text-[#78350F]">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#111827]">{testimonial.name}</p>
                  <p className="text-sm text-[#4B5563]">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
