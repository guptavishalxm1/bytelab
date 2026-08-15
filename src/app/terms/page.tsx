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
          Last Updated: January 2026 • bytelabinfotech.in
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 space-y-8 text-sm text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing this website or engaging ByteLab Infotech for software engineering, web development, mobile development, or consulting services, you agree to comply with and be bound by these Terms of Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Service Delivery & Scope of Work</h2>
          <p>
            All custom software development, milestone deliverables, timelines, and payment terms are formally defined within individual Statements of Work (SOW) or Service Level Agreements (SLA) executed between ByteLab Infotech and the client entity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Intellectual Property Rights</h2>
          <p>
            Upon full financial settlement of milestone deliverables as agreed under the relevant contract, 100% intellectual property ownership of bespoke code, database schemas, and application assets is transferred to the client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Limitation of Liability</h2>
          <p>
            ByteLab Infotech engineers software according to recognized industry best practices. However, neither party shall be liable for indirect, incidental, or consequential damages resulting from third-party server outages, telecommunication drops, or external API modifications.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">5. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of India. Any legal disputes are subject to the jurisdiction of competent courts in India.
          </p>
        </section>
      </div>
    </div>
  );
}
