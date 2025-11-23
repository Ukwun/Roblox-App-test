"use client";
import Image from "next/image";
import React from "react";

const reviewers = [
  {
    name: "Melony J.",
    review: "Best process! Super smooth, got my items fast for cheap!",
    avatars: [
      "https://placehold.co/24x24",
      "https://placehold.co/24x24",
      "https://placehold.co/24x24",
      "https://placehold.co/24x24",
      "https://placehold.co/24x24",
    ],
    rating: 4.5,
  },
  {
    name: "Melony J.",
    review: "Best process! Super smooth, got my items fast for cheap!",
    avatars: [
      "https://placehold.co/24x24",
      "https://placehold.co/24x24",
      "https://placehold.co/24x24",
      "https://placehold.co/24x24",
      "https://placehold.co/24x24",
    ],
    rating: 4.5,
  },
  {
    name: "Melony J.",
    review: "Best process! Super smooth, got my items fast for cheap!",
    avatars: [
      "https://placehold.co/24x24",
      "https://placehold.co/24x24",
      "https://placehold.co/24x24",
      "https://placehold.co/24x24",
      "https://placehold.co/24x24",
    ],
    rating: 4.5,
  },
];

export default function Trusted(): JSX.Element {
  return (
    <section className="section bg-bg relative">
      <div className="container-max px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-2">
            Trusted with by <span className="text-primary">5,000+ Happy Buyers</span>
          </h2>
          <p className="text-muted text-center max-w-2xl mb-8">
            Join thousands of happy buyers who trust Rocart for their in-game items! From casual players to serious collectors, our customers keep coming back for quality and reliability. See some of our amazing supporters below:
          </p>
        </div>
        <div className="section-divider" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviewers.map((reviewer, idx) => (
            <div key={idx} className="card-surface neon-border rounded-2xl p-8 relative shadow-card card-hover flex flex-col justify-between min-h-[220px]">
              {/* Overlapping Avatars */}
              <div className="avatar-stack mb-4">
                {reviewer.avatars.map((avatar, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full overflow-hidden ring-2 ring-[rgba(6,16,10,0.9)] bg-[#06100A]`}>
                    <Image src={avatar} width={28} height={28} alt={`avatar-${i}`} unoptimized />
                  </div>
                ))}
              </div>

              {/* Verified Buy Badge */}
              <div className="flex items-center mb-2">
                <div className="w-10 h-9 rounded mr-2" style={{ background: 'linear-gradient(90deg,#3DFF87,#249951)' }} />
                <span className="text-gray-300 text-xs font-semibold">Verified Buy</span>
              </div>

              <h3 className="text-gray-200 font-semibold text-sm mb-1">{reviewer.name}</h3>

              {/* Review Text */}
              <p className="text-muted text-xs font-medium mb-2">{reviewer.review}</p>

              {/* Rating */}
              <div className="mt-2 flex items-center gap-1">
                <span className="text-primary font-semibold">{reviewer.rating}</span>
                <span className="text-muted text-xs">out of 5.0</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
