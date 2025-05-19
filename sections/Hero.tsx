"use client";

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


export function Hero() {
  return (
    <section className="relative h-[575px] flex items-center">
      {/* Content Container - responsive padding */}
      <div className="relative z-10 mx-auto  h-full flex flex-col justify-center max-w-[1280px] w-11/12">
        <h1 className="text-4xl md:text-6xl max-w-[1100px] w-full mt-[220px] md:mt-[140px] font-extrabold text-[#212b36] leading-tight mb-6">
          Elevate Your Brand with Cutting-Edge Digital Solutions
        </h1>
        <p className="text-[#666D80] text-[20px] leading-[150%] font-medium font-manrope mb-8 max-w-5xl">
          PRIAN DIGITECH crafts customized solutions blending creativity and
          technology. We deliver web & app development, video editing, graphic
          design, AutoCAD, and digital marketing services — helping brands grow,
          engage, and innovate.
        </p>
        <div className="flex mt-8 flex-col sm:flex-row gap-4">
          <Link
            href="#contact"
            className="bg-[#FF743F] uppercase text-white px-8 py-3 rounded-full hover:bg-[#FF743F]/90 transition text-lg text-center sm:text-left"
          >
            LET'S build together
          </Link>
          <Link
          onClick={handleClick}
            href="#services"
            className="text-gray-900 uppercase px-8 py-3 hover:bg-white transition text-lg rounded-full border border-gray-400 text-center sm:text-left"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
