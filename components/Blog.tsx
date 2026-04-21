import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" className="bg-[#111111] py-24 lg:py-36">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c4a882] text-[0.65rem] tracking-[0.45em] uppercase mb-4">
            Insights &amp; Ideas
          </p>
          <h2 className="font-serif text-[2rem] md:text-[2.6rem] lg:text-[3rem] text-[#f5f0e8]">
            The Latest Article
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group flex flex-col">
              {/* Image */}
              <div className="relative overflow-hidden mb-5 flex-shrink-0" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="bg-[#0d0d0d]/80 text-[#c4a882] text-[0.55rem] tracking-[0.35em]
                               uppercase px-3 py-1.5 backdrop-blur-sm"
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Meta */}
              <p className="text-[#6b5a3e] text-[0.65rem] tracking-widest mb-3">
                {post.date} &nbsp;·&nbsp; {post.readTime}
              </p>

              {/* Title */}
              <h3
                className="font-serif text-xl text-[#f5f0e8] leading-snug mb-3 flex-1
                           group-hover:text-[#c4a882] transition-colors duration-300"
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-[#8b7355] text-sm leading-relaxed mb-5 font-sans font-light line-clamp-2">
                {post.excerpt}
              </p>

              {/* Link */}
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[#c4a882] text-[0.65rem]
                           tracking-[0.22em] uppercase border-b border-[#c4a882]/40 pb-0.5
                           self-start hover:border-[#c4a882] transition-colors duration-300 group/link"
              >
                Learn More
                <svg
                  className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
