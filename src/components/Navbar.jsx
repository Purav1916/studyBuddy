import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-indigo-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold">
            S
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              StudyBuddy
            </h1>

            <p className="text-xs text-gray-500">
              Find study partners
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 transition"
          >
            Feed
          </Link>

          <Link
            to="/create"
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Create
          </Link>

          <Link
            to="/sessions"
            className="px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 transition"
          >
            My Sessions
          </Link>

          <Link
            to="/profile"
            className="px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 transition"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;