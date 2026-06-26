function SearchBar({ search, setSearch }) {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-gray-100 p-5 rounded-3xl shadow-lg mb-8">
      <div className="flex items-center gap-3">
        
        {/* Search icon */}
        <span className="text-gray-400 text-lg">🔍</span>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search sessions by subject or name..."
          className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* subtle helper text */}
      <p className="text-xs text-gray-400 mt-3">
        Try: “Math”, “CS”, or a student name
      </p>
    </div>
  );
}

export default SearchBar;