"use client";

import Image from "next/image";
import Link from "next/link";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = targetId ? document.getElementById(targetId) : null;
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

export function GrowthPartner() {
  return (
    <section id="abouts" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section - Original height maintained */}
          <div className="relative">
            <Image
              src="/images/growthPartner.webp"
              alt="Team meeting"
              width={600} // Original width
              height={400} // Original height
              className="rounded-2xl"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="mb-2">
              <span className="text-[#FF5733] font-medium text-lg tracking-wide">
                Who we are
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                Your Growth Partner in Digital Era
              </h1>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 mb-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                At PRIAN DIGITECH, we don’t just create digital services — we
                create digital experiences that spark growth, engagement, and
                success. We are a passionate team of web and app developers,
                creative designers, video editors, AutoCAD specialists, digital
                marketers, and content creators — all working together with one
                goal: to power your brand’s journey to the next level.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether you're a startup, small business, or an established
                brand, we deliver custom-built websites, high-impact marketing
                strategies, stunning graphics, professional videos, and
                innovative digital solutions that align with your business
                goals. With creativity at our core and technology in our
                DNA,PRIAN DIGITECH ensures that every project we handle is
                designed for impact and built for success — just like our
                tagline promises.
              </p>
            </div>

            {/* Button */}
            <Link
            onClick={handleClick}
              href="#projects"
              className="bg-[#FF5733] text-white px-8 py-4 rounded-full hover:bg-[#FF5733]/90 transition-all duration-300 inline-block w-fit text-lg font-medium"
            >
              Explore Our Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
