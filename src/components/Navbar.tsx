"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight, ShieldCheck, Code, Smartphone, Globe, Server, Database, Cloud, Cpu, Sparkles } from "lucide-react";
import { SERVICE_NAV_LINKS } from "@/data/navigation";

const serviceIcons: Record<string, React.ReactNode> = {
  "/services/web-development": <Globe className="w-4 h-4 text-blue-600" />,
  "/services/mobile-development": <Smartphone className="w-4 h-4 text-blue-600" />,
  "/services/software-development": <Code className="w-4 h-4 text-blue-600" />,
  "/services/backend-api": <Server className="w-4 h-4 text-blue-600" />,
  "/services/database-architecture": <Database className="w-4 h-4 text-blue-600" />,
  "/services/cloud-deployment": <Cloud className="w-4 h-4 text-blue-600" />,
  "/services/automation": <Cpu className="w-4 h-4 text-blue-600" />,
  "/services/ai-solutions": <Sparkles className="w-4 h-4 text-blue-600" />,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200"
          : "bg-white border-b border-slate-200/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-hidden focus:ring-2 focus:ring-blue-600 rounded-md p-1"
            aria-label="ByteLab Infotech - Home"
          >
            <div className="relative h-9 sm:h-11 w-auto aspect-32/9 flex items-center">
              <Image
                src="/logo.png"
                alt="ByteLab Infotech Logo"
                width={190}
                height={52}
                priority
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-blue-600 font-semibold"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Services Mega Dropdown Menu */}
              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-[560px] bg-white rounded-xl shadow-xl border border-slate-200 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="col-span-2 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                      Engineering Capabilities
                    </span>
                    <Link
                      href="/services"
                      className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      View All Services
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>

                  {SERVICE_NAV_LINKS.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-1.5 bg-slate-100 group-hover:bg-blue-50 rounded-md transition-colors shrink-0 mt-0.5">
                        {serviceIcons[service.href] || <Code className="w-4 h-4 text-blue-600" />}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          {service.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Selected Work */}
            <Link
              href="/work"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname.startsWith("/work")
                  ? "text-blue-600 font-semibold"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Selected Work
            </Link>

            {/* Technology */}
            <Link
              href="/technology"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/technology"
                  ? "text-blue-600 font-semibold"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Technology
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/about"
                  ? "text-blue-600 font-semibold"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              About
            </Link>

            {/* Business Info / Trust */}
            <Link
              href="/business"
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/business"
                  ? "text-blue-600 font-semibold"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Business Info</span>
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/contact"
                  ? "text-blue-600 font-semibold"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action: CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-lg shadow-xs hover:shadow-md transition-all duration-150"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-md transition-colors"
            >
              Inquire
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="space-y-1">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/" ? "bg-blue-50 text-blue-600" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <div className="pt-2 pb-1 border-t border-slate-100">
              <div className="px-3 text-xs font-mono font-semibold uppercase text-slate-500">
                Services
              </div>
              <div className="mt-1 space-y-1 pl-2">
                {SERVICE_NAV_LINKS.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`block px-3 py-1.5 rounded-md text-sm ${
                      pathname === service.href
                        ? "text-blue-600 font-semibold bg-blue-50"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/work"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname.startsWith("/work")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Selected Work (Case Studies)
            </Link>

            <Link
              href="/technology"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/technology"
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Technology Stack
            </Link>

            <Link
              href="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/about"
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              About ByteLab
            </Link>

            <Link
              href="/business"
              className={`flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/business"
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Business Info & Verification</span>
              </div>
              <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                GST / Udyam / D-U-N-S
              </span>
            </Link>

            <Link
              href="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/contact"
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Contact & Inquiries
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center py-2.5 px-4 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 transition-colors shadow-xs"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
