export interface TechItem {
  name: string;
  category: "backend" | "mobile" | "database" | "infrastructure" | "development";
  role: string;
  experienceLevel: string;
  rationale: string;
  useCases: string[];
}

export interface TechCategory {
  id: string;
  title: string;
  description: string;
  items: TechItem[];
}

export const TECHNOLOGIES_DATA: TechCategory[] = [
  {
    id: "backend",
    title: "Backend & Server Engineering",
    description: "Battle-tested enterprise frameworks engineered for transaction integrity, type safety, and high-concurrency throughput.",
    items: [
      {
        name: "Java (17 & 21 LTS)",
        category: "backend",
        role: "Primary Enterprise Backend Language",
        experienceLevel: "Core Competency",
        rationale: "Mature memory management, strong type safety, high concurrency, and long-term ecosystem stability required for serious business logic.",
        useCases: ["Enterprise Backends", "Transaction Engines", "Batch Processors", "Payment Reconciliation"],
      },
      {
        name: "Spring Boot (3.x)",
        category: "backend",
        role: "Microservices & Web Framework",
        experienceLevel: "Core Competency",
        rationale: "Robust dependency injection, Spring Security, enterprise JPA data access, and production-grade monitoring through Spring Actuator.",
        useCases: ["RESTful APIs", "Security & RBAC", "Microservices", "Data Pipelines"],
      },
      {
        name: "REST APIs & OpenAPI",
        category: "backend",
        role: "Standardized API Architecture",
        experienceLevel: "Core Competency",
        rationale: "Clean HTTP semantics, strict JSON request/response schema contracts, status code accuracy, and interactive Swagger documentation.",
        useCases: ["Mobile Integration", "Third-Party Webhooks", "Frontend Service Layer", "ERP Connectors"],
      },
      {
        name: "Node.js & TypeScript",
        category: "backend",
        role: "Lightweight Services & Web Integration",
        experienceLevel: "Proficient",
        rationale: "Fast asynchronous I/O and shared TypeScript type definitions between frontend and backend microservices.",
        useCases: ["BFF (Backend for Frontend)", "Web Push Services", "Serverless API Routes", "Document Generation"],
      },
    ],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Modern Android ecosystem engineering designed for responsiveness, background sync, and offline persistence.",
    items: [
      {
        name: "Kotlin",
        category: "mobile",
        role: "Primary Android Language",
        experienceLevel: "Core Competency",
        rationale: "Null safety, concise syntax, expressive extension functions, and seamless JVM interop.",
        useCases: ["Native Android Apps", "Coroutines Async Logic", "Domain Models"],
      },
      {
        name: "Jetpack Compose",
        category: "mobile",
        role: "Modern Declarative Android UI",
        experienceLevel: "Core Competency",
        rationale: "Declarative UI rendering with reactive state management, reducing boilerplate code and UI rendering bugs.",
        useCases: ["Responsive Mobile Layouts", "Custom Components", "Smooth Animations"],
      },
      {
        name: "Android SDK & Architecture Components",
        category: "mobile",
        role: "Native Device Framework",
        experienceLevel: "Core Competency",
        rationale: "MVVM/MVI architecture, ViewModel state survival across configuration changes, and deep OS integration.",
        useCases: ["Camera Integration", "Fused Location GPS", "WorkManager Sync", "Biometric Authentication"],
      },
      {
        name: "Room Database (SQLite)",
        category: "mobile",
        role: "Local Device Persistence",
        experienceLevel: "Core Competency",
        rationale: "Compile-time SQL verification, observable Flow queries, and reliable offline-first transaction queues.",
        useCases: ["Offline Data Caching", "Local Waypoint Queues", "User Session Storage"],
      },
    ],
  },
  {
    id: "database",
    title: "Databases & Data Storage",
    description: "Structured relational models and specialized in-memory stores ensuring ACID compliance and sub-millisecond lookups.",
    items: [
      {
        name: "PostgreSQL (15/16)",
        category: "database",
        role: "Primary Relational Database",
        experienceLevel: "Core Competency",
        rationale: "Rock-solid ACID compliance, robust indexing (B-Tree, GIN, Partial), table partitioning, and JSONB document support.",
        useCases: ["Core Business Data", "Financial Transactions", "User Accounts & RBAC", "Relational Inventories"],
      },
      {
        name: "MongoDB",
        category: "database",
        role: "Document Store",
        experienceLevel: "Proficient",
        rationale: "Flexible document schemas for dynamic content models, catalog management, and audit event streams.",
        useCases: ["Dynamic Form Schemas", "Audit Event Logs", "Unstructured Content"],
      },
      {
        name: "Redis",
        category: "database",
        role: "In-Memory Cache & Key-Value Store",
        experienceLevel: "Core Competency",
        rationale: "Sub-millisecond data retrieval for active user sessions, API rate-limiting tokens, and hot cache keys.",
        useCases: ["Session Storage", "API Rate Limiting", "Cache Aside Strategy", "Pub/Sub Messaging"],
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & DevOps",
    description: "Production hardening, automated build pipelines, and reliable Linux server administration.",
    items: [
      {
        name: "Linux (Ubuntu / Debian)",
        category: "infrastructure",
        role: "Production Operating System",
        experienceLevel: "Core Competency",
        rationale: "Unmatched server stability, granular process management with systemd, firewall security (UFW), and minimal overhead.",
        useCases: ["Dedicated Servers", "VPS Hosting", "Cron Automation", "Reverse Proxy Gateways"],
      },
      {
        name: "Docker & Containerization",
        category: "infrastructure",
        role: "Environment Consistency",
        experienceLevel: "Core Competency",
        rationale: "Deterministic packaging of backend and database services, eliminating 'works on my machine' deployment issues.",
        useCases: ["Service Isolation", "Multi-Container Deployments", "Reproducible Staging"],
      },
      {
        name: "Nginx",
        category: "infrastructure",
        role: "Reverse Proxy & Web Server",
        experienceLevel: "Core Competency",
        rationale: "High-concurrency reverse proxying, SSL termination, HTTP/2 multiplexing, and static asset caching.",
        useCases: ["SSL/TLS Termination", "Load Balancing", "Gzip/Brotli Compression", "Security Headers"],
      },
      {
        name: "GitHub Actions CI/CD",
        category: "infrastructure",
        role: "Continuous Integration & Deployment",
        experienceLevel: "Core Competency",
        rationale: "Automated test execution on every commit, Docker container builds, and zero-downtime SSH deployments.",
        useCases: ["Automated Unit Testing", "Artifact Compilation", "Production Deployment Automation"],
      },
    ],
  },
  {
    id: "development",
    title: "Engineering Tools & Architecture",
    description: "Tooling that enforces code quality, version control, reproducible builds, and strict domain boundaries.",
    items: [
      {
        name: "Git & GitHub",
        category: "development",
        role: "Version Control & Collaboration",
        experienceLevel: "Core Competency",
        rationale: "Atomic commit history, branch protection rules, and structured code reviews.",
        useCases: ["Source Control", "Release Tagging", "Issue Tracking"],
      },
      {
        name: "Maven / Gradle",
        category: "development",
        role: "Build & Dependency Management",
        experienceLevel: "Core Competency",
        rationale: "Deterministic JVM dependency resolution, reproducible builds, and plugin lifecycle management.",
        useCases: ["JVM Build Automation", "Security Dependency Audits", "Packaging JARs"],
      },
      {
        name: "Flyway / Liquibase",
        category: "development",
        role: "Database Schema Versioning",
        experienceLevel: "Core Competency",
        rationale: "Executable SQL migrations tracked in source control, preventing database drift across environments.",
        useCases: ["Database Migrations", "Seed Scripts", "Schema Version Tracking"],
      },
      {
        name: "Clean Architecture & DDD",
        category: "development",
        role: "Architectural Methodology",
        experienceLevel: "Core Competency",
        rationale: "Enforcing clear separation between business logic, data persistence, and external frameworks.",
        useCases: ["Domain Modeling", "Maintainable Codebases", "Testable Business Logic"],
      },
    ],
  },
];
