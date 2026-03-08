const HighlightsSection = () => {
  const highlights = [
    { number: "41%", label: "Test suite speed improvement" },
    { number: "90+", label: "Employees using tools I built" },
    { number: "25+", label: "Projects tracked via dashboards" },
    { number: "68K+", label: "Applicants — scholarship selection" },
  ];

  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <div key={i} className="text-center space-y-2">
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient">{item.number}</p>
              <p className="text-xs md:text-sm text-muted-foreground leading-tight">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
