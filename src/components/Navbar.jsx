import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#0F1523",
      borderBottom: "0.5px solid rgba(255,255,255,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 50,
      backdropFilter: "blur(12px)"
    }}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "#7C5CFC",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L3 5.5V12.5L9 16L15 12.5V5.5L9 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
              <circle cx="9" cy="9" r="2" fill="white"/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 30 }}>
  <span style={{ color: "#F5F4F0" }}>Study</span>
  <span style={{ color: "#7C5CFC" }}>Buddy</span>
</div>
            <div style={{ fontSize: 11, color: "rgba(245,244,240,0.4)" }}>
              Find study partners
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-1">
          {[
            { to: "/", label: "Feed" },
            { to: "/sessions", label: "My Sessions" },
            { to: "/profile", label: "Profile" },
          ].map(({ to, label }) => (
            <Link key={to} to={to} style={{
              padding: "6px 14px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 500,
              color: "rgba(245,244,240,0.55)",
              textDecoration: "none",
              transition: "all 0.15s"
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.color = "#F5F4F0";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "rgba(245,244,240,0.55)";
              }}
            >
              {label}
            </Link>
          ))}
          <Link to="/create" style={{
            padding: "6px 16px",
            borderRadius: 8,
            background: "#7C5CFC",
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            marginLeft: 4
          }}>
            + Create
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;