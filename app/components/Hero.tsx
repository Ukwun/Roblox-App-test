import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-28 lg:pt-28">
      <div className="mx-auto max-w-[1440px] flex flex-col lg:flex-row items-center lg:items-start gap-12 relative">
        
        {/* Left column */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 font-heading text-white">
            Buy Your Favorite Items
            <span className="block text-primary">Fast, Safe, and Easy</span>
            <span className="block text-white">with RoCart!</span>
          </h1>

          <p className="text-muted max-w-xl mx-auto lg:mx-0 mb-10 text-base sm:text-lg">
            RoCart is the fastest, safest shop for in-game items with automated delivery. Get what you need in seconds.
          </p>

          <div className="flex justify-center lg:justify-start items-center gap-4">
            <button className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-black shadow-lg hover:opacity-95 transition">
              Start Buying
            </button>
            <button className="rounded-full border border-[#0F1B14] px-6 py-3 text-sm text-muted hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="hidden lg:flex flex-1 justify-end relative">
          <div
            className="w-[440px] h-[440px] rounded-3xl card-surface neon-border shadow-xl flex items-center justify-center relative"
            style={{
              background:
                "linear-gradient(135deg, rgba(11,38,22,0.75), transparent 55%)",
            }}
          >
            <Image
              src="/images/073bb3b399c740a024f6d5bff073254ed283398d_2_690x388_efb76d42-17d1-412e-b623-809c640b8941 1.png"
              alt="illustration"
              width={440}
              height={440}
              className="object-contain"
              unoptimized
              priority
            />
          </div>
        </div>
      </div>

      {/* Neon divider line */}
      <div
        className="absolute left-6 right-6 bottom-8 h-1 rounded-full opacity-90"
        style={{
          background:
            "linear-gradient(90deg, rgba(61,255,135,0.9), rgba(36,153,81,0.6))",
        }}
      />
    </section>
  );
}
