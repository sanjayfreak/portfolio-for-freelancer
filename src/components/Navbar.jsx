import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const links = ["Work", "Services", "About", "Pricing", "Contact"];

  return (
    <>
      <style>{`
        .nav-desktop-links { display: flex; }
        .nav-hamburger { display: none; }
        @media (max-width: 767px) {
          .nav-desktop-links { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled || menuOpen ? "rgba(5,5,8,0.95)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
          borderBottom: scrolled || menuOpen ? "1px solid rgba(168,85,247,0.1)" : "none",
          transition: "all 0.4s ease",
          padding: "0 5%",
          height: 72,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bebas"
          style={{
            fontSize: 28, letterSpacing: 3,
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            cursor: "pointer",
          }}
        >
          REEL STUDIO
        </motion.div>

        {/* Desktop links */}
        <div className="nav-desktop-links" style={{ gap: 36, alignItems: "center" }}>
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

        {/* Hamburger button */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", gap: 5, padding: 8,
          }}
          aria-label="Toggle menu"
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 9 : 0 }} style={{ display: "block", width: 24, height: 2, background: "#a855f7", borderRadius: 2, transformOrigin: "center" }} />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} style={{ display: "block", width: 24, height: 2, background: "#a855f7", borderRadius: 2 }} />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -9 : 0 }} style={{ display: "block", width: 24, height: 2, background: "#a855f7", borderRadius: 2, transformOrigin: "center" }} />
        </button>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed", top: 72, left: 0, right: 0, zIndex: 999,
              background: "rgba(5,5,8,0.97)", backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(168,85,247,0.15)",
              padding: "24px 5% 32px",
              display: "flex", flexDirection: "column", gap: 4,
            }}
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#94a3b8", textDecoration: "none", fontSize: 15,
                  fontWeight: 500, letterSpacing: 2, padding: "14px 0",
                  borderBottom: "1px solid rgba(168,85,247,0.08)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => e.target.style.color = "#a855f7"}
                onMouseLeave={(e) => e.target.style.color = "#94a3b8"}
              >
                {link.toUpperCase()}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: 16, padding: "14px", borderRadius: 8, fontSize: 14,
                fontWeight: 700, letterSpacing: 1, textAlign: "center",
                background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                color: "#fff", textDecoration: "none",
              }}
            >
              HIRE ME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;