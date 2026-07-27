export const personal = {
  name: 'Amrit Singh',
  initials: 'AS',
  role: 'AI/ML Engineer',
  roles: ['Full Stack Developer', 'AI/ML Enthusiast'],
  tagline: "Turning complex AI challenges into practical, scalable solutions.",
  bio1:
    "I'm a final-year B.Tech student in Electronics and Communication Engineering at the International Institute of Information Technology, Naya Raipur (IIIT-NR), with a strong academic interest in Artificial Intelligence, Machine Learning, and intelligent software systems.",
  bio2:
    "I'm passionate about building AI-powered applications using Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI Agents, and modern Machine Learning techniques.",
  location: 'Kanpur, UP, India',
  email: 'amrit23101@iiitnr.edu.in',
  phone: '+91 7881107882',
  yearsExp: 1,
  projectsCount: 5,
  clientsCount: 2,
  coffeeCount: 999,
  cvUrl: '/Amrit_singh_Resume.pdf',
  avatarUrl: '/amrit.png',
}

export const social = [
  { label: 'GitHub', href: 'https://github.com/Amritsingh101', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amrit-singh02/', icon: 'linkedin' },
  { label: 'Twitter', href: 'https://x.com/AMRITSI86170335', icon: 'twitter' },
]

export const skills = [
  {
    category: "AI & LLMs",
    items: [
      { name: "Generative AI", icon: "🤖", proficiency: 95 },
      { name: "LLMs", icon: "🧠", proficiency: 94 },
      { name: "RAG", icon: "📚", proficiency: 95 },
      { name: "AI Agents", icon: "⚡", proficiency: 90 },
      { name: "Prompt Engineering", icon: "💬", proficiency: 95 },
      { name: "LangChain", icon: "🔗", proficiency: 88 },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      { name: "Python", icon: "🐍", proficiency: 95 },
      { name: "PyTorch", icon: "🔥", proficiency: 90 },
      { name: "TensorFlow", icon: "🟠", proficiency: 82 },
      { name: "Scikit-learn", icon: "📈", proficiency: 92 },
      { name: "Pandas", icon: "🐼", proficiency: 95 },
      { name: "NumPy", icon: "🔢", proficiency: 95 },
    ],
  },
  {
    category: "NLP & Retrieval",
    items: [
      { name: "Embeddings", icon: "🧬", proficiency: 92 },
      { name: "FAISS", icon: "🔍", proficiency: 90 },
      { name: "BM25", icon: "📖", proficiency: 88 },
      { name: "Cross-Encoder", icon: "🎯", proficiency: 86 },
      { name: "Semantic Search", icon: "🌐", proficiency: 92 },
      { name: "Vector Databases", icon: "🗄️", proficiency: 88 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "FastAPI", icon: "⚡", proficiency: 92 },
      { name: "Flask", icon: "🍶", proficiency: 88 },
      { name: "PostgreSQL", icon: "🐘", proficiency: 85 },
      { name: "Redis", icon: "🔴", proficiency: 80 },
      { name: "REST APIs", icon: "🔗", proficiency: 95 },
      { name: "SQLAlchemy", icon: "🗃️", proficiency: 84 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "⚛️", proficiency: 88 },
      { name: "TypeScript", icon: "🔷", proficiency: 78 },
      { name: "JavaScript", icon: "🟨", proficiency: 88 },
      { name: "Tailwind CSS", icon: "💨", proficiency: 90 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "🌿", proficiency: 95 },
      { name: "Docker", icon: "🐳", proficiency: 85 },
      { name: "Google Cloud", icon: "☁️", proficiency: 75 },
      { name: "Hugging Face", icon: "🤗", proficiency: 90 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Manim Video Generator",
    description:
      "Built an AI-powered platform that transforms text prompts into animated educational videos using LLM-generated Manim code with prompt refinement, code validation, asynchronous rendering, and cloud-based video storage.",
    category: "Generative AI",
    tags: [
      "FastAPI",
      "LLM",
      "Celery",
      "Redis",
      "PostgreSQL",
      "Cloudinary",
    ],
    gradient: "#1A3040",
    image: '/manimai.png', // e.g. '/project-manim.png' (place image files in public/ directory)
    github: "https://github.com/Amritsingh101/manim",
    live: "https://manim-xi.vercel.app/",
  },
  {
    id: 2,
    title: "GuideWeave",
    description:
      "Developed a multimodal RAG platform that generates visual appliance repair guides from user-reported faults by combining Vision LLMs, semantic retrieval, and automated PDF understanding.",
    category: "Generative AI",
    tags: [
      "LangChain",
      "ChromaDB",
      "React",
      "Flask",
      "Hugging Face",
      "Vision LLM",
    ],
    gradient: "#2E7088",
    image: null, // e.g. '/project-guideweave.png'
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "ModuLearn",
    description:
      "Created an AI-driven adaptive learning platform that generates personalized study materials, quizzes, flashcards, video summaries, and learning resources from topics, PDFs, and web content.",
    category: "AI Application",
    tags: [
      "React",
      "Node.js",
      "LLM",
      "Supabase",
      "Manim",
      "AI",
    ],
    gradient: "#1C4A5A",
    image: '/modulearn.png', // e.g. '/project-modulearn.png'
    github: "https://github.com/LakraAnshul/ModuLearn",
    live: "#",
  },
  {
    id: 4,
    title: "Hybrid Text-to-SQL Retrieval",
    description:
      "Designed a hybrid retrieval pipeline combining BM25, dense embeddings, FAISS indexing, and Cross-Encoder reranking to achieve over 92% Top-5 table retrieval accuracy.",
    category: "Machine Learning",
    tags: [
      "FAISS",
      "BM25",
      "Scikit-learn",
      "Sentence Transformers",
      "Cross Encoder",
    ],
    gradient: "#3A6070",
    image: 'tablename.png', // e.g. '/project-sql.png'
    github: "https://github.com/Amritsingh101/text-to-sql-table",
    live: "#",
  },
];

export const experience = [
  {
    id: 1,
    role: "R&D Intern",
    company: "Samsung",
    period: "Nov 2025 — Apr 2026",
    type: "Internship",
    achievements: [
      "Developed an AI-powered platform that generated visual appliance repair guides from user-reported faults and technical specifications.",
      "Built a multimodal RAG pipeline using LangChain, ChromaDB, Hugging Face, and Vision LLMs for intelligent document retrieval.",
      "Engineered a React application with semantic vector search and automated PDF parsing for scalable knowledge retrieval.",
    ],
    logo: "S",
    color: "#1428A0",
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Techsolid Development",
    period: "Sep 2025 — Nov 2025",
    type: "Internship",
    achievements: [
      "Built responsive web pages and reusable UI components using HTML, CSS, and JavaScript.",
      "Developed backend services and REST APIs in Python to support application features.",
      "Integrated frontend components with Python backend services while collaborating on full-stack development.",
    ],
    logo: "TD",
    color: "#48BB78",
  },
];
