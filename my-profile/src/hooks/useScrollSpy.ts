import { useState, useEffect } from "react";

const SECTIONS = ["home", "about", "skills", "projects", "dsa", "contact"];

export function useScrollSpy(): string {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(SECTIONS[i]);
          return;
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}
