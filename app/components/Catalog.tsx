export default function Catalog() {
  return (
    <section id="catalog" className="mx-auto max-w-7xl px-6 py-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold">Explore Our Catalog</h3>
        <p className="mt-2 text-gray-600">
          Quality products tailored just for you.
        </p>
      </div>

      {/* Product Grid */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="h-40 bg-gray-200 rounded-md"></div>
          <h4 className="mt-4 font-semibold text-lg">Product Name</h4>
          <p className="text-gray-600 mt-1">$99.00</p>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
            View Item
          </button>
        </div>

        {/* Card 2 */}
        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="h-40 bg-gray-200 rounded-md"></div>
          <h4 className="mt-4 font-semibold text-lg">Product Name</h4>
          <p className="text-gray-600 mt-1">$79.00</p>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
            View Item
          </button>
        </div>

        {/* Card 3 */}
        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="h-40 bg-gray-200 rounded-md"></div>
          <h4 className="mt-4 font-semibold text-lg">Product Name</h4>
          <p className="text-gray-600 mt-1">$120.00</p>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
            View Item
          </button>
        </div>
      </div>
    </section>
  );
}
