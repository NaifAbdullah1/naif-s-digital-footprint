const skillCategories = [
  {
    title: "Product & Leadership",
    skills: [
      "Market & Competitor Analysis",
      "Roadmap Definition",
      "Agile Methodologies",
      "UAT & Sanity Testing",
      "Stakeholder Engagement",
      "Data Analysis & Dashboarding",
    ],
  },
  {
    title: "Technical",
    skills: [
      "ReactJS",
      "NodeJS",
      "MySQL",
      "Power BI (DAX)",
      "Figma & Wireframing",
      "Java / Python / C++",
      "Jira / Trello",
      "Git",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Skills</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, i) => (
            <div key={i}>
              <h3 className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md border border-border hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
