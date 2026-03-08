import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Trophy } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 relative">
      <div className="container max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-mono text-xs tracking-[0.4em] uppercase mb-4">Background</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold">Education</h2>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {/* Degree card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel rounded-xl p-8 hover:border-primary/20 transition-all duration-500"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold">University of Wisconsin–Madison</h3>
                <p className="text-muted-foreground text-sm">BS Computer Science · 2020 — 2023</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-secondary rounded-lg px-4 py-2.5">
                <span className="text-primary font-mono font-semibold text-lg">3.76</span>
                <span className="text-muted-foreground text-xs">/ 4.00 GPA</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary rounded-lg px-4 py-2.5">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-secondary-foreground text-sm font-medium">Dean's List ×3</span>
              </div>
            </div>
          </motion.div>

          {/* Scholarship card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel rounded-xl p-8 hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="flex items-start gap-4 mb-6 relative">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold">SACM Scholarship</h3>
                <p className="text-muted-foreground text-sm">Custodian of the Two Holy Mosques Program</p>
              </div>
            </div>

            <p className="text-secondary-foreground text-sm leading-relaxed relative">
              Selected from <span className="text-primary font-semibold">68,000+</span> applicants 
              for a full scholarship to complete an undergraduate degree at a top US university.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
