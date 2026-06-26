import { useState } from "react";
import SessionCard from "../components/SessionCard";
import SearchBar from "../components/SearchBar";

function Feed({ posts }) {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.subject.toLowerCase().includes(search.toLowerCase()) ||
      post.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-8">
      {/* Hero */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-3">
          Study Together.
        </h1>

        <p className="text-lg text-gray-600">
          Find study partners, join sessions, and stay motivated.
        </p>

        <div className="mt-6 flex gap-6 text-sm text-gray-500">
          <span>📚 {posts.length} Active Sessions</span>
          <span>🎓 UIC Students</span>
          <span>⚡ Real-Time Updates</span>
        </div>
      </div>

      {/* Search */}
      <div className="mb-8">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {/* Results */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Available Sessions
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <SessionCard key={post.id || post.name} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="bg-white rounded-2xl shadow p-10 text-center mt-6">
          <p className="text-gray-500">
            No study sessions match your search.
          </p>
        </div>
      )}
    </div>
  );
}

export default Feed;