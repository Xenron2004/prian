"use client";

import Image from "next/image";
import Link from "next/link";

export function DigitalServices() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-y-8 justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">Our digital Services</h2>
            <p className="text-gray-600 max-w-2xl">
              We deliver transformative digital journeys for renowned global brands by combining creativity, AI innovation, and modern technology.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#FF5733] text-white px-6 py-2 rounded-full hover:bg-[#FF5733]/90 transition"
          >
            Contact Us
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Web Development */}
          <div className="bg-[#2A363B] rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6">Web Development</h3>
            <div className="relative h-48 mb-4">
              <Image
                src="/images/ZenBook Duo 14.webp"
                alt="Web Development"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* App Development */}
          <div className="bg-[#4A5859] rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6">App Development</h3>
            <div className="relative h-48 mb-4">
              <Image
                src="/images/iPhone 15.webp"
                alt="App Development"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="bg-[#D4D0C5] rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Digital Marketing</h3>
            <div className="relative h-48 mb-4">
              <Image
                src="/images/iPad Mini.webp"
                alt="Digital Marketing"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}