"use client";
import { HeroWithNavbar } from '@/components/HeroWIthNavbar';
import Portfolio from "@/sections/Portfolio";
import { VideoSection } from "@/sections/VideoSection";
import { GrowthPartner } from "@/sections/GrowthPartner";
import { DigitalServices } from "@/sections/DigitalServices";
import { Testimonials } from "@/sections/Testimonials";
import Footer from "@/components/ui/Footer";
import Contact from "../components/ui/Contact";
import Meet from "@/sections/Meet";


export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <HeroWithNavbar/>
      <VideoSection />
      <GrowthPartner />
      <DigitalServices />
      <Portfolio/>
      
      <Testimonials />
      <Contact/>
      {/* <Meet/> */}
      <Footer/>
    </main>
  );
}
