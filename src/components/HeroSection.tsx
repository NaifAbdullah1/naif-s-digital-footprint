import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Linkedin, MapPin, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="h-screen relative overflow-hidden noise-overlay">
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-[130%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center"
        style={{ y: textY, opacity }}
      >
        <div className="container max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-10 md:gap-16">
            {/* Text content */}
            <div className="flex-1 order-2 md:order-1">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-primary font-mono text-sm tracking-[0.4em] uppercase mb-6"
              >
                Finance · Technology · Strategy
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-7xl md:text-[9rem] font-display font-bold leading-[0.85] tracking-tighter"
              >
                Naif
                <br />
                <span className="text-gradient">Abdullah</span>
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="w-32 h-[2px] bg-primary mt-8 mb-6 origin-left"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-lg md:text-xl text-secondary-foreground max-w-lg leading-relaxed font-light"
              >
                Analyst at SNB Capital. CS from UW-Madison.
                <br className="hidden md:block" />
                Bridging technology and finance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground mt-8"
              >
                <a href="mailto:Naif-Abdullah@outlook.sa" className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                  Naif-Abdullah@outlook.sa
                </a>
                <a href="https://linkedin.com/in/naif-abdullah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Riyadh, Saudi Arabia
                </span>
              </motion.div>
            </div>

            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="order-1 md:order-2 flex-shrink-0"
            >
              <div className="relative w-56 h-56 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Naif Abdullah"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-muted-foreground text-xs tracking-widest uppercase font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
