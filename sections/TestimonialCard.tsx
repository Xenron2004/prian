import React from "react";
import { Quote } from "lucide-react";

interface Testimonial {
  author: {
    name: string;
    role: string;
    image: string;
  };
  companyLogo: string;
  content: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-[#F6F6F6] rounded-2xl p-8 ">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12">
            <img
              src={testimonial.author.image}
              alt={testimonial.author.name}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="relative w-20 h-12 p-1 bg-white rounded-lg border border-gray-500">
          <img
            src={testimonial.companyLogo}
            alt="Company Logo"
            className="object-contain w-full h-full "
          />
        </div>
      </div>

      <div className="text-[#FF5733] mb-4">
        <Quote size={40} />
      </div>

      <blockquote className="text-gray-900 mb-8">
        {testimonial.content}
      </blockquote>

      <div className="border-l-2 border-gray-300 pl-4 my-4">
        <h4 className="font-semibold text-black">{testimonial.author.name}</h4>
        <p className="text-sm text-gray-600">{testimonial.author.role}</p>
      </div>
    </div>
  );
}
