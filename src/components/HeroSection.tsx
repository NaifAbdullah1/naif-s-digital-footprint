import { Mail, Phone, Globe, Linkedin, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(42 78% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(42 78% 55%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="space-y-6">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm">
            Product & Technology
          </p>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tight">
            Naif<br />
            <span className="text-gradient">Abdullah</span>
          </h1>
          
          <div className="w-20 h-[2px] bg-primary" />
          
          <p className="text-lg md:text-xl text-secondary-foreground max-w-xl leading-relaxed font-light">
            Analyst at SNB Capital. CS graduate from UW-Madison. 
            Bridging technology and finance to drive digital strategy and product innovation.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground pt-2">
            <a href="mailto:Naif-Abdullah@outlook.sa" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              Naif-Abdullah@outlook.sa
            </a>
            <a href="https://linkedin.com/in/naif-abdullah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Riyadh, Saudi Arabia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
