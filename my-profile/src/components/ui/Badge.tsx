import React from "react";
import { cn } from "../../utils/helpers";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "brand" | "outline";
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = "default", className }) => {
  const variants = {
    default: "bg-white/5 border border-white/10 text-white/50",
    brand:   "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400",
    outline: "border border-white/15 text-white/40",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-mono",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
