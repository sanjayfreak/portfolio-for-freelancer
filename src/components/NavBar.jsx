import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["Work", "Services", "About", "Pricing", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(5,5,8,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(168,85,247,0.1)" : "none",
        transition: "all 0.4s ease",
        padding: "0 5%",
        height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bebas"
        style={{ fontSize: 28, letterSpacing: 3, background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", cursor: "pointer" }}
      >
        REEL STUDIO
      </motion.div>

      <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
        {links.map((link, i) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
            whileHover={{ color: "#a855f7" }}
            style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: 1, transition: "color 0.2s" }}
          >
            {link.toUpperCase()}
          </motion.a>
        ))}
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(168,85,247,0.6)" }}
          whileTap={{ scale: 0.97 }}
          style={{
            padding: "10px 24px", borderRadius: 6, fontSize: 13, fontWeight: 600, letterSpacing: 1,
            background: "linear-gradient(135deg, #7c3aed, #ec4899)",
            color: "#fff", textDecoration: "none", border: "none", cursor: "pointer",
          }}
        >
          HIRE ME
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;