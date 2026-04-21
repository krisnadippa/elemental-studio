import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] overflow-hidden"
    >
      {/* ─── Background image ─────────────────────── */}
      <Image
        src="/images/hero.png"
        alt="Elemental Studio — Luxury Interior Design"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* ─── Overlays ────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />

      {/* ─── Vertical label ──────────────────────── */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#c4a882]/50" />
        <span
          className="text-[0.55rem] tracking-[0.4em] uppercase text-[#c4a882]/60 font-sans"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Interior Studio
        </span>
      </div>

      {/* ─── Content ─────────────────────────────── */}
      <div className="relative z-10 h-full flex items-center">
        <div className="section-container">
          <div className="max-w-2xl">

            {/* Label */}
            <p className="text-[#c4a882] text-[0.65rem] tracking-[0.45em] uppercase mb-6 animate-fade-up">
              Premium Interior Design Studio Bali &nbsp;·&nbsp; Est. 2021
            </p>

            {/* Headline */}
            <h1
              className="font-serif text-[2.8rem] md:text-[3.8rem] lg:text-[4.5rem] xl:text-[5rem]
                         text-[#f5f0e8] leading-[1.08] mb-7 animate-fade-up delay-100"
            >
              We design your<br />
              <em className="not-italic text-[#c4a882]">room</em> aesthetic
            </h1>

            {/* Subtext */}
            <p
              className="text-[#a89070] text-base leading-relaxed mb-10 max-w-sm
                         font-sans font-light animate-fade-up delay-200"
            >
              Transforming spaces into extraordinary experiences.
              Every design tells a story of elegance and purpose.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 animate-fade-up delay-300">
              <Link
                href="/#about"
                className="inline-flex items-center gap-3 bg-[#c4a882] text-[#0d0d0d]
                           px-8 py-4 text-[0.65rem] tracking-[0.22em] uppercase font-medium
                           hover:bg-[#e8ddd0] transition-colors duration-300 group"
              >
                Explore More
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/our-project"
                className="inline-flex items-center gap-2 text-[#e8ddd0] text-[0.65rem]
                           tracking-[0.22em] uppercase link-underline hover:text-[#c4a882]
                           transition-colors duration-300"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Scroll indicator ────────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div
          className="w-5 h-8 border border-[#c4a882]/30 rounded-full flex items-start
                     justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-[#c4a882]/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
