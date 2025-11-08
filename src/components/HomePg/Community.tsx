import { MessageSquare, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Community = () => {
  const posts = [
    {
      author: "Sarah Chen",
      badge: "Top Contributor",
      content: "Just completed the 30-day challenge! The AI mentor feature was a game-changer. Highly recommend for anyone starting out.",
      metric: "234",
      metricLabel: "reactions"
    },
    {
      author: "Alex Kumar",
      badge: "Algorithm Expert",
      content: "Looking to form a study group focused on system design. DM if interested in weekly collaborative sessions.",
      metric: "89",
      metricLabel: "interested"
    },
    {
      author: "Emma Wilson",
      badge: "Interview Pro",
      content: "Cracked my dream job! This platform's mock interviews and AI feedback prepared me perfectly. Thank you community!",
      metric: "456",
      metricLabel: "congrats"
    },
  ];

  return (
    <section className="py-32 relative" id="community">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent font-bold">Community</span> First
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Learn together, grow faster. Connect with developers who share your passion.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in-slow">
            {posts.map((post, index) => (
              <Card key={index} className="border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-light">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="font-light">{post.author}</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-light">
                          {post.badge}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground font-light leading-relaxed">
                        {post.content}
                      </p>
                      
                      <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
                        <button className="flex items-center gap-2 hover:text-foreground transition-colors">
                          <MessageSquare className="h-4 w-4" />
                          <span className="font-light">Reply</span>
                        </button>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          <span className="font-light">{post.metric} {post.metricLabel}</span>
                        </div>
                      </div>
                    </div>
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
