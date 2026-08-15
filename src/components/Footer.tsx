import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Mail, Globe, ArrowUpRight } from "lucide-react";
import { FOOTER_SECTIONS } from "@/data/navigation";
import { COMPANY_DATA } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Credentials & Trust Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-950/80 border border-emerald-800/60 rounded-lg text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  Formally Registered Technology Enterprise
                </div>
                <div className="text-xs text-slate-400">
                  Operates under registered business credentials: GSTIN • UDYAM • D-U-N-S® • bytelabinfotech.in
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/business"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <span>View Corporate Credentials</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Navigation Tree */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-lg inline-block">
                <Image
                  src="/logo.png"
                  alt="ByteLab Infotech"
                  width={160}
                  height={44}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              ByteLab Infotech is a software engineering organization architecting reliable web applications, mobile apps, Java backends, and business automation software designed around real business outcomes.
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Domain: bytelabinfotech.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a
                  href={`mailto:${COMPANY_DATA.primaryEmail}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {COMPANY_DATA.primaryEmail}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Engineering Tenet
              </div>
              <div className="text-xs text-slate-300 font-medium italic mt-0.5">
                &ldquo;Engineering first. Business outcomes second.&rdquo;
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-3">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
                {section.title}
              </div>
              <ul className="space-y-2 text-xs sm:text-sm">
                {section.links.map((link) => (
                  <li key={link.href + link.title}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} ByteLab Infotech. All rights reserved. Operating through{" "}
            <span className="font-mono text-slate-300">bytelabinfotech.in</span>.
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-slate-200 transition-colors">
              Cookie Policy
            </Link>
            <Link href="/business" className="hover:text-slate-200 transition-colors">
              Business Registry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
