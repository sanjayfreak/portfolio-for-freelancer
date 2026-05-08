import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

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
      <div className="bebas glow-num" style={{ fontSize: "clamp(56px, 6vw, 90px)", lineHeight: 1, color: "#a855f7" }}>
        {count}{suffix}
      </div>
      <div style={{ color: "#94a3b8", fontSize: 15, letterSpacing: 2, marginTop: 8 }}>{label.toUpperCase()}</div>
    </motion.div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const stats = [
    { value: 150, label: "Projects", suffix: "+" },
    { value: 50, label: "Clients", suffix: "+" },
    { value: 5, label: "Years Exp", suffix: "" },
    { value: 4, label: "Avg Rating", suffix: ".9★" },
  ];
  return (
    <section ref={ref} style={{ padding: "100px 7%", background: "linear-gradient(180deg, #07070e, #050508)", borderTop: "1px solid rgba(168,85,247,0.1)", borderBottom: "1px solid rgba(168,85,247,0.1)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40, maxWidth: 900, margin: "0 auto" }}>
        {stats.map((s) => <StatItem key={s.label} {...s} inView={inView} />)}
      </div>
    </section>
  );
};
export default Stats;