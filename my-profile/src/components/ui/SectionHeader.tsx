import React from "react";

interface SectionHeaderProps {
  number: string;
  title: string;
  muted?: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  muted,
  subtitle,
}) => (
  <div className="text-center mb-16">
    <p className="text-cyan-400 font-mono text-xs tracking-[0.25em] uppercase mb-4">
      {number}
    </p>
    <h2 className="font-display text-4xl md:text-5xl font-black mb-3 tracking-tight">
      {title}{" "}
      {muted && <span className="text-white/20">{muted}</span>}
    </h2>
    {subtitle && (
      <p className="text-white/40 text-sm max-w-md mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;
