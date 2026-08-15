import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | ByteLab Infotech",
  description: "Official Privacy Policy of ByteLab Infotech (bytelabinfotech.in).",
  alternates: {
    canonical: "https://bytelabinfotech.in/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy", current: true }]} />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-slate-500">
          Last Updated: January 2026 • Operating Domain: bytelabinfotech.in
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 space-y-8 text-sm text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Introduction & Scope</h2>
          <p>
            ByteLab Infotech (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website{" "}
            <strong>https://bytelabinfotech.in</strong>. This Privacy Policy outlines how we collect, handle, protect, and process information collected through our official digital touchpoints and project inquiries.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Information We Collect</h2>
          <p>We collect information you explicitly provide when submitting project inquiries, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Contact details: Name, business email address, phone/WhatsApp number, and company name.</li>
            <li>Project specifics: Budget expectations, timelines, and technical requirements.</li>
            <li>Technical telemetry: Standard web server logs, browser user-agent, and IP address for diagnostic security and firewall enforcement.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. How We Use Information</h2>
          <p>Information submitted is used exclusively for:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Evaluating project technical scope and preparing architectural proposals.</li>
            <li>Direct business communication between technical leadership and prospective clients.</li>
            <li>Issuing formal quotes, contracts, and tax-compliant invoices.</li>
          </ul>
          <p className="font-semibold text-slate-900">
            We never sell, rent, or monetize your contact or project data to third-party advertisers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Confidentiality & Non-Disclosure</h2>
          <p>
            All technical architectures, proprietary business concepts, and domain workflows shared with ByteLab Infotech during discovery or development are treated as strictly confidential. Formal Non-Disclosure Agreements (NDAs) are executed prior to deep architectural reviews upon request.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">5. Contact Information</h2>
          <p>
            For inquiries regarding privacy, data retention, or NDA execution, contact:
          </p>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs text-slate-800 space-y-1">
            <div>ByteLab Infotech — Privacy Office</div>
            <div>Official Email: {COMPANY_DATA.primaryEmail}</div>
            <div>Web Domain: https://bytelabinfotech.in</div>
          </div>
        </section>
      </div>
    </div>
  );
}
