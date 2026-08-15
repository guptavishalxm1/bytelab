"use client";

import React, { useState } from "react";
import { Server, Smartphone, Database, Cloud, Terminal, CheckCircle2 } from "lucide-react";
import { TECHNOLOGIES_DATA } from "@/data/technologies";

const categoryIcons: Record<string, React.ReactNode> = {
  backend: <Server className="w-4 h-4 text-blue-600" />,
  mobile: <Smartphone className="w-4 h-4 text-blue-600" />,
  database: <Database className="w-4 h-4 text-blue-600" />,
  infrastructure: <Cloud className="w-4 h-4 text-blue-600" />,
  development: <Terminal className="w-4 h-4 text-blue-600" />,
};

export default function TechGrid() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const displayedCategories =
    activeTab === "all"
      ? TECHNOLOGIES_DATA
      : TECHNOLOGIES_DATA.filter((cat) => cat.id === activeTab);

  return (
    <div className="space-y-8">
      {/* Category Tab Buttons */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-200">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
            activeTab === "all"
              ? "bg-slate-900 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          All Technologies
        </button>

        {TECHNOLOGIES_DATA.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveTab(cat.id)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
              activeTab === cat.id
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {categoryIcons[cat.id]}
            <span>{cat.title}</span>
          </button>
        ))}
      </div>

      {/* Grid of Technologies */}
      <div className="space-y-10">
        {displayedCategories.map((category) => (
          <div key={category.id} className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="p-1 bg-blue-50 rounded-md border border-blue-100">
                  {categoryIcons[category.id]}
                </span>
                <span>{category.title}</span>
              </h3>
              <p className="text-xs text-slate-500">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                      <span className="text-[10px] font-mono font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                        {item.experienceLevel}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-slate-500 mt-1">{item.role}</div>

                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {item.rationale}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="text-[10px] font-mono uppercase text-slate-400 mb-1">
                      Applied In
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {item.useCases.map((uc) => (
                        <span
                          key={uc}
                          className="text-[10px] font-mono text-slate-600 bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded-sm"
                        >
                          {uc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
