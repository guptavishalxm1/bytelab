import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of Service | ByteLab Infotech",
  description: "Official Terms of Service for ByteLab Infotech (bytelabinfotech.in).",
  alternates: {
    canonical: "https://bytelabinfotech.in/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <Breadcrumbs items={[{ label: "Terms of Service", href: "/terms", current: true }]} />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Terms of Service
        </h1>
        <p className="text-xs font-mono text-slate-500">
          Last Updated: February 2026 • Legal Entity: {COMPANY_DATA.legalName} • GSTIN: {COMPANY_DATA.gstin}
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 space-y-8 text-sm text-slate-700 leading-relaxed">
        {/* Entity Identification */}
        <section className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs font-mono text-slate-800">
          <div className="font-bold text-slate-900 text-sm font-sans mb-1">Entity Details & Statutory Registry</div>
          <div><span className="text-slate-500">Legal Entity:</span> {COMPANY_DATA.legalName} (Proprietor: {COMPANY_DATA.proprietor})</div>
          <div><span className="text-slate-500">Trade / Brand:</span> {COMPANY_DATA.name}</div>
          <div><span className="text-slate-500">GSTIN:</span> <span className="font-bold text-blue-600">{COMPANY_DATA.gstin}</span></div>
          <div><span className="text-slate-500">Primary Email:</span> {COMPANY_DATA.primaryEmail}</div>
          <div><span className="text-slate-500">Contact Phone:</span> {COMPANY_DATA.phone}</div>
          <div><span className="text-slate-500">Jurisdiction:</span> {COMPANY_DATA.headquarters.state}, India</div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing this website (<strong>https://bytelabinfotech.in</strong>) or engaging <strong>ByteLab Infotech</strong> (owned and operated by <strong>{COMPANY_DATA.legalName}</strong>) for software engineering, web development, mobile development, backend architectures, or consulting services, you agree to comply with and be bound by these Terms of Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Service Delivery & Scope of Work</h2>
          <p>
            All custom software development, milestone deliverables, timelines, and payment terms are formally defined within individual Statements of Work (SOW) or project proposals executed between ByteLab Infotech and the client entity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Invoicing, Payments & Taxes</h2>
          <p>
            Payments are invoiced against mutually agreed project milestones or time-and-materials schedules. All commercial invoices are issued with applicable Goods and Services Tax under GSTIN <strong>{COMPANY_DATA.gstin}</strong>. Payments can be fulfilled via secure payment gateways (Cashfree / UPI / NetBanking / Cards) or official bank wire transfer.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Cancellation & Refund Policy</h2>
          <p>
            Project cancellations and refund requests are governed by our dedicated{" "}
            <a href="/refund-policy" className="text-blue-600 font-semibold hover:underline">
              Cancellation & Refund Policy
            </a>. Advance milestone retainers for work not yet commenced are refundable minus statutory transaction fees. Work commenced or delivered is billed pro-rata.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">5. Intellectual Property Rights</h2>
          <p>
            Upon full financial settlement of milestone deliverables as agreed under the relevant contract, 100% intellectual property ownership of bespoke code, database schemas, and application assets is transferred to the client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">6. Limitation of Liability</h2>
          <p>
            ByteLab Infotech engineers software according to recognized industry best practices. However, neither party shall be liable for indirect, incidental, or consequential damages resulting from third-party cloud infrastructure outages, telecommunication disruptions, or unannounced third-party API deprecations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">7. Governing Law & Dispute Resolution</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of India. Any legal disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in {COMPANY_DATA.headquarters.state}, India.
          </p>
        </section>
      </div>
    </div>
  );
}
