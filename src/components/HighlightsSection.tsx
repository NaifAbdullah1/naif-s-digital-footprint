import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Users, BarChart3, Trophy } from "lucide-react";

const highlights = [
  { number: "41%", label: "Test suite speed increase", icon: Zap },
  { number: "90+", label: "Users on tools I built", icon: Users },
  { number: "25+", label: "Projects tracked", icon: BarChart3 },
  { number: "68K+", label: "Scholarship applicants beat", icon: Trophy },
];

const HighlightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px glow-line opacity-40" />

      <div className="container max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center space-y-3 group"
              >
                <Icon className="w-7 h-7 text-primary mx-auto" />
                <p className="text-4xl md:text-5xl font-display font-bold text-gradient">
                  {item.number}
                </p>
                <p className="text-sm text-muted-foreground leading-tight">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px glow-line opacity-40" />
    </section>
  );
};

export default HighlightsSection;
