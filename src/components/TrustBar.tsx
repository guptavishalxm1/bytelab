"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Copy, Check, ArrowRight, Building, FileCheck, Globe, Hash } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function TrustBar() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="bg-slate-900 text-white border-y border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Business Credentials</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
              Built as a Registered Business Entity
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              ByteLab Infotech operates as a formally registered technology business with recognized corporate identity and tax compliance documentation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/business"
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 px-4 py-2 rounded-lg transition-colors"
            >
              <span>Full Corporate Disclosure</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {COMPANY_DATA.credentials.map((cred) => {
            const isDomain = cred.id === "domain";
            const icon =
              cred.id === "gst" ? (
                <FileCheck className="w-4 h-4 text-emerald-400" />
              ) : cred.id === "udyam" ? (
                <Building className="w-4 h-4 text-blue-400" />
              ) : cred.id === "duns" ? (
                <Hash className="w-4 h-4 text-cyan-400" />
              ) : (
                <Globe className="w-4 h-4 text-blue-400" />
              );

            return (
              <div
                key={cred.id}
                className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-slate-900 rounded-md border border-slate-800">
                        {icon}
                      </div>
                      <span className="text-xs font-mono text-slate-400">{cred.type}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800/60">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  </div>

                  <div className="mt-3">
                    <div className="text-sm font-semibold text-slate-100">{cred.label}</div>
                    <div className="text-xs font-mono text-slate-300 mt-1 flex items-center justify-between">
                      <span className="truncate">{cred.identifier}</span>
                      {isDomain && (
                        <button
                          type="button"
                          onClick={() => handleCopy(cred.value, cred.id)}
                          className="p-1 hover:text-white transition-colors text-slate-500"
                          title="Copy domain"
                          aria-label="Copy domain name"
                        >
                          {copiedId === cred.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800/80 line-clamp-2">
                  {cred.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
