import React from "react";
import { cn } from "../../utils/helpers";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}) => {
  const variants = {
    primary: "bg-cyan-500 text-black font-bold hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 hover:scale-[1.03]",
    ghost:   "text-white/60 hover:text-white border border-white/10 hover:border-white/25 bg-white/[0.03]",
    outline: "border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-sm",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-medium transition-all duration-300",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
