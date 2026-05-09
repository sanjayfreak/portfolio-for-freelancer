import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const words = ["I CRAFT", "CINEMATIC", "STORIES FROM", "YOUR FOOTAGE"];

  return (
    <section
      ref={ref}
      id="work"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: 72,
      }}
    >
{/* ── FULL BACKGROUND VIDEO ── */}
<video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  }}
>
  <source src="/edit.mp4" type="video/mp4" />
 
</video>
      {/* ── DARK OVERLAY so text is readable ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(5,5,8,0.82) 0%, rgba(13,0,30,0.75) 50%, rgba(5,5,8,0.80) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── PURPLE GLOW OVERLAY ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.25) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(236,72,153,0.15) 0%, transparent 60%)",
          zIndex: 2,
        }}
      />

      {/* ── ANIMATED BG BLOBS ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "10%", left: "-10%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.3), transparent 70%)",
          filter: "blur(80px)", pointerEvents: "none", zIndex: 2,
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute", bottom: "10%", right: "5%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(236,72,153,0.25), transparent 70%)",
          filter: "blur(80px)", pointerEvents: "none", zIndex: 2,
        }}
      />

      {/* ── CONTENT ── */}
      <motion.div
        style={{ opacity, position: "relative", zIndex: 10, width: "100%", padding: "0 7%" }}
      >
        <div style={{ maxWidth: 780 }}>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" }}
          >
            {["YouTube", "Brand Films", "Reels", "Color Grading"].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 500,
                  background: "rgba(168,85,247,0.15)",
                  border: "1px solid rgba(168,85,247,0.4)",
                  color: "#c084fc",
                  backdropFilter: "blur(8px)",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <div className="bebas" style={{ lineHeight: 1.0, marginBottom: 32 }}>
            {words.map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, y: 50, skewY: 4 }}
                animate={{ opacity: 1, y: 0, skewY: 0 }}
                transition={{ delay: 0.3 + i * 0.13, duration: 0.75, ease: "easeOut" }}
                style={{ fontSize: "clamp(60px, 6.5vw, 95px)", display: "block", lineHeight: 1.0 }}
              >
                {i === 1 ? (
                  <span
                    style={{
                      background: "linear-gradient(135deg, #a855f7, #ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(0 0 30px rgba(168,85,247,0.6))",
                    }}
                  >
                    {word}
                  </span>
                ) : (
                  <span style={{ color: "#ffffff", textShadow: "0 2px 40px rgba(0,0,0,0.8)" }}>
                    {word}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{
              color: "#cbd5e1", fontSize: 18, lineHeight: 1.75,
              marginBottom: 44, maxWidth: 520,
              textShadow: "0 2px 20px rgba(0,0,0,0.8)",
            }}
          >
            Transforming raw footage into emotionally compelling visual narratives.
            Every cut is intentional. Every frame, deliberate.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
            style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(168,85,247,0.7)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "15px 36px", borderRadius: 8, fontSize: 15, fontWeight: 700,
                letterSpacing: 0.5,
                background: "linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)",
                color: "#fff", textDecoration: "none",
                display: "flex", alignItems: "center", gap: 8,
                boxShadow: "0 0 25px rgba(124,58,237,0.4)",
              }}
            >
              View My Work <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(168,85,247,0.4)",
                background: "rgba(168,85,247,0.15)",
              }}
              style={{
                padding: "15px 36px", borderRadius: 8, fontSize: 15, fontWeight: 700,
                border: "1px solid rgba(168,85,247,0.6)",
                color: "#c084fc", textDecoration: "none",
                transition: "all 0.3s",
                backdropFilter: "blur(8px)",
              }}
            >
              Let's Talk
            </motion.a>
          </motion.div>

          {/* Floating stat badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            style={{ display: "flex", gap: 16, marginTop: 56, flexWrap: "wrap" }}
          >
            <div
              style={{
                padding: "14px 24px", borderRadius: 12,
                background: "rgba(13,13,20,0.75)", backdropFilter: "blur(20px)",
                border: "1px solid rgba(168,85,247,0.3)",
                boxShadow: "0 0 25px rgba(168,85,247,0.15)",
              }}
            >
              <div style={{ color: "#a855f7", fontSize: 24, fontWeight: 800, lineHeight: 1 }}>150+</div>
              <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 4 }}>Projects Delivered</div>
            </div>

            <div
              style={{
                padding: "14px 24px", borderRadius: 12,
                background: "rgba(13,13,20,0.75)", backdropFilter: "blur(20px)",
                border: "1px solid rgba(236,72,153,0.3)",
                boxShadow: "0 0 25px rgba(236,72,153,0.15)",
                display: "flex", alignItems: "center", gap: 10,
              }}
            >
              <Star size={18} fill="#f59e0b" color="#f59e0b" />
              <div>
                <div style={{ fontWeight: 800, fontSize: 18, lineHeight: 1 }}>4.9 / 5.0</div>
                <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 4 }}>Client Rating</div>
              </div>
            </div>

            <div
              style={{
                padding: "14px 24px", borderRadius: 12,
                background: "rgba(13,13,20,0.75)", backdropFilter: "blur(20px)",
                border: "1px solid rgba(168,85,247,0.3)",
                boxShadow: "0 0 25px rgba(168,85,247,0.15)",
              }}
            >
              <div style={{ color: "#ec4899", fontSize: 24, fontWeight: 800, lineHeight: 1 }}>5 Yrs</div>
              <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 4 }}>Experience</div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;