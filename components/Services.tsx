"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/data";

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-[#0d0d0d] py-24 lg:py-36">
      <div className="section-container">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[#c4a882] text-[0.65rem] tracking-[0.45em] uppercase mb-4">
              What We Offer
            </p>
            <h2 className="font-serif text-[2rem] md:text-[2.6rem] lg:text-[3rem] text-[#f5f0e8]">
              Our Services
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 lg:gap-20">

          {/* ─── Left: Numbered list ─────────────── */}
          <div className="divide-y divide-white/[0.06]">
            {services.map((svc, i) => (
              <button
                key={i}
                id={`service-btn-${i}`}
                onClick={() => setActive(i)}
                className={`w-full text-left py-7 flex items-center gap-6 group
                            transition-all duration-300
                            ${active === i ? "pl-4 border-l-2 border-[#c4a882]" : "pl-0 border-l-2 border-transparent"}`}
              >
                {/* Number */}
                <span
                  className={`font-serif text-[3rem] md:text-[3.5rem] leading-none
                               transition-colors duration-400 flex-shrink-0
                               ${active === i ? "text-[#c4a882]" : "text-[#222222] group-hover:text-[#2d2d2d]"}`}
                >
                  {svc.number}
                </span>

                {/* Title */}
                <div className="flex-1">
                  <h3
                    className={`font-serif text-xl lg:text-2xl transition-colors duration-300
                                 ${active === i ? "text-[#f5f0e8]" : "text-[#6b5a3e] group-hover:text-[#a89070]"}`}
                  >
                    {svc.title}
                  </h3>
                </div>

                {/* Arrow */}
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-all duration-300
                              ${active === i ? "text-[#c4a882] translate-x-1" : "text-[#2d2d2d] group-hover:text-[#6b5a3e]"}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            ))}
          </div>

          {/* ─── Right: Detail panel ─────────────── */}
          <div className="relative lg:border-l border-white/[0.06] lg:pl-20 pt-8 lg:pt-0">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`transition-all duration-500
                            ${active === i
                              ? "opacity-100 translate-y-0 block"
                              : "opacity-0 -translate-y-3 hidden"}`}
              >
                <span className="text-[#c4a882] text-[0.6rem] tracking-[0.4em] uppercase mb-5 block">
                  {svc.number} / 03
                </span>
                <h3 className="font-serif text-[2rem] text-[#f5f0e8] mb-5">
                  {svc.title}
                </h3>
                <p className="text-[#a89070] leading-relaxed mb-8 font-sans font-light text-[0.95rem]">
                  {svc.description}
                </p>

                {/* Feature tags */}
                <ul className="space-y-3 mb-10">
                  {svc.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-[#8b7355] text-sm">
                      <span className="inline-block w-1 h-1 rounded-full bg-[#c4a882] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 text-[#c4a882] text-[0.65rem]
                             tracking-[0.22em] uppercase border-b border-[#c4a882]/40 pb-1
                             hover:border-[#c4a882] transition-colors duration-300 group"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
