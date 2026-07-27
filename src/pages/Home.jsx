import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="bg-pink-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900">Reveal Your <span className="text-pink-600">Natural Beauty</span></h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">Discover luxurious skincare and makeup products crafted with premium ingredients.</p>
          <Link to="/services" className="inline-block mt-6 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700">Explore Now</Link>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-pink-100 mb-3 text-pink-600 text-2xl font-bold">P</div>
            <h3 className="font-semibold text-lg">Premium Quality</h3>
            <p className="text-gray-500 text-sm mt-1">Handpicked ingredients for the best results.</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-pink-100 mb-3 text-pink-600 text-2xl font-bold">C</div>
            <h3 className="font-semibold text-lg">Cruelty Free</h3>
            <p className="text-gray-500 text-sm mt-1">Never tested on animals.</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-pink-100 mb-3 text-pink-600 text-2xl font-bold">N</div>
            <h3 className="font-semibold text-lg">Natural Extracts</h3>
            <p className="text-gray-500 text-sm mt-1">Rich in natural nutrients.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
