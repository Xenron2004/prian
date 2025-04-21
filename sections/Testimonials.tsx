"use client";

import Image from "next/image";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "../data/testimonial"; 

export function Testimonials() {
  return (
    <section className="py-16 px-4 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-12">What Our Clients Say</h2>
        
        <div className=" py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
      </div>
    </section>
  );
}