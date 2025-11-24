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
    <section className="w-full py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-3">
            Trusted by <span className="text-green-400">5,000+ Happy Buyers</span>
          </h2>
          <p className="text-gray-400 max-w-lg">
            Players all over the world trust RoCart for fast and secure item delivery.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviewers.map((reviewer, idx) => (
            <div
              key={idx}
              className="bg-[#0E1310] border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
            >
              {/* Avatars */}
              <div className="flex -space-x-3 mb-4">
                {reviewer.avatars.map((avatar, i) => (
                  <Image
                    key={i}
                    src={avatar}
                    width={32}
                    height={32}
                    className="rounded-full ring-2 ring-black"
                    alt={`avatar-${i}`}
                    unoptimized
                  />
                ))}
              </div>

              {/* Badge */}
              <div className="flex items-center mb-3">
                <div className="w-10 h-3 rounded-full bg-green-400 mr-2" />
                <span className="text-gray-400 text-xs font-semibold">
                  Verified Purchase
                </span>
              </div>

              {/* Name */}
              <h3 className="text-white font-semibold text-sm mb-1">
                {reviewer.name}
              </h3>

              {/* Review */}
              <p className="text-gray-400 text-xs mb-4">{reviewer.review}</p>

              {/* Rating */}
              <div className="flex items-center gap-1">
                <span className="text-green-400 font-semibold">{reviewer.rating}</span>
                <span className="text-gray-500 text-xs">/ 5.0</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
