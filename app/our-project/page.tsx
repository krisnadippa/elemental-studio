"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project, type ProjectCategory } from "@/lib/data";
import Contact from "@/components/Contact";

const CATEGORIES: { value: "all" | ProjectCategory; label: string }[] = [
  { value: "all",         label: "All Projects" },
  { value: "living-room", label: "Living Room" },
  { value: "bedroom",     label: "Bedroom" },
  { value: "kitchen",     label: "Kitchen" },
  { value: "office",      label: "Office" },
];

export default function OurProjectPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | ProjectCategory>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <>
      {/* ─── Page hero banner ─────────────────────── */}
      <section className="relative flex items-end overflow-hidden bg-[#0d0d0d]"
               style={{ minHeight: "340px", paddingBottom: "4rem", paddingTop: "6rem" }}>
        <Image
          src="/images/hero.png"
          alt="Our Projects — Elemental Studio"
          fill
          priority
          className="object-cover object-center opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent" />
        <div className="relative section-container">
          <nav className="flex items-center gap-2 text-[0.6rem] tracking-[0.25em] uppercase text-[#6b5a3e] mb-4">
            <Link href="/" className="hover:text-[#c4a882] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#c4a882]">Our Projects</span>
          </nav>
          <p className="text-[#c4a882] text-[0.65rem] tracking-[0.45em] uppercase mb-3">
            Portfolio
          </p>
          <h1 className="font-serif text-[2.6rem] md:text-[3.4rem] lg:text-[4rem] text-[#f5f0e8] leading-tight">
            Our Projects
          </h1>
        </div>
      </section>

      {/* ─── Main content ─────────────────────────── */}
      <main className="bg-[#0d0d0d] min-h-screen py-16">
        <div className="section-container">

          {/* Count */}
          <p className="text-[#6b5a3e] text-sm mb-8">
            Showing{" "}
            <span className="text-[#c4a882] font-medium">{filtered.length}</span>{" "}
            project{filtered.length !== 1 ? "s" : ""}
          </p>

          {/* ─── Filters ──────────────────────────── */}
          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                id={`filter-${cat.value}`}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-6 py-2.5 text-[0.65rem] tracking-[0.22em] uppercase
                            transition-all duration-300
                            ${activeCategory === cat.value
                              ? "bg-[#c4a882] text-[#0d0d0d]"
                              : "border border-white/[0.1] text-[#8b7355] hover:border-[#c4a882]/40 hover:text-[#c4a882]"
                            }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* ─── Project grid ─────────────────────── */}
          {filtered.length === 0 ? (
            <div className="text-center py-28">
              <p className="text-[#6b5a3e] text-sm">No projects in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelected(project)}
                  className="group relative overflow-hidden text-left focus:outline-none
                             focus:ring-2 focus:ring-[#c4a882]/50"
                  style={{ aspectRatio: "4/3" }}
                  aria-label={`View details for ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20
                               to-transparent opacity-0 group-hover:opacity-100
                               transition-opacity duration-500"
                  />
                  {/* Info */}
                  <div
                    className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0
                               group-hover:translate-y-0 group-hover:opacity-100
                               transition-all duration-500"
                  >
                    <p className="text-[#c4a882] text-[0.55rem] tracking-[0.35em] uppercase mb-1.5">
                      {project.category.replace("-", " ")} &nbsp;·&nbsp; {project.year}
                    </p>
                    <h3 className="font-serif text-xl text-white leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-[#a89070] text-xs mt-1">{project.location}</p>
                  </div>
                  {/* Zoom icon */}
                  <div
                    className="absolute top-4 right-4 w-9 h-9 border border-white/30
                               flex items-center justify-center opacity-0 bg-black/30
                               group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          )}

        </div>
      </main>

      {/* ─── Project Modal ────────────────────────── */}
      {selected && (
        <div
          className="fixed inset-0 z-[9999] modal-backdrop flex items-center justify-center p-4 md:p-8"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div
            className="bg-[#111111] border border-white/[0.08] w-full max-w-4xl
                       max-h-[92vh] overflow-y-auto"
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal image */}
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
              {/* Close button overlay */}
              <button
                onClick={closeModal}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-10 h-10 bg-[#0d0d0d]/80 border border-white/20
                           flex items-center justify-center text-[#a89070] hover:text-[#c4a882]
                           hover:border-[#c4a882]/40 transition-all duration-300 backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal info */}
            <div className="p-7 md:p-10 lg:p-12">
              <div className="mb-6">
                <p className="text-[#c4a882] text-[0.6rem] tracking-[0.4em] uppercase mb-2">
                  {selected.category.replace("-", " ")}
                </p>
                <h2 className="font-serif text-[2rem] md:text-[2.4rem] text-[#f5f0e8] leading-tight">
                  {selected.title}
                </h2>
              </div>

              <p className="text-[#a89070] leading-relaxed mb-8 font-sans font-light text-[0.95rem]">
                {selected.description}
              </p>

              {/* Meta grid */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/[0.07]">
                <div>
                  <p className="text-[#6b5a3e] text-[0.6rem] tracking-[0.35em] uppercase mb-1.5">
                    Year
                  </p>
                  <p className="font-serif text-xl text-[#e8ddd0]">{selected.year}</p>
                </div>
                <div>
                  <p className="text-[#6b5a3e] text-[0.6rem] tracking-[0.35em] uppercase mb-1.5">
                    Area
                  </p>
                  <p className="font-serif text-xl text-[#e8ddd0]">{selected.area}</p>
                </div>
                <div>
                  <p className="text-[#6b5a3e] text-[0.6rem] tracking-[0.35em] uppercase mb-1.5">
                    Location
                  </p>
                  <p className="font-serif text-xl text-[#e8ddd0]">{selected.location}</p>
                </div>
              </div>

              {/* Enquire CTA */}
              <div className="mt-10">
                <Link
                  href="/#contact"
                  onClick={closeModal}
                  className="inline-flex items-center gap-3 border border-[#c4a882]/50 text-[#c4a882]
                             text-[0.65rem] tracking-[0.22em] uppercase px-7 py-3.5
                             hover:bg-[#c4a882] hover:text-[#0d0d0d] transition-all duration-300 group"
                >
                  Enquire About This Project
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
        </div>
      )}

      <Contact />
    </>
  );
}
