/** Site-wide content and links — edit here to update the portfolio. */

export const site = {
  name: "Mithil Yaganti",
  shortName: "MY",
  title: "Mithil Yaganti — LLM Evals, SLMs & Agentic Systems",
  description:
    "I test LLMs, make SLMs excel at automation, and build benchmarks around long-running agentic tasks.",
  email: "mithilyaganti@gmail.com",
  phone: "+91 8688954231",
  location: "Hyderabad, India",
  socials: {
    github: "https://github.com/Mithilyaganti",
    linkedin: "https://bit.ly/3Od0HVz",
    twitter: "https://x.com/mithilyaganti",
    instagram: "https://www.instagram.com/mithilyaganti/",
  },
  resumePath: "/resume.pdf",
} as const;

export const navLinks = [
  { href: "/", label: "Vault" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export const about = {
  role: "LLM Evals · SLMs · Agentic Systems",
  headline: "Mithil Yaganti",
  blurb:
    "I **test LLMs**, make **SLMs excel at automation**, and build **benchmarks around long-running agentic tasks**. Shipping RAG, agents, and production ML along the way.",
  body:
    "Most of my time goes into understanding how models actually behave — evals, agentic tool use, long-running task reliability, and getting small models good enough for real automation. I care about open weights, honest benchmarks (not just leaderboard screenshots), and systems that hold up past the demo. That sits on top of hands-on engineering: hierarchical RAG for financial PDFs at Infosys, transaction ML at Fluition Sphere, and full-stack streaming / agent projects on GitHub. Currently finishing B.Tech CSE at VNR VJIET (CGPA 8.85/10).",
  education: [
    {
      title: "B.Tech Computer Science and Engineering",
      org: "VNR Vignana Jyothi Institute of Engineering and Technology",
      detail: "CGPA 8.85/10 · Hyderabad, India",
      period: "Nov 2022 – May 2026",
    },
  ],
};

export const experience = [
  {
    role: "Power Intern",
    company: "Infosys",
    location: "Remote",
    period: "Jan 2026 – Apr 2026",
    bullets: [
      "Built a **PIKE RAG pipeline** with hierarchical retrieval for financial PDF Q&A using FastAPI and LangChain.",
      "Implemented multimodal extraction with PyMuPDF and vLLMs for tables, charts, and visual content, leveraging ChromaDB — **80% better retrieval accuracy** vs traditional RAG.",
    ],
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "Fluition Sphere",
    location: "Remote",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Engineered a transaction classification model using **BERT** and **DBSCAN**, achieving **97% accuracy**.",
      "Built a Dockerized FastAPI microservices backend and React frontend with Redis/Celery for async email retrieval, RESTful APIs, and PostgreSQL for automated financial insights.",
    ],
  },
];

export const projects = [
  {
    title: "Trade Pulse Tracker",
    href: "https://github.com/Mithilyaganti/Trade-Pulse-Tracker",
    description:
      "**Live market streaming** platform: 50K stock ticks/sec via Node.js TCP → Kafka with strict ordering, P50/P95 latency monitoring to InfluxDB, React dashboard and automated email alerts.",
    tags: ["Node.js", "React", "Apache Kafka", "InfluxDB"],
  },
  {
    title: "AI Feedback Analyzer",
    href: "https://github.com/Mithilyaganti/Ai-Feedback-Analyzer",
    description:
      "Fine-tuned **DeBERTa** authenticity and sentiment classifiers in PyTorch (Monarch Butterfly Architecture) on a 200K-sample dataset to **88% accuracy**. React + Node + Gradio review analytics.",
    tags: ["BERT", "PyTorch", "Node.js", "React"],
  },
  {
    title: "Fediverse Aggregator",
    href: "https://github.com/Mithilyaganti/Fediverse-Hub",
    description:
      "Full-stack **ActivityPub** platform fetching distributed Fediverse posts, nested reply threads, PostgreSQL comment hierarchy, Redis + BullMQ caching, Dockerized services.",
    tags: ["Node.js", "Redis", "Docker", "React", "ActivityPub"],
  },
  {
    title: "RegFill AI",
    href: "https://github.com/Mithilyaganti/regfill-ai",
    description:
      "AI-assisted form and document filling workflow — TypeScript full-stack system for structured data extraction and completion.",
    tags: ["TypeScript", "AI", "Full-stack"],
  },
  {
    title: "Resume Agent",
    href: "https://github.com/Mithilyaganti/resume-agent",
    description:
      "Agentic pipeline for resume analysis and generation using Python and modern LLM tooling.",
    tags: ["Python", "LLM", "Agents"],
  },
  {
    title: "Story to Video Generator",
    href: "https://github.com/Mithilyaganti/story-to-video-generator",
    description:
      "Pipeline that turns narrative text into video assets with Python automation.",
    tags: ["Python", "Media", "Automation"],
  },
  {
    title: "Gesture Control",
    href: "https://github.com/Mithilyaganti/Gesture-control",
    description:
      "Control your computer with hand gestures — computer vision for a ninja desktop experience.",
    tags: ["Python", "OpenCV", "CV"],
  },
  {
    title: "Spotify → YouTube Playlist",
    href: "https://github.com/Mithilyaganti/Spotify-to-YouTube-playlist-converter",
    description:
      "Paste a Spotify playlist link and get a matching YouTube playlist ready to stream.",
    tags: ["Python", "APIs"],
  },
];

export const skills = [
  {
    group: "Languages",
    items: "Python, Java, C++, SQL, TypeScript, JavaScript",
  },
  {
    group: "ML & AI",
    items:
      "LLM evals, SLMs, agentic workflows, PyTorch, LangChain, RAG, NLP, BERT, Deep Learning",
  },
  {
    group: "Backend & Data",
    items: "FastAPI, Node.js, PostgreSQL, MongoDB, Redis, Kafka, Celery",
  },
  { group: "Frontend", items: "React, Gradio" },
  {
    group: "Cloud & Infra",
    items: "AWS (EC2, S3), Docker, GitHub Actions, Linux",
  },
];

export const achievements = [
  "Achieved a 3-star rating on CodeChef (1603 rating).",
  "Presented on “Data Collection and Machine Learning in Smart Transportation” at ICAMADA.",
  "Secured 3rd place in the startup competition organized by the ED Cell of VNRVJIET.",
];

export const certificates = [
  {
    title: "Amazon ML Summer School 2024",
    org: "Amazon",
  },
  {
    title: "Machine Learning Specialization",
    org: "DeepLearning.AI",
  },
  {
    title: "ICAMADA Research Paper Presentation",
    org: "NRSC, ISRO",
  },
];

export const vaultIntro = {
  greeting: "Hello there !!",
  paragraphs: [
    "This is my vault — notes from testing LLMs, pushing SLMs hard on automation, and trying to build better benchmarks for long-running agentic tasks. I f*ck around and find out a lot; this is where the findings land.",
    "Expect model comparisons, eval caveats, agent experiments, and the systems work that makes them useful. Browse the sidebar for notes. Use the top bar for About, Experience, Projects, Resume, and Contact.",
  ],
  topics: [
    "LLM evals, benchmarks, and “is this benchmaxxed?” takes",
    "SLMs for automation — local / open weights when they actually work",
    "Long-running agents, tool use, and multi-step task reliability",
    "RAG pipelines, LangChain, and production ML systems",
    "Backend streaming, full-stack experiments, and build logs",
    "Grand Line energy (yes, One Piece)",
  ],
};
