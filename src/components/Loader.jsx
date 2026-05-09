import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#050508",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.35), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        {/* Animated Logo */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "clamp(48px, 7vw, 90px)",
            fontWeight: 800,
            letterSpacing: "0.08em",
            background:
              "linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: 20,
            textTransform: "uppercase",
          }}
        >
          REEL STUDIO
        </motion.h1>

        {/* Loading line */}
        <div
          style={{
            width: 220,
            height: 4,
            background: "rgba(255,255,255,0.08)",
            borderRadius: 999,
            overflow: "hidden",
            margin: "0 auto",
          }}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: "50%",
              height: "100%",
              background:
                "linear-gradient(90deg, #7c3aed, #ec4899)",
              borderRadius: 999,
            }}
          />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: 22,
            color: "#cbd5e1",
            letterSpacing: "0.25em",
            fontSize: 12,
            textTransform: "uppercase",
          }}
        >
          Crafting Cinematic Experiences
        </motion.p>
      </div>
    </motion.div>
  );
}