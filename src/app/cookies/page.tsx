import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cookie Policy | ByteLab Infotech",
  description: "Official Cookie Policy for ByteLab Infotech (bytelabinfo.com).",
  alternates: {
    canonical: "https://bytelabinfo.com/cookies",
  },
};

export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <Breadcrumbs items={[{ label: "Cookie Policy", href: "/cookies", current: true }]} />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Cookie Policy
        </h1>
        <p className="text-xs font-mono text-slate-500">
          Last Updated: January 2026 • bytelabinfo.com
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 space-y-8 text-sm text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Minimal Cookie Usage</h2>
          <p>
            ByteLab Infotech believes in lean web engineering. Our website does not utilize invasive tracking pixels or third-party behavioral advertising cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Essential Technical Cookies</h2>
          <p>
            We may use strictly necessary first-party cookies and local storage tokens solely for essential technical functions:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Session state maintenance during interactive inquiry forms.</li>
            <li>Theme and navigation preferences.</li>
            <li>Security and CSRF protection tokens.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Managing Preferences</h2>
          <p>
            You can configure your browser to block or alert you about cookies. However, blocking essential cookies may affect some interactive features of our inquiry tools.
          </p>
        </section>
      </div>
    </div>
  );
}
