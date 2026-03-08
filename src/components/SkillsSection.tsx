import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Product & Leadership",
    skills: [
      "Market & Competitor Analysis",
      "Roadmap Definition",
      "Agile Methodologies",
      "UAT & Sanity Testing",
      "Stakeholder Engagement",
      "Data Analysis",
      "Dashboarding",
      "Go-to-Market Strategy",
    ],
  },
  {
    title: "Technical",
    skills: [
      "ReactJS",
      "NodeJS",
      "MySQL",
      "Power BI (DAX)",
      "Figma",
      "Wireframing",
      "Java",
      "Python",
      "C++",
      "Jira",
      "Git",
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 relative bg-card">
      <div className="container max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-mono text-xs tracking-[0.4em] uppercase mb-4">Toolkit</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold">Skills</h2>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-16">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.2 + j * 0.05 }}
                    className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
