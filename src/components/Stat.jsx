import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// ── STATS ──────────────────────────────────────────────

const useCounter = (target, inView, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return count;
};

const StatItem = ({ value, label, suffix = "+", inView }) => {
  const count = useCounter(parseInt(value), inView);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      style={{ textAlign: "center" }}
    >
      <div className="bebas glow-num" style={{ fontSize: "clamp(44px, 8vw, 90px)", lineHeight: 1, color: "#a855f7" }}>
        {count}{suffix}
      </div>
      <div style={{ color: "#94a3b8", fontSize: "clamp(11px, 2vw, 15px)", letterSpacing: 2, marginTop: 8 }}>
        {label.toUpperCase()}
      </div>
    </motion.div>
  );
};

export const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const stats = [
    { value: 150, label: "Projects", suffix: "+" },
    { value: 50, label: "Clients", suffix: "+" },
    { value: 5, label: "Years Exp", suffix: "" },
    { value: 4, label: "Avg Rating", suffix: ".9★" },
  ];
  return (
    <section ref={ref} style={{ padding: "80px 7%", background: "linear-gradient(180deg, #07070e, #050508)", borderTop: "1px solid rgba(168,85,247,0.1)", borderBottom: "1px solid rgba(168,85,247,0.1)" }}>
      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          max-width: 900px;
          margin: 0 auto;
        }
        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }
      `}</style>
      <div className="stats-grid">
        {stats.map((s) => <StatItem key={s.label} {...s} inView={inView} />)}
      </div>
    </section>
  );
};

// ── PROCESS ─────────────────────────────────────────────

const steps = [
  { n: "01", title: "Brief", desc: "Deep-dive into your vision, audience, and goals." },
  { n: "02", title: "Footage Review", desc: "I catalog, log, and select the best moments from your raw footage." },
  { n: "03", title: "Editing", desc: "Crafting the narrative with precision cuts, sound, and rhythm." },
  { n: "04", title: "Revisions", desc: "Two rounds of feedback to perfect every detail together." },
  { n: "05", title: "Delivery", desc: "Export-ready files optimized for every platform you need." },
];

export const Process = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} style={{ padding: "80px 7%", background: "#050508" }}>
      <style>{`
        .process-steps {
          display: flex;
          align-items: flex-start;
          gap: 0;
          position: relative;
        }
        .process-connector-bg {
          position: absolute;
          top: 28px; left: 9%; right: 9%;
          height: 1px;
          background: rgba(168,85,247,0.15);
          z-index: 0;
        }
        .process-connector-animated {
          position: absolute;
          top: 28px; left: 9%; right: 9%;
          height: 1px;
          background: linear-gradient(90deg, #7c3aed, #a855f7, #ec4899);
          transform-origin: left;
          z-index: 1;
        }
        @media (max-width: 700px) {
          .process-steps {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
          .process-connector-bg,
          .process-connector-animated {
            display: none;
          }
          .process-step-item {
            flex-direction: row !important;
            align-items: flex-start !important;
            text-align: left !important;
            padding: 0 0 28px 0 !important;
            border-left: 1px solid rgba(168,85,247,0.2);
            padding-left: 20px !important;
            margin-left: 28px;
          }
          .process-step-item:last-child {
            border-left: none;
          }
          .process-step-circle {
            position: absolute;
            left: -49px;
            top: 0;
          }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        style={{ textAlign: "center", marginBottom: 80 }}
      >
        <div style={{ color: "#a855f7", fontSize: 13, fontWeight: 600, letterSpacing: 4, marginBottom: 14 }}>HOW IT WORKS</div>
        <h2 className="bebas" style={{ fontSize: "clamp(36px, 7vw, 72px)", lineHeight: 1 }}>
          THE{" "}
          <span style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            PROCESS
          </span>
        </h2>
      </motion.div>

      <div className="process-steps">
        <div className="process-connector-bg" />
        <motion.div
          className="process-connector-animated"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
        />
        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="process-step-item"
            style={{
              flex: 1, display: "flex", flexDirection: "column",
              alignItems: "center", textAlign: "center",
              padding: "0 16px", position: "relative", zIndex: 2,
            }}
          >
            <motion.div
              className="process-step-circle"
              animate={inView ? { scale: [1, 1.1, 1] } : {}}
              transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
              style={{
                width: 56, height: 56, borderRadius: "50%",
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Bebas Neue', cursive", fontSize: 20, color: "#fff",
                marginBottom: 24, border: "2px solid rgba(168,85,247,0.5)",
                flexShrink: 0,
              }}
            >
              {step.n}
            </motion.div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{step.title}</div>
              <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.6 }}>{step.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;