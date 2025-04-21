"use client";

import Image from "next/image";
import Link from "next/link";

export function GrowthPartner() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section - Original height maintained */}
          <div className="relative">
            <Image
              src="/images/growthPartner.webp"
              alt="Team meeting"
              width={600}  // Original width
              height={400} // Original height
              className="rounded-2xl"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="mb-8">
              <span className="text-[#FF5733] font-medium text-lg tracking-wide">
                Who we are
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-8 leading-tight">
                Your Growth Partner in Digital Era
              </h1>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 mb-12">
              <p className="text-gray-700 text-lg leading-relaxed">
                At Brian Digitech, we are more than just a digital marketing agency—we are your brand's growth partner. Our team of creative strategists, SEO specialists, and data-driven marketers craft customized campaigns to boost your online presence, brand engagement, and revenue.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With expertise in SEO, PPC, social media marketing, content marketing, and web design, we help businesses transform their digital footprint into a profit-generating powerhouse.
              </p>
            </div>

            {/* Button */}
            <Link 
              href="/contact" 
              className="bg-[#FF5733] text-white px-8 py-4 rounded-full hover:bg-[#FF5733]/90 transition-all duration-300 inline-block w-fit text-lg font-medium"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}