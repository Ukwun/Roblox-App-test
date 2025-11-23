import Image from "next/image";

export default function Welcome() {
  return (
    <section className="relative w-full h-[568px] max-w-[1664px] mx-auto mt-8">
      {/* Right images / decorative items */}
      <div className="absolute top-[187px] left-[1214px] w-[300px] h-[345px]">
        <Image
          src="/images/welcome-right.png" // Export from Figma
          alt="Welcome Right"
          fill
          className="object-cover"
        />
      </div>

      {/* Decorative rotated shapes */}
      <div className="absolute top-[414px] left-[1049px] w-[84px] h-[84px] rotate-[-57deg]">
        <Image
          src="/images/shape1.png"
          alt="Decorative Shape"
          fill
          className="object-cover"
        />
      </div>

      {/* Hero Text */}
      <div className="absolute top-[56px] left-0 w-full max-w-[1574px] px-6">
        <h1 className="text-[43px] font-extrabold leading-[1.21] text-white">
          Buy Your Favorite Items <span className="text-[#3DFF87]">Fast, Safe, and Easy</span> with RoCart!
        </h1>
        <p className="mt-6 text-gray-300 text-lg max-w-[700px]">
          RoCart is the fastest, safest shop for in‑game items with automated delivery.
          Get what you need in seconds. For items in Murder Mystery 2, Grow a Garden, Blox Fruits, Steal a Brainrot, Blade Ball.
        </p>

        {/* CTA Button */}
        <button className="mt-6 flex items-center gap-3 bg-gradient-to-r from-[#3DFF87] to-[#249951] text-black font-bold px-6 py-3 rounded-[19px] hover:opacity-90 transition">
          <Image
            src="/images/start-icon.png"
            alt="Start Icon"
            width={28}
            height={28}
          />
          Start Buying
        </button>
      </div>
    </section>
  );
}
