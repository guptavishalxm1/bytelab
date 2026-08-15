import React from "react";
import Link from "next/link";
import { ArrowRight, Layers, Cpu, CheckCircle } from "lucide-react";
import { ProjectCaseStudy } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectCaseStudy;
  layout?: "grid" | "featured";
}

export default function ProjectCard({ project, layout = "grid" }: ProjectCardProps) {
  if (layout === "featured") {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-slate-300 hover:shadow-lg transition-all duration-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                {project.industry}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {project.year} • {project.timeline}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {project.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              {project.shortSummary}
            </p>

            {/* Challenge & Solution snippets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
              <div className="space-y-1">
                <div className="text-xs font-mono font-semibold uppercase text-slate-500">
                  Business Challenge
                </div>
                <p className="text-xs text-slate-700 line-clamp-3">
                  {project.businessChallenge}
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono font-semibold uppercase text-slate-500">
                  ByteLab Engineering Solution
                </div>
                <p className="text-xs text-slate-700 line-clamp-3">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Stack Tags */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5 items-center">
              <span className="text-xs font-mono text-slate-400 mr-1">Stack:</span>
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 px-5 py-2.5 rounded-lg transition-colors shadow-xs"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Architecture / Verifiable Metrics Column */}
          <div className="lg:col-span-5 bg-slate-950 text-slate-200 rounded-xl p-5 sm:p-6 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>Verifiable Architecture Deliverables</span>
            </div>

            <div className="space-y-3">
              {project.metricsVerifiable.map((metric) => (
                <div key={metric.label} className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <div className="text-xs font-mono text-slate-400">{metric.label}</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-100 mt-0.5">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800/80">
              <div className="text-xs font-mono text-slate-400 uppercase">Core Result</div>
              <p className="text-xs text-slate-300 mt-1 flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{project.outcomes[0]}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all group">
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-[11px] font-mono font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
            {project.category}
          </span>
          <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
            {project.industry}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3">
          {project.shortSummary}
        </p>

        <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
          <div className="text-[11px] font-mono text-slate-400 uppercase">Solution Architecture</div>
          <p className="text-xs text-slate-700 line-clamp-2">{project.solution}</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[10px] font-mono text-slate-400 px-1 py-0.5">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-[11px] font-mono text-slate-400">{project.year} Case Study</span>
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
