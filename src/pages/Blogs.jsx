import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function load() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    }
    load();
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="text-center py-20 text-pink-600">Loading...</div>;

  return (
    <section className="bg-pink-50 py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Products</h1>

        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md border border-gray-300 rounded-full px-4 py-2"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <Link key={p.id} to={"/blogs/" + p.id} state={{ product: p }} className="block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg">
                <img src={p.thumbnail} alt={p.title} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <span className="bg-gray-100 text-xs font-semibold px-3 py-1 rounded-full">{p.category}</span>
                  {p.rating >= 4.5 && (
                    <span className="ml-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full">Featured</span>
                  )}
                  <h3 className="text-lg font-bold mt-2">{p.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-pink-600 font-bold text-xl">${p.price}</span>
                    <span className="text-sm text-yellow-500">★ {p.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
