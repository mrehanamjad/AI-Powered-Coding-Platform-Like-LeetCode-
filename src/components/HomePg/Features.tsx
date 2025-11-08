import { Code, Globe, Layers, Shield } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Multi-Language Support",
      description: "Practice in Python, Java, C++, JavaScript, and 10+ languages with intelligent syntax support."
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with developers worldwide. Share knowledge and grow together."
    },
    {
      icon: Layers,
      title: "Structured Learning",
      description: "Follow curated paths from fundamentals to advanced topics with progressive difficulty."
    },
    {
      icon: Shield,
      title: "Enterprise Ready",
      description: "Used by Fortune 500 companies for technical assessments and team development."
    }
  ];

  return (
    <section id="practice" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="space-y-4 group cursor-default animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-12 h-12">
                  <feature.icon className="h-6 w-6 text-primary/60 group-hover:text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors" />
                </div>
                <h3 className="text-lg font-light">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
