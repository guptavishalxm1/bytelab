export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  overview: string;
  badge: string;
  iconName: string;
  capabilities: ServiceCapability[];
  technicalApproach: {
    title: string;
    points: string[];
  }[];
  deliverables: string[];
  technologies: string[];
  faqs: ServiceFAQ[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Application Development",
    badge: "Web Applications",
    iconName: "Globe",
    shortDescription: "Modern, responsive, and highly scalable web applications built for business workflows and digital products.",
    heroHeadline: "High-Performance Web Applications Engineered for Scale",
    heroSubheadline: "From internal operational dashboards to customer-facing SaaS platforms, we build fast, secure, and resilient web applications using modern, clean frontends connected to robust backends.",
    overview:
      "Modern businesses require web applications that are more than just digital brochures. ByteLab Infotech develops web applications tailored to operational workflows, data visualization, real-time user collaboration, and enterprise transaction processing. We prioritize server-side performance, responsive accessibility across devices, and deep API integration.",
    capabilities: [
      {
        title: "Custom Business Portals & Dashboards",
        description: "Secure, role-based web portals for internal operations, inventory tracking, analytics, and customer account management.",
      },
      {
        title: "SaaS & Digital Product Frontends",
        description: "Modular, performant user interfaces built with React, Next.js, and TypeScript, optimized for high Core Web Vitals and low latency.",
      },
      {
        title: "API-Driven Single-Page Applications",
        description: "State-managed client applications seamlessly integrated with RESTful backends and real-time WebSocket endpoints.",
      },
      {
        title: "E-Commerce & Billing Interfaces",
        description: "Secure checkout flows, recurring subscription management, and payment gateway integrations with strict validation.",
      },
    ],
    technicalApproach: [
      {
        title: "Architecture & Framework Choice",
        points: [
          "Server-side rendering (SSR) and static site generation (SSG) for instantaneous first-load speeds and search visibility.",
          "Strict TypeScript type safety end-to-end to eliminate runtime anomalies.",
          "Component-driven design systems ensuring visual and functional consistency.",
        ],
      },
      {
        title: "Performance & Security",
        points: [
          "Optimized asset delivery, route prefetching, and minimal JavaScript bundle payloads.",
          "Strict Content Security Policies (CSP), HTTPS enforcement, and cross-site scripting (XSS) prevention.",
          "Mobile-first responsive layouts meticulously tested across desktop, tablet, and mobile viewports.",
        ],
      },
    ],
    deliverables: [
      "Fully responsive, production-ready web application",
      "Modular, reusable UI component library",
      "API integration layer with robust error handling",
      "Automated CI/CD build scripts and deployment manifests",
      "Technical handover and architecture documentation",
    ],
    technologies: ["React", "Next.js", "TypeScript", "HTML5/CSS3", "REST APIs", "Tailwind CSS", "Node.js"],
    faqs: [
      {
        question: "How do you ensure the web application is fast on mobile devices?",
        answer: "We employ mobile-first CSS architecture, automatic code splitting, optimized asset compression, and strict budget monitoring for JavaScript execution times.",
      },
      {
        question: "Can the web application integrate with our existing backend or database?",
        answer: "Yes. We design frontend architectures that communicate cleanly with any REST, GraphQL, or legacy enterprise API via secure authentication protocols.",
      },
    ],
  },
  {
    id: "mobile-development",
    slug: "mobile-development",
    title: "Mobile App Development",
    badge: "Android & Cross-Platform",
    iconName: "Smartphone",
    shortDescription: "Native Android and cross-platform mobile applications engineered with high responsiveness, offline capabilities, and backend sync.",
    heroHeadline: "Reliable Mobile Engineering for Android & Connected Devices",
    heroSubheadline: "We build intuitive, robust mobile applications with native performance, offline resilience, and secure enterprise backend integration.",
    overview:
      "ByteLab Infotech creates native Android applications using modern Kotlin and Jetpack Compose alongside dependable cross-platform architectures. Our mobile solutions are built for real-world field conditions, featuring background synchronization, local database caching, hardware sensor access, and rock-solid security.",
    capabilities: [
      {
        title: "Native Android Development",
        description: "Modern Android applications built with Kotlin, Jetpack Compose, Coroutines, and Android Architecture Components (MVVM/MVI).",
      },
      {
        title: "Field & Operations Mobile Apps",
        description: "Dedicated mobile tooling for delivery agents, technicians, field inspectors, and warehouse staff with offline-first data capture.",
      },
      {
        title: "Cross-Platform Mobile Apps",
        description: "Unified cross-platform codebases delivering consistent native performance on iOS and Android.",
      },
      {
        title: "Background Sync & Push Notification Pipelines",
        description: "Reliable background workers, FCM push messaging, real-time GPS/telemetry tracking, and local SQLite/Room data caching.",
      },
    ],
    technicalApproach: [
      {
        title: "Engineering Foundation",
        points: [
          "Modern declarative UI using Jetpack Compose for clean, maintainable, reactive screen rendering.",
          "Local persistence with Room / SQLite supporting seamless offline-to-online transaction reconciliation.",
          "Strict separation of concerns via Clean Architecture / MVVM patterns.",
        ],
      },
      {
        title: "Device & Backend Integration",
        points: [
          "Secure token-based OAuth2/JWT authentication with biometric device keystore integration.",
          "Optimized battery and memory utilization for continuous background services.",
          "Comprehensive automated testing across varied Android screen sizes and OS versions.",
        ],
      },
    ],
    deliverables: [
      "Production-ready signed APK / AAB bundles for Google Play distribution",
      "Clean, modular Kotlin / Compose codebase repository",
      "API client integration layer with network retry mechanisms",
      "App store assets, permissions documentation, and release guidelines",
    ],
    technologies: ["Kotlin", "Android SDK", "Jetpack Compose", "Room Database", "Coroutines / Flow", "REST APIs", "Firebase"],
    faqs: [
      {
        question: "Do you support offline functionality for field operations?",
        answer: "Yes. We build offline-first architectures where user data is saved locally in encrypted SQLite/Room databases and queued for automated two-way synchronization when connectivity resumes.",
      },
      {
        question: "Can you assist with publishing the app to the Google Play Store?",
        answer: "We handle the complete release process including signing keys, Play Console configuration, privacy policy compliance, and production rollout.",
      },
    ],
  },
  {
    id: "software-development",
    slug: "software-development",
    title: "Custom Software Development",
    badge: "Enterprise & Business Logic",
    iconName: "Code2",
    shortDescription: "Business-specific software designed around operational workflows, replacing messy spreadsheets and fragmented tools.",
    heroHeadline: "Bespoke Business Software Built Around Exact Operational Workflows",
    heroSubheadline: "Eliminate manual bottlenecks with custom software designed specifically for your organization's business logic, data models, and team roles.",
    overview:
      "Off-the-shelf software often forces businesses to compromise their unique workflows. ByteLab Infotech develops custom enterprise software that mirrors your exact operational rules. We engineer systems that unify inventory management, order processing, multi-department approvals, customer lifecycle tracking, and financial reconciliation into unified, dependable platforms.",
    capabilities: [
      {
        title: "Operational Workflow Digitization",
        description: "Transform complex paper or spreadsheet-based manual processes into structured, auditable digital pipelines.",
      },
      {
        title: "Enterprise Resource & Inventory Platforms",
        description: "Multi-location inventory tracking, stock movements, supplier management, and automated replenishment triggers.",
      },
      {
        title: "Multi-Tenant Enterprise Software",
        description: "Software architected for enterprise multi-tenancy with strict data isolation, role-based access control, and audit logs.",
      },
      {
        title: "Legacy System Modernization",
        description: "Migrating legacy desktop or outdated web platforms to modern, maintainable architectures without disrupting day-to-day operations.",
      },
    ],
    technicalApproach: [
      {
        title: "Domain-Driven Design",
        points: [
          "In-depth analysis of your business domain to create accurate, unbloated data models.",
          "Clear separation between business rules, data persistence, and presentation layers.",
          "Immutable audit trails for all critical business operations and financial transactions.",
        ],
      },
      {
        title: "Maintainability & Scalability",
        points: [
          "Comprehensive automated test suites for core business calculations and state transitions.",
          "Modular service boundaries allowing incremental upgrades without full system downtime.",
        ],
      },
    ],
    deliverables: [
      "Complete custom software system (Frontend, Backend, and Database)",
      "Database schema definitions, migration scripts, and seed data",
      "Role-based access control (RBAC) matrix and admin configurations",
      "Full source code ownership with documentation",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Docker", "REST APIs"],
    faqs: [
      {
        question: "Do we retain 100% intellectual property (IP) and source code ownership?",
        answer: "Yes. ByteLab Infotech delivers all source code, schema definitions, and assets under your direct ownership upon project completion.",
      },
      {
        question: "How do you handle changes to our business requirements during development?",
        answer: "We follow an iterative milestone structure where requirements are decomposed into transparent phases, allowing review and refinement before each stage.",
      },
    ],
  },
  {
    id: "backend-api",
    slug: "backend-api",
    title: "Backend & API Development",
    badge: "Java, Spring Boot & APIs",
    iconName: "Server",
    shortDescription: "Secure, high-throughput APIs, authentication systems, business logic engines, and scalable backend services.",
    heroHeadline: "Industrial-Strength Backend Systems & High-Throughput APIs",
    heroSubheadline: "Engineered with Java and Spring Boot for rock-solid transaction integrity, concurrency, and security.",
    overview:
      "The backend is the engine room of every digital product. ByteLab Infotech specializes in enterprise backend development utilizing Java and Spring Boot alongside Node.js. We architect secure RESTful endpoints, asynchronous queue workers, payment gateways, and data processing pipelines designed for zero downtime and strict data consistency.",
    capabilities: [
      {
        title: "Enterprise Java & Spring Boot Services",
        description: "Production-hardened backends with Spring Boot, Spring Security, JPA/Hibernate, and enterprise dependency injection.",
      },
      {
        title: "RESTful & High-Performance API Design",
        description: "Versioned, well-documented, standardized REST APIs adhering to OpenAPI/Swagger standards.",
      },
      {
        title: "Authentication & Authorization Engines",
        description: "Robust JWT, OAuth2, multi-factor authentication, and granular role-based permissions (RBAC/ABAC).",
      },
      {
        title: "Third-Party & Payment Integrations",
        description: "Resilient webhooks, payment gateway pipelines, ERP connectors, and external API integrations with retry queues.",
      },
    ],
    technicalApproach: [
      {
        title: "Enterprise Architecture",
        points: [
          "Layered architecture (Controller, Service, Repository, DTO) enforcing strict boundary validation.",
          "Connection pooling, query optimization, and Redis caching for sub-millisecond response latency.",
          "Asynchronous event handling and thread-safe batch processing.",
        ],
      },
      {
        title: "Security & Observability",
        points: [
          "OWASP Top 10 compliance: SQL injection protection, rate limiting, and encrypted secrets storage.",
          "Structured JSON logging, health checks (Actuator), and metrics collection for production monitoring.",
        ],
      },
    ],
    deliverables: [
      "Production-grade backend service with automated build pipelines",
      "Interactive Swagger/OpenAPI documentation",
      "Database migration scripts (Liquibase / Flyway)",
      "Containerized deployment configuration (Docker / Docker Compose)",
    ],
    technologies: ["Java 17/21", "Spring Boot", "Spring Security", "PostgreSQL", "Redis", "Maven", "Docker", "REST APIs"],
    faqs: [
      {
        question: "Why does ByteLab emphasize Java & Spring Boot for backends?",
        answer: "Java and Spring Boot provide unmatched type safety, mature memory management, robust concurrency models, and enterprise long-term stability required for mission-critical business data.",
      },
      {
        question: "How do you document APIs for frontend or third-party developers?",
        answer: "Every backend we build includes auto-generated, interactive OpenAPI/Swagger documentation with request/response schemas, sample payloads, and error codes.",
      },
    ],
  },
  {
    id: "database-architecture",
    slug: "database-architecture",
    title: "Database & System Architecture",
    badge: "Data Modeling & Storage",
    iconName: "Database",
    shortDescription: "Structured relational database design, indexing strategies, performance tuning, and scalable storage architecture.",
    heroHeadline: "Resilient Data Modeling & High-Performance Database Architecture",
    heroSubheadline: "Ensuring ACID transaction guarantees, rapid query response times, and normalized schemas built for exponential data growth.",
    overview:
      "A software system is only as reliable as its underlying database. ByteLab Infotech architects robust relational database schemas in PostgreSQL alongside document stores like MongoDB. We focus on database normalization, indexing strategy, automated migrations, connection pooling, and backup redundancy to guarantee zero data loss.",
    capabilities: [
      {
        title: "Relational Schema Design & Normalization",
        description: "PostgreSQL schema engineering with foreign key constraints, check validations, and optimized table partitioning.",
      },
      {
        title: "Query Optimization & Performance Tuning",
        description: "Analyzing query execution plans (EXPLAIN ANALYZE), index tuning (B-Tree, GIN, Partial), and query refactoring.",
      },
      {
        title: "Automated Migration & Version Control",
        description: "Version-controlled database schema migrations (Flyway / Liquibase) preventing drift across environments.",
      },
      {
        title: "Caching & Read-Replica Strategies",
        description: "Redis in-memory caching layers, write-through caches, and read-replica routing for heavy analytics workloads.",
      },
    ],
    technicalApproach: [
      {
        title: "Integrity First",
        points: [
          "Strict ACID compliance for all business transactions to eliminate duplicate or orphaned records.",
          "Encrypted data-at-rest and in-transit with automated daily snapshot and point-in-time recovery setups.",
        ],
      },
      {
        title: "Scalability Planning",
        points: [
          "Optimized connection pooling (HikariCP) preventing database exhaustion under heavy traffic spikes.",
          "Partitioning and archival strategies for fast querying on tables with millions of historical records.",
        ],
      },
    ],
    deliverables: [
      "Complete Entity Relationship (ER) diagrams and documentation",
      "Executable SQL migration scripts and seed datasets",
      "Query performance benchmark reports",
      "Automated backup and disaster recovery runbooks",
    ],
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Flyway", "HikariCP", "SQL Tuning", "Linux"],
    faqs: [
      {
        question: "Can you help optimize our slow queries on an existing database?",
        answer: "Yes. We audit your database configuration, analyze slow query logs, optimize table indexing, and rewrite expensive queries to dramatically improve execution speeds.",
      },
    ],
  },
  {
    id: "cloud-deployment",
    slug: "cloud-deployment",
    title: "Cloud & Server Deployment",
    badge: "DevOps & Infrastructure",
    iconName: "Cloud",
    shortDescription: "Production deployment, Linux server hardening, automated CI/CD pipelines, SSL, and ongoing infrastructure support.",
    heroHeadline: "Secure Production Deployment & Resilient Cloud Infrastructure",
    heroSubheadline: "From dedicated Linux VPS servers to scalable cloud platforms, we deploy software with zero downtime and automated CI/CD pipelines.",
    overview:
      "Writing good code is only half the battle; deploying it reliably into production is where systems succeed or fail. ByteLab Infotech sets up secure Linux environments, automated GitHub Actions CI/CD workflows, reverse proxies (Nginx), SSL certificates, firewall rules, and automated monitoring to keep your software online 24/7.",
    capabilities: [
      {
        title: "Linux Server Setup & Hardening",
        description: "Ubuntu/Debian server provisioning, SSH key hardening, UFW firewall configuration, and fail2ban intrusion prevention.",
      },
      {
        title: "Automated CI/CD Deployment Pipelines",
        description: "GitHub Actions workflows that run automated test suites, build Docker containers, and deploy with zero downtime.",
      },
      {
        title: "Nginx Reverse Proxy & SSL Configuration",
        description: "Optimized reverse proxy routing, HTTP/2 & HTTP/3 support, automated Let's Encrypt SSL renewal, and gzip/brotli compression.",
      },
      {
        title: "Monitoring, Health Checks & Log Aggregation",
        description: "Uptime monitoring, server resource alerts (CPU, Memory, Disk), automated log rotation, and application error alerting.",
      },
    ],
    technicalApproach: [
      {
        title: "Security & Isolation",
        points: [
          "Principle of least privilege across all server users and deployment tokens.",
          "Containerized isolation with Docker to prevent dependency conflicts and simplify rollbacks.",
        ],
      },
      {
        title: "Reliability & Uptime",
        points: [
          "Automated process supervision (systemd / Docker Compose auto-restart) for instant crash recovery.",
          "Automated off-site database backups with encrypted cloud storage.",
        ],
      },
    ],
    deliverables: [
      "Production-ready hardened server setup",
      "Automated CI/CD deployment configuration",
      "SSL certificate installation with auto-renewal",
      "System administration documentation and emergency recovery runbooks",
    ],
    technologies: ["Linux (Ubuntu/Debian)", "Docker", "Nginx", "GitHub Actions", "VPS (Hetzner/DigitalOcean/AWS)", "SSL/TLS", "Systemd"],
    faqs: [
      {
        question: "Do you recommend expensive cloud providers or cost-effective VPS hosting?",
        answer: "We recommend the most cost-effective and dependable architecture for your actual workload. A properly hardened VPS often delivers 5x the performance of complex cloud tiers at a fraction of the cost.",
      },
    ],
  },
  {
    id: "automation",
    slug: "automation",
    title: "Business Automation",
    badge: "Process Automation",
    iconName: "Cpu",
    shortDescription: "Custom technology solutions that eliminate repetitive manual data entry, streamline operations, and boost organizational output.",
    heroHeadline: "Automate Repetitive Workflows & Eliminate Operational Friction",
    heroSubheadline: "Bridge the gap between disparate business software, automate reporting, and execute batch operations with zero human error.",
    overview:
      "Manual data entry and fragmented communication cost organizations hundreds of productive hours every month. ByteLab Infotech develops custom business automation pipelines that synchronize data across platforms, generate invoices, dispatch scheduled notifications, process webhooks, and trigger automatic business workflows.",
    capabilities: [
      {
        title: "Cross-Platform Data Synchronization",
        description: "Automated bi-directional sync between CRMs, billing systems, inventory databases, and communication channels.",
      },
      {
        title: "Automated Document & Invoice Generation",
        description: "Programmatic PDF creation, invoice generation, digital watermarking, and automated customer dispatch.",
      },
      {
        title: "Batch Scheduled Jobs & Data Pipelines",
        description: "Reliable cron-based and queue-driven batch processors for end-of-day reconciliations, data cleanups, and scheduled reports.",
      },
      {
        title: "Multi-Channel Notification Dispatchers",
        description: "Automated email (SMTP/SES), SMS, and WhatsApp alerts triggered by critical business events.",
      },
    ],
    technicalApproach: [
      {
        title: "Fault-Tolerant Automation",
        points: [
          "Idempotent worker design ensuring automated jobs can safely retry without creating duplicate records.",
          "Dead-letter queues (DLQ) and administrative alerts for unhandled exceptions.",
        ],
      },
    ],
    deliverables: [
      "Custom automation microservice or integration pipeline",
      "Webhook receiver endpoints with signature verification",
      "Automated job monitoring dashboard and execution logs",
      "Operational user guides",
    ],
    technologies: ["Java", "Spring Batch", "Node.js", "REST Webhooks", "Cron", "PostgreSQL", "Message Queues"],
    faqs: [
      {
        question: "Can you automate workflows between tools that do not have existing plugins?",
        answer: "Yes. As software engineers, we build custom API bridges and webhook listeners to connect any service with open endpoints or database access.",
      },
    ],
  },
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: "AI & Intelligent Applications",
    badge: "Practical AI & Workflows",
    iconName: "Sparkles",
    shortDescription: "Practical AI integrations, intelligent document parsing, and automated workflows designed around genuine business utility.",
    heroHeadline: "Pragmatic AI Systems Built for Measurable Business Value",
    heroSubheadline: "No hype, no empty buzzwords. We integrate practical language models, intelligent search, and document processing directly into your business software.",
    overview:
      "Artificial Intelligence is most valuable when applied directly to specific, repetitive business challenges. ByteLab Infotech builds pragmatic AI solutions: intelligent document extraction, contextual semantic search across enterprise knowledge bases, automated classification, and conversational workflow assistants grounded strictly in your proprietary data.",
    capabilities: [
      {
        title: "Document Parsing & Data Extraction",
        description: "Automated extraction of structured data from invoices, receipts, legal contracts, and unstructured business PDFs.",
      },
      {
        title: "Enterprise Semantic Search & Knowledge Bases",
        description: "Retrieval-Augmented Generation (RAG) systems that allow internal teams to query manuals and databases accurately.",
      },
      {
        title: "Automated Content Classification & Triage",
        description: "Intelligent customer support ticket categorization, sentiment analysis, and priority routing.",
      },
      {
        title: "Grounded LLM API Integration",
        description: "Secure, cost-optimized OpenAI / Claude / Local LLM integration with strict prompt engineering and data isolation.",
      },
    ],
    technicalApproach: [
      {
        title: "Accuracy & Data Privacy",
        points: [
          "Strict data hygiene ensuring proprietary client information is never leaked or used for public training.",
          "Deterministic fallback logic for critical numerical and compliance workflows.",
        ],
      },
    ],
    deliverables: [
      "Custom AI pipeline integrated into your software or web platform",
      "Vector embeddings pipeline and semantic retrieval index",
      "Token usage and latency monitoring controls",
      "Performance evaluation and accuracy benchmark report",
    ],
    technologies: ["OpenAI / Anthropic APIs", "Python / FastAPI", "LangChain / LlamaIndex", "Vector DBs (pgvector / Pinecone)", "TypeScript"],
    faqs: [
      {
        question: "How do you prevent AI 'hallucinations' in business workflows?",
        answer: "We ground LLM outputs strictly in your verified source documents using structured RAG architectures, strict system constraints, and deterministic schema validation.",
      },
    ],
  },
];
