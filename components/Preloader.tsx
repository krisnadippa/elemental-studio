"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Percentage counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 2; 
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsDone(true);
        // Remove from DOM after slide animation completes
        setTimeout(() => setIsVisible(false), 900);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0d0d0d] flex flex-col items-center justify-center transition-all duration-700
                 ${isDone ? "preloader-slide-up" : "opacity-100"}`}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo Container */}
        <div className="relative w-24 h-24 mb-10 animate-fade-in">
          <Image
            src="/images/logo.png"
            alt="Elemental Studio Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Brand Text */}
        <div className="text-center mb-12 animate-fade-up delay-200">
           <h1 className="font-serif text-2xl tracking-[0.4em] text-[#e8ddd0]">
            ELEMENTAL
          </h1>
          <p className="text-[0.6rem] tracking-[0.6em] text-[#c4a882] uppercase mt-2">
            Studio
          </p>
        </div>

        {/* Loading Bar Container */}
        <div className="w-48 h-px bg-white/[0.05] relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-[#c4a882] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Counter */}
        <div className="mt-6">
          <span className="font-serif text-[3rem] text-white/10 leading-none select-none italic">
            {progress.toString().padStart(3, "0")}
          </span>
        </div>
      </div>

      {/* Background visual element */}
      <div className="absolute bottom-10 left-10 text-white/[0.03] select-none pointer-events-none">
        <p className="font-serif text-[8rem] leading-none">Perspective</p>
      </div>
    </div>
  );
}
