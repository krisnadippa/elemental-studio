import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function PortfolioPreview() {
  const featured = projects.slice(0, 4);

  return (
    <section id="portfolio" className="bg-[#0d0d0d] pb-0">
      {/* Header */}
      <div className="section-container pt-0 pb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[#c4a882] text-[0.65rem] tracking-[0.45em] uppercase mb-4">
              Our Portfolio
            </p>
            <h2 className="font-serif text-[2rem] md:text-[2.6rem] lg:text-[3rem] text-[#f5f0e8]">
              Selected Projects
            </h2>
          </div>
          <Link
            href="/our-project"
            className="hidden md:inline-flex items-center gap-2 text-[#8b7355]
                       hover:text-[#c4a882] text-[0.65rem] tracking-[0.22em] uppercase
                       transition-colors duration-300 group"
          >
            View All
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Full-width image strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {featured.map((project) => (
          <Link
            key={project.id}
            href="/our-project"
            className="group relative block overflow-hidden"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 bg-black/0 group-hover:bg-black/55
                         transition-colors duration-500"
            />
            {/* Info reveal */}
            <div
              className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0
                         group-hover:translate-y-0 group-hover:opacity-100
                         transition-all duration-500"
            >
              <p className="text-[#c4a882] text-[0.6rem] tracking-[0.3em] uppercase mb-1.5">
                {project.category.replace("-", " ")}
              </p>
              <h3 className="font-serif text-lg text-[#f5f0e8] leading-snug">
                {project.title}
              </h3>
              <p className="text-[#a89070] text-xs mt-1">{project.location}</p>
            </div>

            {/* Corner arrow */}
            <div
              className="absolute top-4 right-4 w-8 h-8 border border-white/30
                         flex items-center justify-center opacity-0
                         group-hover:opacity-100 transition-opacity duration-300"
            >
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M7 17L17 7M7 7h10v10" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile link */}
      <div className="section-container pt-8 pb-4 md:hidden">
        <Link
          href="/our-project"
          className="inline-flex items-center gap-2 text-[#8b7355] hover:text-[#c4a882]
                     text-[0.65rem] tracking-[0.22em] uppercase transition-colors group"
        >
          View All Projects
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
