import Header from "./components/Header";
import Hero from "./components/Hero";
import TrendingNow from "./components/TrendingNow";
import Trusted from "./components/Trusted";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center">
        <section className="w-full max-w-6xl px-6 py-12">
          <Hero />
        </section>

        <section className="w-full max-w-6xl px-6 py-16">
          <TrendingNow />
        </section>

        <section className="w-full max-w-6xl px-6 py-16 bg-gray-50 rounded-xl">
          <Trusted />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
