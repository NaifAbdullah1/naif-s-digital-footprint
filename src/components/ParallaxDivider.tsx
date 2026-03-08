import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import parallaxCity from "@/assets/parallax-city.jpg";

const ParallaxDivider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="h-[60vh] relative overflow-hidden">
      <motion.img
        src={parallaxCity}
        alt=""
        className="absolute inset-0 w-full h-[130%] object-cover -top-[15%]"
        style={{ y: bgY }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/30 to-background" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center px-6"
        >
          <p className="text-2xl md:text-4xl font-display italic text-foreground/90 max-w-2xl">
            "Discipline and teamwork in all I do."
          </p>
          <span className="block mt-4 text-primary text-sm font-mono tracking-wider">
            — Former Saudi National Karate Team
          </span>
        </motion.blockquote>
      </div>
    </div>
  );
};

export default ParallaxDivider;
