// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export function DigitalServices() {
//   return (
//     <section className="py-16 px-4">
//       <div className="container mx-auto max-w-6xl">
//         <div className="flex flex-col md:flex-row gap-y-8 justify-between items-start mb-8">
//           <div>
//             <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">Our digital Services</h2>
//             <p className="text-gray-600 max-w-2xl">
//               We deliver transformative digital journeys for renowned global brands by combining creativity, AI innovation, and modern technology.
//             </p>
//           </div>
//           <Link
//             href="/contact"
//             className="bg-[#FF5733] text-white px-6 py-2 rounded-full hover:bg-[#FF5733]/90 transition"
//           >
//             Contact Us
//           </Link>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 mt-12">
//           {/* Web Development */}
//           <div className="bg-[#2A363B] rounded-2xl p-8 text-white">
//             <h3 className="text-xl font-bold mb-6">Web Development</h3>
//             <div className="relative h-48 mb-4">
//               <Image
//                 src="/images/ZenBook Duo 14.webp"
//                 alt="Web Development"
//                 fill
//                 className="object-cover rounded-xl"
//               />
//             </div>
//           </div>

//           {/* App Development */}
//           <div className="bg-[#4A5859] rounded-2xl p-8 text-white">
//             <h3 className="text-xl font-bold mb-6">App Development</h3>
//             <div className="relative h-48 mb-4">
//               <Image
//                 src="/images/iPhone 15.webp"
//                 alt="App Development"
//                 fill
//                 className="object-cover rounded-xl"
//               />
//             </div>
//           </div>

//           {/* Digital Marketing */}
//           <div className="bg-[#D4D0C5] rounded-2xl p-8">
//             <h3 className="text-xl font-bold mb-6">Digital Marketing</h3>
//             <div className="relative h-48 mb-4">
//               <Image
//                 src="/images/iPad Mini.webp"
//                 alt="Digital Marketing"
//                 fill
//                 className="object-cover rounded-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ServiceType {
  id: number;
  name: string;
}

interface Service {
  id: number;
  title: string;
  image: string;
  bgColor: string;
  textColor: string;
  serviceTypes: ServiceType[];
}

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



export function DigitalServices() {
  const services: Service[] = [
    {
      id: 1,
      title: "Web Development",
      image:
        "/images/webDev.jpg",
      bgColor: "bg-[#D6D5B9]",
      textColor: "text-white",
      serviceTypes: [
        { id: 1, name: "WordPress Development" },
        { id: 2, name: "No-Code Development" },
        { id: 3, name: "Custom Development" },
        { id: 4, name: "E-commerce Solutions" },
      ],
    },
    {
      id: 2,
      title: "App Development",
      image:
        "/images/AppDev.png",
      bgColor: "bg-[#EEEEEE]",
      textColor: "text-[#212b36]",
      serviceTypes: [
        { id: 1, name: "iOS Development" },
        { id: 2, name: "Android Development" },
        { id: 3, name: "Cross-Platform Apps" },
        { id: 4, name: "Mobile UI/UX Design" },
      ],
    },
    {
      id: 3,
      title: "Digital Marketing",
      image:
        "/images/Digital.jpg",
      bgColor: "bg-[#F4f4f4]",
      textColor: "text-black",
      serviceTypes: [
        { id: 1, name: "SEO Optimization" },
        { id: 2, name: "Social Media Marketing" },
        { id: 3, name: "Content Strategy" },
        { id: 4, name: "Analytics & Reporting" },
      ],
    },
    {
      id: 4,
      title: "Graphics & Video Editing",
      image:
        "/images/Video.jpg",
      bgColor: "bg-[#FFEEDE]",
      textColor: "text-black",
      serviceTypes: [
        { id: 1, name: "Social Media Graphics" },
        { id: 2, name: "Corporate & Promo Videos" },
        { id: 3, name: "Logo & Branding Design" },
        { id: 4, name: "Reels, Shorts & YouTube Editing" },
      ],
    },

    {
      id: 5,
      title: "AutoCAD & 3D Modeling",
      image:
        "/images/autoCad.jpg",
      bgColor: "bg-[#000000]",
      textColor: "text-white",
      serviceTypes: [
        { id: 1, name: "2D Drafting & Floor Plans" },
        { id: 2, name: "3D Architectural Modeling" },
        { id: 3, name: "Product Visualization" },
        { id: 4, name: "CAD to 3D Conversion" },
      ],
    },
    {
      id: 6,
      title: "Ads Management",
      image:
        "/images/Advs.jpg",
      bgColor: "bg-[#DAC9FF]",
      textColor: "text-black",
      serviceTypes: [
        { id: 1, name: "Google Ads Campaigns" },
        { id: 2, name: "Facebook & Instagram Ads" },
        { id: 3, name: "YouTube Ads Management" },
        { id: 4, name: "Ad Performance Optimization" },
      ],
    },
  ];

  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-y-8 justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
              Our Digital Services
            </h2>
            <p className="text-gray-600 max-w-2xl">
              We deliver transformative digital journeys for renowned global
              brands by combining creativity, AI innovation, and modern
              technology.
            </p>
          </div>
          <Link
          onClick={handleClick}
            href="#contact"
            className="bg-[#FF5733] text-[18px] text-white px-6 py-3 rounded-full hover:bg-[#FF5733]/90 transition"
          >
            Contact Us
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-x-4 gap-y-6 mt-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:-translate-y-2  relative"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              style={{ height: "450px" }}
            >
              {/* Image container */}
              <div
                className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
                  hoveredService === service.id ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className={`${service.bgColor} p h-full`}>
                  <h3
                    className={`text-2xl p-8 font-bold mb-6 ${service.textColor}`}
                  >
                    {service.title}
                  </h3>
                  <div className="relative p-0 h-full w-full rounded-xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Services container */}
              <div
                className={`absolute inset-0 w-full h-full bg-[#fff84b] p-8 transition-all duration-500 ease-in-out ${
                  hoveredService === service.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-2xl font-bold mb-6 text-black">
                  {service.title}
                </h3>
                <div className="space-y-4">
                  <h4 className="font-medium  text-black">Our Services:</h4>
                  <ul className="space-y-6">
                    {service.serviceTypes.map((type) => (
                      <li
                        key={type.id}
                        className="flex items-center gap-2 text-black"
                      >
                        <ChevronRight className="h-4 w-4" />
                        <span>{type.name}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-block mt-4 px-8 py-3 rounded-full bg-black text-white hover:bg-black/90 transition-colors duration-300 text-sm font-medium"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
