import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../data/portfolioData";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { scrollToSection } from "../../utils/helpers";
import profilePhoto from "../../assets/profile.jpg";

const GithubIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Navbar: React.FC = () => {
  const activeSection = useScrollSpy();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (href: string) => {
    scrollToSection(href.replace("#", ""));
    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050a14]/80 border-b border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          {/* Logo: Photo + Brand */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-cyan-500/40 group-hover:border-cyan-400 transition-colors duration-300 shrink-0">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-display font-black text-lg tracking-tight">
              <span className="text-cyan-400">&lt;</span>Dev<span className="text-cyan-400">/&gt;</span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={label}
                  onClick={() => handleNav(href)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/25"
                      : "text-white/45 hover:text-white/80"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          <a
            href="https://github.com/Sheik-Jeevananda"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-sm text-white/60 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/[0.06] transition-all duration-300"
          >
            <GithubIcon size={15} /> GitHub
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/60 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050a14]/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 pt-16">
          {/* Profile photo in mobile menu */}
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500/40 mb-2">
            <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
          </div>
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNav(href)}
              className="font-display text-2xl font-bold text-white/60 hover:text-cyan-400 transition-colors"
            >
              {label}
            </button>
          ))}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500/25 text-cyan-400 text-sm"
          >
            <GithubIcon size={16} /> GitHub
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
