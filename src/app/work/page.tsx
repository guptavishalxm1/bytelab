import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Terminal } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import WorkFilterGrid from "@/components/WorkFilterGrid";
import JsonLd from "@/components/JsonLd";
import { PROJECTS_DATA } from "@/data/projects";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies | ByteLab Infotech",
  description:
    "Explore real-world software engineering case studies delivered by ByteLab Infotech across enterprise inventory ERP, fleet telematics, financial reconciliation, and clinical automation.",
  alternates: {
    canonical: "https://bytelabinfo.com/work",
  },
};

export default function WorkPage() {
  const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PROJECTS_DATA.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: `https://bytelabinfo.com/work/${project.slug}`,
      description: project.shortSummary,
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      <JsonLd data={caseStudiesSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Selected Work", href: "/work", current: true }]} />

      {/* Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
          <Terminal className="w-4 h-4" />
          <span>Case Studies & Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
          Selected Engineering Case Studies
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Every project below reflects real business constraints, architectural decisions, and verifiable technical outcomes. We build systems that run operations.
        </p>
      </section>

      {/* Filterable Grid */}
      <WorkFilterGrid />

      {/* Engineering Rigor Note */}
      <section className="bg-slate-950 text-slate-200 rounded-2xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl font-bold text-white">Have a Similar Operational Challenge?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Whether you need to automate financial ledgers, digitize field operations, or architect a high-concurrency Java backend, we can evaluate your requirements.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shrink-0 shadow-md"
        >
          <span>Discuss Your Architecture</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
