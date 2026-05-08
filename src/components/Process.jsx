
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const steps = [
  { n: "01", title: "Brief", desc: "Deep-dive into your vision, audience, and goals." },
  { n: "02", title: "Footage Review", desc: "I catalog, log, and select the best moments from your raw footage." },
  { n: "03", title: "Editing", desc: "Crafting the narrative with precision cuts, sound, and rhythm." },
  { n: "04", title: "Revisions", desc: "Two rounds of feedback to perfect every detail together." },
  { n: "05", title: "Delivery", desc: "Export-ready files optimized for every platform you need." },
];

const Process = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} style={{ padding: "110px 7%", background: "#050508" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        style={{ textAlign: "center", marginBottom: 80 }}
      >
        <div style={{ color: "#a855f7", fontSize: 13, fontWeight: 600, letterSpacing: 4, marginBottom: 14 }}>HOW IT WORKS</div>
        <h2 className="bebas" style={{ fontSize: "clamp(44px, 5vw, 72px)", lineHeight: 1 }}>
          THE <span style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>PROCESS</span>
        </h2>
      </motion.div>

      <div style={{ display: "flex", alignItems: "flex-start", gap: 0, position: "relative" }}>
        <div style={{ position: "absolute", top: 28, left: "9%", right: "9%", height: 1, background: "rgba(168,85,247,0.15)", zIndex: 0 }} />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
          style={{ position: "absolute", top: 28, left: "9%", right: "9%", height: 1, background: "linear-gradient(90deg, #7c3aed, #a855f7, #ec4899)", transformOrigin: "left", zIndex: 1 }}
        />
        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.15 }}
            style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 16px", position: "relative", zIndex: 2 }}
          >
            <motion.div
              animate={inView ? { scale: [1, 1.1, 1] } : {}}
transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
              style={{
                width: 56, height: 56, borderRadius: "50%",
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Bebas Neue', cursive", fontSize: 20, color: "#fff",
                marginBottom: 24, border: "2px solid rgba(168,85,247,0.5)",
              }}
            >
              {step.n}
            </motion.div>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{step.title}</div>
            <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.6 }}>{step.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Process;