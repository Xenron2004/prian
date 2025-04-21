"use client";

import { Hero } from '../sections/Hero';
import Navs from './Navs';


export function HeroWithNavbar() {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 100);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className="relative h-[768px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0"></div>
      </div>

      {/* Navbar with scroll effect - unchanged */}
      {/* <div className={`fixed top-0 w-full z-50 transition-all duration-100 ${
        isScrolled ? '-translate-y-full' : 'translate-y-0'
      }`}>
        <Navbar transparent />
      </div> */}

      <Navs/>
      <Hero />
    </div>
  );
}