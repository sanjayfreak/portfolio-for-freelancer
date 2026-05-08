import { motion } from "framer-motion";

const Footer = () => (
  <footer style={{ background: "#03030a", borderTop: "1px solid transparent", borderImage: "linear-gradient(90deg, transparent, #a855f7, #ec4899, transparent) 1", padding: "40px 7%" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
      <div className="bebas" style={{ fontSize: 22, letterSpacing: 3, background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        REEL STUDIO
      </div>
      <div style={{ display: "flex", gap: 28 }}>
        {["Work", "Services", "About", "Pricing", "Contact"].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}
            style={{ color: "#64748b", textDecoration: "none", fontSize: 13, fontWeight: 500, letterSpacing: 1, transition: "color 0.2s" }}
            onMouseEnter={(e) => e.target.style.color = "#a855f7"}
            onMouseLeave={(e) => e.target.style.color = "#64748b"}
          >
            {link.toUpperCase()}
          </a>
        ))}
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        
      </div>
    </div>
    <div style={{ textAlign: "center", marginTop: 32, color: "#334155", fontSize: 13 }}>
      © 2025 Reel Studio. All rights reserved. Crafted with cinematic precision.
    </div>
  </footer>
);
export default Footer;