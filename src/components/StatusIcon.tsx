import { CheckCircle2, Circle, CircleDot } from "lucide-react";

type Status = "solved" | "attempted" | "unsolved";

interface StatusIconProps {
  status: Status;
}

const StatusIcon = ({ status }: StatusIconProps) => {
  const icons = {
    solved: <CheckCircle2 className="h-5 w-5 text-status-solved" />,
    attempted: <CircleDot className="h-5 w-5 text-status-attempted" />,
    unsolved: <Circle className="h-5 w-5 text-status-unsolved" />,
  };

  return icons[status];
};

export default StatusIcon;
