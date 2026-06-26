function Profile() {
  return (
    <div style={{ maxWidth: 560, margin: "0 auto", paddingTop: 32, paddingBottom: 32 }}>
      <div style={{
        background: "#161D2E",
        border: "0.5px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: 32
      }}>
        {/* Avatar + name */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{
            width: 72, height: 72,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7C5CFC, #A48FFF)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 16px",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: 22, color: "#fff"
          }}>
            PP
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 22, fontWeight: 700,
            color: "#F5F4F0", margin: "0 0 6px"
          }}>
            Purav Patel
          </h2>
          <p style={{ fontSize: 13, color: "rgba(245,244,240,0.45)", margin: 0 }}>
            Computer Science · University of Illinois Chicago
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
          <div style={{
            background: "rgba(124,92,252,0.12)",
            border: "0.5px solid rgba(124,92,252,0.25)",
            borderRadius: 12, padding: "20px 16px", textAlign: "center"
          }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 30, fontWeight: 700, color: "#A48FFF" }}>12</div>
            <div style={{ fontSize: 12, color: "rgba(245,244,240,0.45)", marginTop: 4 }}>Sessions created</div>
          </div>
          <div style={{
            background: "rgba(168,224,69,0.1)",
            border: "0.5px solid rgba(168,224,69,0.2)",
            borderRadius: 12, padding: "20px 16px", textAlign: "center"
          }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 30, fontWeight: 700, color: "#A8E045" }}>8</div>
            <div style={{ fontSize: 12, color: "rgba(245,244,240,0.45)", marginTop: 4 }}>Sessions joined</div>
          </div>
        </div>

        {/* Footer nudge */}
        <div style={{
          background: "rgba(255,255,255,0.04)",
          borderRadius: 10, padding: "14px 16px", textAlign: "center"
        }}>
          <p style={{ fontSize: 12, color: "rgba(245,244,240,0.4)", margin: 0 }}>
            Keep joining sessions to grow your profile 🚀
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;