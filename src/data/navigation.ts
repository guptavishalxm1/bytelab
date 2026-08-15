export interface NavLink {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavGroup {
  title: string;
  links: NavLink[];
}

export const MAIN_NAV: NavLink[] = [
  { title: "Services", href: "/services", description: "Custom software, web applications, mobile apps, and Java backends." },
  { title: "Selected Work", href: "/work", description: "Real case studies across logistics, healthcare, and enterprise ERP." },
  { title: "Technology", href: "/technology", description: "Java, Spring Boot, Kotlin, PostgreSQL, Linux, and modern web." },
  { title: "About", href: "/about", description: "Engineering philosophy, leadership, and company standards." },
  { title: "Business Info", href: "/business", description: "Official corporate credentials, GST, Udyam, and D-U-N-S verification." },
  { title: "Contact", href: "/contact", description: "Start a project or request technical consultation." },
];

export const SERVICE_NAV_LINKS: NavLink[] = [
  { title: "Web Application Development", href: "/services/web-development", description: "Scalable React & Next.js web applications and business portals." },
  { title: "Mobile App Development", href: "/services/mobile-development", description: "Native Android (Kotlin & Jetpack Compose) and connected mobile apps." },
  { title: "Custom Software Development", href: "/services/software-development", description: "Tailored enterprise software designed around operational workflows." },
  { title: "Backend & API Development", href: "/services/backend-api", description: "Industrial-strength Java & Spring Boot backend architectures." },
  { title: "Database & System Architecture", href: "/services/database-architecture", description: "Normalized PostgreSQL schemas and high-throughput data models." },
  { title: "Cloud & Server Deployment", href: "/services/cloud-deployment", description: "Hardened Linux VPS, CI/CD automation, and production monitoring." },
  { title: "Business Automation", href: "/services/automation", description: "Automated batch reconciliation, webhook bridges, and notification pipelines." },
  { title: "AI & Intelligent Applications", href: "/services/ai-solutions", description: "Practical LLM integrations, document parsing, and workflow assistants." },
];

export const FOOTER_SECTIONS: NavGroup[] = [
  {
    title: "Engineering Services",
    links: SERVICE_NAV_LINKS.slice(0, 5),
  },
  {
    title: "Capabilities & Infrastructure",
    links: [
      ...SERVICE_NAV_LINKS.slice(5),
      { title: "Technology Stack", href: "/technology" },
      { title: "Selected Case Studies", href: "/work" },
    ],
  },
  {
    title: "Organization & Trust",
    links: [
      { title: "About ByteLab", href: "/about" },
      { title: "Business Information & Verification", href: "/business" },
      { title: "Start a Project", href: "/contact" },
      { title: "Official Domain Verification", href: "/business#domain-verification" },
    ],
  },
  {
    title: "Compliance & Legal",
    links: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
      { title: "Cookie Policy", href: "/cookies" },
      { title: "Corporate Credentials", href: "/business" },
    ],
  },
];
