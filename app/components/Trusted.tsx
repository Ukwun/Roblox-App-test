"use client";

import Image from "next/image";

const reviewers = [
  {
    name: "Melony J.",
    review: "Best process! Super smooth, got my items fast for cheap!",
    avatars: [
      "https://placehold.co/32x32",
      "https://placehold.co/32x32",
      "https://placehold.co/32x32",
      "https://placehold.co/32x32",
      "https://placehold.co/32x32",
    ],
    rating: 4.5,
  },
  {
    name: "Carter D.",
    review: "Fast delivery and trusted platform. Highly recommend!",
    avatars: [
      "https://placehold.co/32x32",
      "https://placehold.co/32x32",
      "https://placehold.co/32x32",
      "https://placehold.co/32x32",
      "https://placehold.co/32x32",
    ],
    rating: 4.8,
  },
  {
    name: "Riley K.",
    review: "Amazing experience! I’ll be buying again for sure.",
    avatars: [
      "https://placehold.co/32x32",
      "https://placehold.co/32x32",
      "https://placehold.co/32x32",
      "https://placehold.co/32x32",
      "https://placehold.co/32x32",
    ],
    rating: 5.0,
  },
];

export default function Trusted() {
  return (
    <section className="section bg-bg relative mt-16">
      <div className="container-max px-6">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-2">
            Trusted by <span className="text-primary">5,000+ Happy Buyers</span>
          </h2>
          <p className="text-muted max-w-2xl">
            Players all over the world trust RoCart for fast and secure item delivery.
          </p>
        </div>

        {/* Divider */}
        <div className="section-divider mb-12" />

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {reviewers.map((reviewer, idx) => (
            <div
              key={idx}
              className="card-surface neon-border rounded-2xl p-8 shadow-card card-hover min-h-[220px] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-4 hover:shadow-xl"
            >
              {/* Avatar Stack */}
              <div className="flex -space-x-3 mb-4">
                {reviewer.avatars.map((avatar, i) => (
                  <Image
                    key={i}
                    src={avatar}
                    width={36}
                    height={36}
                    className="rounded-full ring-2 ring-[rgba(0,0,0,0.6)]"
                    alt={`avatar-${i}`}
                    unoptimized
                  />
                ))}
              </div>

              {/* Badge */}
              <div className="flex items-center mb-3">
                <div className="w-10 h-3 rounded-full bg-primary mr-2" />
                <span className="text-muted text-xs font-semibold">Verified Purchase</span>
              </div>

              {/* Name */}
              <h3 className="text-white font-semibold text-sm mb-1">{reviewer.name}</h3>

              {/* Review */}
              <p className="text-muted text-sm mb-6">{reviewer.review}</p>

              {/* Rating (stars) */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => {
                    const fill = reviewer.rating >= s + 1 ? 'var(--color-neon)' : 'rgba(255,255,255,0.08)';
                    return (
                      <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="none" className="inline-block">
                        <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.595 0 9.748l8.332-1.73L12 .587z" fill={fill} />
                      </svg>
                    );
                  })}
                </div>
                <div className="flex items-center">
                  <span className="text-primary font-semibold">{reviewer.rating}</span>
                  <span className="text-muted text-xs ml-2">/ 5.0</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
