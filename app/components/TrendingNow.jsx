import Image from 'next/image';

const items = [
  { title: 'Grow A Garden', price: '$15', img: '/images/item1.png' },
  { title: 'MM2', price: '$18', img: '/images/item2.png' },
  { title: 'Steal A Brainrot', price: '$12', img: '/images/item3.png' },
  { title: 'Adopt Me', price: '$9', img: '/images/item4.png' },
];

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
        <div className="w-full h-[2px] bg-gradient-to-r from-primary/60 to-primary/20 rounded-full mb-12" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#07120C] border border-primary/20 p-6 relative overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(61,255,135,0.25)]"
            >
              {/* Image Box */}
              <div className="relative h-40 rounded-xl overflow-hidden mb-6 flex items-center justify-center bg-[#0A1B12]">
                <Image
                  src={it.img}
                  alt={it.title}
                  width={140}
                  height={140}
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* Title + Price */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-white text-lg">
                  {it.title}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary text-black">
                  {it.price}
                </span>
              </div>

              {/* Tags + Button */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded-full text-[10px] bg-white/5 text-muted">
                    Popular
                  </span>
                  <span className="px-2 py-1 rounded-full text-[10px] bg-white/5 text-muted">
                    Hot
                  </span>
                </div>
                <button className="text-xs rounded-full bg-primary px-4 py-2 font-semibold text-black transition-transform duration-200 hover:scale-105">
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
