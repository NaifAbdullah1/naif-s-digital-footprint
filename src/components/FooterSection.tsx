const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container max-w-4xl mx-auto px-6 text-center space-y-4">
        <p className="font-display text-lg">Let's connect.</p>
        <div className="flex justify-center gap-6 text-sm text-muted-foreground">
          <a href="mailto:Naif-Abdullah@outlook.sa" className="hover:text-primary transition-colors">
            Email
          </a>
          <a href="https://linkedin.com/in/naif-abdullah" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
        </div>
        <p className="text-xs text-muted-foreground/60 pt-4">
          © {new Date().getFullYear()} Naif Abdullah
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
