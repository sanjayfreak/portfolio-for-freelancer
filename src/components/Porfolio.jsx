import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

const portfolioItems = [
  {
    label: "Brand Commercial",
    color: ["#1a0040", "#2d0060"],
    accent: "#a855f7",
  },
  {
    label: "YouTube Series",
    color: ["#0d0030", "#1a0050"],
    accent: "#ec4899",
  },
  {
    label: "Music Video",
    color: ["#200020", "#3d0040"],
    accent: "#f472b6",
  },
  {
    label: "Wedding Film",
    color: ["#0a001a", "#1a0035"],
    accent: "#c084fc",
  },
  {
    label: "Corporate Ad",
    color: ["#150020", "#280040"],
    accent: "#a855f7",
  },
  {
    label: "Travel Doc",
    color: ["#0d0028", "#1f0048"],
    accent: "#ec4899",
  },
];

const Portfolio = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="portfolio"
      ref={ref}
      style={{
        padding: "80px 5%",
        background: "#07070e",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          marginBottom: 60,
        }}
      >
        <div
          style={{
            color: "#ec4899",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 4,
            marginBottom: 14,
          }}
        >
          SELECTED WORK
        </div>

        <h2
          className="bebas"
          style={{
            fontSize: "clamp(34px, 8vw, 72px)",
            lineHeight: 1,
          }}
        >
          THE{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            PORTFOLIO
          </span>
        </h2>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18,
        }}
      >
        {portfolioItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
            }}
            whileHover={{ y: -5 }}
            style={{
              position: "relative",
              borderRadius: 14,
              overflow: "hidden",
              cursor: "pointer",
              aspectRatio: "4/5",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: `linear-gradient(145deg, ${item.color[0]}, ${item.color[1]})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1px solid ${item.accent}22`,
              }}
            >
              <Play
                size={40}
                color={item.accent}
                opacity={0.4}
              />
            </div>

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: 24,
              }}
            >
              <div
                style={{
                  color: item.accent,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 3,
                  marginBottom: 6,
                }}
              >
                {item.label.toUpperCase()}
              </div>

              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                Project {String(i + 1).padStart(2, "0")}
              </div>

              <div
                style={{
                  color: item.accent,
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                Watch ↗
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;