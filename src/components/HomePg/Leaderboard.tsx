import { TrendingUp } from "lucide-react";

export const Leaderboard = () => {
  const topUsers = [
    { rank: 1, name: "Alice Chen", score: 2845, badge: "Legend" },
    { rank: 2, name: "Marcus Wright", score: 2720, badge: "Master" },
    { rank: 3, name: "Sofia Rodriguez", score: 2650, badge: "Expert" },
    { rank: 4, name: "James Kim", score: 2580, badge: "Expert" },
    { rank: 5, name: "Priya Sharma", score: 2510, badge: "Expert" },
  ];

  return (
    <section className="py-32 relative" id="leaderboard">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight">
              Global <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent font-bold">Rankings</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Compete with the world's best developers
            </p>
          </div>

          <div className="space-y-3 animate-fade-in-slow">
            {topUsers.map((user, index) => (
              <div
                key={user.rank}
                className="border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 p-6 cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-light
                      ${user.rank === 1 ? 'bg-primary/20 text-primary' : 
                        user.rank === 2 ? 'bg-primary/10 text-primary/80' : 
                        user.rank === 3 ? 'bg-primary/5 text-primary/60' : 
                        'bg-secondary/50 text-muted-foreground'}`}
                    >
                      {user.rank}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-light">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="font-light">{user.name}</div>
                      <div className="text-xs text-muted-foreground font-light">{user.badge}</div>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-3">
                    <div>
                      <div className="text-2xl font-light bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">{user.score}</div>
                      <div className="text-xs text-muted-foreground font-light">points</div>
                    </div>
                    <TrendingUp className="h-4 w-4 text-primary/60" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
