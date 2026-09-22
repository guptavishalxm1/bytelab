import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, Layers, Cpu, ShieldCheck, Database, Calendar, Tag, Building2, Check } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ProjectInquiryForm from "@/components/ProjectInquiryForm";
import { PROJECTS_DATA, ProjectCaseStudy } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study | ByteLab Infotech`,
    description: project.shortSummary,
    alternates: {
      canonical: `https://bytelabinfo.com/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} - Engineering Case Study`,
      description: project.shortSummary,
      url: `https://bytelabinfo.com/work/${project.slug}`,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = PROJECTS_DATA.filter((p) => p.slug !== slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${project.title} - Architecture & Implementation Case Study`,
    description: project.shortSummary,
    author: {
      "@type": "Organization",
      name: "ByteLab Infotech",
      url: "https://bytelabinfo.com",
    },
    publisher: {
      "@type": "Organization",
      name: "ByteLab Infotech",
      logo: {
        "@type": "ImageObject",
        url: "https://bytelabinfo.com/logo.png",
      },
    },
    datePublished: `${project.year}-01-01`,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      <JsonLd data={articleSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Selected Work", href: "/work" },
          { label: project.title, href: `/work/${project.slug}`, current: true },
        ]}
      />

      {/* Hero Header */}
      <section className="space-y-4 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
            {project.category}
          </span>
          <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
            {project.industry}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {project.year} • Delivery Timeline: {project.timeline}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {project.shortSummary}
        </p>

        {/* Tech Stack Pills */}
        <div className="pt-2 flex flex-wrap gap-1.5 items-center">
          <span className="text-xs font-mono text-slate-400 mr-1">Technologies:</span>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Context & Challenges Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Client Context & Business Challenge */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-7 space-y-3">
            <div className="text-xs font-mono font-bold uppercase text-blue-600">
              01. Client & Operating Context
            </div>
            <h2 className="text-xl font-bold text-slate-900">Background & Operational Scope</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {project.clientContext}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-7 space-y-3">
            <div className="text-xs font-mono font-bold uppercase text-red-600">
              02. Business Challenge
            </div>
            <h2 className="text-xl font-bold text-slate-900">Operational Bottlenecks</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {project.businessChallenge}
            </p>
          </div>
        </div>

        {/* Right: Technical Challenge & Solution */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-7 space-y-3">
            <div className="text-xs font-mono font-bold uppercase text-amber-600">
              03. Technical Challenge
            </div>
            <h2 className="text-xl font-bold text-slate-900">Engineering Complexity</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {project.technicalChallenge}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-7 space-y-3">
            <div className="text-xs font-mono font-bold uppercase text-emerald-600">
              04. ByteLab Solution
            </div>
            <h2 className="text-xl font-bold text-slate-900">Architectural Implementation</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Deep Dive & Verifiable Metrics */}
      <section className="bg-slate-950 text-slate-200 border border-slate-800 rounded-2xl p-8 sm:p-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
              Technical Architecture & Deliverables
            </div>
            <h2 className="text-2xl font-bold text-white mt-1">
              {project.architectureDetails.title}
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400">
            Strict ACID Compliance • Production Validated
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.architectureDetails.description}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono font-semibold uppercase text-slate-400">
                Core System Components
              </div>
              <ul className="space-y-2">
                {project.architectureDetails.components.map((comp) => (
                  <li key={comp} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-2" />
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase text-slate-400 mb-2">
              Verifiable Engineering Metrics
            </div>
            {project.metricsVerifiable.map((metric) => (
              <div key={metric.label} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                <div className="text-xs font-mono text-slate-400">{metric.label}</div>
                <div className="text-sm font-semibold text-slate-100">{metric.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features & Outcomes */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Key Features */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-8 space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Key Capabilities Delivered</h3>
          <ul className="space-y-3 pt-2">
            {project.keyFeatures.map((feat) => (
              <li key={feat} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Measurable Outcomes */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-8 space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Measurable Business Outcomes</h3>
          <ul className="space-y-3 pt-2">
            {project.outcomes.map((outcome) => (
              <li key={outcome} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="space-y-6 pt-4 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Explore More Case Studies</h3>
            <Link
              href="/work"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProjects.map((p) => (
              <Link
                key={p.id}
                href={`/work/${p.slug}`}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-xs transition-all group"
              >
                <div className="text-[11px] font-mono text-blue-600 font-semibold">{p.category}</div>
                <div className="text-base font-bold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </div>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2">{p.shortSummary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Project Intake Section */}
      <section className="pt-4">
        <ProjectInquiryForm />
      </section>
    </div>
  );
}
