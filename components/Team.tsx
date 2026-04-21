import Image from "next/image";
import { teamMembers } from "@/lib/data";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.734-8.847-8.172-10.653h7.008l4.265 5.637L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
];

const partners = ["Minotti", "Poliform", "Cassina", "Flos"];

export default function Team() {
  return (
    <section id="team" className="bg-[#111111] py-24 lg:py-36">
      <div className="section-container">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">

          {/* ─── Left: Info ──────────────────────── */}
          <div className="lg:pt-4">
            <p className="text-[#c4a882] text-[0.65rem] tracking-[0.45em] uppercase mb-5">
              Our Team
            </p>
            <h2
              className="font-serif text-[1.9rem] md:text-[2.4rem] lg:text-[2.8rem]
                         text-[#f5f0e8] leading-tight mb-6 max-w-sm"
            >
              Projects are handled by professional certified teams
            </h2>
            <p className="text-[#a89070] leading-relaxed mb-10 font-sans font-light text-[0.95rem] max-w-sm">
              Our multidisciplinary team brings together architects, interior designers,
              and project managers committed to delivering exceptional results on every project.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mb-10">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-[#c4a882]/25 flex items-center justify-center
                             text-[#a89070] hover:border-[#c4a882] hover:text-[#c4a882]
                             transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Partners row */}
            <div className="mb-10">
              <p className="text-[#6b5a3e] text-[0.6rem] tracking-[0.35em] uppercase mb-4">
                Trusted Partners
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                {partners.map((p) => (
                  <span
                    key={p}
                    className="font-serif text-[#4a3a2a] text-sm tracking-widest
                               hover:text-[#8b7355] transition-colors duration-300 cursor-default"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Star rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-[#b8963e]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[#8b7355] text-xs">4.9 / 5.0 Client Rating</span>
            </div>
          </div>

          {/* ─── Right: Team Grid ────────────────── */}
          <div className="grid grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="group relative overflow-hidden">
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105
                               transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent
                               to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4
                               translate-y-full group-hover:translate-y-0 transition-transform duration-400"
                  >
                    <p className="font-serif text-lg text-[#f5f0e8] leading-tight">
                      {member.name}
                    </p>
                    <p className="text-[#c4a882] text-[0.6rem] tracking-[0.3em] uppercase mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
