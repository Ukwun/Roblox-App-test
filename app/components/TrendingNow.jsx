import Image from 'next/image';

const items = [
  { title: 'Grow A Garden', price: '$15', img: '/images/item1.png' },
  { title: 'MM2', price: '$18', img: '/images/item2.png' },
  { title: 'Steal A Brainrot', price: '$12', img: '/images/item3.png' },
  { title: 'Adopt Me', price: '$9', img: '/images/item4.png' },
];

// per-card gradient class mapping to match screenshot
const cardButtonClasses = ['btn-green', 'btn-red', 'btn-purple', 'btn-blue'];

export default function TrendingNow() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1440px] px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Trending Now
          </h3>
          <p className="text-muted text-center max-w-md">
            Popular items users are buying right now.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-gradient-to-r from-primary/60 to-primary/20 rounded-full mb-16" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#07120C] border border-primary/20 p-6 pb-8 relative overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(61,255,135,0.25)]"
            >
              {/* Image Box */}
              <div className="relative h-44 rounded-xl overflow-hidden mb-6 flex items-center justify-center bg-[#0A1B12]">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-28 h-28 bg-[#07120C] rounded-xl flex items-center justify-center p-2 neon-border">
                    <Image src={it.img} alt={`${it.title}-a`} width={96} height={96} className="object-contain rounded-md" unoptimized />
                  </div>

                  <div className="w-28 h-28 bg-[#07120C] rounded-xl flex items-center justify-center p-2 neon-border">
                    <Image src={it.img} alt={`${it.title}-b`} width={96} height={96} className="object-contain rounded-md" unoptimized />
                  </div>
                </div>
              </div>

              {/* Title + Price + small rounded placeholder */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg gradient-outline flex items-center justify-center">
                    <div className="thumbnail-gradient">
                      <img src="/images/logo.svg" alt="badge" className="w-6 h-6 object-contain" />
                    </div>
                  </div>
                  <span className="font-semibold text-white text-lg">{it.title}</span>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary text-black">{it.price}</span>
              </div>

              {/* Tags */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded-full text-[10px] bg-white/5 text-muted">
                    Popular
                  </span>
                  <span className="px-2 py-1 rounded-full text-[10px] bg-white/5 text-muted">
                    Hot
                  </span>
                </div>
              </div>

              {/* CTA - gradient button centered under card */}
              <div className="mt-6 flex justify-center">
                  <button className="btn-gradient btn-large btn-glow text-black shadow-lg tracking-tight transition-transform duration-200 hover:scale-105">
                    Visit Market
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
