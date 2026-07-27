const services = [
  { title: "Premium Makeup", desc: "High-quality makeup products for long-lasting results." },
  { title: "Skincare Essentials", desc: "Cleansers, serums, moisturizers for healthy skin." },
  { title: "Natural Ingredients", desc: "Products enriched with natural extracts." },
  { title: "Cruelty-Free", desc: "Never tested on animals and skin-friendly." },
];

export default function Services() {
  return (
    <section className="bg-pink-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h1>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 text-center shadow">
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="text-gray-600 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
