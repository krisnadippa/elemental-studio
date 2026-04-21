import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0d0d0d] flex flex-col items-center justify-center">
      {/* Centered Brand Element */}
      <div className="relative flex flex-col items-center animate-fade-in">
        {/* Subtle Shimmer Logo */}
        <div className="relative w-16 h-16 mb-8 opacity-40">
          <Image
            src="/images/logo.png"
            alt="Loading..."
            fill
            className="object-contain grayscale"
          />
        </div>

        {/* Shimmering Text */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-lg tracking-[0.4em] text-[#c4a882]/40 uppercase">
            Elemental
          </h2>
        </div>

        {/* Minimal Progress Line */}
        <div className="w-32 h-px bg-white/[0.05] relative overflow-hidden">
          <div className="absolute inset-0 bg-[#c4a882]/20 animate-loading-bar" />
        </div>
      </div>

    </div>
  );
}
