import React from "react";
import { Search, Compass, Code2, ShieldCheck, Rocket, LifeBuoy } from "lucide-react";

interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Discovery & Requirements Analysis",
    description:
      "We unpack your business logic, operational constraints, user personas, and data volume expectations before writing a single line of code.",
    deliverables: ["Requirements Specification", "Domain Data Model", "Project Scope Document"],
    icon: <Search className="w-5 h-5 text-blue-600" />,
  },
  {
    number: "02",
    title: "Plan",
    subtitle: "System & Architecture Design",
    description:
      "We design the database schemas, API contracts (OpenAPI), UI component hierarchy, security protocols, and infrastructure roadmap.",
    deliverables: ["ER Diagrams", "REST API Contracts", "Infrastructure Topology"],
    icon: <Compass className="w-5 h-5 text-blue-600" />,
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Iterative Milestone Engineering",
    description:
      "We implement clean, typed code across backend services, database migrations, and responsive frontends with weekly milestone demos.",
    deliverables: ["Working Increments", "Git Version Control", "Weekly Progress Demos"],
    icon: <Code2 className="w-5 h-5 text-blue-600" />,
  },
  {
    number: "04",
    title: "Validate",
    subtitle: "Quality, Security & Performance QA",
    description:
      "Rigorous unit testing, database query profiling, edge-case validation, security vulnerability scanning, and mobile responsiveness audits.",
    deliverables: ["Test Execution Reports", "Security Hardening", "Query Optimization"],
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
  },
  {
    number: "05",
    title: "Launch",
    subtitle: "Production Deployment & Handover",
    description:
      "Zero-downtime server deployment, SSL configuration, automated backups, DNS setup, and complete client technical handover.",
    deliverables: ["Production Deployment", "Automated Backups", "Source Code & IP Handover"],
    icon: <Rocket className="w-5 h-5 text-blue-600" />,
  },
  {
    number: "06",
    title: "Support",
    subtitle: "Ongoing Maintenance & SLA",
    description:
      "Continuous server monitoring, OS security patches, bug fixes, database index tuning, and roadmap iterations as your business scales.",
    deliverables: ["Uptime Monitoring", "Scheduled Maintenance", "Phased Feature Expansion"],
    icon: <LifeBuoy className="w-5 h-5 text-blue-600" />,
  },
];

export default function ProcessTimeline() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {steps.map((step) => (
        <div
          key={step.number}
          className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black font-mono text-slate-300">
                {step.number}
              </span>
              <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg">
                {step.icon}
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-4">{step.title}</h3>
            <div className="text-xs font-mono text-blue-600 font-semibold">{step.subtitle}</div>

            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
              {step.description}
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="text-[11px] font-mono uppercase text-slate-400 mb-1.5">
              Key Deliverables
            </div>
            <ul className="space-y-1">
              {step.deliverables.map((deliv) => (
                <li key={deliv} className="text-xs text-slate-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
