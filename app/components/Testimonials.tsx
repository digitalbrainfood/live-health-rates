'use client';

import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "After losing my employer coverage, I thought affordable health insurance was out of reach. This plan cut my monthly costs by more than half while giving me access to top doctors nationwide.",
      name: 'Jennifer M',
      title: 'Real Estate Agent',
      image: '/images/health-insurance-consumer.webp',
    },
    {
      quote: "Running my own business meant sky-high premiums for years. I finally found a plan that works for my family without breaking the bank. The enrollment process took less than 10 minutes and the customer service has been outstanding!",
      name: 'David R',
      title: 'Restaurant Owner',
      image: '/images/health-insurance-agent.webp',
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-12">
          Real Stories, <span className="font-normal">Real Savings</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-6">
              <p className="text-lg text-gray-700 italic leading-relaxed">
                "{testimonial.quote}"
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
