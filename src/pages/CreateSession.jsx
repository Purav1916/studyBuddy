import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const inputStyle = {
  width: "100%",
  backgroundColor: "#161D2E",
  border: "0.5px solid rgba(255,255,255,0.12)",
  borderRadius: 10,
  padding: "12px 14px",
  color: "#F5F4F0",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "'Inter', sans-serif",
  transition: "border-color 0.15s"
};

const timeOptions = [];
for (let hour = 0; hour < 24; hour++) {
  for (let minute of [0, 30]) {
    const displayHour = hour % 12 || 12;
    const displayMinute = minute.toString().padStart(2, "0");
    const period = hour < 12 ? "AM" : "PM";

    timeOptions.push(`${displayHour}:${displayMinute} ${period}`);
  }
}

function CreateSession({ posts, setPosts }) {
  const [form, setForm] = useState({ name: "", subject: "", location: "", time: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    if (!form.name || !form.subject) return;
    await addDoc(collection(db, "posts"), {
      ...form,
      joinedCount: 0,
      joinedUsers: [],
      timestamp: serverTimestamp()
    });
    setForm({ name: "", subject: "", location: "", time: "", message: "" });
  }

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", paddingTop: 32, paddingBottom: 32 }}>
      <div style={{
        background: "#161D2E",
        border: "0.5px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: 32
      }}>
        <div style={{ marginBottom: 28 }}>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 28,
            fontWeight: 700,
            color: "#F5F4F0",
            margin: 0
          }}>
            Create a session
          </h2>
          <p style={{ color: "rgba(245,244,240,0.45)", fontSize: 14, marginTop: 6, marginBottom: 0 }}>
            Post your session and let classmates find you.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <input name="name" style={inputStyle} placeholder="Your name" value={form.name} onChange={handleChange}
            onFocus={e => e.target.style.borderColor = "#7C5CFC"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"} />
          <input name="subject" style={inputStyle} placeholder="Subject (e.g. CS 251)" value={form.subject} onChange={handleChange}
            onFocus={e => e.target.style.borderColor = "#7C5CFC"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <input name="location" style={inputStyle} placeholder="Location" value={form.location} onChange={handleChange}
            onFocus={e => e.target.style.borderColor = "#7C5CFC"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"} />
          <select
            name="time"
            value={form.time}
            onChange={handleChange}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = "#7C5CFC"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
          >
  <option value="">Select a time</option>

  {timeOptions.map((time) => (
    <option key={time} value={time}>
      {time}
    </option>
  ))}
</select>
        </div>

        <textarea name="message" rows={5} style={{ ...inputStyle, resize: "vertical", marginBottom: 20, lineHeight: 1.6 }}
          placeholder="Describe what you're studying, what help you need, or what topics you'll cover..."
          value={form.message} onChange={handleChange}
          onFocus={e => e.target.style.borderColor = "#7C5CFC"}
          onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"} />

        <button onClick={handleSubmit} style={{
          width: "100%",
          background: "#7C5CFC",
          color: "#fff",
          border: "none",
          borderRadius: 10,
          padding: "13px 0",
          fontSize: 15,
          fontWeight: 700,
          cursor: "pointer",
          fontFamily: "'Space Grotesk', sans-serif",
          transition: "opacity 0.15s"
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          Create session
        </button>
      </div>
    </div>
  );
}

export default CreateSession;