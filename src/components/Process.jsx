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
    <section id="process" ref={ref} style={{ padding: "80px 7%", background: "#050508", overflowX: "hidden" }}>
      <style>{`
        /* ── Desktop: horizontal timeline ── */
        .process-row {
          display: flex;
          align-items: flex-start;
          position: relative;
        }
        .process-line-track {
          position: absolute;
          top: 28px; left: 9%; right: 9%;
          height: 1px;
          background: rgba(168,85,247,0.15);
          z-index: 0;
        }
        .process-line-fill {
          position: absolute;
          top: 28px; left: 9%; right: 9%;
          height: 1px;
          background: linear-gradient(90deg, #7c3aed, #a855f7, #ec4899);
          transform-origin: left;
          z-index: 1;
        }
        .process-step {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 12px;
          position: relative;
          z-index: 2;
        }
        .process-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Bebas Neue', cursive;
          font-size: 20px;
          color: #fff;
          margin-bottom: 20px;
          border: 2px solid rgba(168,85,247,0.5);
          flex-shrink: 0;
        }

        /* ── Mobile: vertical list ── */
        @media (max-width: 700px) {
          .process-row {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
          .process-line-track,
          .process-line-fill {
            display: none;
          }
          .process-step {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
            padding: 0 0 32px 0;
            gap: 20px;
          }
          .process-step:last-child {
            padding-bottom: 0;
          }
          /* Vertical connecting line drawn via pseudo on the wrapper */
          .process-step-body {
            padding-top: 14px;
            flex: 1;
          }
          .process-step + .process-step .process-circle {
            margin-top: 0;
          }
          /* Draw a vertical line between circles */
          .process-step:not(:last-child) {
            position: relative;
          }
          .process-step:not(:last-child)::after {
            content: '';
            position: absolute;
            left: 27px;
            top: 56px;
            width: 2px;
            height: calc(100% - 56px);
            background: linear-gradient(180deg, rgba(168,85,247,0.5), rgba(168,85,247,0.1));
          }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        style={{ textAlign: "center", marginBottom: 72 }}
      >
        <div style={{ color: "#a855f7", fontSize: 13, fontWeight: 600, letterSpacing: 4, marginBottom: 14 }}>HOW IT WORKS</div>
        <h2 className="bebas" style={{ fontSize: "clamp(36px, 7vw, 72px)", lineHeight: 1 }}>
          THE{" "}
          <span style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            PROCESS
          </span>
        </h2>
      </motion.div>

      <div className="process-row">
        {/* Desktop horizontal line */}
        <div className="process-line-track" />
        <motion.div
          className="process-line-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
        />

        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            className="process-step"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.14 }}
          >
            <motion.div
              className="process-circle"
              animate={inView ? { scale: [1, 1.1, 1] } : {}}
              transition={{ delay: 0.5 + i * 0.2, duration: 0.7 }}
            >
              {step.n}
            </motion.div>

            {/* On mobile, title + desc sit beside the circle */}
            <div className="process-step-body">
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{step.title}</div>
              <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.65 }}>{step.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;