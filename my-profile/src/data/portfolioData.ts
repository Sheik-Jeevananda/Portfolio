import type {
  NavLink,
  Skill,
  Project,
  DsaProfile,
  ContactInfo,
  SocialLink,
  Stat,
} from "../types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "DSA",      href: "#dsa" },
  { label: "Contact",  href: "#contact" },
];

export const SKILLS: Skill[] = [
  {name:"C++", icon:"⚙️" , category:"Language" , level:90},
  {name:"Python", icon:"🐍" , category:"Language" , level:89},
  {name:"Javascript", icon:"⚡" , category:"Language" , level:87},
  {name:"C", icon:"🔷" , category:"Language" , level:93},
  { name: "React.js",      icon: "⚛️", category: "Frontend",  level: 90 },
  { name: "Next.js",       icon: "▲",  category: "Fullstack", level: 78 },
  { name: "Tailwind CSS",  icon: "🎨", category: "Frontend",  level: 92 },
  { name: "TypeScript",    icon: "TS", category: "Language",  level: 72 },
  { name: "JavaScript",    icon: "JS", category: "Language",  level: 88 },
  { name: "Node.js",       icon: "🟢", category: "Backend",   level: 82 },
  { name: "Express.js",    icon: "⚡", category: "Backend",   level: 80 },
  { name: "MongoDB",       icon: "🍃", category: "Database",  level: 85 },
  { name: "PostgreSQL",    icon: "🐘", category: "Database",  level: 75 },
  { name: "MySQL",         icon: "🗄️", category: "Database",  level: 78 },
  { name: "REST APIs",     icon: "🔌", category: "Backend",   level: 87 },
  { name: "Git & GitHub",  icon: "🔗", category: "Tools",     level: 85 },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Social-Media Web Application",
    description:
      "A full-stack social platform for developers. Real-time chat, project collaboration, and a live code editor. Built with MERN stack",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    gradientFrom: "from-cyan-500",
    gradientTo: "to-blue-600",
    emoji: "💬",
    status: "Coming Soon",
    githubUrl: "https://github.com/Sheik-Jeevananda/Social-Web-App",
    liveUrl: "https://social-web-app-sage.vercel.app/",
  },
  {
    id: 2,
    title: "Paytm",
    description:
      "It's Sample MERN Stack App . Understanded How API's Works.",
    tags: ["Node.js", "MongoDB", "Express.js", "React.js"],
    gradientFrom: "from-violet-500",
    gradientTo: "to-purple-700",
    emoji: "🔌",
    status: "Coming Soon",
    githubUrl: "https://github.com/Sheik-Jeevananda/paytm-app.git",
    liveUrl: "#",
  },
  

  {
    id: 3,
    title: "AI Study Planner",
    description:
      "Open AI Project , which will Generate Study Plan on Syllabus pdf ",
    tags: ["React", "Express", "MongoDB", "Node.js" , "Open AI"],
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-600",
    emoji: "📋",
    status: "Coming Soon",
    githubUrl: "https://github.com/Sheik-Jeevananda/AI-Study-Planner.git",
    liveUrl: "https://ai-study-planner-two-rosy.vercel.app/",
  },
];

export const DSA_PROFILES: DsaProfile[] = [
  {
    platform:       "LeetCode",
    username:       "Sheik-Jeevanada",
    emoji:          "🧩",
    problemsSolved: "250+",
    url:            "https://leetcode.com/u/Sheik_Jeevananda/",
    accentFrom:     "from-yellow-400",
    accentTo:       "to-orange-500",
  },
  {
    platform:       "Naukri Code 360",
    username:       "Sheik-Jeevananda",
    emoji:          "🏆",
    problemsSolved: "150+",
    url:            "https://www.naukri.com/code360/profile/81fd5b40-f8c8-4862-aaf3-164676d0bb57",
    accentFrom:     "from-blue-400",
    accentTo:       "to-indigo-600",
  },
  {
    platform:       "Geek for Geeks",
    username:       "Sheik Jeevannda",
    emoji:          "🏆",
    problemsSolved: "20+",
    url:            "https://www.geeksforgeeks.org/profile/sheikjee5aow?tab=activity",
    accentFrom:     "from-blue-400",
    accentTo:       "to-indigo-600",
  }
];

export const DSA_TOPICS: string[] = [
  "Arrays",
  "Linked Lists",
  "Trees",
  "Graphs",
  "Dynamic Programming",
  "Recursion",
  "Binary Search",
  "Hashing",
  "Stacks & Queues",
  "Backtracking",
  "Sliding Window",
  "Two Pointers",
];

export const CONTACT_INFO: ContactInfo[] = [
  { label: "Email",    value: "sheikjeevananda@gmail.com",              href: "sheikjeevananda@gmail.com",               emoji: "📧" },
  { label: "GitHub",   value: "https://github.com/Sheik-Jeevananda",    href: "https://github.com/Sheik-Jeevananda",    emoji: "💻" },
  { label: "LinkedIn", value: "https://www.linkedin.com/in/jeevananda-sheik-083381325/",href: "https://www.linkedin.com/in/jeevananda-sheik-083381325/",               emoji: "🔗" },
  { label: "Contact", value: "+91 9573458377",                  href: null,                                 emoji: "📞" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub",   url: "https://github.com/Sheik-Jeevananda", icon: "github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/jeevananda-sheik-083381325/",            icon: "linkedin" },
];

export const STATS: Stat[] = [
  { value: "10+",  label: "Projects Built" },
  { value: "400+", label: "DSA Problems" },
  { value: "2+",   label: "Years Coding" },
  { value: "5+",   label: "Tech Stacks" },
];

export const ABOUT_BIO = [
  "I'm a MERN stack developer with a passion for building end-to-end web solutions. I love transforming complex problems into simple, elegant, and intuitive applications.",
  "Beyond coding, I actively sharpen my problem-solving skills through Data Structures & Algorithms on LeetCode and Naukri Code 360. Strong fundamentals make better engineers.",
];
