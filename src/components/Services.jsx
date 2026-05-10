import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Palette,
  Zap,
  Film,
  Mic,
} from "lucide-react";

const services = [
  {
    icon: <Monitor size={26} />,
    title: "YouTube Video Editing",
    desc: "Retention-optimized cuts, dynamic pacing, and engaging storytelling for creators who want to grow.",
  },
  {
    icon: <Smartphone size={26} />,
    title: "Reels & Short-Form",
    desc: "Hook-first editing for Instagram, TikTok, and Shorts.",
  },
  {
    icon: <Palette size={26} />,
    title: "Color Grading",
    desc: "Cinematic LUT design, skin tone correction, and mood-driven color science.",
  },
  {
    icon: <Zap size={26} />,
    title: "Motion Graphics",
    desc: "Animated titles, lower thirds, logo reveals, and custom transitions.",
  },
  {
    icon: <Film size={26} />,
    title: "Brand & Commercial Films",
    desc: "Polished commercial edits that convert viewers into customers.",
  },
  {
    icon: <Mic size={26} />,
    title: "Podcast Editing",
    desc: "Audio cleanup, chapter markers, and b-roll integration.",
  },
];

const Services = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="services"
      ref={ref}
      style={{
        padding: "80px 5%",
        background: "#050508",
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
            color: "#a855f7",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 4,
            marginBottom: 14,
          }}
        >
          WHAT I DO
        </div>

        <h2
          className="bebas"
          style={{
            fontSize: "clamp(34px, 8vw, 72px)",
            lineHeight: 1,
          }}
        >
          SERVICES &{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SPECIALTIES
          </span>
        </h2>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
        }}
      >
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: i * 0.1,
              duration: 0.6,
            }}
            whileHover={{
              y: -6,
              boxShadow:
                "0 0 40px rgba(168,85,247,0.25)",
            }}
            className="glass"
            style={{
              padding: 24,
              borderRadius: 16,
              cursor: "default",
            }}
          >
            <div
              style={{
                color: "#a855f7",
                marginBottom: 18,
                padding: 12,
                background: "rgba(168,85,247,0.1)",
                borderRadius: 10,
                display: "inline-flex",
              }}
            >
              {s.icon}
            </div>

            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              {s.title}
            </h3>

            <p
              style={{
                color: "#94a3b8",
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;