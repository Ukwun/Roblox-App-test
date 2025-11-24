import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-28 lg:pt-36">
      <div className="container flex flex-col lg:flex-row items-center lg:items-start gap-12 relative">
        
        {/* Left column */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl mb-6">
            <span className="block">Buy Your Favorite Items</span>
            <span className="block hero-accent text-3xl sm:text-4xl lg:text-5xl">Fast, Safe, and Easy</span>
            <span className="block text-white text-2xl lg:text-3xl">with RoCart!</span>
          </h1>

          <p className="text-muted max-w-xl mx-auto lg:mx-0 mb-10 text-base sm:text-lg">
            RoCart the fastest, safest shop for in-game items with automated delivery. Get what you need in seconds.
          </p>

          <div className="flex justify-center lg:justify-start items-center gap-4">
            <button className="flex items-center gap-3 btn-gradient btn-large btn-glow text-black shadow-2xl hover:scale-[1.02] transition-transform duration-150">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="inline-block">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="#04120b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="10" cy="20" r="1.2" fill="#04120b" />
                <circle cx="18" cy="20" r="1.2" fill="#04120b" />
              </svg>
              <span>Start Buying</span>
            </button>
          </div>
        </div>

        {/* Right Illustration */}
          <div className="hidden lg:flex flex-1 justify-end relative">
          <div
            className="w-[440px] h-[440px] rounded-3xl card-surface neon-border shadow-xl flex items-center justify-center relative overflow-hidden"
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
              className="object-contain opacity-40"
              style={{
                transform: 'translateY(4px)'
              }}
              unoptimized
              priority
            />

            {/* Floating mini-cards around avatar */}
            <div className="absolute -top-6 -right-8 w-28 h-36 rounded-2xl card-surface neon-border flex items-center justify-center p-2 transform rotate-6">
              <img src="/images/item1.png" alt="item" className="w-full h-full object-contain rounded-lg" />
            </div>

            <div className="absolute top-12 -right-20 w-24 h-32 rounded-2xl card-surface neon-border flex items-center justify-center p-2 transform -rotate-6">
              <img src="/images/item2.png" alt="item" className="w-full h-full object-contain rounded-lg" />
            </div>

            <div className="absolute -left-10 top-10 w-24 h-24 rounded-2xl card-surface neon-border flex items-center justify-center p-2 transform rotate-3">
              <img src="/images/item3.png" alt="item" className="w-full h-full object-contain rounded-lg" />
            </div>

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
