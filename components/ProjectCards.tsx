// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import Tilt from "react-parallax-tilt"

// interface ProjectCardProps {
//   title: string;
//   stacks: string[];
//   imageUrl: string;
//   caseStudyUrl: string;
// }

// export default function ProjectCard({
//   title,
//   stacks,
//   imageUrl,
//   caseStudyUrl,
// }: ProjectCardProps) {
//   return (
//     <div className="w-full">
//       <Link href={caseStudyUrl} className="group">
//         {/* Image Container */}
//         <Tilt
//             tiltMaxAngleX={15}
//             tiltMaxAngleY={15}
//             perspective={1000}
//             transitionSpeed={800}
//             glareEnable={false} // explicitly disable glare
//             style={{ background: 'transparent' }} // ensure background is transparent
//             className="bg-transparent"
      
//             >
//         <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
//           <Image
//             src={imageUrl}
//             alt={title}
//             fill
//             className="object-cover group-hover:scale-105 transition-transform duration-500"
//             priority
//           />
//         </div>
//         </Tilt>
        
//         {/* Text Content */}
//         <div className="mt-4">
//           <h3 className="text-[16px] md:text-[18px] font-semibold text-white mb-2">{title}</h3>
//           <div className="flex flex-wrap gap-2">
//             {stacks.map((stack, index) => (
//               <span 
//                 key={index}
//                 className="bg-[#212B36] text-[#666D80] px-3 py-2 rounded-full text-xs md:text-sm"
//               >
//                 {stack}
//               </span>
//             ))}
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// }












import { ArrowUpRight } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

interface ProjectCardProps {
  title: string;
  stacks: string[];
  imageUrl: string;
  caseStudyUrl: string;
  projectUrl: string;
}

export default function ProjectCard({
  title,
  stacks,
  imageUrl,
  caseStudyUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <div className="w-full">
     
        {/* Image Container */}
        <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          transitionSpeed={800}
          glareEnable={false}
          style={{ background: 'transparent' }}
          className="bg-transparent"
        >
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
              {/* Circular Arrow Icon */}
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-4 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <ArrowUpRight className="w-6 h-6" />
        </a>
          </div>
        </Tilt>
        
        {/* Text Content */}
        <div className="mt-4 flex flex-col gap-3">
          <h3 className="text-[16px] md:text-[20px] font-bold text-white mb-2">{title}</h3>
          <div className="flex flex-wrap gap-3">
            {stacks.map((stack, index) => (
              <span 
                key={index}
                className="bg-[#212b36] text-[#666d80] px-3 py-2 rounded-full text-xs md:text-sm"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>

    </div>
  );
}