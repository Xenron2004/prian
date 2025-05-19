"use client";
import Link from "next/link";
import ProjectCard from "./ProjectCards";

const projects = [
  {
    title: "Anandam Construction - A real estate company",
    stacks: ["Real Estate", "UI/UX Design", "Custom Development"],
    imageUrl: "/images/anandam_thumbnail.webp",
    caseStudyUrl: "/projects/anandam-construction",
    projectUrl: "https://anandamconstruction.com/",
  },
  {
    title: "Fastpay - A Fintech Platform for better Transactions",
    stacks: ["Framer", "UI/UX Design", "No-Code Development"],
    imageUrl: "/images/fastpay_thumbnail.webp",
    caseStudyUrl: "/projects/fastpay_thumbnail.webp",
    projectUrl: "https://fastpay.framer.website/",
  },
  {
    title: "Payswift - A Fintech Platform for better Transactions",
    stacks: ["Web Development", "Fintech", "UI/UX Design"],
    imageUrl: "/images/Thumbnail_Payswift.png",
    caseStudyUrl: "/projects/fastpay",
    projectUrl: "https://payswift-eta.vercel.app/",
  },
  {
    title: "Travrip - A Travel Agency Platform",
    stacks: ["ReactJs", "Website Design", "Travel Agency"],
    imageUrl: "/images/Banner_Travrip.webp",
    caseStudyUrl: "/projects/fastpay",
    projectUrl: "https://travrip.vercel.app/",
  },
  {
    title: "Maa Kaal Ratri Homes Pvt. Ltd.",
    stacks: ["NextJs", "Website Design", "Real Estate Platform"],
    imageUrl: "/images/maakaalratri_thumbnail.webp",
    caseStudyUrl: "/projects/fastpay",
    projectUrl: "https://maakaalratri.com/",
  },
  {
    title: "TedX NIELIT Aurangabad - Graphics and Video Editing",
    stacks: ["Graphics Design", "Video Editing", "Adobe After Effects"],
    imageUrl: "/images/tedx_collage.jpg",
    caseStudyUrl: "/projects/fastpay",
    projectUrl: "https://www.instagram.com/tedxnielitaurangabad?igsh=ZWR4OWp3dXkwOTI1",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="#projects"
      className="py-12 md:py-16 px-4 sm:px-6 bg-[#0D0D12]"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 gap-8 md:gap-0">
          <h2 className="text-2xl sm:text-3xl max-w-[650px] leading-[67px] w-full md:text-4xl font-bold text-white">
            Our Success Stories: See What We&apos;ve Achieved
          </h2>
          {/* <Link
            href="/projects"
            className="bg-[#FF5733] text-white px-6 py-3 rounded-full hover:bg-[#FF5733]/90 transition text-sm md:text-[18px] whitespace-nowrap"
          >
            View All Projects
          </Link> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              stacks={project.stacks}
              imageUrl={project.imageUrl}
              caseStudyUrl={project.caseStudyUrl}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
