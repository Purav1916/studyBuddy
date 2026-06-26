import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const SUBJECT_COLORS = [
  { bg: "rgba(124,92,252,0.2)", color: "#A48FFF" },
  { bg: "rgba(168,224,69,0.15)", color: "#A8E045" },
  { bg: "rgba(255,107,74,0.15)", color: "#FF8A6A" },
  { bg: "rgba(255,185,56,0.15)", color: "#FFB938" },
  { bg: "rgba(56,189,248,0.15)", color: "#38BDF8" },
  { bg: "rgba(244,114,182,0.15)", color: "#F472B6" },
];

function getSubjectColor(subject) {
  let hash = 0;
  for (let i = 0; i < subject.length; i++) hash = subject.charCodeAt(i) + ((hash << 5) - hash);
  return SUBJECT_COLORS[Math.abs(hash) % SUBJECT_COLORS.length];
}

function SessionCard({ post }) {
  const [joined, setJoined] = useState(post.joinedUsers?.includes("Purav Patel") || false);
  const [joinCount, setJoinCount] = useState(post.joinedCount || 0);

  const subjectColor = getSubjectColor(post.subject || "");

  async function handleJoin() {
    if (joined) return;
    setJoined(true);
    const newCount = joinCount + 1;
    setJoinCount(newCount);
    const updatedUsers = [...(post.joinedUsers || []), "Purav Patel"];
    await updateDoc(doc(db, "posts", post.id), {
      joinedCount: newCount,
      joinedUsers: updatedUsers
    });
  }

  async function handleLeave() {
    if (!joined) return;
    setJoined(false);
    const newCount = joinCount - 1;
    setJoinCount(newCount);
    const updatedUsers = (post.joinedUsers || []).filter(u => u !== "Purav Patel");
    await updateDoc(doc(db, "posts", post.id), {
      joinedCount: newCount,
      joinedUsers: updatedUsers
    });
  }

  return (
    <div style={{
      background: "#161D2E",
      border: "0.5px solid rgba(255,255,255,0.08)",
      borderRadius: 14,
      padding: 18,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      transition: "border-color 0.2s",
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: "#F5F4F0" }}>
            {post.name}
          </div>
          <div style={{ fontSize: 11, color: "rgba(245,244,240,0.4)", marginTop: 2 }}>
            Looking for study partners
          </div>
        </div>
        <span style={{
          padding: "4px 10px",
          borderRadius: 20,
          fontSize: 11,
          fontWeight: 600,
          background: subjectColor.bg,
          color: subjectColor.color,
          whiteSpace: "nowrap"
        }}>
          {post.subject}
        </span>
      </div>

      {/* Meta */}
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {post.location && (
          <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "rgba(245,244,240,0.5)" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            {post.location}
          </div>
        )}
        {post.time && (
          <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "rgba(245,244,240,0.5)" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            {post.time}
          </div>
        )}
      </div>

      {/* Message */}
      {post.message && (
        <div style={{
          background: "rgba(255,255,255,0.04)",
          borderRadius: 8,
          padding: "10px 12px",
          fontSize: 12,
          color: "rgba(245,244,240,0.55)",
          lineHeight: 1.5
        }}>
          {post.message}
        </div>
      )}

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
        <div>
          <div style={{ fontSize: 12, color: "rgba(245,244,240,0.4)" }}>
            {joinCount} {joinCount === 1 ? "student" : "students"} joined
          </div>
          {joined && (
            <div style={{
              marginTop: 4,
              display: "inline-block",
              background: "rgba(168,224,69,0.12)",
              color: "#A8E045",
              fontSize: 10,
              fontWeight: 600,
              padding: "3px 8px",
              borderRadius: 20
            }}>
              ✓ You've joined
            </div>
          )}
        </div>
        {!joined ? (
          <button onClick={handleJoin} style={{
            background: "#A8E045",
            color: "#0F1523",
            border: "none",
            borderRadius: 8,
            padding: "7px 16px",
            fontSize: 12,
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "'Space Grotesk', sans-serif"
          }}>
            Join
          </button>
        ) : (
          <button onClick={handleLeave} style={{
            background: "rgba(255,255,255,0.07)",
            color: "rgba(245,244,240,0.6)",
            border: "0.5px solid rgba(255,255,255,0.12)",
            borderRadius: 8,
            padding: "7px 16px",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer"
          }}>
            Leave
          </button>
        )}
      </div>
    </div>
  );
}

export default SessionCard;