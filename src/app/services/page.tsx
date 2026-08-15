import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, CheckCircle2, Terminal, Layers } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import JsonLd from "@/components/JsonLd";
import { SERVICES_DATA } from "@/data/services";

export const metadata: Metadata = {
  title: "Engineering Services | Software, Web, Mobile & Backend Development",
  description:
    "Explore ByteLab Infotech's full engineering capabilities: custom software, web applications, Android mobile development, Java/Spring Boot backends, PostgreSQL databases, and business automation.",
  alternates: {
    canonical: "https://bytelabinfotech.in/services",
  },
};

export default function ServicesPage() {
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES_DATA.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `https://bytelabinfotech.in/services/${service.slug}`,
      description: service.shortDescription,
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      <JsonLd data={serviceListSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Services", href: "/services", current: true }]} />

      {/* Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
          <Layers className="w-4 h-4" />
          <span>Core Capabilities</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
          Software & Technology Engineering Services
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          We architect and build bespoke software, responsive web applications, native Android apps, and high-throughput Java backend systems engineered around measurable business requirements.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES_DATA.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>

      {/* Technical Standards & Delivery Checklist */}
      <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 space-y-6">
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-bold uppercase text-blue-600">
            Delivery Standard
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            What Every ByteLab Engagement Includes
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Regardless of service scope, every project adheres to strict production engineering criteria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
          <div className="space-y-2">
            <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Full Source Code Ownership</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              100% intellectual property (IP), source code repositories, and configuration files transferred directly to your organization.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Standardized API Contracts</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Comprehensive OpenAPI / Swagger schemas with validated data models, clear error codes, and sample payloads.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Automated Database Migrations</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Version-controlled SQL scripts (Flyway/Liquibase) preventing database drift across local, staging, and production.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Hardened Production Setup</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Secure Linux server provisioning, UFW firewall, TLS 1.3 certificates, reverse proxy caching, and automatic crash recovery.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Automated CI/CD Workflows</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              GitHub Actions build pipelines that test code, run security linters, and deploy updates reliably with zero downtime.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Post-Launch Engineering Support</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Guaranteed bug-fix warranty, infrastructure health monitoring, and structured maintenance service level agreements (SLAs).
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-white">Need a Specialized Engineering Solution?</h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Tell us about your technical requirements and receive a comprehensive architecture and scope proposal.
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
