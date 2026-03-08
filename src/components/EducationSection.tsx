import { GraduationCap, Award, Trophy } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-24 bg-card relative">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Education</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
          <div className="space-y-1">
            <p className="text-primary text-sm font-medium">2020 — 2023</p>
            <p className="text-muted-foreground text-xs">Madison, Wisconsin</p>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-display font-semibold">University of Wisconsin–Madison</h3>
              <p className="text-muted-foreground">Bachelor of Science in Computer Science</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2 text-sm">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-secondary-foreground font-medium">GPA 3.76 / 4.00</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2 text-sm">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-secondary-foreground font-medium">Dean's List ×3</span>
              </div>
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <div className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-lg">SACM Scholarship Recipient</h4>
                  <p className="text-secondary-foreground text-sm leading-relaxed mt-1">
                    Chosen out of 68,000+ applicants for the Custodian of the Two Holy Mosques Scholarship Program 
                    to pursue an undergraduate degree at a top US university.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
