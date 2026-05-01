import React from "react";
import { ArrowDown } from "lucide-react";
import Button from "../ui/Button";
import { scrollToSection } from "../../utils/helpers";
import profilePhoto from "../../assets/profile.jpg";

const Hero: React.FC = () => (
  <section
    id="home"
    className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20 z-10"
  >
    {/* Profile photo circle */}
    <div className="relative mb-8">
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
        <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
      </div>
      {/* Ping ring */}
      <span className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping" style={{ animationDuration: "2.5s" }} />
    </div>

    {/* Status badge */}
    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/[0.08] border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-10">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
      </span>
      Available for Internships &amp; Full-time Roles
    </div>

    {/* Name */}
    <div className="mb-3 font-mono text-sm tracking-[0.3em] text-white/25 uppercase">
      Hi, I'm
    </div>
    <h1 className="font-display text-2xl md:text-2xl font-black tracking-tight leading-none mb-6">
      <span className="text-gradient">Sheik Jeevananda</span>
    </h1>

    {/* Role pill */}
    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
      <span className="text-xl md:text-2xl font-display font-semibold text-white/30">Full-Stack</span>
      <span className="text-xl md:text-2xl font-display font-black text-cyan-400">Developer</span>
      <span className="text-white/15 font-light">×</span>
      <span className="text-xl md:text-2xl font-display font-semibold text-white/30">MERN</span>
      <span className="text-xl md:text-2xl font-display font-black text-violet-400">Specialist</span>
    </div>

    <p className="max-w-lg text-white/40 text-sm md:text-base leading-relaxed mb-12 font-body">
      I craft scalable, production-ready web apps — blazing-fast frontends and rock-solid backends. Clean code. Great UX. End-to-end.
    </p>

    <div className="flex flex-wrap gap-4 justify-center">
      <Button variant="primary" size="lg" onClick={() => scrollToSection("projects")}>
        View My Work <span className="ml-1">→</span>
      </Button>
      <Button variant="ghost" size="lg" onClick={() => scrollToSection("contact")}>
        Get In Touch
      </Button>
    </div>

    <button
      onClick={() => scrollToSection("about")}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-xs font-mono hover:text-white/40 transition-colors"
    >
      scroll
      <ArrowDown size={14} className="animate-bounce" />
    </button>
  </section>
);

export default Hero;
