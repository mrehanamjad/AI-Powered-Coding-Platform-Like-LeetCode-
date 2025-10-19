import { Badge } from "@/components/ui/badge";

type Difficulty = "Easy" | "Medium" | "Hard";

interface DifficultyBadgeProps {
  difficulty: Difficulty;
}

const DifficultyBadge = ({ difficulty }: DifficultyBadgeProps) => {
  const variants = {
    Easy: "bg-difficulty-easy-bg text-difficulty-easy",
    Medium: "bg-difficulty-medium-bg text-difficulty-medium",
    Hard: "bg-difficulty-hard-bg text-difficulty-hard",
  };

  return (
    <Badge variant="secondary" className={`${variants[difficulty]} border-0 font-medium`}>
      {difficulty}
    </Badge>
  );
};

export default DifficultyBadge;
