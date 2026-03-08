import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Mail, MapPin } from "lucide-react";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const navBg = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12"
      style={{
        backgroundColor: useTransform(navBg, (v) =>
          `hsla(220, 30%, 6%, ${v * 0.9})`
        ),
        backdropFilter: useTransform(navBg, (v) =>
          `blur(${v * 20}px)`
        ),
      }}
    >
      <div className="container max-w-6xl mx-auto flex items-center justify-between">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-display text-lg font-semibold tracking-tight"
        >
          N<span className="text-primary">.</span>A
        </motion.span>

        <div className="flex items-center gap-5">
          <a
            href="mailto:Naif-Abdullah@outlook.sa"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/naifabdullah1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
