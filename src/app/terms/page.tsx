import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of Service | ByteLab Infotech",
  description: "Official Terms of Service for ByteLab Infotech (bytelabinfo.com).",
  alternates: {
    canonical: "https://bytelabinfo.com/terms",
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
          <div className="font-bold text-slate-900 text-sm font-sans mb-1">Entity Details &amp; Statutory Registry</div>
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
            By accessing this website (<strong>https://bytelabinfo.com</strong>) or engaging <strong>ByteLab Infotech</strong> (owned and operated by <strong>{COMPANY_DATA.legalName}</strong>) for software engineering, web development, mobile development, backend architectures, or consulting services, you agree to comply with and be bound by these Terms of Service.
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
          <h2 className="text-lg font-bold text-slate-900">4. Cancellation &amp; Refund Policy</h2>
          <p>
            Project cancellations and refund requests are governed by our dedicated{" "}
            <a href="/refund-policy" className="text-blue-600 font-semibold hover:underline">
              Cancellation &amp; Refund Policy
            </a>. Advance milestone retainers for work not yet commenced are refundable minus statutory transaction fees. Work commenced or delivered is billed pro-rata.
          </p>
        </section>

        {/* Dedicated SMS / RCS Terms of Service Section */}
        <section className="p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
          <div className="space-y-1">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
              Telecommunications &amp; Messaging Compliance
            </div>
            <h2 className="text-lg font-bold text-slate-900">
              5. SMS &amp; RCS Messaging Program Terms
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              ByteLab Infotech offers an optional SMS and Rich Communication Services (RCS) messaging program to provide prompt communications regarding project inquiries, architectural discovery schedules, milestone deliveries, and technical alerts. By submitting your mobile phone number and checking the authorization checkbox on our forms, you agree to the following terms:
            </p>

            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>
                <strong>Program Identity &amp; Scope:</strong> The messaging program operates under the brand name <strong>ByteLab Infotech</strong>. Messages include transactional project updates, architecture consultation scheduling, service announcements, and informational or promotional technology briefings.
              </li>
              <li>
                <strong>Consent &amp; Voluntary Participation:</strong> Providing consent to receive SMS or RCS messages is completely voluntary and is <em>not</em> a condition of purchase or contracting our software engineering services. You may engage ByteLab Infotech through email or telephone without consenting to text messaging.
              </li>
              <li>
                <strong>Opt-Out Instructions (STOP):</strong> You can cancel the SMS/RCS service at any time. Simply reply <span className="font-mono font-bold text-slate-900">STOP</span> to any mobile message received from us. Upon receipt of your STOP command, we will send an unsubscribe confirmation message. Thereafter, no further SMS or RCS messages will be sent unless re-authorized by you.
              </li>
              <li>
                <strong>Support &amp; Customer Care (HELP):</strong> For questions or troubleshooting regarding the messaging program, reply <span className="font-mono font-bold text-slate-900">HELP</span> to any message, or contact our engineering support team directly at{" "}
                <a href={`mailto:${COMPANY_DATA.primaryEmail}`} className="text-blue-600 font-mono underline hover:text-blue-700">
                  {COMPANY_DATA.primaryEmail}
                </a>{" "}
                or{" "}
                <a href={`tel:${COMPANY_DATA.rawPhone}`} className="text-blue-600 font-mono underline hover:text-blue-700">
                  {COMPANY_DATA.phone}
                </a>.
              </li>
              <li>
                <strong>Message Rates &amp; Frequency:</strong> Standard message and data rates may apply as determined by your wireless telecommunications carrier plan. Message frequency varies based on project development cycles and the frequency of your inquiries.
              </li>
              <li>
                <strong>Carrier Liability Disclaimer:</strong> Telecommunications carriers (including Airtel, Jio, Vodafone Idea, AT&amp;T, T-Mobile, Verizon, and international operators) are not liable for delayed, intercepted, or undelivered messages.
              </li>
              <li>
                <strong>Privacy Protection:</strong> All mobile phone numbers, subscriber records, and opt-in consent data are protected under our{" "}
                <a href="/privacy" className="text-blue-600 font-semibold underline hover:text-blue-700">
                  Privacy Policy
                </a>
                . Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">6. Intellectual Property Rights</h2>
          <p>
            Upon full financial settlement of milestone deliverables as agreed under the relevant contract, 100% intellectual property ownership of bespoke code, database schemas, and application assets is transferred to the client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">7. Limitation of Liability</h2>
          <p>
            ByteLab Infotech engineers software according to recognized industry best practices. However, neither party shall be liable for indirect, incidental, or consequential damages resulting from third-party cloud infrastructure outages, telecommunication disruptions, or unannounced third-party API deprecations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">8. Governing Law &amp; Dispute Resolution</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of India. Any legal disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in {COMPANY_DATA.headquarters.state}, India.
          </p>
        </section>
      </div>
    </div>
  );
}
