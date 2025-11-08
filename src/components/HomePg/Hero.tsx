import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Cpu, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Minimal background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Badge */}
          <div className="flex justify-center animate-fade-in">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-background/30 backdrop-blur-xl border border-border/20">
              <div className="relative">
                <Cpu className="h-4 w-4 text-primary animate-pulse-subtle" />
              </div>
              <span className="text-sm font-light text-muted-foreground">AI-Powered Learning Platform</span>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-8 text-center animate-fade-in-slow">
            <h1 className="text-6xl md:text-8xl font-light leading-[1.1] tracking-tight">
              Master Code<br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent font-bold">With Intelligence</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Experience next-generation coding practice powered by AI. Personalized guidance, 
              intelligent challenges, and real-time feedback at every step.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="group px-10 py-6 text-base font-medium rounded-full">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="px-10 py-6 text-base font-light rounded-full border-border/40 hover:border-primary/30">
                <Sparkles className="mr-2 h-5 w-5" />
                Explore AI Features
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto pt-16 animate-slide-in">
            {[
              { value: "1000+", label: "Problems", icon: Zap },
              { value: "AI", label: "Powered", icon: Cpu },
              { value: "100K+", label: "Developers", icon: Sparkles }
            ].map((stat, i) => (
              <div key={i} className="space-y-3 text-center group cursor-default">
                <stat.icon className="h-5 w-5 mx-auto text-primary/60 group-hover:text-primary transition-colors" />
                <div className="text-4xl font-light bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm font-light text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
