import Link from "next/link";

const navLinks = [
  { href: "/",           label: "Home" },
  { href: "/#about",     label: "About" },
  { href: "/#services",  label: "Services" },
  { href: "/our-project",label: "Our Project" },
  { href: "/#team",      label: "Team" },
];

const otherLinks = [
  { href: "/#blog",    label: "Blog" },
  { href: "/#contact", label: "Contact" },
  { href: "#",         label: "Privacy Policy" },
  { href: "#",         label: "Terms of Use" },
  { href: "#",         label: "FAQ" },
];

const socialIcons = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.734-8.847-8.172-10.653h7.008l4.265 5.637L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.05] pt-16 pb-8">
      <div className="section-container">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-14">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex flex-col leading-none mb-6">
              <span className="font-serif text-[1.1rem] tracking-[0.35em] text-[#e8ddd0]">
                ELEMENTAL
              </span>
              <span className="text-[0.55rem] tracking-[0.6em] text-[#c4a882] uppercase font-sans font-light">
                Studio
              </span>
            </Link>
            <p className="text-[#6b5a3e] text-sm leading-relaxed font-sans font-light max-w-[210px]">
              Transforming spaces into extraordinary experiences through thoughtful design.
            </p>
          </div>

          {/* Links col */}
          <div>
            <h4 className="text-[#c4a882] text-[0.6rem] tracking-[0.45em] uppercase mb-6">
              Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#6b5a3e] text-sm hover:text-[#c4a882] transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Others col */}
          <div>
            <h4 className="text-[#c4a882] text-[0.6rem] tracking-[0.45em] uppercase mb-6">
              Others
            </h4>
            <ul className="space-y-3">
              {otherLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[#6b5a3e] text-sm hover:text-[#c4a882] transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social col */}
          <div>
            <h4 className="text-[#c4a882] text-[0.6rem] tracking-[0.45em] uppercase mb-6">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-[#c4a882]/20 flex items-center justify-center
                             text-[#6b5a3e] hover:border-[#c4a882]/60 hover:text-[#c4a882]
                             transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="text-[#4a3a2a] text-xs leading-relaxed">
              Follow us for daily design inspiration and behind-the-scenes studio updates.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#4a3a2a] text-xs">
            © {new Date().getFullYear()} Elemental Studio. All rights reserved.
          </p>
          <p className="text-[#4a3a2a] text-xs">
            Designed with purpose. Built with precision.
          </p>
        </div>

      </div>
    </footer>
  );
}
