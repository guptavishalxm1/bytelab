import React from "react";
import type { Metadata } from "next";
import { Mail, ShieldCheck, Clock, Phone, Terminal } from "lucide-react";
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
      <JsonLd data={contactSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Contact & Inquiries", href: "/contact", current: true }]} />

      {/* Header & Quick Credibility Strip */}
      <section className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
          <Terminal className="w-4 h-4" />
          <span>Project Scoping &amp; Commercial Engagement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
          Discuss Your Project Architecture
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Submit your project requirements, scope, or technical questions directly to technical leadership. We review all inquiries with an engineering mindset and reply within 24 business hours.
        </p>

        {/* Quick Credibility Strip (Compact, High-Trust) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-1 text-xs font-mono text-slate-600">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Legal Entity: <strong className="text-slate-900">{COMPANY_DATA.legalName}</strong></span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">
            <span className="text-slate-400">GSTIN:</span>
            <strong className="text-blue-600">{COMPANY_DATA.gstin}</strong>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>Turnaround: <strong className="text-slate-900">Within 24h</strong></span>
          </div>
        </div>
      </section>

      {/* Main Interactive Intake Form - Immediate & Above the Fold */}
      <section>
        <ProjectInquiryForm />
      </section>

      {/* Direct Contact Cards Grid */}
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
          <div className="text-[11px] text-slate-500">Official technical inquiries &amp; proposals</div>
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
          <div className="text-[11px] text-slate-500">{COMPANY_DATA.operatingHours}</div>
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
          <div className="text-xs font-mono text-slate-400">Response SLA</div>
          <div className="text-sm font-bold text-slate-900">
            Within 24 Hours
          </div>
          <div className="text-[11px] text-slate-500">Standard business days</div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-6">
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-bold uppercase text-blue-600">
            Intake Process
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
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
