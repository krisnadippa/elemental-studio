import Image from "next/image";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-[#0d0d0d] py-20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row overflow-hidden bg-[#1a1a1a] border border-white/[0.06]">

          {/* ─── Image pane ───────────────────────── */}
          <div className="relative w-full md:w-[300px] lg:w-[360px] flex-shrink-0"
               style={{ minHeight: "260px" }}>
            <Image
              src="/images/cta.png"
              alt="Interior design detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 360px"
            />
            {/* subtle right-side fade for desktop */}
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#1a1a1a] hidden md:block" />
          </div>

          {/* ─── Content pane ─────────────────────── */}
          <div className="flex-1 flex flex-col justify-center px-8 py-10 lg:px-14 lg:py-12">
            <p className="text-[#c4a882] text-[0.65rem] tracking-[0.45em] uppercase mb-4">
              Our Mission
            </p>
            <h2
              className="font-serif text-[1.8rem] md:text-[2rem] lg:text-[2.4rem]
                         text-[#f5f0e8] leading-snug mb-8 max-w-md"
            >
              Blending creativity and functionality in every design
            </h2>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 self-start border border-[#c4a882]/50 text-[#c4a882]
                         text-[0.65rem] tracking-[0.22em] uppercase px-7 py-3.5
                         hover:bg-[#c4a882] hover:text-[#0d0d0d] hover:border-[#c4a882]
                         transition-all duration-300 group"
            >
              Hire Us Now
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
      </div>
    </section>
  );
}
