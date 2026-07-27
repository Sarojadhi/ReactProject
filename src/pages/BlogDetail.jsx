import { Link, useLocation } from "react-router-dom";

export default function BlogDetail() {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return (
      <section className="bg-pink-50 py-20 px-6 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Product not found. Please go back and select a product.</p>
          <Link to="/blogs" className="inline-block mt-4 bg-pink-600 text-white px-6 py-2 rounded-full">Browse Products</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-pink-50 py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Link to="/blogs" className="text-pink-600 hover:underline">&larr; Back to Products</Link>

        <div className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl p-8 mt-4 shadow">
          <div>
            <img src={product.thumbnail} alt={product.title} className="rounded-2xl w-full h-80 object-cover" />
            {product.images && product.images.length > 1 && (
              <div className="flex gap-2 mt-4">
                {product.images.map((img, i) => (
                  <img key={i} src={img} alt="" className="w-16 h-16 rounded-xl object-cover border-2 border-gray-200" />
                ))}
              </div>
            )}
          </div>

          <div>
            <span className="bg-pink-100 text-pink-600 text-sm px-3 py-1 rounded-full">{product.category}</span>
            {product.brand && <span className="text-gray-400 text-sm ml-2">by {product.brand}</span>}
            <h1 className="text-3xl font-bold mt-3">{product.title}</h1>

            <div className="flex items-center gap-3 mt-2">
              <span className="text-yellow-500 font-semibold">★ {product.rating}</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-500 text-sm">{product.stock > 0 ? product.stock + " in stock" : "Out of stock"}</span>
            </div>

            <div className="flex items-baseline gap-3 mt-4">
              <span className="text-4xl font-bold text-pink-600">${product.price}</span>
              {product.discountPercentage > 0 && (
                <span className="text-green-600 text-sm font-semibold">{Math.round(product.discountPercentage)}% OFF</span>
              )}
            </div>

            <p className="text-gray-600 mt-4 leading-7">{product.description}</p>

            {product.tags && (
              <div className="flex gap-2 mt-4 flex-wrap">
                {product.tags.map((t) => (
                  <span key={t} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">#{t}</span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-4 text-xs">
              {product.warrantyInformation && <span className="bg-gray-100 px-2 py-1 rounded">{product.warrantyInformation}</span>}
              {product.shippingInformation && <span className="bg-gray-100 px-2 py-1 rounded">{product.shippingInformation}</span>}
              {product.returnPolicy && <span className="bg-gray-100 px-2 py-1 rounded">{product.returnPolicy}</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
