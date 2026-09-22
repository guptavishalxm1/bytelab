import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | ByteLab Infotech",
  description: "Official Privacy Policy of ByteLab Infotech (bytelabinfo.com).",
  alternates: {
    canonical: "https://bytelabinfo.com/privacy",
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
          Last Updated: February 2026 • Legal Entity: {COMPANY_DATA.legalName} • GSTIN: {COMPANY_DATA.gstin}
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 space-y-8 text-sm text-slate-700 leading-relaxed">
        {/* Entity Identification */}
        <section className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs font-mono text-slate-800">
          <div className="font-bold text-slate-900 text-sm font-sans mb-1">Data Controller &amp; Business Information</div>
          <div><span className="text-slate-500">Legal Entity:</span> {COMPANY_DATA.legalName} (Proprietor: {COMPANY_DATA.proprietor})</div>
          <div><span className="text-slate-500">Trade / Brand:</span> {COMPANY_DATA.name}</div>
          <div><span className="text-slate-500">GSTIN:</span> <span className="font-bold text-blue-600">{COMPANY_DATA.gstin}</span></div>
          <div><span className="text-slate-500">Official Email:</span> {COMPANY_DATA.primaryEmail}</div>
          <div><span className="text-slate-500">Direct Phone:</span> {COMPANY_DATA.phone}</div>
          <div><span className="text-slate-500">State &amp; Country:</span> {COMPANY_DATA.headquarters.state}, India</div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Introduction &amp; Scope</h2>
          <p>
            ByteLab Infotech (owned and operated by <strong>{COMPANY_DATA.legalName}</strong>, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website{" "}
            <strong>https://bytelabinfo.com</strong>. This Privacy Policy outlines how we collect, handle, protect, and process information collected through our official digital touchpoints, project inquiries, and communication channels (including SMS and RCS messaging).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Information We Collect</h2>
          <p>We collect information you explicitly provide when submitting project inquiries, engaging our software engineering services, or opting into communication channels, including:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li><strong>Contact Details:</strong> Name, business email address, mobile phone number, WhatsApp contact, and company name.</li>
            <li><strong>Messaging Consent Records:</strong> Affirmative opt-in timestamps, verification tokens, and communication preferences for SMS and RCS channels.</li>
            <li><strong>Project Specifics:</strong> Technical scopes, target platforms, budget expectations, and delivery timelines.</li>
            <li><strong>Technical Telemetry:</strong> Standard web server access logs, browser user-agent, and IP address for firewall security, diagnostic enforcement, and fraud prevention.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. How We Use Information</h2>
          <p>Information submitted is used exclusively for legitimate business and engineering operations:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li>Evaluating project technical specifications and preparing architectural proposals.</li>
            <li>Direct business communication between engineering leadership and prospective clients.</li>
            <li>Sending transactional milestone notifications, scheduling scoping consultations, and technical updates.</li>
            <li>Where explicitly authorized by you, sending occasional promotional or informational announcements regarding technology capabilities, case studies, or architectural insights.</li>
            <li>Issuing formal quotes, contracts, Statements of Work (SOW), and tax-compliant GST invoices.</li>
          </ul>
        </section>

        {/* Dedicated RCS / SMS Mobile Privacy & Strict Non-Sharing Policy */}
        <section className="p-5 sm:p-6 bg-blue-50/60 border border-blue-200 rounded-xl space-y-4">
          <div className="space-y-1">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
              Regulatory Compliance &amp; Carrier Standards
            </div>
            <h2 className="text-lg font-bold text-slate-900">
              4. Mobile Communications &amp; SMS/RCS Privacy Policy
            </h2>
          </div>

          <div className="p-4 bg-white border border-blue-200 rounded-lg text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
            &ldquo;No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties under any circumstances.&rdquo;
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              ByteLab Infotech respects mobile subscriber privacy and adheres to applicable telecommunication standards, including CTIA guidelines, TCPA regulations, and Google RCS Business Messaging policies:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Originator Opt-In Data Protection:</strong> Mobile phone numbers, text messaging originator opt-in data, and consent tokens are strictly confidential. They are never sold, rented, leased, or traded to third-party marketing brokers, advertisers, or affiliates.
              </li>
              <li>
                <strong>Purpose-Bound Messaging:</strong> Mobile communications via SMS or RCS are strictly confined to project discovery, technical updates, architectural consultations, and informational or promotional bulletins for which you have provided explicit affirmative consent.
              </li>
              <li>
                <strong>Opt-Out Protocol (STOP):</strong> You may revoke messaging consent at any time. Simply reply <span className="font-mono font-bold text-slate-900">STOP</span> to any SMS or RCS message received from ByteLab Infotech. You will receive a single confirmation message confirming your unsubscribe status, and no further messages will be dispatched unless subsequently initiated by you.
              </li>
              <li>
                <strong>Assistance &amp; Help (HELP):</strong> For assistance or support regarding our SMS/RCS messaging, reply <span className="font-mono font-bold text-slate-900">HELP</span> to any message, or reach our technical support desk directly at{" "}
                <a href={`mailto:${COMPANY_DATA.primaryEmail}`} className="text-blue-600 font-mono underline hover:text-blue-700">
                  {COMPANY_DATA.primaryEmail}
                </a>{" "}
                or call{" "}
                <a href={`tel:${COMPANY_DATA.rawPhone}`} className="text-blue-600 font-mono underline hover:text-blue-700">
                  {COMPANY_DATA.phone}
                </a>.
              </li>
              <li>
                <strong>Rates &amp; Frequency:</strong> Standard message and data rates may apply depending on your mobile carrier plan. Message frequency varies based on project milestones and the cadence of technical consultations.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">5. Confidentiality &amp; Non-Disclosure</h2>
          <p>
            All technical architectures, proprietary business concepts, and domain workflows shared with ByteLab Infotech during discovery or development are treated as strictly confidential. Formal Non-Disclosure Agreements (NDAs) are executed prior to deep architectural reviews upon request.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">6. Data Retention &amp; Security Controls</h2>
          <p>
            We implement administrative, technical, and physical safeguards to protect your personal and project information against unauthorized access, loss, or alteration. Communication records and consent logs are maintained in encrypted data stores and retained only as long as necessary to fulfill commercial engagements, satisfy statutory tax and GST audit requirements, or until you request deletion.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">7. Contact &amp; Data Protection Desk</h2>
          <p>
            For questions regarding this Privacy Policy, data access requests, revocation of consent, or NDA execution, contact our registered office:
          </p>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs text-slate-800 space-y-1.5">
            <div><strong>Entity:</strong> {COMPANY_DATA.legalName} (Trade Name: {COMPANY_DATA.name})</div>
            <div><strong>Proprietor:</strong> {COMPANY_DATA.proprietor}</div>
            <div><strong>GSTIN:</strong> {COMPANY_DATA.gstin}</div>
            <div>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${COMPANY_DATA.primaryEmail}`} className="text-blue-600 hover:underline">
                {COMPANY_DATA.primaryEmail}
              </a>
            </div>
            <div>
              <strong>Direct Phone:</strong>{" "}
              <a href={`tel:${COMPANY_DATA.rawPhone}`} className="text-blue-600 hover:underline">
                {COMPANY_DATA.phone}
              </a>
            </div>
            <div><strong>Address:</strong> {COMPANY_DATA.headquarters.address}</div>
            <div><strong>Operating Hours:</strong> {COMPANY_DATA.operatingHours}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
