'use client';

import Image from 'next/image';

export type TestimonialItem = {
  quote: string;
  name: string;
  title: string;
  image: string;
};

export type TestimonialsProps = {
  headingTop: string;
  headingBottom: string;
  testimonials: TestimonialItem[];
};

export default function Testimonials({ headingTop, headingBottom, testimonials }: TestimonialsProps) {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#10385b] mb-12">
          {headingTop} <span className="font-normal">{headingBottom}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-6">
              <p className="text-lg text-gray-700 italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
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
                  <p className="font-semibold text-[#10385b]">{testimonial.name}</p>
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
