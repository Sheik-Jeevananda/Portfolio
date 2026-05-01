import React from "react";
import { ExternalLink } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Badge from "../ui/Badge";
import { PROJECTS } from "../../data/portfolioData";
import type { Project } from "../../types";

const GithubIcon = () => (
  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { title, description, tags, gradientFrom, gradientTo, emoji, status, githubUrl, liveUrl } = project;
  return (
    <div className="group relative p-6 rounded-3xl card-surface hover:border-white/12 transition-all duration-500 overflow-hidden">
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${gradientFrom} ${gradientTo} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-[0.07] blur-2xl transition-opacity duration-500`} />
      <div className="relative">
        <div className="flex items-start justify-between mb-5">
          <span className="text-4xl leading-none">{emoji}</span>
          <Badge variant="outline">{status}</Badge>
        </div>
        <h3 className="font-display text-xl font-black text-white/80 group-hover:text-cyan-300 transition-colors mb-2">{title}</h3>
        <p className="text-white/35 text-sm leading-relaxed mb-5 font-body">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
        </div>
        <div className="flex items-center gap-4 pt-4 border-t border-white/[0.05]">
          <a href={githubUrl} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-white/35 hover:text-white/70 transition-colors font-mono">
            <GithubIcon /> Code
          </a>
          <a href={liveUrl} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-white/35 hover:text-cyan-400 transition-colors font-mono">
            <ExternalLink size={13} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => (
  <section id="projects" className="relative z-10 py-32 px-6 md:px-10">
    <div className="max-w-6xl mx-auto">
      <SectionHeader number="03 / Projects" title="Featured" muted="Work" subtitle="Dummy projects with real tech and architecture — details coming soon" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROJECTS.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </div>
  </section>
);

export default Projects;
