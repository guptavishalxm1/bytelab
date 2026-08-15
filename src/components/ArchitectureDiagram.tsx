import React from "react";
import { Server, Smartphone, Globe, Shield, Database, Cpu, HardDrive, RefreshCw } from "lucide-react";

export default function ArchitectureDiagram() {
  return (
    <div className="bg-slate-950 text-white border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
            System Topology Blueprint
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
            Standard ByteLab Enterprise Architecture
          </h3>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-mono text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Layered Domain-Driven Design</span>
        </div>
      </div>

      {/* Visual Diagram */}
      <div className="mt-8 space-y-4">
        {/* Layer 1: Clients */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono uppercase text-slate-400 flex items-center justify-between">
            <span>01. Client & Presentation Layer</span>
            <span className="text-slate-500">HTTPS / WSS / REST</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-3.5 flex items-center gap-3">
              <Globe className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-100">Web Application</div>
                <div className="text-[11px] text-slate-400">Next.js / React / TypeScript</div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-3.5 flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-100">Mobile Application</div>
                <div className="text-[11px] text-slate-400">Kotlin / Jetpack Compose / Room</div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-3.5 flex items-center gap-3">
              <Cpu className="w-5 h-5 text-purple-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-100">External Systems & POS</div>
                <div className="text-[11px] text-slate-400">Webhooks / Third-party APIs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider / Gateway */}
        <div className="bg-slate-900/60 border border-dashed border-slate-800 rounded-lg p-3 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span>Security Layer: Nginx Reverse Proxy • TLS 1.3 • Rate Limiting • OWASP Sanitization</span>
        </div>

        {/* Layer 2: Core Backend Engine */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono uppercase text-slate-400 flex items-center justify-between">
            <span>02. Business Logic & Application Engine</span>
            <span className="text-slate-500">Java 21 / Spring Boot 3.x</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-900 border border-blue-900/40 rounded-lg p-3.5 flex items-center gap-3">
              <Server className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-100">REST API Controllers</div>
                <div className="text-[11px] text-slate-400">OpenAPI Schemas & JWT Auth</div>
              </div>
            </div>

            <div className="bg-slate-900 border border-blue-900/40 rounded-lg p-3.5 flex items-center gap-3">
              <Cpu className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-100">Domain Service Layer</div>
                <div className="text-[11px] text-slate-400">Transactional Business Logic</div>
              </div>
            </div>

            <div className="bg-slate-900 border border-blue-900/40 rounded-lg p-3.5 flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-100">Async Jobs & Batch Engine</div>
                <div className="text-[11px] text-slate-400">Spring Batch / Cron Workers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 3: Persistence & Storage */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono uppercase text-slate-400 flex items-center justify-between">
            <span>03. Data Persistence & Caching</span>
            <span className="text-slate-500">ACID Relational + In-Memory</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-3.5 flex items-center gap-3">
              <Database className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-100">PostgreSQL 16</div>
                <div className="text-[11px] text-slate-400">Normalized Relational Schemas</div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-3.5 flex items-center gap-3">
              <HardDrive className="w-5 h-5 text-red-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-100">Redis Cache</div>
                <div className="text-[11px] text-slate-400">Session & Rate-Limit Tokens</div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-3.5 flex items-center gap-3">
              <Shield className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-100">Automated Backups</div>
                <div className="text-[11px] text-slate-400">Encrypted Off-Site Snapshots</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
