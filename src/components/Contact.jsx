import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const inputStyle = {
    width: "100%", padding: "14px 18px", borderRadius: 10, fontSize: 15,
    background: "rgba(13,13,20,0.8)", border: "1px solid rgba(168,85,247,0.2)",
    color: "#fff", outline: "none", transition: "border-color 0.3s, box-shadow 0.3s",
    boxSizing: "border-box",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" ref={ref} style={{ padding: "80px 7%", background: "#050508", position: "relative", overflow: "hidden" }}>
      <style>{`
        .contact-name-email-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        @media (max-width: 600px) {
          .contact-name-email-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 400, background: "radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <div style={{ color: "#a855f7", fontSize: 13, fontWeight: 600, letterSpacing: 4, marginBottom: 14 }}>START A PROJECT</div>
        <h2 className="bebas" style={{ fontSize: "clamp(36px, 7vw, 72px)", lineHeight: 1.05, marginBottom: 20 }}>
          READY TO CREATE SOMETHING{" "}
          <span style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            CINEMATIC?
          </span>
        </h2>
        <p style={{ color: "#94a3b8", marginBottom: 50, fontSize: 16, lineHeight: 1.7 }}>
          I'm currently taking on new projects. Let's bring your vision to life.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18, textAlign: "left" }}>
          <div className="contact-name-email-grid">
            <input
              style={inputStyle}
              placeholder="Your Name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              onFocus={(e) => { e.target.style.borderColor = "#a855f7"; e.target.style.boxShadow = "0 0 20px rgba(168,85,247,0.25)"; }}
              onBlur={(e) => { e.target.style.borderColor = "rgba(168,85,247,0.2)"; e.target.style.boxShadow = "none"; }}
            />
            <input
              type="email"
              style={inputStyle}
              placeholder="Email Address"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              onFocus={(e) => { e.target.style.borderColor = "#a855f7"; e.target.style.boxShadow = "0 0 20px rgba(168,85,247,0.25)"; }}
              onBlur={(e) => { e.target.style.borderColor = "rgba(168,85,247,0.2)"; e.target.style.boxShadow = "none"; }}
            />
          </div>
          <textarea
            rows={5}
            style={{ ...inputStyle, resize: "vertical" }}
            placeholder="Tell me about your project..."
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            onFocus={(e) => { e.target.style.borderColor = "#a855f7"; e.target.style.boxShadow = "0 0 20px rgba(168,85,247,0.25)"; }}
            onBlur={(e) => { e.target.style.borderColor = "rgba(168,85,247,0.2)"; e.target.style.boxShadow = "none"; }}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(168,85,247,0.6)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "16px", borderRadius: 10, fontSize: 15, fontWeight: 700, letterSpacing: 2,
              background: "linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)",
              border: "none", color: "#fff", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}
          >
            {sent ? "✓ MESSAGE SENT!" : (<>SEND MESSAGE <ArrowRight size={16} /></>)}
          </motion.button>
        </form>

        <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 50, flexWrap: "wrap" }}>
          <a href="mailto:hello@reelstudio.co" style={{ display: "flex", alignItems: "center", gap: 8, color: "#94a3b8", textDecoration: "none", fontSize: 14 }}>
            <Mail size={16} color="#a855f7" /> hello@reelstudio.co
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;