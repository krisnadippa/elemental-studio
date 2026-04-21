import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="bg-[#0d0d0d] border-y border-white/[0.05]">
      <div className="section-container">
        <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center py-12 px-4 group"
            >
              <p
                className="font-serif text-[2.4rem] md:text-[3.2rem] lg:text-[3.8rem]
                           text-[#f5f0e8] leading-none mb-2
                           group-hover:text-[#c4a882] transition-colors duration-500"
              >
                {stat.value}
              </p>
              <p className="text-[#c4a882] text-[0.6rem] tracking-[0.35em] uppercase mb-1.5">
                {stat.label}
              </p>
              <p className="text-[#6b5a3e] text-xs">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
