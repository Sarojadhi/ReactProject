import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="bg-pink-50 min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gray-900">404</h1>
        <p className="text-xl mt-4 text-gray-600">Page not found</p>
        <Link to="/" className="inline-block mt-6 bg-pink-600 text-white px-6 py-2 rounded-full">Go Home</Link>
      </div>
    </section>
  );
}
