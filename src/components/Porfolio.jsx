import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
// ...component code...
const portfolioItems = [
  { label: "Brand Commercial", color: ["#1a0040", "#2d0060"], accent: "#a855f7" },
  { label: "YouTube Series", color: ["#0d0030", "#1a0050"], accent: "#ec4899" },
  { label: "Music Video", color: ["#200020", "#3d0040"], accent: "#f472b6" },
  { label: "Wedding Film", color: ["#0a001a", "#1a0035"], accent: "#c084fc" },
  { label: "Corporate Ad", color: ["#150020", "#280040"], accent: "#a855f7" },
  { label: "Travel Doc", color: ["#0d0028", "#1f0048"], accent: "#ec4899" },
];

const Portfolio = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" ref={ref} style={{ padding: "110px 7%", background: "#07070e" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: 70 }}
      >
        <div style={{ color: "#ec4899", fontSize: 13, fontWeight: 600, letterSpacing: 4, marginBottom: 14 }}>SELECTED WORK</div>
        <h2 className="bebas" style={{ fontSize: "clamp(44px, 5vw, 72px)", lineHeight: 1 }}>
          THE <span style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>PORTFOLIO</span>
        </h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {portfolioItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            style={{ position: "relative", borderRadius: 14, overflow: "hidden", cursor: "pointer", height: i % 3 === 1 ? 340 : 280 }}
            whileHover="hover"
          >
            <div style={{
              width: "100%", height: "100%",
              background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              border: `1px solid ${item.accent}22`,
            }}>
              <Play size={40} color={item.accent} opacity={0.4} />
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 20, background: "rgba(0,0,0,0.5)", display: "flex", gap: 6, padding: "4px 8px" }}>
                {Array.from({ length: 10 }).map((_, j) => (
                  <div key={j} style={{ width: 12, height: 12, borderRadius: 2, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.05)" }} />
                ))}
              </div>
            </div>
            <motion.div
              variants={{ hover: { opacity: 1, y: 0 }, initial: { opacity: 0, y: "100%" } }}
              initial="initial"
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                position: "absolute", inset: 0,
                background: `linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)`,
                display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 24,
              }}
            >
              <div style={{ color: item.accent, fontSize: 11, fontWeight: 600, letterSpacing: 3, marginBottom: 6 }}>{item.label.toUpperCase()}</div>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Project {String(i + 1).padStart(2, "0")}</div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, color: item.accent, fontSize: 13, fontWeight: 600 }}>Watch ↗</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Portfolio;