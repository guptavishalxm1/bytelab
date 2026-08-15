export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  category: "Web Application" | "Mobile Application" | "Backend Systems" | "Custom Software";
  categorySlug: "web" | "mobile" | "backend" | "software";
  industry: string;
  timeline: string;
  year: number;
  featured: boolean;
  shortSummary: string;
  clientContext: string;
  businessChallenge: string;
  technicalChallenge: string;
  solution: string;
  architectureDetails: {
    title: string;
    description: string;
    components: string[];
  };
  keyFeatures: string[];
  technologies: string[];
  outcomes: string[];
  metricsVerifiable: {
    label: string;
    detail: string;
  }[];
}

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: "supplysync-erp",
    slug: "supplysync-erp",
    title: "SupplySync Enterprise Operations & Inventory Engine",
    category: "Custom Software",
    categorySlug: "software",
    industry: "Manufacturing & Wholesale Distribution",
    timeline: "14 Weeks",
    year: 2025,
    featured: true,
    shortSummary: "Multi-warehouse stock management, supplier purchase order workflows, and real-time inventory tracking replacing fragmented spreadsheets.",
    clientContext: "A regional wholesale distributor managing 4 warehouses, 3,200+ SKU lines, and 80+ daily supplier deliveries struggled with manual ledger updates, delayed inventory counts, and frequent stockout discrepancies.",
    businessChallenge: "Stock counts were reconciled manually at the end of each week, resulting in overselling, inaccurate purchase orders, and hours spent tracking down missing inventory across locations.",
    technicalChallenge: "Needed a high-concurrency relational data model that enforced strict ACID transaction guarantees for simultaneous warehouse bin updates, multi-currency vendor purchase orders, and barcode scanning without race conditions.",
    solution: "ByteLab Infotech architected a custom web-based ERP with a Java 21 & Spring Boot backend, PostgreSQL database with row-level locking, and a responsive React frontend with offline barcode scanner integration.",
    architectureDetails: {
      title: "Layered Spring Boot & PostgreSQL Transaction Pipeline",
      description: "Structured around Domain-Driven Design with isolated services for Inventory, Procurement, and Warehouse Dispatch.",
      components: [
        "Spring Boot 3.2 REST API with Spring Security RBAC",
        "PostgreSQL 16 with optimistic locking and B-Tree indexing on SKU lookups",
        "React + TypeScript responsive management portal",
        "Automated background worker for low-stock replenishment alerts",
        "Nginx reverse proxy on hardened Ubuntu Linux server",
      ],
    },
    keyFeatures: [
      "Real-time bin-level inventory tracking across 4 physical warehouses",
      "Automated Purchase Order (PO) generation based on minimum threshold rules",
      "Role-based access control for Warehouse Clerks, Managers, and Finance",
      "Instant PDF invoice and dispatch slip generation with QR verification",
      "Audit trail logging every inventory movement with timestamp and user ID",
    ],
    technologies: ["Java 21", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Tailwind CSS", "Docker", "Linux"],
    outcomes: [
      "Eliminated manual weekly paper reconciliations by enabling real-time stock sync upon scan",
      "Prevented inventory overselling across warehouse locations through transactional locking",
      "Cut purchase order generation time from multiple hours down to one-click approval workflows",
      "Maintained 100% auditable history for all stock transfers and adjustments",
    ],
    metricsVerifiable: [
      { label: "Data Integrity", detail: "Zero orphaned inventory entries via foreign-key constraints" },
      { label: "Query Speed", detail: "Sub-45ms SKU lookups across 50,000+ historical stock records" },
      { label: "Deployment", detail: "Single-tenant dedicated Linux VPS with automated daily snapshots" },
    ],
  },
  {
    id: "autolink-telematics",
    slug: "autolink-telematics",
    title: "AutoLink Telematics & Commercial Fleet Dispatch Mobile App",
    category: "Mobile Application",
    categorySlug: "mobile",
    industry: "Logistics & Fleet Transport",
    timeline: "12 Weeks",
    year: 2025,
    featured: true,
    shortSummary: "Native Android application with offline GPS waypoint caching, driver trip management, and real-time backend telemetry.",
    clientContext: "A mid-sized commercial fleet operator with 45 transport vehicles needed a dedicated driver mobile app to log trip milestones, fuel expenses, vehicle pre-checks, and delivery confirmations in areas with intermittent cellular coverage.",
    businessChallenge: "Drivers frequently traversed highways with spotty connectivity, resulting in lost delivery confirmations, unverified fuel claims, and dispatchers having no visibility into vehicle statuses.",
    technicalChallenge: "Building a native Android app capable of recording continuous GPS location coordinates and trip events in a background service while minimizing device battery drain, with guaranteed two-way sync when re-entering network coverage.",
    solution: "ByteLab Infotech engineered a native Android application using Kotlin and Jetpack Compose with Room SQLite offline caching, paired with a Spring Boot telemetry receiver and dispatcher dashboard.",
    architectureDetails: {
      title: "Offline-First Mobile Architecture with WorkManager",
      description: "Local-first persistence architecture with transactional upload queues and network status monitoring.",
      components: [
        "Native Android Kotlin app with Jetpack Compose reactive UI",
        "Room Database (SQLite) for encrypted offline trip & waypoint storage",
        "Android WorkManager for guaranteed background telemetry sync",
        "Spring Boot RESTful ingestion API with rate limiting and JWT auth",
        "Dispatcher Web Dashboard with real-time fleet map rendering",
      ],
    },
    keyFeatures: [
      "Offline-first driver trip logging with automatic background synchronization",
      "Digital Proof of Delivery (PoD) with signature capture and photo upload",
      "Pre-trip vehicle checklist with mandatory safety item validations",
      "Fuel expense entry with camera receipt capture and thumbnail compression",
      "Low-battery consumption GPS tracking using Android FusedLocationProvider",
    ],
    technologies: ["Kotlin", "Android Jetpack Compose", "Room Database", "WorkManager", "Spring Boot", "PostgreSQL", "Google Maps API"],
    outcomes: [
      "Guaranteed zero data loss during highway trips through offline Room SQLite queueing",
      "Immediate digital Proof of Delivery confirmation eliminating delayed billing cycles",
      "Battery life preserved for full 10-hour driving shifts through optimized GPS batching",
      "Dispatcher visibility improved with standardized trip status updates",
    ],
    metricsVerifiable: [
      { label: "OS Compatibility", detail: "Android 8.0 through Android 15 with 100% crash-free sessions" },
      { label: "Sync Reliability", detail: "Automated retry queue ensures 100% upload of stored offline records" },
      { label: "Storage Efficiency", detail: "Image compression reduces receipt uploads by 70% before sync" },
    ],
  },
  {
    id: "finflow-reconciliation",
    slug: "finflow-reconciliation",
    title: "FinFlow High-Volume Transaction Reconciliation Pipeline",
    category: "Backend Systems",
    categorySlug: "backend",
    industry: "Fintech & Payment Operations",
    timeline: "10 Weeks",
    year: 2024,
    featured: true,
    shortSummary: "Industrial-grade backend batch pipeline processing bank settlement statements, gateway logs, and internal ledgers.",
    clientContext: "A digital commerce company processing 15,000+ daily customer orders across multiple payment gateways (Razorpay, Stripe, UPI) struggled with manual end-of-day spreadsheet reconciliation and unidentified chargeback mismatches.",
    businessChallenge: "Discrepancies between payment gateway settlement reports, bank statements, and internal database records took finance teams 4 to 6 hours daily to isolate manually.",
    technicalChallenge: "Developing an idempotent, multi-threaded batch ingestion pipeline that parses various vendor CSV/JSON reports, matches transactions by reference identifiers, and flags fee variances without stalling the production database.",
    solution: "ByteLab Infotech built a high-throughput Java backend reconciliation engine using Spring Batch, PostgreSQL partitioned tables, and Redis caching for rapid reference matching.",
    architectureDetails: {
      title: "Spring Batch High-Throughput Reconciliation Pipeline",
      description: "Chunk-based processing with database transactions committed in discrete batches to ensure memory efficiency.",
      components: [
        "Java 17 Spring Batch engine with multi-threaded chunk processing",
        "PostgreSQL database with date-partitioned settlement tables",
        "Redis cache storing active transaction reference keys for rapid O(1) lookup",
        "Automated PDF & CSV discrepancy report generation for audit compliance",
        "Scheduled cron execution with email notification triggers",
      ],
    },
    keyFeatures: [
      "Automated three-way matching: Bank Statement ↔ Gateway Settlement ↔ Order Ledger",
      "Idempotent processing preventing double-counting on repeated statement uploads",
      "Variance detection highlighting gateway fee discrepancies and uncaptured orders",
      "Role-based dispute resolution dashboard for finance team review",
      "Exportable regulatory compliance audit reports with full lineage tracking",
    ],
    technologies: ["Java 17", "Spring Batch", "Spring Boot", "PostgreSQL", "Redis", "Docker", "Linux"],
    outcomes: [
      "Reduced daily financial reconciliation runtime from 4+ manual hours to a 90-second automated job",
      "Instantly isolated gateway fee overcharges and un-settled transactions with precise line items",
      "Provided an immutable audit trail for external accounting and tax compliance",
      "Eliminated human transcription errors in financial records",
    ],
    metricsVerifiable: [
      { label: "Throughput", detail: "Processes 50,000 transaction rows in under 75 seconds" },
      { label: "Matching Accuracy", detail: "100% deterministic matching on reference ID and amount keys" },
      { label: "Memory Footprint", detail: "Constant 512MB RAM utilization using chunked streaming" },
    ],
  },
  {
    id: "mediassist-clinic",
    slug: "mediassist-clinic",
    title: "MediAssist Practice Management & Patient Automation Platform",
    category: "Web Application",
    categorySlug: "web",
    industry: "Healthcare & Clinical Services",
    timeline: "12 Weeks",
    year: 2024,
    featured: true,
    shortSummary: "Multi-doctor clinical workflow system with token queue management, digital prescription drafting, and automated SMS/WhatsApp appointment reminders.",
    clientContext: "A multi-specialty outpatient clinic handling 120+ daily patient visits needed a centralized software system to manage doctor schedules, token queuing, digital clinical notes, and automated patient reminders.",
    businessChallenge: "Front-desk staff were overwhelmed with phone calls for booking, patient waiting times were unpredictable, and paper prescriptions led to lost medical history.",
    technicalChallenge: "Designing a responsive, secure web platform compliant with medical privacy standards that functions reliably on low-spec clinic reception computers and mobile phones.",
    solution: "ByteLab Infotech engineered a full-stack Next.js and Node/PostgreSQL web application with role-based access for Doctors, Receptionists, and Patients, integrated with automated SMS notification queues.",
    architectureDetails: {
      title: "Role-Based Clinical Web Architecture",
      description: "Secure, encrypted web architecture ensuring doctor-patient confidentiality and fast front-desk lookups.",
      components: [
        "Next.js App Router frontend with Tailwind CSS",
        "Node.js / Express backend with strict input validation (Zod)",
        "PostgreSQL database with encrypted patient identification columns",
        "Background worker for automated SMS/WhatsApp appointment reminders",
        "PDF prescription rendering engine with digital doctor signature stamp",
      ],
    },
    keyFeatures: [
      "Live token queue display for waiting room screens",
      "Speedy prescription drafting interface with customizable medicine templates",
      "Automated appointment confirmation and reminder dispatch via SMS",
      "Patient medical history timeline with previous visit summaries and lab attachments",
      "Front-desk billing and daily collection summary reports",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "SMS API"],
    outcomes: [
      "Significantly reduced patient wait-room congestion with accurate token status visibility",
      "Cut appointment no-show rates through automated 24-hour advance SMS reminders",
      "Streamlined doctor prescription drafting to under 60 seconds per consultation",
      "Established organized, digital patient history accessible across clinic branches",
    ],
    metricsVerifiable: [
      { label: "Page Load", detail: "First contentful paint under 0.8s on clinic desktop browsers" },
      { label: "Security", detail: "Encrypted patient data and role-gated record access" },
      { label: "Uptime", detail: "100% availability during clinic operational hours" },
    ],
  },
  {
    id: "fieldops-crm",
    slug: "fieldops-crm",
    title: "FieldOps Service Dispatch & Job Ticketing System",
    category: "Custom Software",
    categorySlug: "software",
    industry: "Commercial HVAC & Facilities Maintenance",
    timeline: "11 Weeks",
    year: 2024,
    featured: false,
    shortSummary: "Job scheduling, technician dispatch, customer site history, and invoice generation for service contractor teams.",
    clientContext: "A facilities maintenance firm managing 25 field technicians across 300+ commercial client properties needed to streamline maintenance job scheduling, parts tracking, and on-site job sign-offs.",
    businessChallenge: "Job tickets were scheduled via phone and chat, leading to missed routine service visits, delayed customer billing, and lost equipment repair records.",
    technicalChallenge: "Building a unified system supporting office dispatchers on dual monitors and field technicians on mobile screens with real-time job status transitions.",
    solution: "ByteLab Infotech developed a web-based dispatch console and mobile PWA for technicians, powered by a Java/Spring Boot backend with PostgreSQL.",
    architectureDetails: {
      title: "Dispatch Console & Technician PWA Architecture",
      description: "Centralized job state machine with automated status notifications.",
      components: [
        "Dispatcher drag-and-drop calendar interface in React",
        "Mobile-optimized Progressive Web App for field technicians",
        "Spring Boot state machine engine governing job lifecycle",
        "PostgreSQL database with customer asset and service contract schemas",
      ],
    },
    keyFeatures: [
      "Interactive calendar and map dispatch console for office staff",
      "Technician job checklist with mandatory pre/post equipment photos",
      "Customer signature capture on mobile glass for instant job completion",
      "Automatic work order PDF generation sent directly to the client's accounting email",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Tailwind CSS"],
    outcomes: [
      "Eliminated scheduling overlaps and missed recurring maintenance visits",
      "Accelerated invoice dispatch from 5 days post-service down to immediate job completion",
      "Provided commercial clients with complete photo-documented service logs",
    ],
    metricsVerifiable: [
      { label: "Operational Speed", detail: "Immediate work order generation upon technician sign-off" },
      { label: "Reliability", detail: "Deterministic job state transitions preventing skipped phases" },
    ],
  },
  {
    id: "retailhub-pos",
    slug: "retailhub-pos",
    title: "RetailHub Multi-Outlet Point of Sale & Cloud Sync Platform",
    category: "Web Application",
    categorySlug: "web",
    industry: "Retail & Multi-Store Commerce",
    timeline: "13 Weeks",
    year: 2024,
    featured: false,
    shortSummary: "Fast checkout point-of-sale web application with offline cash register capability and automated cloud database sync.",
    clientContext: "A retail chain with 6 retail stores required a unified POS system that allowed fast barcode checkout even during broadband internet drops.",
    businessChallenge: "Existing cloud POS froze whenever store internet connection fluctuated, causing customer queues to back up at billing counters.",
    technicalChallenge: "Architecting a web-based POS that operates with zero network latency using client-side IndexedDB/SQLite caching, auto-syncing sales to central PostgreSQL when connected.",
    solution: "ByteLab Infotech engineered a resilient POS interface using React/TypeScript with local IndexedDB storage and an enterprise Spring Boot synchronization server.",
    architectureDetails: {
      title: "Hybrid Offline Web POS with Central Cloud Sync",
      description: "Dual-layer data persistence ensuring checkout counters never block on network requests.",
      components: [
        "React POS frontend with sub-100ms keyboard barcode processing",
        "Client-side IndexedDB local transaction and price catalog cache",
        "Spring Boot central synchronization API with conflict resolution",
        "PostgreSQL multi-store master database with sales reporting",
      ],
    },
    keyFeatures: [
      "Sub-second item scanning and thermal receipt printer integration (ESC/POS)",
      "Continuous offline billing capability with automatic back-office sync",
      "Multi-store inventory visibility for cashier stock lookups",
      "End-of-day cash drawer reconciliation and shift handover reports",
    ],
    technologies: ["React", "TypeScript", "IndexedDB", "Java", "Spring Boot", "PostgreSQL", "Docker"],
    outcomes: [
      "Prevented checkout counter freezes during store internet outages",
      "Maintained centralized sales reporting and inventory levels across all 6 outlets",
      "Reduced average checkout time per customer to under 30 seconds",
    ],
    metricsVerifiable: [
      { label: "Checkout Latency", detail: "Immediate item scan rendering (<50ms)" },
      { label: "Offline Durability", detail: "Unlimited offline transaction queuing until connection resumes" },
    ],
  },
];
