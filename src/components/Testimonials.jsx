import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "YouTube Creator, 2M subs",
    initials: "MC",
    quote:
      "Reel Studio completely transformed my channel's look. The editing quality went through the roof. My CPM literally doubled after working with them.",
    stars: 5,
  },
  {
    name: "Sophia Laurent",
    role: "Fashion Brand Director",
    initials: "SL",
    quote:
      "I've worked with many editors. None of them come close to this level of cinematic quality. Our brand film got picked up by three publications.",
    stars: 5,
  },
  {
    name: "Devon Williams",
    role: "Wedding Photographer",
    initials: "DW",
    quote:
      "My couples are always blown away by the films. The color grading is impeccable and turnaround is lightning fast. Absolutely recommend.",
    stars: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "80px 5%",
        background: "#07070e",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
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
          CLIENT LOVE
        </div>

        <h2
          className="bebas"
          style={{
            fontSize: "clamp(34px, 8vw, 72px)",
            lineHeight: 1,
          }}
        >
          WHAT THEY{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SAY
          </span>
        </h2>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{
              y: -4,
            }}
            className="glass"
            style={{
              padding: 24,
              borderRadius: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                marginBottom: 16,
                gap: 2,
              }}
            >
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star
                  key={j}
                  size={16}
                  fill="#f59e0b"
                  color="#f59e0b"
                />
              ))}
            </div>

            <p
              style={{
                color: "#e2e8f0",
                fontSize: 14,
                lineHeight: 1.7,
                marginBottom: 24,
                fontStyle: "italic",
              }}
            >
              "{t.quote}"
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #7c3aed, #ec4899)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#fff",
                }}
              >
                {t.initials}
              </div>

              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  {t.name}
                </div>

                <div
                  style={{
                    color: "#94a3b8",
                    fontSize: 13,
                  }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;