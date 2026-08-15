import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { COMPANY_DATA } from "@/data/company";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0a0f1d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bytelabinfotech.in"),
  title: {
    default: "ByteLab Infotech | Software Development & Technology Engineering",
    template: "%s | ByteLab Infotech",
  },
  description:
    "ByteLab Infotech is a technology services and software engineering company architecting scalable web applications, native Android mobile apps, Java/Spring Boot backends, PostgreSQL databases, and business automation software.",
  keywords: [
    "ByteLab Infotech",
    "bytelabinfotech.in",
    "software development company",
    "custom software development",
    "web application development",
    "mobile app development India",
    "Java Spring Boot development",
    "backend development company",
    "PostgreSQL database architecture",
    "business software development",
    "business automation",
    "technology consulting",
  ],
  authors: [{ name: "ByteLab Infotech", url: "https://bytelabinfotech.in" }],
  creator: "ByteLab Infotech",
  publisher: "ByteLab Infotech",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://bytelabinfotech.in",
  },
  openGraph: {
    title: "ByteLab Infotech | Software Development & Technology Engineering",
    description:
      "Engineering-first software development company specializing in custom business software, scalable web platforms, native Android apps, and robust Java/Spring Boot backends.",
    url: "https://bytelabinfotech.in",
    siteName: "ByteLab Infotech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ByteLab Infotech - Engineering First",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteLab Infotech | Software Development & Engineering",
    description:
      "Reliable web applications, mobile apps, Java Spring Boot backends, and custom business software engineered for scale.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "google2c10c8d1c0c46f9a",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_DATA.name,
  legalName: COMPANY_DATA.legalName,
  url: "https://bytelabinfotech.in",
  logo: "https://bytelabinfotech.in/logo.png",
  description: COMPANY_DATA.description,
  email: COMPANY_DATA.primaryEmail,
  foundingDate: `${COMPANY_DATA.establishedYear}`,
  sameAs: [
    "https://linkedin.com",
    "https://github.com",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Custom Software Development",
    "Web Application Development",
    "Mobile Application Development",
    "Backend & API Development",
    "Java Spring Boot Architecture",
    "PostgreSQL Database Optimization",
    "Cloud & Server Deployment",
    "Business Automation",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ByteLab Infotech",
  url: "https://bytelabinfotech.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://bytelabinfotech.in/services?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-[#0B0F19] selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
