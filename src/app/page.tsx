import { AIFeatures } from "@/components/HomePg/AIFeatures";
import { Challenges } from "@/components/HomePg/Challenges";
import { Community } from "@/components/HomePg/Community";
import { Features } from "@/components/HomePg/Features";
import { Hero } from "@/components/HomePg/Hero";
import { Leaderboard } from "@/components/HomePg/Leaderboard";
import { Footer } from "react-day-picker";

export default function Home() {
  return (
     <div className="min-h-screen">
      <Hero />
      <AIFeatures />
      <Features />
      <Challenges />
      <Community />
      <Leaderboard />
      <Footer />
    </div>
  );
}
