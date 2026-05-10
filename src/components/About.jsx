import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "Premiere Pro", level: 98 },
  { name: "DaVinci Resolve", level: 92 },
  { name: "After Effects", level: 88 },
  { name: "Final Cut Pro", level: 80 },
  { name: "Color Grading", level: 95 },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} style={{ padding: "80px 7%", background: "#07070e" }}>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 767px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-image-box {
            height: 260px !important;
          }
        }
      `}</style>

      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ position: "relative" }}
        >
          <div
            className="about-image-box"
            style={{
              borderRadius: 16, overflow: "hidden", height: 480,
              background: "linear-gradient(145deg, #0d0020, #1a0040, #0d0030)",
              border: "1px solid rgba(168,85,247,0.3)",
              boxShadow: "0 0 60px rgba(168,85,247,0.2), -4px -4px 0 #a855f7, 4px 4px 0 #ec4899",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div className="bebas" style={{ fontSize: 60, color: "rgba(168,85,247,0.3)", letterSpacing: 4 }}>REEL</div>
              <div className="bebas" style={{ fontSize: 60, color: "rgba(236,72,153,0.3)", letterSpacing: 4 }}>STUDIO</div>
            </div>
            <div style={{ position: "absolute", top: 20, left: 20, width: 40, height: 40, borderTop: "2px solid #a855f7", borderLeft: "2px solid #a855f7" }} />
            <div style={{ position: "absolute", bottom: 20, right: 20, width: 40, height: 40, borderBottom: "2px solid #ec4899", borderRight: "2px solid #ec4899" }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div style={{ color: "#a855f7", fontSize: 13, fontWeight: 600, letterSpacing: 4, marginBottom: 14 }}>ABOUT ME</div>
          <h2 className="bebas" style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1.05, marginBottom: 24 }}>
            5 YEARS OF CINEMATIC{" "}
            <span style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              EXCELLENCE
            </span>
          </h2>
          <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            I'm a freelance video editor with a deep passion for visual storytelling. From YouTube vlogs to commercial brand films, I've spent five years perfecting the craft of turning raw footage into unforgettable narratives.
          </p>
          <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
            My approach is cinematic-first. Every project begins with understanding the emotion we're trying to evoke, then building the edit around that feeling — frame by frame.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 36 }}>
            {["Premiere Pro", "After Effects", "DaVinci", "Final Cut"].map((s) => (
              <span key={s} style={{
                padding: "6px 16px", borderRadius: 6, fontSize: 13, fontWeight: 600,
                background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.25)",
                color: "#c084fc",
              }}>
                {s}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {skills.map((skill, i) => (
              <div key={skill.name}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13 }}>
                  <span style={{ color: "#e2e8f0", fontWeight: 500 }}>{skill.name}</span>
                  <span style={{ color: "#a855f7", fontWeight: 600 }}>{skill.level}%</span>
                </div>
                <div style={{ height: 4, background: "rgba(168,85,247,0.1)", borderRadius: 2, overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1.2, ease: "easeOut" }}
                    style={{ height: "100%", background: "linear-gradient(90deg, #7c3aed, #ec4899)", borderRadius: 2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;