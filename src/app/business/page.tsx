"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Copy, Check, Building, FileCheck, Globe, Hash, Mail, Clock, ArrowRight, AlertCircle, Lock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import BusinessVerificationModal from "@/components/BusinessVerificationModal";
import { COMPANY_DATA } from "@/data/company";

export default function BusinessPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_DATA.name,
    legalName: COMPANY_DATA.legalName,
    taxID: COMPANY_DATA.gstin,
    url: "https://bytelabinfo.com",
    logo: "https://bytelabinfo.com/logo.png",
    email: COMPANY_DATA.primaryEmail,
    telephone: COMPANY_DATA.phone,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: COMPANY_DATA.proprietor,
      email: COMPANY_DATA.primaryEmail,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY_DATA.phone,
      email: COMPANY_DATA.primaryEmail,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      <JsonLd data={businessSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Business Information", href: "/business", current: true }]} />

      {/* Hero Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
          <ShieldCheck className="w-4 h-4" />
          <span>Corporate Transparency & Verification</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
          Business Information & Credentials
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          ByteLab Infotech operates as a formally registered technology business entity under proprietor Vishal Gupta (Legal Entity: {COMPANY_DATA.legalName}). This page contains our verified corporate credentials, official communication channels, and statutory disclosures for clients, banking partners, and enterprise collaborators.
        </p>
      </section>

      {/* Primary Credentials Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Verified Organizational Credentials</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Official registrations recognized under Indian statutory frameworks (GSTIN / MSME) and global registries.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-blue-600 text-white rounded-lg text-xs font-semibold transition-colors shadow-xs"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Open Verification Drawer</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPANY_DATA.credentials.map((cred) => {
            const icon =
              cred.id === "gst" || cred.id === "pan" ? (
                <FileCheck className="w-5 h-5 text-emerald-600" />
              ) : cred.id === "udyam" ? (
                <Building className="w-5 h-5 text-blue-600" />
              ) : cred.id === "duns" ? (
                <Hash className="w-5 h-5 text-cyan-600" />
              ) : (
                <FileCheck className="w-5 h-5 text-blue-600" />
              );

            return (
              <div
                key={cred.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg">
                        {icon}
                      </div>
                      <div>
                        <div className="text-xs font-mono text-slate-500">{cred.type}</div>
                        <h3 className="text-base font-bold text-slate-900">{cred.label}</h3>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{cred.status}</span>
                    </span>
                  </div>

                  <div className="mt-4 p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-slate-800 truncate">
                      {cred.identifier}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(cred.identifier, cred.id)}
                      className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-md transition-colors"
                      title="Copy identifier"
                    >
                      {copiedKey === cred.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {cred.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                  Verified Authority: Government of India / Global Registries
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Corporate Summary Table */}
      <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 space-y-6">
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-bold uppercase text-blue-600">
            Corporate Registry
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Organization Identity Summary
          </h2>
        </div>

        <div className="border border-slate-200 rounded-xl overflow-hidden text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-slate-50 border-b border-slate-200 font-mono font-semibold text-slate-700">
            <div>Parameter</div>
            <div className="sm:col-span-2">Official Record</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 p-4 border-b border-slate-100 gap-1 sm:gap-0">
            <div className="font-mono text-slate-500">Legal Business Name</div>
            <div className="sm:col-span-2 font-semibold text-slate-900">{COMPANY_DATA.legalName}</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 p-4 border-b border-slate-100 gap-1 sm:gap-0">
            <div className="font-mono text-slate-500">Trade / Brand Identity</div>
            <div className="sm:col-span-2 text-slate-900 font-medium">{COMPANY_DATA.name}</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 p-4 border-b border-slate-100 gap-1 sm:gap-0">
            <div className="font-mono text-slate-500">Proprietor / Signatory</div>
            <div className="sm:col-span-2 text-slate-900 font-medium">{COMPANY_DATA.proprietor}</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 p-4 border-b border-slate-100 gap-1 sm:gap-0">
            <div className="font-mono text-slate-500">GST Registration (GSTIN)</div>
            <div className="sm:col-span-2 font-mono font-bold text-emerald-700 flex items-center gap-2">
              <span>{COMPANY_DATA.gstin}</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-sans font-medium">
                Active • Uttar Pradesh (09)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 p-4 border-b border-slate-100 gap-1 sm:gap-0">
            <div className="font-mono text-slate-500">Income Tax PAN</div>
            <div className="sm:col-span-2 font-mono text-slate-900 font-semibold flex items-center gap-2">
              <span>EIIPG9483D</span>
              <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-sans font-medium">
                Income Tax Dept, Govt of India
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 p-4 border-b border-slate-100 gap-1 sm:gap-0">
            <div className="font-mono text-slate-500">Primary Business Email</div>
            <div className="sm:col-span-2 font-mono text-slate-900">
              <a href={`mailto:${COMPANY_DATA.primaryEmail}`} className="hover:text-blue-600 transition-colors">
                {COMPANY_DATA.primaryEmail}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 p-4 border-b border-slate-100 gap-1 sm:gap-0">
            <div className="font-mono text-slate-500">Direct Phone / Support</div>
            <div className="sm:col-span-2 font-mono text-slate-900">
              <a href={`tel:${COMPANY_DATA.rawPhone}`} className="hover:text-blue-600 transition-colors">
                {COMPANY_DATA.phone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 p-4 border-b border-slate-100 gap-1 sm:gap-0">
            <div className="font-mono text-slate-500">Operational Hours</div>
            <div className="sm:col-span-2 text-slate-700">{COMPANY_DATA.operatingHours}</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-1 sm:gap-0">
            <div className="font-mono text-slate-500">Registered Category</div>
            <div className="sm:col-span-2 text-slate-700">
              Software Engineering, Custom Digital Product Development & IT Consulting Services
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Sensitive Information Policy */}
      <section className="bg-slate-900 text-slate-300 border border-slate-800 rounded-2xl p-8 sm:p-10 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
          <AlertCircle className="w-4 h-4" />
          <span>Vendor Onboarding & Invoicing Protocols</span>
        </div>
        <h3 className="text-xl font-bold text-white">
          Enterprise Compliance & Direct Document Verification
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl">
          To prevent document misuse, full GSTIN certificates, MSME registration certificates, and bank account remittance details are provided directly to authorized procurement and finance departments upon contract scoping or master service agreement (MSA) signing.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${COMPANY_DATA.primaryEmail}?subject=Vendor%20Onboarding%20Compliance%20Request`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Request Compliance Packet</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-semibold transition-colors"
          >
            <span>Contact Commercial Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Modal Drawer */}
      <BusinessVerificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
