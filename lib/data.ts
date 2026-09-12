export const profile = {
  name: "Made Arbi Parameswara",
  title: "Data / Machine Learning Engineer",
  location: "Indonesia",
  email: "aprmswra@gmail.com",
  phone: "+62 812-4601-4256",
  linkedin: "https://www.linkedin.com/in/aprmswra/",
  summary:
    "Proven expertise in designing reusable Python scraper libraries, Docker and Kubernetes orchestration, and CI/CD pipelines (GitHub Actions, Helm), delivering reliable daily financial data ingestion (IDX, OJK, BI, news) monitored by Prometheus/Grafana. Demonstrated leadership as Assistant Team Lead, mentoring juniors, defining coding standards, and optimizing cloud costs (GKE savings: $1.8K/year, MLflow 90x latency reduction). Skilled in Medallion Architecture ETL/ELT and stakeholder collaboration to productionize scraper outputs for ML pipelines and financial analytics. C2 English proficient (EF SET 76/100).",
};

export const experience = [
  {
    role: "Data Engineer (Machine Learning Engineer)",
    contract: "Contract",
    company: "Mandiri Sekuritas",
    period: "Nov 2025 – Present",
    bullets: [
      "Supporting implementation of a GCP-native Data Platform with Airflow (Cloud Composer), BigQuery, and Cloud Storage, following Medallion Architecture for automated daily ingestion of IDX, BI, and OJK financial data.",
      "Developing Selenium-based news scrapers to enrich datasets from Indonesian financial news sources, integrated into ETL pipelines.",
      "Designing and implementing a centralized ML Platform on Kubernetes (GKE) for training, deployment, monitoring, and governance using Kubeflow, Feast, BentoML, Evidently, MLflow, and Data Hub — saving ~Rp 500M (USD 30K)/year.",
      "Optimized MLflow logging with 90x latency reduction (3.71s → 0.04s median) via direct PostgreSQL backdoor logging, cutting CPU usage 22–23% and yielding $1,440–1,800/year in GKE savings.",
    ],
  },
  {
    role: "Assistant Team Lead",
    contract: "Contract",
    company: "BPJS Kesehatan",
    period: "May – Nov 2025",
    bullets: [
      "Served as assistant team lead in the BPJS AI Platform project, leading the Anti-Fraud team with a technical focus on fraud detection and risk scoring models.",
      "Led implementation on BPJS's on-premises servers processing 6+ million claims/month from unstructured, handwritten, blurry, and skewed scanned documents across 3,000+ hospitals in Indonesia.",
      "Set up and monitored MLOps CI/CD pipelines with SQL Server, Git, GitHub, GHCR.io, Docker, Helm, Rancher, and Kubernetes, with Grafana/Prometheus monitoring.",
      "Implemented containerized microservice inference serving with 10+ ETL features, integrated with Apache Airflow for batch and Kafka for streaming workflows.",
      "Oversaw experiments, inference tests, and KPI definitions; prepared technical documentation for external audits (e.g., BPK).",
    ],
  },
  {
    role: "AI & Software Engineer",
    contract: "Contract",
    company: "BPJS Kesehatan",
    period: "May – Nov 2025",
    bullets: [
      "Used Polars, PyTorch (GPU-accelerated), and ONNX to optimize concurrency, making processes 10x faster than the initial design.",
      "Trained and optimized classifiers — MLP (IndoBERT + ResNet50) in FP16 and YOLOv8s (handwritten signature & QR) in ONNX — achieving an F1-score of ~86%.",
      "Optimized Qwen-2.5-VL-7B-instruct (FP16 vLLM inference) for document extraction, achieving ~90% accuracy on unstructured PDFs and ~70% on handwritten PDFs.",
      "Built an explainable risk assessment system for flagged claims using Qwen-2.5-VL-7B-instruct, supporting verification with ~90% initial user acceptance.",
      "Linked the BPJS SQL Server database and on-prem S3-MinIO object storage for claim data; built a login feature with Redis session management and JWT authentication.",
    ],
  },
  {
    role: "Lead Software Engineer",
    contract: "Contract",
    company: "PT. Gravicode Multinovative Plexindo",
    period: "March – May 2025",
    bullets: [
      "Led development of a finance app with 30+ features using C#, JavaScript, .NET 8, ASP.NET Core, Blazor, and SQL Server.",
      "Managed automated pull requests in GitHub Actions to ensure continuous integration and high-quality code.",
      "Collaborated with DevOps, QA, and Project Management to ensure technical quality, seamless integration, and automated testing/deployment.",
      "Employed microservices architecture and RESTful APIs; used Entity Framework ORM with a code-first approach for maintainability.",
      "Project was postponed due to a default on the client's end.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    contract: "Internship",
    company: "PT. Jasamedika Saranatama",
    period: "May – Aug 2023",
    bullets: [
      "Designed a text extraction model using PyTorch, Pandas, and NumPy, achieving a micro F1-score of 0.841 with CUDA-accelerated training and hyperparameter tuning.",
      "Supported development of a content-based filtering recommender system for disease prediction using LightGBM, KNN (Scikit-Learn), and SHAP, achieving 0.822 accuracy and 0.824 F1-score.",
    ],
  },
];

export const projects = [
  {
    name: "BIOGAN-BERT",
    tag: "Text Extraction",
    period: "Jan – Aug 2024",
    description:
      "BioGPT-2 fine-tuned and GAN-BERT model for extracting drug interactions from biomedical texts. Enhanced performance with novel LLM-based data augmentation, achieving a micro F1-score of 85% (SOTA 2024).",
    stack: ["BioGPT-2", "GAN-BERT", "LLM Data Augmentation"],
  },
  {
    name: "Automated Streaming Cryptocurrency Data Analysis",
    tag: "Big Data",
    period: "Jan – May 2024",
    description:
      "Scalable real-time infrastructure for cryptocurrency price prediction and sentiment analysis with under 1-minute latency. Graded 4.00/4.00 under supervision of NoLimit.id's CTO.",
    stack: ["Kafka", "Elasticsearch", "Spark"],
  },
  {
    name: "Rice Disease Image Classification",
    tag: "Computer Vision",
    period: "Sept – Dec 2022",
    description:
      "Rice disease classification model achieving perfect (1.00) accuracy and F1-score. Finalist and favorite team at TSDN 2022, deployed via REST API with a full CI/CD pipeline.",
    stack: ["Flask", "Docker", "AWS", "Pandas", "Matplotlib"],
  },
];

export const education = [
  {
    school: "Bandung Institute of Technology (ITB)",
    degree: "M.Sc. in Informatics",
    period: "2022 – 2024",
    detail: "CGPA: 3.54/4.00 — Specialization: Data Science & Artificial Intelligence",
    courses: "Big Data, Intelligence Business Analytics, Artificial Intelligence, Deep Learning",
  },
];

export const publications = [
  "ICACTA (2024): BIOGAN-BERT: BioGPT-2 Fine Tuned and GAN-BERT for Extracting Drug Interaction Based on Biomedical Texts.",
  "ICEEI (2023): Big Five Personality Prediction Based on Indonesian Tweets and Personality Test (NLP).",
];

export const qualifications = [
  { name: "EF SET English Certificate 76/100 (C2 Proficient)", year: "2025" },
  { name: "Finalist & Favorite Team — Turnamen Sains Data Nasional", year: "2022" },
  { name: "Machine Learning with Python — Cognitive Class (IBM)", year: "2022" },
  { name: "IELTS: Average Score of 7 — British Council", year: "2022" },
  { name: "Elite Executive Workshop — Lifetime Program (Level 1–5)", year: "2020" },
];

export const skills = {
  "Languages": ["Python", "C#", "JavaScript/TypeScript", "SQL"],
  "Data & ML": ["PyTorch", "Polars", "Pandas", "NumPy", "Scikit-Learn", "LightGBM", "ONNX", "vLLM", "LangChain"],
  "MLOps & Platform": ["Kubeflow", "MLflow", "Feast", "BentoML", "Evidently", "Data Hub", "Airflow"],
  "Infra & DevOps": ["Docker", "Kubernetes (GKE/on-prem)", "Helm", "Rancher", "GitHub Actions", "Prometheus", "Grafana"],
  "Cloud & Data": ["GCP (BigQuery, Cloud Composer, Cloud Storage)", "SQL Server", "Redis", "S3/MinIO", "Kafka", "Elasticsearch", "Spark"],
  "Web & Backend": [".NET 8", "ASP.NET Core", "Blazor", "REST APIs", "JWT Auth"],
};
