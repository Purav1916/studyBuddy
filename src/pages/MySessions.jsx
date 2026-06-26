import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import SessionCard from "../components/SessionCard";

function MySessions({ posts }) {
  const myPosts = posts.filter((post) => post.name === "Purav Patel");

  async function handleDelete(id) {
    await deleteDoc(doc(db, "posts", id));
  }

  return (
    <div style={{ maxWidth: "100%", paddingTop: 32, paddingBottom: 32 }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 28,
          fontWeight: 700,
          color: "#F5F4F0",
          margin: 0
        }}>
          My sessions
        </h1>
        <p style={{ color: "rgba(245,244,240,0.45)", fontSize: 14, marginTop: 6, marginBottom: 0 }}>
          Manage the study sessions you created.
        </p>
      </div>

      {myPosts.length === 0 ? (
        <div style={{
          background: "#161D2E",
          border: "0.5px solid rgba(255,255,255,0.08)",
          borderRadius: 14,
          padding: "48px 24px",
          textAlign: "center"
        }}>
          <div style={{ fontSize: 13, color: "rgba(245,244,240,0.4)" }}>
            You haven't created any sessions yet. Head to Create to post your first one.
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {myPosts.map((post) => (
            <div key={post.id}>
              <SessionCard post={post} />
              <button
                onClick={() => handleDelete(post.id)}
                style={{
                  marginTop: 8,
                  width: "100%",
                  background: "rgba(255,80,80,0.1)",
                  color: "#FF6B6B",
                  border: "0.5px solid rgba(255,80,80,0.2)",
                  borderRadius: 8,
                  padding: "8px 0",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background 0.15s"
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,80,80,0.18)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,80,80,0.1)"}
              >
                Delete session
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MySessions;