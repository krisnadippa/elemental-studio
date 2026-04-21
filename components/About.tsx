import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-[#111111] py-20 lg:py-28">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* ─── Text ─────────────────────────────── */}
          <div>
            <p className="text-[#c4a882] text-[0.65rem] tracking-[0.45em] uppercase mb-5">
              About Us
            </p>
            <h2
              className="font-serif text-[2rem] md:text-[2.6rem] lg:text-[3rem]
                         text-[#f5f0e8] leading-tight mb-7"
            >
              We are the best interior design studio in London
            </h2>
            <p className="text-[#a89070] leading-relaxed mb-5 font-sans font-light text-[0.95rem]">
              With over a decade of experience transforming residential and commercial spaces,
              Elemental Studio has established itself as a leader in luxury interior design.
              Our approach combines artistic vision with rigorous functional thinking.
            </p>
            <p className="text-[#a89070] leading-relaxed mb-10 font-sans font-light text-[0.95rem]">
              Every project begins with understanding your lifestyle and aspirations.
              We craft spaces that not only look extraordinary but feel intuitively yours —
              spaces that tell a story.
            </p>

            {/* Divider accent */}
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-12 bg-[#c4a882]/40" />
              <span className="text-[#6b5a3e] text-[0.65rem] tracking-[0.3em] uppercase">
                Est. 2021 — Bali
              </span>
            </div>

            <Link
              href="/our-project"
              className="inline-flex items-center gap-3 text-[#c4a882] text-[0.65rem]
                         tracking-[0.22em] uppercase border-b border-[#c4a882]/40 pb-1
                         hover:border-[#c4a882] transition-colors duration-300 group"
            >
              View Our Work
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* ─── Images ───────────────────────────── */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Primary image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/about-1.png"
                  alt="Interior design project showcase"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Secondary image — shifted down */}
              <div
                className="relative overflow-hidden mt-12"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="/images/about-2.png"
                  alt="Design studio workspace"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 left-4 bg-[#1e3a2f] border border-[#2d5a3d]
                         px-6 py-4 hidden md:block"
            >
              <p className="font-serif text-2xl text-[#f5f0e8]">5+</p>
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-[#c4a882]">
                Years of Excellence
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
