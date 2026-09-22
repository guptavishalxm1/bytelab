export interface BusinessCredential {
  id: string;
  type: string;
  label: string;
  value: string;
  identifier: string;
  description: string;
  verified: boolean;
  status: string;
  category: "tax" | "msme" | "global" | "domain" | "entity";
}

export interface LeadershipMember {
  name: string;
  role: string;
  title: string;
  bio: string;
  background: string[];
  focusAreas: string[];
  links?: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export const COMPANY_DATA = {
  name: "ByteLab Infotech",
  legalName: "VISHAL GUPTA",
  tradeName: "ByteLab Infotech",
  proprietor: "Vishal Gupta",
  shortName: "ByteLab",
  tagline: "Engineering Digital Products That Actually Work",
  subHeadline: "Technology Built Around Your Business",
  description:
    "ByteLab Infotech is a technology services and software engineering organization owned and operated by Vishal Gupta (Legal Entity: VISHAL GUPTA). We architect and build dependable web applications, mobile apps, Java/Spring Boot backend systems, databases, and business automation workflows designed around real operational requirements.",
  domain: "bytelabinfo.com",
  officialUrl: "https://bytelabinfo.com",
  primaryEmail: "connect@bytelabinfo.com",
  secondaryEmail: "vishal@bytelabinfo.com",
  supportEmail: "connect@bytelabinfo.com",
  phone: "+91 87008 74598",
  rawPhone: "+918700874598",
  gstin: "09EIIPG9483D2ZU",
  operatingHours: "Monday – Friday: 09:30 AM – 06:30 PM IST",
  establishedYear: 2024,
  headquarters: {
    state: "Uttar Pradesh",
    city: "Uttar Pradesh",
    country: "India",
    address: "Uttar Pradesh, India",
  },
  positioning: {
    motto: "Engineering first. Business outcomes second.",
    approach: "We reject template-driven development, artificial hype, and fragile quick-fixes. Every software system we build is grounded in solid architecture, clean APIs, resilient databases, and long-term maintainability.",
  },
  credentials: [
    {
      id: "gst",
      type: "GST Registration",
      label: "Goods & Services Tax (GSTIN)",
      value: "09EIIPG9483D2ZU",
      identifier: "09EIIPG9483D2ZU",
      description: "Formally registered under the Goods and Services Tax framework, Government of India (State: Uttar Pradesh) for compliant B2B/B2C business invoicing.",
      verified: true,
      status: "Active & Registered",
      category: "tax",
    },
    {
      id: "pan",
      type: "Income Tax / PAN",
      label: "Permanent Account Number (PAN)",
      value: "EIIPG9483D",
      identifier: "EIIPG9483D",
      description: "Statutory tax identification credential issued by the Income Tax Department, Government of India.",
      verified: true,
      status: "Active & Verified",
      category: "tax",
    },
    {
      id: "udyam",
      type: "Udyam Registration",
      label: "MSME Recognition",
      value: "Registered Enterprise",
      identifier: "UDYAM Registered Entity",
      description: "Recognized Micro, Small & Medium Enterprise under the Ministry of MSME, Government of India.",
      verified: true,
      status: "Formally Registered",
      category: "msme",
    },
    {
      id: "duns",
      type: "D-U-N-S Identifier",
      label: "Dun & Bradstreet Global ID",
      value: "Verified Business Identity",
      identifier: "D-U-N-S® Registered",
      description: "Global business identification credential for cross-border and corporate verification.",
      verified: true,
      status: "Enterprise Profile",
      category: "global",
    },
  ] as BusinessCredential[],
  leadership: [
    {
      name: "Vishal Gupta",
      role: "Founder & Lead Systems Architect",
      title: "Software Engineer & Technology Consultant",
      bio: "Hands-on software engineer and systems architect specializing in robust backend design, distributed Java & Spring Boot services, database architecture, and mobile engineering. Dedicated to building reliable, high-performance software that solves real operational bottlenecks for growing businesses and digital product teams.",
      background: [
        "Extensive experience architecting enterprise backends, RESTful APIs, and transaction-safe database models",
        "Deep focus on Java, Spring Boot, PostgreSQL, Kotlin Android, and modern web architectures",
        "Consultative approach working directly with business founders, SMEs, and technical leaders",
      ],
      focusAreas: [
        "Distributed Backend Architecture",
        "Database Design & Query Optimization",
        "API Design & Integration Pipelines",
        "Enterprise Business Automation",
        "Native Android & High-Fidelity Web Apps",
      ],
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com/guptavishalxm1",
        email: "connect@bytelabinfo.com",
      },
    },
  ] as LeadershipMember[],
  coreTenets: [
    {
      number: "01",
      title: "Engineering-Led Decision Making",
      description: "Technical decisions are made around long-term reliability, security, and maintainability rather than fleeting design fads.",
    },
    {
      number: "02",
      title: "Business-Focused Outcomes",
      description: "Software exists to automate operations, reduce costs, generate revenue, or streamline workflows. We build around your measurable goals.",
    },
    {
      number: "03",
      title: "Architectural Integrity",
      description: "Clean domain models, normalized databases, typed APIs, and modular structures ensure the codebase scales seamlessly without costly rewrites.",
    },
    {
      number: "04",
      title: "Total Transparency",
      description: "Clear project milestones, unvarnished communication, honest technical assessments, and transparent pricing without hidden surprises.",
    },
    {
      number: "05",
      title: "Long-Term Partnership",
      description: "Our engagement doesn't end at deployment. We provide ongoing infrastructure support, continuous maintenance, and phased iterations.",
    },
    {
      number: "06",
      title: "Practical Technology Selection",
      description: "We pick technologies because they solve real business problems predictably, securely, and efficiently — not because they are trending on social media.",
    },
  ],
  clientProfiles: [
    {
      title: "Startups & Product Builders",
      desc: "Architecting MVPs and production-grade digital products with rock-solid backends and scalable foundations.",
    },
    {
      title: "Small & Medium Enterprises",
      desc: "Digitizing operational workflows, automating repetitive manual tasks, and replacing fragmented spreadsheets.",
    },
    {
      title: "Growing Local Businesses",
      desc: "Establishing high-credibility custom web platforms, customer portals, and mobile touchpoints that drive business inquiries.",
    },
    {
      title: "Agencies & Technology Teams",
      desc: "Providing dedicated backend engineering, Java/Spring Boot development, and API integration firepower.",
    },
  ],
};
