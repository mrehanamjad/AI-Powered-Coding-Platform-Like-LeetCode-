import { Sparkles } from "lucide-react";

export const Footer = () => {
  const links = {
    platform: ["AI Features", "Practice", "Challenges", "Community"],
    resources: ["Documentation", "API", "Support", "Blog"],
    company: ["About", "Careers", "Press", "Contact"],
    legal: ["Terms", "Privacy", "Security"],
  };

  return (
    <footer className="border-t border-border/40 bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-lg font-light">
                  Code<span className="font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">Arena</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Next-generation coding platform powered by AI
              </p>
            </div>

            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-light mb-4 uppercase text-xs tracking-wider text-muted-foreground">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-light">
              © 2025 CodeArena. Crafted with precision.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-300">
                Twitter
              </a>
              <a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-300">
                GitHub
              </a>
              <a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-300">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
