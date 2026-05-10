import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Starter", price: "$199", popular: false, color: "#a855f7",
    features: ["Up to 10 min video", "Basic color grade", "1 revision round", "Licensed music", "720p / 1080p export", "5 day turnaround"],
  },
  {
    name: "Standard", price: "$399", popular: true, color: "#ec4899",
    features: ["Up to 30 min video", "Cinematic color grade", "2 revision rounds", "Custom motion titles", "4K export", "3 day turnaround", "Thumbnail design"],
  },
  {
    name: "Premium", price: "$799", popular: false, color: "#a855f7",
    features: ["Unlimited length", "Full DaVinci grade", "Unlimited revisions", "Custom motion graphics", "4K HDR export", "48hr turnaround", "Social cuts included", "Priority support"],
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} style={{ padding: "80px 7%", background: "#050508" }}>
      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 440px;
          }
          .pricing-card-popular {
            transform: scale(1) !important;
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 700px;
          }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        style={{ textAlign: "center", marginBottom: 70 }}
      >
        <div style={{ color: "#a855f7", fontSize: 13, fontWeight: 600, letterSpacing: 4, marginBottom: 14 }}>INVESTMENT</div>
        <h2 className="bebas" style={{ fontSize: "clamp(36px, 7vw, 72px)", lineHeight: 1 }}>
          TRANSPARENT{" "}
          <span style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            PRICING
          </span>
        </h2>
      </motion.div>

      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className={`glass ${plan.popular ? "pricing-card-popular" : ""}`}
            style={{
              padding: 36, borderRadius: 18, position: "relative",
              border: plan.popular ? `1px solid ${plan.color}` : "1px solid rgba(168,85,247,0.15)",
              boxShadow: plan.popular ? `0 0 50px rgba(236,72,153,0.2)` : "none",
              transform: plan.popular ? "scale(1.04)" : "scale(1)",
            }}
          >
            {plan.popular && (
              <div style={{
                position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                padding: "5px 20px", borderRadius: 20, fontSize: 11, fontWeight: 700, letterSpacing: 2,
                whiteSpace: "nowrap",
              }}>
                MOST POPULAR
              </div>
            )}
            <div style={{ color: "#94a3b8", fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>{plan.name.toUpperCase()}</div>
            <div className="bebas" style={{ fontSize: 56, color: plan.popular ? plan.color : "#fff", marginBottom: 4, lineHeight: 1 }}>{plan.price}</div>
            <div style={{ color: "#94a3b8", fontSize: 13, marginBottom: 28 }}>per project</div>
            <div style={{ height: 1, background: "rgba(168,85,247,0.15)", marginBottom: 28 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {plan.features.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14 }}>
                  <CheckCircle size={16} color={plan.color} />
                  <span style={{ color: "#e2e8f0" }}>{f}</span>
                </div>
              ))}
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: `0 0 25px ${plan.color}66` }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "block", textAlign: "center", padding: "14px",
                borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: "none",
                background: plan.popular ? `linear-gradient(135deg, #7c3aed, #ec4899)` : "transparent",
                border: plan.popular ? "none" : `1px solid ${plan.color}55`,
                color: plan.popular ? "#fff" : plan.color,
                letterSpacing: 1,
              }}
            >
              GET STARTED
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;