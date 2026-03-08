import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlight: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "SNB Capital",
    role: "Analyst — Channels Development",
    period: "2025 — Present",
    location: "Riyadh",
    highlight: "Digital strategy & product",
    bullets: [
      "Led market & competitor scans presented to Heads & CTO, shaping the department's digital roadmap.",
      "Built Power BI dashboard consolidating 25+ project lifecycles, cutting status meetings by 40%.",
      "Designed wireframes for a 360° holdings view unifying local, international, and GTN accounts.",
      "Managed backlog of 20+ enhancements, streamlining release planning.",
    ],
  },
  {
    company: "The J.M. Smucker Co.",
    role: "Software Developer",
    period: "2023",
    location: "Ohio",
    highlight: "Performance & compliance",
    bullets: [
      "Reduced test suite runtime by 41% through automated testing optimization.",
      "Restructured cookie consent for CCPA compliance, reducing legal risk.",
      "Implemented brand styling for DunkinAtHome.com via SCSS and Pimcore CMS.",
    ],
  },
  {
    company: "UW-Madison IT",
    role: "Full Stack Web Developer",
    period: "2022 — 2024",
    location: "Wisconsin",
    highlight: "Building tools at scale",
    bullets: [
      "Built web utility used by 90+ employees (React, Node, MySQL) replacing legacy systems.",
      "Created ReactJS training program, accelerating onboarding and code quality.",
      "Agile Scrum contributor interfacing directly with stakeholders.",
    ],
  },
  {
    company: "UW-Madison IT",
    role: "Quality Assurance Manager",
    period: "2022 — 2023",
    location: "Wisconsin",
    highlight: "Leadership & operations",
    bullets: [
      "Oversaw 90+ student employees across phone, chat, and email support.",
      "Led coordination during system failures, maintaining seamless operations.",
    ],
  },
];

const ExperienceCard = ({ exp, index }: { exp: ExperienceItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary -translate-x-1/2 hidden md:block z-10" />
      <div className="absolute left-0 md:left-1/2 top-3 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

      <div className={`md:w-[45%] ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
        <div className="glass-panel rounded-xl p-6 md:p-8 hover:border-primary/20 transition-all duration-500 group">
          <div className="flex items-center justify-between mb-4">
            <span className="text-primary font-mono text-xs tracking-wider">{exp.period}</span>
            <span className="text-muted-foreground text-xs">{exp.location}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-display font-semibold mb-1 group-hover:text-gradient transition-all duration-300">
            {exp.role}
          </h3>
          <p className="text-muted-foreground text-sm mb-1">{exp.company}</p>
          <p className="text-primary/70 text-xs font-mono uppercase tracking-wider mb-5">{exp.highlight}</p>

          <ul className="space-y-3">
            {exp.bullets.map((bullet, j) => (
              <li
                key={j}
                className="text-secondary-foreground text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/40"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="py-28 relative">
      <div className="container max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-mono text-xs tracking-[0.4em] uppercase mb-4">Career</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12 md:space-y-16 relative">
          {/* Center line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
