"use client";

import Link from "next/link";
import ProjectCard from "./ProjectCards";

const projects = [
  {
    title: "Anandam Construction - A real estate company",
    stacks: ["Web Development", "UI/UX Design", "SEO Services"],
    imageUrl: "/images/Thumbnail_Anandam_Construction_Reevij.webp",
    caseStudyUrl: "/projects/anandam-construction",
  },
  {
    title: "Fastpay - A Fintech Platform for better Transactions",
    stacks: ["Web Development", "UI/UX Design", "SEO Services"],
    imageUrl: "/images/Three_versions_Fastpay.webp",
    caseStudyUrl: "/projects/fastpay",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 gap-8 md:gap-0">
          <h2 className="text-2xl sm:text-3xl max-w-[650px] w-full md:text-4xl font-bold text-white">
            Our Success Stories: See What We&apos;ve Achieved
          </h2>
          <Link
            href="/projects"
            className="bg-[#FF5733] text-white px-6 py-2 rounded-full hover:bg-[#FF5733]/90 transition text-sm md:text-base whitespace-nowrap"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              stacks={project.stacks}
              imageUrl={project.imageUrl}
              caseStudyUrl={project.caseStudyUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}