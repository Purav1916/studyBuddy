function SearchBar({ search, setSearch }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.05)",
      border: "0.5px solid rgba(255,255,255,0.1)",
      borderRadius: 12,
      padding: "12px 16px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 24
    }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(245,244,240,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by subject or name — try &quot;CS 251&quot; or a student name"
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          outline: "none",
          color: "#F5F4F0",
          fontSize: 14,
        }}
      />
    </div>
  );
}

export default SearchBar;