import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUp } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px glow-line opacity-40" />

      <div className="container max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <p className="text-primary font-mono text-xs tracking-[0.4em] uppercase">Get in touch</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Let's <span className="text-gradient">connect</span>.
          </h2>

          <div className="flex justify-center gap-6 pt-4">
            <a
              href="mailto:Naif-Abdullah@outlook.sa"
              className="glass-panel rounded-xl px-6 py-4 flex items-center gap-3 hover:border-primary/40 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-secondary-foreground group-hover:text-foreground transition-colors">Email</span>
            </a>
            <a
              href="https://linkedin.com/in/naif-abdullah"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-xl px-6 py-4 flex items-center gap-3 hover:border-primary/40 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span className="text-secondary-foreground group-hover:text-foreground transition-colors">LinkedIn</span>
            </a>
          </div>

          <div className="pt-16 flex flex-col items-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
            <p className="text-xs text-muted-foreground/50">
              © {new Date().getFullYear()} Naif Abdullah
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
