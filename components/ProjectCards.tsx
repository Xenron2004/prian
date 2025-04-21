"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  stacks: string[];
  imageUrl: string;
  caseStudyUrl: string;
}

export default function ProjectCard({
  title,
  stacks,
  imageUrl,
  caseStudyUrl,
}: ProjectCardProps) {
  return (
    <div className="w-full">
      <Link href={caseStudyUrl} className="group">
        {/* Image Container */}
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>
        
        {/* Text Content */}
        <div className="mt-4">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {stacks.map((stack, index) => (
              <span 
                key={index}
                className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-xs md:text-sm"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}