import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Terminal, Server, ShieldCheck, Database, Smartphone, Cloud } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TechGrid from "@/components/TechGrid";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import JsonLd from "@/components/JsonLd";
import { TECHNOLOGIES_DATA } from "@/data/technologies";

export const metadata: Metadata = {
  title: "Technology Stack & Architecture | ByteLab Infotech",
  description:
    "Explore the verified technology stack utilized by ByteLab Infotech: Java, Spring Boot, Kotlin Android, PostgreSQL, Redis, Linux, and modern web architectures.",
  alternates: {
    canonical: "https://bytelabinfotech.in/technology",
  },
};

export default function TechnologyPage() {
  const techSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "ByteLab Infotech Engineering Stack & Technology Standards",
    description:
      "Comprehensive breakdown of technologies and architectural standards utilized by ByteLab Infotech.",
    author: {
      "@type": "Organization",
      name: "ByteLab Infotech",
      url: "https://bytelabinfotech.in",
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      <JsonLd data={techSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Technology", href: "/technology", current: true }]} />

      {/* Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
          <Terminal className="w-4 h-4" />
          <span>Technology & Infrastructure</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
          Technology We Work With
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          We deliberately specialize in proven enterprise frameworks and modern typed ecosystems. We prioritize systems that guarantee data integrity, predictable memory footprints, and low operational maintenance.
        </p>
      </section>

      {/* Interactive Tech Grid */}
      <section className="space-y-6">
        <TechGrid />
      </section>

      {/* Architectural Topology */}
      <section className="space-y-6">
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-bold uppercase text-blue-600">
            System Design
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Standard System Topology Blueprint
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            How we structure presentation layers, reverse proxies, Java/Spring Boot application logic, and PostgreSQL persistence.
          </p>
        </div>

        <ArchitectureDiagram />
      </section>

      {/* Technology Selection Tenets */}
      <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 space-y-6">
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-bold uppercase text-blue-600">
            Philosophy
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            How We Evaluate & Choose Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900">01. Type Safety & Predictability</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We favor statically typed languages (Java, TypeScript, Kotlin) to detect edge cases at compile-time before they reach production users.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900">02. Data Integrity First</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Relational schemas with strict foreign keys and ACID transactions prevent orphan data, ghost inventory, and financial ledger inconsistencies.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900">03. Lean Infrastructure Cost</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Properly compiled native code and optimized database indexes run blisteringly fast on modest Linux VPS instances, saving thousands in monthly cloud bloat.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-white">Need Architecture Consultation for Your Stack?</h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Consult directly with our systems engineers on tech selection, migrations, and database design.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shrink-0 shadow-md"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
