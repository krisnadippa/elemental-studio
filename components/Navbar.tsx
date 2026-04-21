"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#about",     label: "About" },
  { href: "/#services",  label: "Services" },
  { href: "/our-project",label: "Our Project" },
  { href: "/#team",      label: "Team" },
  { href: "/#blog",      label: "Blog" },
  { href: "/#contact",   label: "Contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "navbar-glass" : "bg-transparent"
      }`}
    >
      {/* ─── Desktop nav ──────────────────────────── */}
      <nav className="section-container flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <Image
              src="/images/logo.png"
              alt="Elemental Studio Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="font-serif text-[1rem] tracking-[0.25em] text-[#e8ddd0]
                         group-hover:text-[#c4a882] transition-colors duration-300"
            >
              ELEMENTAL
            </span>
            <span className="text-[0.5rem] tracking-[0.4em] text-[#c4a882] uppercase font-sans font-light">
              Studio
            </span>
          </div>
        </Link>

        {/* Menu links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[0.65rem] tracking-[0.22em] uppercase text-[#a89070]
                           hover:text-[#e8ddd0] transition-colors duration-300"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <Link
          href="/#contact"
          className="hidden lg:inline-flex items-center gap-2 border border-[#c4a882]/40 text-[#c4a882]
                     text-[0.65rem] tracking-[0.22em] uppercase px-6 py-2.5
                     hover:bg-[#c4a882] hover:text-[#0d0d0d] hover:border-[#c4a882]
                     transition-all duration-300"
        >
          Get Quote
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#e8ddd0] p-2 ml-4"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* ─── Mobile menu ─────────────────────────── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } navbar-glass border-t border-white/5`}
      >
        <ul className="section-container py-8 flex flex-col gap-5">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block text-sm tracking-[0.2em] uppercase text-[#a89070]
                           hover:text-[#e8ddd0] transition-colors duration-300 py-1"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 border-t border-white/10">
            <Link
              href="/#contact"
              className="inline-block border border-[#c4a882]/40 text-[#c4a882]
                         text-xs tracking-[0.2em] uppercase px-6 py-2.5
                         hover:bg-[#c4a882] hover:text-[#0d0d0d] transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Get Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
