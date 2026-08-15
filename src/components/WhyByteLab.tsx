import React from "react";
import { ShieldCheck, Target, Eye, Maximize2, Handshake, Wrench } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

const tenets = [
  {
    icon: <Wrench className="w-5 h-5 text-blue-600" />,
    title: "Engineering-Led",
    desc: "Technical decisions are made around long-term reliability, maintainability, and data integrity rather than superficial trends.",
  },
  {
    icon: <Target className="w-5 h-5 text-blue-600" />,
    title: "Business-Focused",
    desc: "Every architecture and database schema is mapped directly to real operational goals and business workflow requirements.",
  },
  {
    icon: <Eye className="w-5 h-5 text-blue-600" />,
    title: "Transparent & Accountable",
    desc: "Clear scope boundaries, predictable milestones, unvarnished technical advice, and transparent pricing with zero lock-in.",
  },
  {
    icon: <Maximize2 className="w-5 h-5 text-blue-600" />,
    title: "Scalable Architecture",
    desc: "Systems are designed with modular service boundaries and normalized schemas ready for exponential user and transaction growth.",
  },
  {
    icon: <Handshake className="w-5 h-5 text-blue-600" />,
    title: "Long-Term Partnership",
    desc: "We stay engaged post-deployment with server hardening, database tuning, security patches, and incremental feature delivery.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    title: "Practical Technology",
    desc: "We choose technologies like Java, Spring Boot, PostgreSQL, and Kotlin because they solve business problems reliably and securely.",
  },
];

export default function WhyByteLab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tenets.map((item) => (
        <div
          key={item.title}
          className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
        >
          <div>
            <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg inline-block">
              {item.icon}
            </div>

            <h3 className="text-base font-bold text-slate-900 mt-4">{item.title}</h3>

            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
