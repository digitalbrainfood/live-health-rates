'use client';

import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Losing my job meant losing my coverage. I was panicking until I found this service. The agent who called understood my situation immediately and presented options I never knew existed. Honestly saved me.",
      name: 'Brandon T',
      title: 'Marketing Manager',
      image: '/images/health-insurance-consumer.webp',
    },
    {
      quote: "Running a bakery means every dollar counts. I was skeptical at first, but the agent took real time to understand my business needs. Found coverage that actually fits my reality—not just my wallet's nightmare.",
      name: 'Carla P',
      title: 'Bakery Owner',
      image: '/images/health-insurance-agent.webp',
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-12">
          Stories From <span className="font-normal">Real People</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-6">
              <p className="text-lg text-gray-700 italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex-shrink-0 relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover object-top rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#1a365d]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
