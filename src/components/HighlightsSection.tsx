import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const highlights = [
  { number: "41%", label: "Test suite speed increase", icon: "⚡" },
  { number: "90+", label: "Users on tools I built", icon: "👥" },
  { number: "25+", label: "Projects tracked", icon: "📊" },
  { number: "68K+", label: "Scholarship applicants beat", icon: "🏆" },
];

const HighlightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 relative overflow-hidden">
      {/* Glow line */}
      <div className="absolute top-0 left-0 right-0 h-px glow-line opacity-40" />

      <div className="container max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center space-y-3 group"
            >
              <span className="text-3xl">{item.icon}</span>
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient">
                {item.number}
              </p>
              <p className="text-sm text-muted-foreground leading-tight">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px glow-line opacity-40" />
    </section>
  );
};

export default HighlightsSection;
