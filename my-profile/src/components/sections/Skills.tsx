import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ProgressBar from "../ui/ProgressBar";
import { SKILLS } from "../../data/portfolioData";
import type { Skill } from "../../types";

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="group p-5 rounded-2xl card-surface hover:border-cyan-500/25 hover:bg-cyan-500/[0.03] transition-all duration-300">
    <div className="flex items-center gap-3 mb-4">
      <span className="text-2xl leading-none">{skill.icon}</span>
      <div className="flex-1 min-w-0">
        <div className="font-display font-bold text-white/80 group-hover:text-cyan-300 transition-colors text-sm">
          {skill.name}
        </div>
        <div className="text-white/25 text-xs font-mono">{skill.category}</div>
      </div>
      <span className="text-cyan-400/70 font-mono text-xs shrink-0">{skill.level}%</span>
    </div>
    <ProgressBar level={skill.level} />
  </div>
);

const Skills: React.FC = () => (
  <section id="skills" className="relative z-10 py-32 px-6 md:px-10">
    <div className="max-w-6xl mx-auto">
      <SectionHeader
        number="02 / Skills"
        title="Tech"
        muted="Stack"
        subtitle="Tools and technologies I use to build real-world applications"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
