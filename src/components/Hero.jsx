import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

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
      <style>{`
        .hero-content {
          width: 100%;
          padding: 0 6%;
          box-sizing: border-box;
          max-width: 860px;
        }
        .hero-headline {
          font-size: clamp(44px, 11vw, 95px);
          display: block;
          line-height: 1.0;
        }
        .hero-sub {
          color: #cbd5e1;
          font-size: clamp(14px, 3.2vw, 18px);
          line-height: 1.75;
          margin-bottom: 36px;
          max-width: 520px;
          text-shadow: 0 2px 20px rgba(0,0,0,0.8);
        }
        .hero-ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
        }
        .hero-badges {
          display: flex;
          gap: 10px;
          margin-top: 40px;
          flex-wrap: wrap;
        }
        .hero-badge {
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(13,13,20,0.8);
          backdrop-filter: blur(20px);
          flex-shrink: 0;
        }
        @media (max-width: 480px) {
          .hero-ctas {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-ctas a {
            justify-content: center;
            text-align: center;
          }
          .hero-badges {
            margin-top: 28px;
            gap: 8px;
          }
          .hero-badge {
            padding: 10px 14px;
          }
        }
      `}</style>

      {/* BG video */}
      <video autoPlay muted loop playsInline preload="auto"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}>
        <source src="/edit.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,5,8,0.85) 0%, rgba(13,0,30,0.80) 50%, rgba(5,5,8,0.85) 100%)", zIndex: 1 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.2) 0%, transparent 60%)", zIndex: 2 }} />

      {/* Blob — kept inside overflow:hidden, no negative left that causes scroll */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "5%", left: 0, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 2 }}
      />

      {/* Main content — NO x-axis slide animations (those push content off screen) */}
      <motion.div style={{ opacity, position: "relative", zIndex: 10, width: "100%" }}>
        <div className="hero-content">

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ display: "flex", gap: 8, marginBottom: 22, flexWrap: "wrap" }}
          >
            {["YouTube", "Brand Films", "Reels", "Color Grading"].map((tag) => (
              <span key={tag} style={{
                padding: "5px 13px", borderRadius: 20, fontSize: 12, fontWeight: 500,
                background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.4)",
                color: "#c084fc", backdropFilter: "blur(8px)",
              }}>{tag}</span>
            ))}
          </motion.div>

          {/* Headline — fade+y only, no x */}
          <div className="bebas" style={{ lineHeight: 1.0, marginBottom: 26 }}>
            {["I CRAFT", "CINEMATIC", "STORIES FROM", "YOUR FOOTAGE"].map((word, i) => (
              <motion.div
                key={word}
                className="hero-headline"
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 + i * 0.12, duration: 0.65, ease: "easeOut" }}
              >
                {i === 1
                  ? <span style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 20px rgba(168,85,247,0.5))" }}>{word}</span>
                  : <span style={{ color: "#fff", textShadow: "0 2px 40px rgba(0,0,0,0.8)" }}>{word}</span>
                }
              </motion.div>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
          >
            Transforming raw footage into emotionally compelling visual narratives.
            Every cut is intentional. Every frame, deliberate.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.04, boxShadow: "0 0 36px rgba(168,85,247,0.7)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "14px 30px", borderRadius: 8, fontSize: 14, fontWeight: 700, letterSpacing: 0.5,
                background: "linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)",
                color: "#fff", textDecoration: "none",
                display: "flex", alignItems: "center", gap: 8,
                boxShadow: "0 0 22px rgba(124,58,237,0.4)",
              }}
            >
              View My Work <ArrowRight size={15} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, background: "rgba(168,85,247,0.12)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "14px 30px", borderRadius: 8, fontSize: 14, fontWeight: 700,
                border: "1px solid rgba(168,85,247,0.6)",
                color: "#c084fc", textDecoration: "none",
                transition: "all 0.3s", backdropFilter: "blur(8px)",
              }}
            >
              Let's Talk
            </motion.a>
          </motion.div>

          {/* Stat badges */}
          <motion.div
            className="hero-badges"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.22 }}
          >
            <div className="hero-badge" style={{ border: "1px solid rgba(168,85,247,0.3)", boxShadow: "0 0 20px rgba(168,85,247,0.12)" }}>
              <div style={{ color: "#a855f7", fontSize: 22, fontWeight: 800, lineHeight: 1 }}>150+</div>
              <div style={{ color: "#94a3b8", fontSize: 11, marginTop: 4 }}>Projects Delivered</div>
            </div>
            <div className="hero-badge" style={{ border: "1px solid rgba(236,72,153,0.3)", boxShadow: "0 0 20px rgba(236,72,153,0.12)", display: "flex", alignItems: "center", gap: 10 }}>
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <div>
                <div style={{ fontWeight: 800, fontSize: 16, lineHeight: 1 }}>4.9 / 5.0</div>
                <div style={{ color: "#94a3b8", fontSize: 11, marginTop: 4 }}>Client Rating</div>
              </div>
            </div>
            <div className="hero-badge" style={{ border: "1px solid rgba(168,85,247,0.3)", boxShadow: "0 0 20px rgba(168,85,247,0.12)" }}>
              <div style={{ color: "#ec4899", fontSize: 22, fontWeight: 800, lineHeight: 1 }}>5 Yrs</div>
              <div style={{ color: "#94a3b8", fontSize: 11, marginTop: 4 }}>Experience</div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;