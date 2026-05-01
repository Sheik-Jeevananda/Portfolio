import React from "react";
import { STATS, ABOUT_BIO } from "../../data/portfolioData";
import { FileText } from "lucide-react";

const GithubIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const About: React.FC = () => (
  <section id="about" className="relative z-10 py-32 px-6 md:px-10">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1">
          <p className="text-cyan-400 font-mono text-xs tracking-[0.25em] uppercase mb-4">01 / About</p>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-6">
            Crafting Digital <span className="text-white/20">Experiences</span>
          </h2>
          <div className="space-y-4 mb-10">
            {ABOUT_BIO.map((para, i) => (
              <p key={i} className="text-white/45 leading-relaxed text-sm md:text-base font-body">{para}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com/Sheik-Jeevananda" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full card-surface text-sm text-white/50 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300">
              <GithubIcon /> GitHub Profile
            </a>
            <a href="/resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/[0.08] border border-cyan-500/20 text-cyan-400 text-sm hover:bg-cyan-500/15 transition-all duration-300">
              <FileText size={15} /> Download Resume
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 w-full lg:w-auto lg:min-w-[280px]">
          {STATS.map(({ value, label }) => (
            <div key={label} className="group p-6 rounded-2xl card-surface hover:border-cyan-500/25 hover:bg-cyan-500/[0.03] transition-all duration-300">
              <div className="font-display text-3xl font-black text-cyan-400 group-hover:scale-110 transition-transform inline-block mb-1">{value}</div>
              <div className="text-white/35 text-xs font-mono">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
