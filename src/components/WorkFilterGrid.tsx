"use client";

import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS_DATA, ProjectCaseStudy } from "@/data/projects";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "software", label: "Custom Software" },
  { id: "web", label: "Web Applications" },
  { id: "mobile", label: "Mobile Apps (Android)" },
  { id: "backend", label: "Backend Systems & APIs" },
];

export default function WorkFilterGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.categorySlug === activeCategory);

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-200">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-colors ${
              activeCategory === cat.id
                ? "bg-slate-950 text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {cat.label} ({cat.id === "all" ? PROJECTS_DATA.length : PROJECTS_DATA.filter(p => p.categorySlug === cat.id).length})
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
