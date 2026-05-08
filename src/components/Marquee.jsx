const Marquee = () => {
  const items = ["Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", "Color Grading", "Motion Graphics", "Sound Design", "Cinema 4D", "Luts & Filters", "4K Editing"];
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", background: "#08080f", borderTop: "1px solid rgba(168,85,247,0.12)", borderBottom: "1px solid rgba(168,85,247,0.12)", padding: "18px 0" }}>
      <div className="marquee-track" style={{ display: "flex", gap: 60, whiteSpace: "nowrap", width: "max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 60 }}>
            <span style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: 14, fontWeight: 600, letterSpacing: 2 }}>
              {item.toUpperCase()}
            </span>
            <span style={{ color: "rgba(168,85,247,0.4)", fontSize: 10 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;