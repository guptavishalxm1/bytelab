import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Code2, Server, CheckCircle2, ArrowRight, UserCheck, Terminal, Cpu, Layers } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import WhyByteLab from "@/components/WhyByteLab";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Engineering Philosophy & Leadership",
  description:
    "Learn about ByteLab Infotech, our engineering-first philosophy, founder-led technical leadership, and commitment to building reliable, scalable software systems.",
  alternates: {
    canonical: "https://bytelabinfotech.in/about",
  },
};

export default function AboutPage() {
  const leader = COMPANY_DATA.leadership[0];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About ByteLab Infotech",
    description: COMPANY_DATA.description,
    mainEntity: {
      "@type": "Organization",
      name: COMPANY_DATA.name,
      url: COMPANY_DATA.officialUrl,
      foundingDate: `${COMPANY_DATA.establishedYear}`,
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      <JsonLd data={aboutSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "About ByteLab", href: "/about", current: true }]} />

      {/* Hero Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
          <Terminal className="w-4 h-4" />
          <span>About ByteLab Infotech</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
          Engineering Digital Products That Actually Work
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          ByteLab Infotech was established on a simple premise: businesses do not need fragile, template-built websites or overcomplicated hype. They need well-architected, dependable software systems designed around real operational workflows.
        </p>
      </section>

      {/* Engineering Philosophy Statement */}
      <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <div className="text-xs font-mono font-bold uppercase text-blue-600">
              Core Identity
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              Engineering First. <br />Business Outcomes Second.
            </h2>
            <div className="mt-4 p-3 bg-slate-50 border border-slate-100 rounded-lg text-xs font-mono text-slate-600">
              Registered Entity • Domain: <span className="font-semibold text-slate-900">bytelabinfotech.in</span>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              Too many software projects fail not because of visual design, but because the underlying architecture was treated as an afterthought. Databases with unindexed schemas buckle under load; backends with tightly coupled logic become impossible to modify; and mobile apps without offline caching fail in the field.
            </p>
            <p>
              At ByteLab Infotech, we reverse that paradigm. We prioritize <strong>domain modeling, clean API contracts, database transaction guarantees, and modular service boundaries</strong>. When the foundation is solid, user interfaces are fast, reliable, and effortless to scale.
            </p>
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg">
                <div className="text-slate-400">Code Quality</div>
                <div className="text-slate-900 font-bold mt-0.5">Strict Type Safety</div>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg">
                <div className="text-slate-400">Database Integrity</div>
                <div className="text-slate-900 font-bold mt-0.5">ACID Compliant</div>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg">
                <div className="text-slate-400">Ownership</div>
                <div className="text-slate-900 font-bold mt-0.5">100% Client IP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Leadership & Founder Profile */}
      <section className="bg-slate-950 text-slate-200 border border-slate-800 rounded-2xl p-8 sm:p-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
              Technical Leadership
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Founder & Engineering Leadership
            </h2>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Hands-On Systems Architect</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
              <div className="w-14 h-14 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold text-xl">
                BL
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{leader.name}</h3>
                <div className="text-xs font-mono text-blue-400">{leader.role}</div>
                <div className="text-xs text-slate-400 mt-0.5">{leader.title}</div>
              </div>
              <div className="pt-3 border-t border-slate-800 text-xs font-mono text-slate-400">
                Direct Contact:{" "}
                <a
                  href={`mailto:${COMPANY_DATA.primaryEmail}`}
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {COMPANY_DATA.primaryEmail}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {leader.bio}
            </p>

            <div className="space-y-3">
              <div className="text-xs font-mono font-semibold uppercase text-slate-400">
                Core Engineering Expertise & Track Record
              </div>
              <ul className="space-y-2">
                {leader.background.map((item) => (
                  <li key={item} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono font-semibold uppercase text-slate-400">
                Technical Focus Areas
              </div>
              <div className="flex flex-wrap gap-2">
                {leader.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Tenets */}
      <section className="space-y-8">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
            Principles
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
            Our Engineering Principles
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            The foundational standards governing how every database, endpoint, and interface is architected.
          </p>
        </div>

        <WhyByteLab />
      </section>

      {/* CTA Box */}
      <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-slate-900">
            Ready to Discuss Your Project Architecture?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Consult directly with technical leadership on scoping, technology selection, and delivery timelines.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 transition-colors shrink-0 shadow-xs"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
