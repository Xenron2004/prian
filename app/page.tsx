"use client";
import { HeroWithNavbar } from '@/components/HeroWIthNavbar';
import Portfolio from "@/sections/Portfolio";
import { VideoSection } from "@/sections/VideoSection";
import { GrowthPartner } from "@/sections/GrowthPartner";
import { DigitalServices } from "@/sections/DigitalServices";
import { Testimonials } from "@/sections/Testimonials";
import Footer from "@/components/ui/Footer";
export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <HeroWithNavbar/>
      <VideoSection />
      <GrowthPartner />
      <Portfolio/>
      <DigitalServices />
      <Testimonials />
      <Footer/>
    </main>
  );
}
