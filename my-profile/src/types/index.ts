export interface NavLink { label: string; href: string; }
export type SkillCategory = "Frontend"|"Backend"|"Fullstack"|"Database"|"Language"|"Tools";
export interface Skill { name: string; icon: string; category: SkillCategory; level: number; }
export interface Project { id: number; title: string; description: string; tags: string[]; gradientFrom: string; gradientTo: string; emoji: string; status: "Live"|"WIP"|"Coming Soon"; githubUrl: string; liveUrl: string; }
export interface DsaProfile { platform: string; username: string; emoji: string; problemsSolved: string; url: string; accentFrom: string; accentTo: string; }
export interface ContactInfo { label: string; value: string; href: string | null; emoji: string; }
export interface ContactFormData { name: string; email: string; message: string; }
export interface SocialLink { label: string; url: string; icon: "github"|"linkedin"|"twitter"; }
export interface Stat { value: string; label: string; }
