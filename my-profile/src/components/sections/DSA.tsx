import React from "react";
import { ExternalLink } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Badge from "../ui/Badge";
import { DSA_PROFILES, DSA_TOPICS } from "../../data/portfolioData";
import type { DsaProfile } from "../../types";

const DsaCard: React.FC<{ profile: DsaProfile }> = ({ profile }) => {
  const { platform, username, emoji, problemsSolved, url, accentFrom, accentTo } = profile;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group relative block p-8 rounded-3xl card-surface hover:border-white/12 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
    >
      {/* Glow */}
      <div
        className={`absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br ${accentFrom} ${accentTo} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
      />

      {/* External link icon */}
      <ExternalLink
        size={16}
        className="absolute top-5 right-5 text-white/15 group-hover:text-white/40 transition-colors"
      />

      <div className="relative">
        <div className="text-5xl mb-5 leading-none">{emoji}</div>
        <h3 className="font-display text-xl font-black text-white/80 mb-1">{platform}</h3>
        <p className="text-white/30 font-mono text-xs mb-5">{username}</p>
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo} text-black text-xs font-bold`}
        >
          {problemsSolved} Problems Solved
        </div>
      </div>
    </a>
  );
};

const DSA: React.FC = () => (
  <section id="dsa" className="relative z-10 py-32 px-6 md:px-10">
    <div className="max-w-4xl mx-auto">
      <SectionHeader
        number="04 / DSA"
        title="Problem"
        muted="Solving"
        subtitle="Sharpening algorithmic thinking — one problem at a time"
      />

      {/* Profile cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {DSA_PROFILES.map((profile) => (
          <DsaCard key={profile.platform} profile={profile} />
        ))}
      </div>

      {/* Topics */}
      <div className="p-8 rounded-3xl card-surface">
        <h3 className="font-display font-bold text-white/60 text-sm text-center mb-6 tracking-widest uppercase font-mono">
          Topics Covered
        </h3>
        <div className="flex flex-wrap gap-2.5 justify-center">
          {DSA_TOPICS.map((topic) => (
            <Badge
              key={topic}
              className="hover:border-cyan-500/30 hover:text-cyan-400 transition-all cursor-default"
            >
              {topic}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DSA;
