import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, ShieldCheck, CheckCircle2, Terminal, Layers, Sparkles, ChevronRight, Server, Globe, Smartphone, Cpu } from "lucide-react";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import TechGrid from "@/components/TechGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import WhyByteLab from "@/components/WhyByteLab";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import ProjectInquiryForm from "@/components/ProjectInquiryForm";
import { SERVICES_DATA } from "@/data/services";
import { PROJECTS_DATA } from "@/data/projects";
import { COMPANY_DATA } from "@/data/company";

export default function HomePage() {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="font-semibold">ByteLab Infotech</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600">Enterprise Engineering & Software Services</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1]">
                Technology Built <br className="hidden sm:inline" />
                <span className="text-slate-900">Around Your Business</span>
              </h1>

              {/* Supporting Statement */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                ByteLab Infotech builds reliable web applications, native mobile apps, Java/Spring Boot backend systems, and custom business software designed around real operational requirements.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  <span>View Selected Work</span>
                </Link>
              </div>

              {/* Compact Credibility Line */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-500">
                <span className="font-semibold text-slate-700">Capabilities:</span>
                <span>Software Development</span>
                <span className="text-slate-300">•</span>
                <span>Web Applications</span>
                <span className="text-slate-300">•</span>
                <span>Mobile (Android)</span>
                <span className="text-slate-300">•</span>
                <span>Backend & APIs</span>
                <span className="text-slate-300">•</span>
                <span>Cloud & Automation</span>
              </div>
            </div>

            {/* Right Hero Code & Architecture Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-slate-300">OrderProcessingService.java</span>
                  </div>
                  <span className="text-blue-400 text-[11px]">Spring Boot 3.x</span>
                </div>

                {/* Code Snippet */}
                <div className="font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto space-y-1">
                  <div><span className="text-purple-400">@Service</span></div>
                  <div><span className="text-purple-400">@Transactional</span></div>
                  <div><span className="text-blue-400">public class</span> <span className="text-yellow-300">OrderProcessingService</span> &#123;</div>
                  <div className="pl-4 text-slate-400">// Strict ACID validation & inventory locking</div>
                  <div className="pl-4"><span className="text-purple-400">public</span> <span className="text-cyan-300">OrderResult</span> <span className="text-blue-300">processTransaction</span>(<span className="text-cyan-300">OrderRequest</span> req) &#123;</div>
                  <div className="pl-8"><span className="text-slate-300">inventoryRepo.acquireLock(req.skuId());</span></div>
                  <div className="pl-8"><span className="text-slate-300">reconciliationEngine.auditRecord(req);</span></div>
                  <div className="pl-8"><span className="text-purple-400">return new</span> <span className="text-cyan-300">OrderResult</span>(OrderState.<span className="text-emerald-400">COMMITTED</span>);</div>
                  <div className="pl-4">&#125;</div>
                  <div>&#125;</div>
                </div>

                {/* Live Engineering Metrics Tag */}
                <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                    <div className="text-slate-400 text-[10px] uppercase">Core Discipline</div>
                    <div className="text-slate-200 font-semibold mt-0.5">ACID Compliant DBs</div>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                    <div className="text-slate-400 text-[10px] uppercase">Architecture</div>
                    <div className="text-blue-400 font-semibold mt-0.5">Clean Domain-Driven</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST & CREDIBILITY SECTION */}
      <TrustBar />

      {/* 3. ABOUT BYTELAB INFOTECH INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                Company Mission
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Engineering Digital Products That Actually Work
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                ByteLab Infotech focuses on building reliable technology rather than simply delivering visual websites. We engineer backend systems, transactional databases, and resilient mobile/web applications built for operational longevity.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  <span>Learn about our engineering philosophy</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2">
                <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-600" />
                  <span>Strong Backend Engineering</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineered with Java 21, Spring Boot, and robust thread pools for high transaction concurrency and zero data loss.
                </p>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2">
                <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span>Modern Application Architecture</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Responsive Next.js & React frontends with strict TypeScript type safety and accessible component structures.
                </p>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2">
                <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  <span>API-Driven & Database First</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Strict OpenAPI contracts, normalized PostgreSQL schemas, and B-Tree indexing optimized for low query latency.
                </p>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2">
                <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Security & Long-Term Support</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hardened Linux servers, automated CI/CD builds, encrypted secrets, and continuous maintenance partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
              Core Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
              Engineering Services We Deliver
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              From bespoke internal software and mobile apps to high-throughput backend APIs and business automation.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            <span>View All 8 Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 5. SELECTED WORK / CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
              Selected Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
              Engineered Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Real problem statements, architectural approaches, and verifiable outcomes across supply chain, fleet logistics, and financial systems.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            <span>View Complete Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} layout="featured" />
          ))}
        </div>
      </section>

      {/* 6. TECHNOLOGY STACK & ARCHITECTURE BLUEPRINT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
            Technology Stack
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
            Technology We Work With
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            We deliberately focus on battle-tested, enterprise-grade technologies that provide rock-solid type safety, ACID transaction guarantees, and long-term maintainability.
          </p>
        </div>

        <TechGrid />

        <div className="pt-4">
          <ArchitectureDiagram />
        </div>
      </section>

      {/* 7. SYSTEMATIC 6-STAGE PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
            Engineering Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
            How We Work
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            A predictable, transparent, 6-stage engineering lifecycle designed to eliminate technical surprises and deliver dependable software.
          </p>
        </div>

        <ProcessTimeline />
      </section>

      {/* 8. WHY BYTELAB INFOTECH DIFFERENTIATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
            Differentiators
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
            Why ByteLab Infotech
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            We operate as a founder-led engineering partner, building systems around business logic and long-term durability.
          </p>
        </div>

        <WhyByteLab />
      </section>

      {/* 9. WHO WE WORK WITH (INDUSTRY SEGMENTS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
            Client Profiles
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
            Who We Work With
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            We collaborate directly with organizations that need serious software engineering and accountable delivery.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {COMPANY_DATA.clientProfiles.map((client) => (
              <div
                key={client.title}
                className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2"
              >
                <div className="text-sm font-bold text-slate-900">{client.title}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PROJECT INTAKE / INQUIRY SECTION */}
      <section id="contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ProjectInquiryForm />
      </section>
    </div>
  );
}
