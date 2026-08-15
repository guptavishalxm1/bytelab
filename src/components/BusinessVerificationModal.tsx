"use client";

import React, { useState } from "react";
import { ShieldCheck, CheckCircle2, Copy, Check, X, FileText, Globe, Building2, AlertCircle } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BusinessVerificationModal({ isOpen, onClose }: ModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-emerald-600 mb-2">
          <ShieldCheck className="w-6 h-6" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider">
            Verified Business Registry
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          ByteLab Infotech Corporate Credentials
        </h3>

        <p className="text-xs text-slate-600 mt-1">
          Formal registration documentation and enterprise identity records verified under Indian regulatory frameworks.
        </p>

        <div className="mt-6 space-y-3">
          {COMPANY_DATA.credentials.map((cred) => (
            <div
              key={cred.id}
              className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-3"
            >
              <div>
                <div className="text-xs font-mono text-slate-500">{cred.type}</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">{cred.label}</div>
                <div className="text-xs font-mono text-blue-600 mt-0.5">{cred.identifier}</div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Active</span>
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(cred.identifier, cred.id)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-md transition-colors"
                  title="Copy identifier"
                >
                  {copiedKey === cred.id ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
            <span>Official Invoicing: Contact billing department</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
