import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Terminal, Code2, Server, HelpCircle, Layers, Globe, Smartphone, Database, Cloud, Cpu, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ProjectInquiryForm from "@/components/ProjectInquiryForm";
import { SERVICES_DATA, ServiceItem } from "@/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | ByteLab Infotech`,
    description: service.shortDescription,
    alternates: {
      canonical: `https://bytelabinfotech.in/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ByteLab Infotech`,
      description: service.shortDescription,
      url: `https://bytelabinfotech.in/services/${service.slug}`,
    },
  };
}

const serviceIcons: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6 text-blue-600" />,
  Smartphone: <Smartphone className="w-6 h-6 text-blue-600" />,
  Code2: <Code2 className="w-6 h-6 text-blue-600" />,
  Server: <Server className="w-6 h-6 text-blue-600" />,
  Database: <Database className="w-6 h-6 text-blue-600" />,
  Cloud: <Cloud className="w-6 h-6 text-blue-600" />,
  Cpu: <Cpu className="w-6 h-6 text-blue-600" />,
  Sparkles: <Sparkles className="w-6 h-6 text-blue-600" />,
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Organization",
      name: "ByteLab Infotech",
      url: "https://bytelabinfotech.in",
    },
    description: service.shortDescription,
    serviceType: service.badge,
    areaServed: "India, Global",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.slug}`, current: true },
        ]}
      />

      {/* Hero Header */}
      <section className="space-y-4 max-w-4xl">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-50 border border-blue-100 rounded-lg">
            {serviceIcons[service.iconName] || <Code2 className="w-6 h-6 text-blue-600" />}
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
            {service.badge}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
          {service.heroHeadline}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {service.heroSubheadline}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-500 mr-1">Primary Stack:</span>
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-slate-700 bg-slate-100 border border-slate-200/80 px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Service Overview */}
      <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 space-y-6">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono font-bold uppercase text-blue-600">
            Service Overview
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Engineering Tailored for Business Outcomes
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {service.overview}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
          {service.capabilities.map((cap) => (
            <div
              key={cap.title}
              className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2"
            >
              <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>{cap.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Approach & Deliverables */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Technical Approach */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-8 space-y-6">
          <div>
            <div className="text-xs font-mono font-bold uppercase text-blue-600">
              Methodology
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Technical & Architectural Approach
            </h2>
          </div>

          <div className="space-y-6">
            {service.technicalApproach.map((approach) => (
              <div key={approach.title} className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900">{approach.title}</h3>
                <ul className="space-y-2">
                  {approach.points.map((point) => (
                    <li key={point} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Deliverables */}
        <div className="lg:col-span-5 bg-slate-950 text-slate-200 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
              Project Deliverables
            </div>
            <h3 className="text-xl font-bold text-white">
              What You Receive Upon Handover
            </h3>

            <ul className="space-y-3 pt-2">
              {service.deliverables.map((deliv) => (
                <li key={deliv} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-400">
            <span className="text-white font-semibold">Quality Guarantee:</span> Every deployment includes our standard warranty and direct support SLA.
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      {service.faqs.length > 0 && (
        <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 space-y-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-bold uppercase text-blue-600">
              Common Inquiries
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              Frequently Asked Technical Questions
            </h2>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            {service.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2"
              >
                <div className="text-sm font-bold text-slate-900 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* In-Page Intake Form */}
      <section className="pt-4">
        <ProjectInquiryForm />
      </section>
    </div>
  );
}
