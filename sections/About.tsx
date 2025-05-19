import React from 'react';
import { Button } from '@/components/ui/Button';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-5 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Who we are
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
             Your Trusted Partner for Digital Excellence and Innovation
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
          <div className="lg:w-1/2">
            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
              At Pian Digitech, we are more than just a digital marketing agency—we are your brand's growth partner. 
              Our team of creative strategists, SEO specialists, and data-driven marketers craft customized campaigns 
              to boost your online presence, brand engagement, and revenue.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              With expertise in SEO, PPC, social media marketing, content marketing, and web design, we help businesses 
              transform their digital footprint into a profit-generating powerhouse.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg"
            >
              CONTACT US
            </Button>
          </div>
          <div className="lg:w-1/2 w-full bg-gray-100 rounded-xl overflow-hidden aspect-video max-w-[600px] lg:max-w-none">
            {/* Improved media container with proper constraints */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-500">
              <span className="text-white text-lg sm:text-xl font-medium">
                Video/Animation Placeholder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;