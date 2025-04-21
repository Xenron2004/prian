"use client";

import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  return (
    <section className="py-8 md:py-16">
      {/* Responsive container with equal padding on both sides */}
      <div className="mx-auto relative w-11/12 max-w-[1280px]">
        <div 
          className="relative w-full overflow-hidden group"
          style={{
            height: 'clamp(250px, 50vw, 400px)',
            marginTop: 'clamp(20px, 5vw, 56px)',
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-opacity duration-300"
            onClick={togglePlay}
          >
            <source src="/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Controls Overlay */}
          <div className={`absolute inset-0 flex items-center justify-center bg-black/10 transition-all duration-300 ${
            isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
          }`}>
            <button 
              onClick={togglePlay}
              className="absolute bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              style={{
                width: 'clamp(60px, 10vw, 80px)',
                height: 'clamp(60px, 10vw, 80px)',
              }}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 md:w-8 md:h-8 text-[#FF743F]" />
              ) : (
                <Play className="w-6 h-6 md:w-8 md:h-8 text-[#FF743F] ml-1" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}