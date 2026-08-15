import React from "react";
import Link from "next/link";
import { ArrowRight, Globe, Smartphone, Code2, Server, Database, Cloud, Cpu, Sparkles } from "lucide-react";
import { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5 text-blue-600" />,
  Smartphone: <Smartphone className="w-5 h-5 text-blue-600" />,
  Code2: <Code2 className="w-5 h-5 text-blue-600" />,
  Server: <Server className="w-5 h-5 text-blue-600" />,
  Database: <Database className="w-5 h-5 text-blue-600" />,
  Cloud: <Cloud className="w-5 h-5 text-blue-600" />,
  Cpu: <Cpu className="w-5 h-5 text-blue-600" />,
  Sparkles: <Sparkles className="w-5 h-5 text-blue-600" />,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200 group">
      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="p-2.5 bg-slate-50 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 rounded-lg transition-colors">
            {iconMap[service.iconName] || <Code2 className="w-5 h-5 text-blue-600" />}
          </div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
            {service.badge}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mt-4 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Capabilities Mini List */}
        <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
          <div className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider">
            Key Capabilities
          </div>
          <ul className="space-y-1">
            {service.capabilities.slice(0, 3).map((cap) => (
              <li key={cap.title} className="text-xs text-slate-700 flex items-start gap-1.5">
                <span className="text-blue-600 font-bold">•</span>
                <span className="line-clamp-1">{cap.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {service.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all"
        >
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
