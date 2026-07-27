import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-pink-600">Aakar</Link>
        <div className="flex gap-6">
          <Link to="/" className="text-gray-700 hover:text-pink-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-pink-600">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-pink-600">Services</Link>
          <Link to="/blogs" className="text-gray-700 hover:text-pink-600">Products</Link>
          <Link to="/contact" className="text-gray-700 hover:text-pink-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
