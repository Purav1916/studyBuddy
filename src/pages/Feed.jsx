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
    <div style={{ paddingTop: 32, paddingBottom: 32 }}>
      {/* Hero */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 42,
          fontWeight: 700,
          lineHeight: 1.1,
          color: "#F5F4F0",
          margin: "0 0 10px"
        }}>
          Study <span style={{ color: "#7C5CFC" }}>together.</span><br />
          Stress less.
        </h1>
        <p style={{ color: "rgba(245,244,240,0.5)", fontSize: 15, margin: "0 0 20px" }}>
          Find study partners at UIC — real-time, no sign-up hassle.
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[
            `📚 ${posts.length} active sessions`,
            "🎓 UIC students",
            "⚡ Live updates"
          ].map(label => (
            <span key={label} style={{
              background: "rgba(255,255,255,0.06)",
              border: "0.5px solid rgba(255,255,255,0.1)",
              borderRadius: 20,
              padding: "5px 12px",
              fontSize: 12,
              color: "rgba(245,244,240,0.6)"
            }}>
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Search */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Section label */}
      <div style={{
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "rgba(245,244,240,0.35)",
        marginBottom: 14
      }}>
        Available sessions
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
          <SessionCard key={post.id || post.name} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div style={{
          background: "#161D2E",
          border: "0.5px solid rgba(255,255,255,0.08)",
          borderRadius: 14,
          padding: "48px 24px",
          textAlign: "center",
          marginTop: 16
        }}>
          <div style={{ fontSize: 13, color: "rgba(245,244,240,0.4)" }}>
            No sessions match your search — try a different subject or name.
          </div>
        </div>
      )}
    </div>
  );
}

export default Feed;