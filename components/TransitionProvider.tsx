"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    // Detect pathname change
    if (pathname !== prevPathname) {
      setIsTransitioning(true);
      setPrevPathname(pathname);
      
      // Keep progress bar for a moment
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 400); // Shorter bar duration
      
      return () => clearTimeout(timer);
    }
  }, [pathname, prevPathname]);

  return (
    <>
      {/* Top Progress Bar - pure visual indicator */}
      <div 
        className={`fixed top-0 left-0 h-[2px] bg-[#c4a882] z-[10000] transition-all duration-400 ease-out pointer-events-none
                   ${isTransitioning ? "w-full opacity-100" : "w-0 opacity-0"}`}
      />

      {/* Main Content with Fade Effect - uses key for re-triggering animation */}
      <div key={pathname} className="page-fade-in">
        {children}
      </div>
    </>
  );
}
