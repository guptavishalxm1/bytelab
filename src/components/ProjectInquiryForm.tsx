"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Mail, Phone, Clock, ArrowRight } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

const PROJECT_TYPES = [
  "Custom Software Development",
  "Web Application Development",
  "Mobile App Development (Android)",
  "Backend & REST API Development",
  "Database & System Architecture",
  "Cloud & Server Deployment",
  "Business Automation",
  "AI & Intelligent Workflows",
  "Maintenance & Long-Term Support",
  "Other / Technical Consultation",
];

const BUDGET_RANGES = [
  "Under ₹1,00,000 / < $1,500 (Small Scope / MVP)",
  "₹1,00,000 – ₹3,00,000 / $1,500 – $4,000",
  "₹3,00,000 – ₹8,00,000 / $4,000 – $10,000",
  "₹8,00,000+ / $10,000+ (Enterprise System)",
  "Undecided / Need Architecture Estimation",
];

const TIMELINES = [
  "Immediate (Within 2–4 Weeks)",
  "1 – 2 Months",
  "2 – 4 Months",
  "Flexible / Long-Term Development",
];

export default function ProjectInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: PROJECT_TYPES[0],
    budgetRange: BUDGET_RANGES[1],
    timeline: TIMELINES[1],
    description: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.description.trim()) {
      setStatus("error");
      setErrorMessage("Please complete your name, official email, and project description.");
      return;
    }

    setStatus("submitting");
    // Simulate immediate reliable dispatch
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Form Description & Contact Details */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600">
              <Clock className="w-3.5 h-3.5" />
              <span>Project Intake & Scoping</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
              Have a Project in Mind?
            </h3>

            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Tell us what you are building, what operational problem you need to solve, and where you need technical engineering firepower. We review requirements with an engineering mindset.
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-blue-600 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Direct Inquiries</div>
                  <a
                    href={`mailto:${COMPANY_DATA.primaryEmail}`}
                    className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    {COMPANY_DATA.primaryEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-emerald-600 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Direct Contact</div>
                  <a
                    href={`tel:${COMPANY_DATA.rawPhone}`}
                    className="text-sm font-semibold text-slate-900 font-mono hover:text-blue-600 transition-colors"
                  >
                    {COMPANY_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-600 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Response Turnaround</div>
                  <div className="text-sm font-semibold text-slate-900">
                    Direct reply within 24 business hours with initial technical assessment
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-600 space-y-1">
            <div className="font-semibold text-slate-900 font-mono">Engineering Guarantee</div>
            <p>
              No aggressive sales pitches. Your inquiry goes straight to technical leadership for genuine scope evaluation.
            </p>
          </div>
        </div>

        {/* Right Form Fields */}
        <div className="lg:col-span-7">
          {status === "success" ? (
            <div className="h-full bg-slate-50 border border-emerald-200 rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="p-3 bg-emerald-100 text-emerald-700 rounded-full">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Inquiry Received</h4>
              <p className="text-sm text-slate-600 max-w-md">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. We have received your project details for{" "}
                <span className="font-semibold text-slate-900">{formData.projectType}</span>. Our technical team is reviewing your requirements and will reach out to{" "}
                <span className="font-mono text-blue-600 font-semibold">{formData.email}</span> within 24 business hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setFormData({
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    projectType: PROJECT_TYPES[0],
                    budgetRange: BUDGET_RANGES[1],
                    timeline: TIMELINES[1],
                    description: "",
                  });
                }}
                className="mt-2 text-xs font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === "error" && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:border-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-semibold text-slate-700 mb-1">
                    Organization / Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Apex Logistics Ltd."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:border-blue-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Official Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:border-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:border-blue-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-xs font-semibold text-slate-700 mb-1">
                    Primary Service Category
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:bg-white focus:border-blue-600 transition-colors"
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budgetRange" className="block text-xs font-semibold text-slate-700 mb-1">
                    Budget Expectation
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:bg-white focus:border-blue-600 transition-colors"
                  >
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:bg-white focus:border-blue-600 transition-colors"
                  >
                    {TIMELINES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-xs font-semibold text-slate-700 mb-1">
                  Project Description & Requirements <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Outline the core objective, current technical bottlenecks, target platforms (Web, Android, Backend), or existing software integrations required..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:border-blue-600 transition-colors resize-y"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 transition-colors shadow-xs"
                >
                  {status === "submitting" ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Discuss Your Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  Strict confidentiality guaranteed. We do not share your contact details.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
