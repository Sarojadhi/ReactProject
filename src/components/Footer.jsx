import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <Link to="/" className="text-2xl font-bold text-pink-400">Aakar</Link>
        <p className="text-gray-400 text-sm mt-3">&copy; {new Date().getFullYear()} Aakar. All rights reserved.</p>
      </div>
    </footer>
  );
}
