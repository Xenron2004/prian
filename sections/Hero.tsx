"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[575px] flex items-center">
      {/* Content Container - responsive padding */}
      <div className="relative z-10 mx-auto  h-full flex flex-col justify-center max-w-[1280px] w-11/12">
        <h1 className="text-4xl md:text-6xl mt-[140px] font-bold text-black leading-tight mb-6">
          Elevate Your Brand with Cutting-Edge Digital Marketing Solutions
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl">
          We help businesses thrive and scale by crafting innovative marketing strategies, 
          executing data-driven campaigns, and delivering ROI-focused solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact" 
            className="bg-[#FF743F] text-white px-8 py-3 rounded-full hover:bg-[#FF743F]/90 transition text-lg text-center sm:text-left"
          >
            LET'S TALK
          </Link>
          <Link 
            href="/work" 
            className="text-gray-900 px-8 py-3 hover:bg-white transition text-lg rounded-full border border-gray-400 text-center sm:text-left"
          >
            CHECK OUR WORK
          </Link>
        </div>
      </div>
    </section>
  );
}