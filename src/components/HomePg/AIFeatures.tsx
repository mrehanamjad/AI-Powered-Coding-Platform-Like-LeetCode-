import { Bot, Sparkles, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AIFeatures = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Assistant",
      description: "Get real-time help from your personal coding mentor. Ask questions, get hints, and learn faster with intelligent guidance."
    },
    {
      icon: Sparkles,
      title: "Smart Suggestions",
      description: "Receive personalized problem recommendations based on your skill level, learning pace, and interests."
    },
    {
      icon: Target,
      title: "Adaptive Learning",
      description: "AI analyzes your performance and adjusts difficulty dynamically to keep you in the optimal learning zone."
    },
    {
      icon: TrendingUp,
      title: "Progress Insights",
      description: "Detailed analytics and AI-driven insights help you understand your strengths and areas for improvement."
    }
  ];

  return (
    <section id="ai" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/30 backdrop-blur-xl border border-border/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-light text-muted-foreground">Powered by AI</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight">
              Your <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent font-bold">Intelligent</span> Coding Partner
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Advanced AI technology that understands your learning journey and adapts to help you succeed
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-slow">
            {features.map((feature, index) => (
              <Card key={index} className="border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 group cursor-default">
                <CardContent className="p-8 space-y-4">
                  <div className="relative w-12 h-12">
                    <feature.icon className="h-6 w-6 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-110" />
                    <div className="absolute inset-0 bg-primary/10 rounded-lg" />
                  </div>
                  <h3 className="text-2xl font-light">{feature.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Chatbot Highlight */}
          <div className="border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 p-12 text-center space-y-6 animate-slide-in">
            <div className="flex justify-center">
              <div className="relative">
                <Bot className="h-16 w-16 text-primary animate-float" />
                <div className="absolute inset-0 bg-primary/20 blur-2xl" />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl font-light">
                Meet Your <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent font-bold">AI Companion</span>
              </h3>
              <p className="text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                Available 24/7 to answer questions, explain concepts, debug code, and guide you through challenges. 
                It's like having a senior developer by your side, always ready to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
