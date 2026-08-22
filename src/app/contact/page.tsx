import React from "react";
import type { Metadata } from "next";
import { Mail, Globe, ShieldCheck, Clock, MessageSquare, Phone, MapPin, Terminal } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectInquiryForm from "@/components/ProjectInquiryForm";
import JsonLd from "@/components/JsonLd";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact & Project Inquiry | ByteLab Infotech",
  description:
    "Discuss your software development requirements directly with technical leadership at ByteLab Infotech. Submit project scopes, budget ranges, and timelines for review.",
  alternates: {
    canonical: "https://bytelabinfotech.in/contact",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact ByteLab Infotech",
    description: "Submit project requirements and technical inquiries directly to ByteLab Infotech.",
    mainEntity: {
      "@type": "Organization",
      name: COMPANY_DATA.name,
      legalName: COMPANY_DATA.legalName,
      taxID: COMPANY_DATA.gstin,
      email: COMPANY_DATA.primaryEmail,
      telephone: COMPANY_DATA.phone,
      url: "https://bytelabinfotech.in",
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      <JsonLd data={contactSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Contact & Inquiries", href: "/contact", current: true }]} />

      {/* Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
          <Terminal className="w-4 h-4" />
          <span>Project Scoping & Commercial Engagement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
          Discuss Your Project Architecture
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Whether you have a detailed technical specification or need help evaluating architecture and scope, we review all inquiries with an engineering perspective. Contact founder and lead architect Vishal Gupta directly.
        </p>
      </section>

      {/* Registered Entity & Direct Contact Summary Banner */}
      <section className="p-5 sm:p-6 bg-slate-900 text-slate-200 border border-slate-800 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Formally Registered Entity</span>
          </div>
          <div className="text-sm font-bold text-white">
            {COMPANY_DATA.name} • Legal Entity: {COMPANY_DATA.legalName} (Proprietor: {COMPANY_DATA.proprietor})
          </div>
          <div className="text-xs font-mono text-slate-400">
            GSTIN: <span className="text-emerald-400 font-semibold">{COMPANY_DATA.gstin}</span> • State: {COMPANY_DATA.headquarters.state}, India
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2 md:pt-0">
          <a
            href={`tel:${COMPANY_DATA.rawPhone}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold font-mono transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{COMPANY_DATA.phone}</span>
          </a>
          <a
            href={`mailto:${COMPANY_DATA.primaryEmail}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-semibold font-mono transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{COMPANY_DATA.primaryEmail}</span>
          </a>
        </div>
      </section>

      {/* Direct Contact Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2">
          <div className="p-2 bg-blue-50 border border-blue-100 rounded-lg text-blue-600 w-fit">
            <Mail className="w-4 h-4" />
          </div>
          <div className="text-xs font-mono text-slate-400">Direct Email</div>
          <div className="text-sm font-bold text-slate-900 truncate">
            <a href={`mailto:${COMPANY_DATA.primaryEmail}`} className="hover:text-blue-600 transition-colors">
              {COMPANY_DATA.primaryEmail}
            </a>
          </div>
          <div className="text-[11px] text-slate-500">Official inquiries & proposals</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2">
          <div className="p-2 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-600 w-fit">
            <Phone className="w-4 h-4" />
          </div>
          <div className="text-xs font-mono text-slate-400">Direct Phone / Call</div>
          <div className="text-sm font-bold text-slate-900 font-mono">
            <a href={`tel:${COMPANY_DATA.rawPhone}`} className="hover:text-emerald-600 transition-colors">
              {COMPANY_DATA.phone}
            </a>
          </div>
          <div className="text-[11px] text-slate-500">Mon–Fri: 9:30 AM – 6:30 PM IST</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2">
          <div className="p-2 bg-purple-50 border border-purple-100 rounded-lg text-purple-600 w-fit">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="text-xs font-mono text-slate-400">GST Registration</div>
          <div className="text-sm font-bold text-slate-900 font-mono truncate">
            {COMPANY_DATA.gstin}
          </div>
          <div className="text-[11px] text-slate-500">Verified GSTIN (Uttar Pradesh)</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2">
          <div className="p-2 bg-amber-50 border border-amber-100 rounded-lg text-amber-600 w-fit">
            <Clock className="w-4 h-4" />
          </div>
          <div className="text-xs font-mono text-slate-400">Turnaround Time</div>
          <div className="text-sm font-bold text-slate-900">
            Within 24 Hours
          </div>
          <div className="text-[11px] text-slate-500">Standard business days</div>
        </div>
      </section>

      {/* Main Interactive Intake Form */}
      <section>
        <ProjectInquiryForm />
      </section>

      {/* What Happens Next Section */}
      <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 space-y-6">
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-bold uppercase text-blue-600">
            Intake Process
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            What Happens After You Submit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold text-blue-600">01. Architectural Review</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              A systems architect reviews your submitted requirements, data expectations, and target platforms.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono font-bold text-blue-600">02. Direct Scoping Call</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              We schedule a concise, technical discovery discussion to clarify edge cases, integrations, and milestones.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono font-bold text-blue-600">03. Formal Proposal</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              You receive a structured proposal outlining architecture, milestone deliverables, fixed estimates, and timeline.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
