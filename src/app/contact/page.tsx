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
      email: COMPANY_DATA.primaryEmail,
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
          Whether you have a detailed technical specification or need help evaluating architecture and scope, we review all inquiries with an engineering perspective.
        </p>
      </section>

      {/* Direct Contact Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2">
          <div className="p-2 bg-blue-50 border border-blue-100 rounded-lg text-blue-600 w-fit">
            <Mail className="w-4 h-4" />
          </div>
          <div className="text-xs font-mono text-slate-400">Official Inquiries</div>
          <div className="text-sm font-bold text-slate-900 truncate">
            <a href={`mailto:${COMPANY_DATA.primaryEmail}`} className="hover:text-blue-600 transition-colors">
              {COMPANY_DATA.primaryEmail}
            </a>
          </div>
          <div className="text-[11px] text-slate-500">Direct inbox to leadership</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2">
          <div className="p-2 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-600 w-fit">
            <Globe className="w-4 h-4" />
          </div>
          <div className="text-xs font-mono text-slate-400">Official Domain</div>
          <div className="text-sm font-bold text-slate-900 font-mono">
            {COMPANY_DATA.domain}
          </div>
          <div className="text-[11px] text-slate-500">Registered Corporate Host</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2">
          <div className="p-2 bg-purple-50 border border-purple-100 rounded-lg text-purple-600 w-fit">
            <Clock className="w-4 h-4" />
          </div>
          <div className="text-xs font-mono text-slate-400">Turnaround Time</div>
          <div className="text-sm font-bold text-slate-900">Within 24 Hours</div>
          <div className="text-[11px] text-slate-500">Standard business days</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2">
          <div className="p-2 bg-amber-50 border border-amber-100 rounded-lg text-amber-600 w-fit">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="text-xs font-mono text-slate-400">NDA & Security</div>
          <div className="text-sm font-bold text-slate-900">Confidentiality Assured</div>
          <div className="text-[11px] text-slate-500">NDAs executed on request</div>
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
