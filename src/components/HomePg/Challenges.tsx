import { Calendar, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Challenges = () => {
  const challenges = [
    {
      title: "30 Days of Code",
      description: "Daily problems progressing from basics to advanced concepts",
      participants: "12.5K",
      difficulty: "Mixed",
      duration: "30 days",
    },
    {
      title: "Algorithm Marathon",
      description: "Intensive deep-dive into core algorithms and patterns",
      participants: "8.2K",
      difficulty: "Advanced",
      duration: "60 days",
    },
    {
      title: "Interview Prep Sprint",
      description: "Real interview questions from FAANG companies",
      participants: "15.1K",
      difficulty: "Intermediate",
      duration: "21 days",
    },
  ];

  return (
    <section className="py-32 relative" id="challenges">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent font-bold">Challenge</span> Yourself
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Structured programs designed to push your boundaries and accelerate growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in-slow">
            {challenges.map((challenge, index) => (
              <Card key={index} className="border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="font-light border-primary/30 text-primary">
                        {challenge.difficulty}
                      </Badge>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        <span className="font-light">{challenge.duration}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-light">{challenge.title}</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span className="font-light">{challenge.participants}</span>
                    </div>
                    <Zap className="h-4 w-4 text-primary/60" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
