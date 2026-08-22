import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | ByteLab Infotech",
  description:
    "Official Cancellation and Refund Policy for software engineering, web development, and consulting services by ByteLab Infotech (Legal Entity: VISHAL GUPTA).",
  alternates: {
    canonical: "https://bytelabinfotech.in/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <Breadcrumbs items={[{ label: "Refund Policy", href: "/refund-policy", current: true }]} />

      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
          <ShieldCheck className="w-4 h-4" />
          <span>Statutory Compliance & Commercial Terms</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Cancellation & Refund Policy
        </h1>
        <p className="text-xs font-mono text-slate-500">
          Last Updated: February 2026 • Legal Entity: {COMPANY_DATA.legalName} • GSTIN: {COMPANY_DATA.gstin}
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 space-y-8 text-sm text-slate-700 leading-relaxed">
        {/* Entity Identification */}
        <section className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs font-mono text-slate-800">
          <div className="font-bold text-slate-900 text-sm font-sans mb-1">Corporate & Billing Information</div>
          <div><span className="text-slate-500">Legal Entity:</span> {COMPANY_DATA.legalName} (Proprietor: {COMPANY_DATA.proprietor})</div>
          <div><span className="text-slate-500">Trade / Brand Name:</span> {COMPANY_DATA.name}</div>
          <div><span className="text-slate-500">GSTIN:</span> <span className="font-bold text-blue-600">{COMPANY_DATA.gstin}</span></div>
          <div><span className="text-slate-500">Official Email:</span> {COMPANY_DATA.primaryEmail}</div>
          <div><span className="text-slate-500">Official Phone:</span> {COMPANY_DATA.phone}</div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Nature of Services & Engagement Model</h2>
          <p>
            ByteLab Infotech (owned and operated by <strong>{COMPANY_DATA.legalName}</strong>) provides custom software engineering, web application development, mobile application engineering, backend architecture, and technical consulting services.
          </p>
          <p>
            Because all services are bespoke and tailored to client-specified Statements of Work (SOW) or project agreements, service deliverables are structured around agreed technical milestones.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Milestone-Based Delivery & Cancellation Terms</h2>
          <p>
            Clients may cancel or terminate an ongoing project by providing written notice via email to{" "}
            <a href={`mailto:${COMPANY_DATA.primaryEmail}`} className="text-blue-600 font-mono hover:underline">
              {COMPANY_DATA.primaryEmail}
            </a>.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>
              <strong>Prior to Project Commencement:</strong> If a project cancellation request is received before architectural scoping or engineering sprint commencement, any advance retainer paid is eligible for a full refund minus nominal payment gateway processing charges within 5–7 business days.
            </li>
            <li>
              <strong>In-Progress Milestones:</strong> Once architectural design or engineering work on a specific milestone has commenced, work completed up to the date of cancellation will be billed pro-rata. Unallocated advance payments for unstarted future milestones will be refunded.
            </li>
            <li>
              <strong>Completed Milestones:</strong> Payments made for milestones that have been reviewed, approved, delivered to staging/production, or accepted by the client are non-refundable.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Refund Processing Timelines & Modes</h2>
          <p>
            Approved refunds are initiated within <strong>2 business days</strong> of formal agreement and processed back to the original payment method (bank account / UPI / credit card via payment gateway) within <strong>5 to 7 business days</strong>, subject to bank clearing cycles.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-slate-500">Initiation Window</div>
              <div className="text-slate-900 font-bold mt-0.5">Within 48 Hours</div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-slate-500">Bank Credit Period</div>
              <div className="text-slate-900 font-bold mt-0.5">5–7 Business Days</div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-slate-500">Refund Destination</div>
              <div className="text-slate-900 font-bold mt-0.5">Original Source Account</div>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Service Delivery & Fulfillment Timelines</h2>
          <p>
            All digital assets, source code repositories, API documentation, and deployment artifacts are delivered digitally via secure Git repositories (GitHub/GitLab), encrypted object storage, or cloud infrastructure handovers as specified in the client&apos;s milestone schedule.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">5. Dispute Resolution & Contact Information</h2>
          <p>
            For any queries regarding billing, milestone acceptance, invoices, or refund requests, please contact our billing department directly:
          </p>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 font-mono text-xs text-slate-800">
            <div><strong>Entity:</strong> {COMPANY_DATA.legalName} (ByteLab Infotech)</div>
            <div><strong>GSTIN:</strong> {COMPANY_DATA.gstin}</div>
            <div>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${COMPANY_DATA.primaryEmail}`} className="text-blue-600 hover:underline">
                {COMPANY_DATA.primaryEmail}
              </a>
            </div>
            <div>
              <strong>Phone / WhatsApp:</strong>{" "}
              <a href={`tel:${COMPANY_DATA.rawPhone}`} className="text-blue-600 hover:underline">
                {COMPANY_DATA.phone}
              </a>
            </div>
            <div><strong>Address / Jurisdiction:</strong> {COMPANY_DATA.headquarters.address}</div>
            <div><strong>Operating Hours:</strong> {COMPANY_DATA.operatingHours}</div>
          </div>
        </section>
      </div>

      {/* Back to Contact CTA */}
      <div className="flex items-center justify-between p-6 bg-white border border-slate-200 rounded-xl">
        <div>
          <div className="text-sm font-bold text-slate-900">Have questions regarding billing or invoices?</div>
          <div className="text-xs text-slate-500">Contact our engineering leadership directly.</div>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-blue-600 text-white rounded-lg text-xs font-semibold transition-colors"
        >
          <span>Contact Us</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
