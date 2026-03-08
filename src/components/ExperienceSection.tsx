interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "SNB Capital",
    role: "Analyst — Channels Development",
    period: "Aug 2025 — Present",
    location: "Riyadh, Saudi Arabia",
    bullets: [
      "Led market & competitor scans and presented findings to Heads & CTO, delivering strategic insights that shaped the department's digital roadmap.",
      "Built a Power BI dashboard consolidating lifecycle data for 25+ projects, reducing status meetings by 40%.",
      "Designed wireframes and data mappings for a 360° holdings view, unifying local, international, and GTN accounts.",
      "Expanded and prioritized a backlog of 20+ enhancements, establishing clear priorities for release cycles.",
    ],
  },
  {
    company: "The J.M. Smucker Co.",
    role: "Software Developer",
    period: "May 2023 — Aug 2023",
    location: "Orrville, Ohio",
    bullets: [
      "Reduced test suite runtime by 41% through optimization of automated testing tools, increasing IS department productivity.",
      "Restructured cookie consent banners to align with CCPA regulations, reducing legal risk and enhancing UX.",
      "Collaborated with design teams to implement brand styling for DunkinAtHome.com through SCSS and Pimcore CMS.",
    ],
  },
  {
    company: "UW-Madison — Division of IT",
    role: "Full Stack Web Developer",
    period: "Apr 2022 — Jan 2024",
    location: "Madison, Wisconsin",
    bullets: [
      "Built a web utility used by 90+ employees with ReactJS, NodeJS, MySQL — replacing legacy scheduling systems.",
      "Contributed to Agile Scrum sprints, interfacing directly with stakeholders to deliver features iteratively.",
      "Created a comprehensive ReactJS training program, accelerating onboarding and improving code quality across the team.",
    ],
  },
  {
    company: "UW-Madison — Division of IT",
    role: "Quality Assurance Manager",
    period: "Dec 2022 — Oct 2023",
    location: "Madison, Wisconsin",
    bullets: [
      "Oversaw 90+ student employees through coaching, training, and quality assessments across phone, chat, and email channels.",
      "Spearheaded coordination during system failures, liaising with technologists to maintain seamless operations.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Experience</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <div key={i} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
              <div className="space-y-1">
                <p className="text-primary text-sm font-medium">{exp.period}</p>
                <p className="text-muted-foreground text-xs">{exp.location}</p>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-display font-semibold">{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="text-secondary-foreground text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/40">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
