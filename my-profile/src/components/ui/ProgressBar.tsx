import React from "react";
import { useIntersection } from "../../hooks/useIntersection";

interface ProgressBarProps {
  level: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  level,
  color = "from-cyan-500 to-blue-500",
}) => {
  const [ref, visible] = useIntersection(0.3);

  return (
    <div ref={ref} className="h-1 w-full rounded-full bg-white/[0.06] overflow-hidden">
      <div
        className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
        style={{ width: visible ? `${level}%` : "0%" }}
      />
    </div>
  );
};

export default ProgressBar;
