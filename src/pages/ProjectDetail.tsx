import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink, Newspaper } from "lucide-react";
import Navigation from "@/components/Navigation";

const projectDetails: Record<string, any> = {
  "1": {
    title: "DUGET: Dynamic User Grouping & Evolution Tracking",
    description: "Machine learning framework for tracking user clusters over time in public transit systems",
    longDescription: `DUGET is a framework for representing, clustering, and tracking objects (users) over time, evaluating and quantifying changes in clusters. DUGET_V1 and DUGET_V2 implement this framework on public transportation data, producing robust user profiles and identifying distinct temporal patterns. This work formed my master's thesis and was published in IEEE: "DUGET: Leveraging Machine Learning for Dynamic User Grouping and Evolution Tracking in Public Transit Systems".`,
    motivation: "During my master's program at KTH, I wanted to explore how temporal clustering could reveal patterns in public transit usage. The goal was to build a framework capable of tracking evolving user groups and quantifying changes over time, with potential applications in urban planning and transport analytics.",
    architecture: [
      "Representation of objects as temporal profiles",
      "Clustering of users for two consecutive time periods",
      "Matching and tracking clusters over time",
      "Evaluation and quantification of changes in clusters"
    ],
    components: [
      { name: "Data Preparation", description: "Preprocessing public transit datasets into temporal user profiles" },
      { name: "Clustering Engine", description: "Clustering algorithm implementation for each time period" },
      { name: "Evolution Tracker", description: "Tracks matching clusters and identifies changes over time" },
      { name: "Evaluation Module", description: "Measures robustness and quality of clustering and tracking results" }
    ],
    setup: [
      "Clone the repository: git clone https://github.com/Tobias-Johannesson/DUGET",
      "Install dependencies: pip install -r requirements.txt",
      "Run preprocessing scripts: python preprocess.py",
      "Run clustering: python cluster_v1.py or python cluster_v2.py",
      "Track evolution: python track_clusters.py",
      "Evaluate results: python evaluate.py"
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Data Science",
      "Temporal Clustering",
      "Public Transit Analytics",
      "NumPy",
      "Pandas",
      "Scikit-learn"
    ],
    githubUrl: "https://github.com/Tobias-Johannesson/DUGET",
    paperUrl: "https://ieeexplore.ieee.org/document/10825688",
    image: "/duget_methodology_overview.png",
  },
  "2": {
    title: "[IN PROGRESS] Asynchronous Work Scheduler",
    description: "A backend-first Java system focused on designing and implementing a high-throughput asynchronous work scheduling engine",
    longDescription: `
This project is a backend-focused asynchronous work scheduling system inspired by production-grade job queues and messaging platforms such as SQS, Kafka, and internal big-tech schedulers.

The system is planned to accept, persist, schedule, and execute asynchronous jobs at scale, with strong guarantees around durability, ordering, retries, and fault tolerance. The emphasis is on explicit system design, clear trade-offs, and correctness under failure rather than framework-driven abstractions.`,
    motivation: `
Modern backend systems rely heavily on asynchronous execution to decouple services, smooth traffic spikes, and improve system resilience. While many developers consume job queues as managed services, fewer understand the internal mechanics that make these systems reliable at scale.

This project exists to:
- Go deep on asynchronous systems design in Java
- Explore trade-offs between pull vs push scheduling models
- Understand durability, retries, and idempotency guarantees
- Build intuition for throughput, latency, and backpressure
- Focus on coordination and async execution rather than request/response performance
`,
    technologies: [
      "Java",
      "Spring",
      "Concurrency & Multithreading",
      "Asynchronous Processing",
      "Durable Queues",
    ],
    githubUrl: "https://github.com/Tobias-Johannesson",
    image: "/async-scheduler-in-progress.png",
  },
  "3": {
    title: "BitLink: High-Performance URL Shortener",
    description: "BitLink is a backend URL shortener service written in C++ with a strong focus on performance, scalability, and systems-level trade-offs",
    longDescription: `BitLink is a high-performance, backend-focused URL shortener designed to explore real-world systems engineering trade-offs around latency, throughput, durability, and simplicity.

The service is optimized for read-heavy workloads while still supporting high write throughput. It implements a layered storage architecture combining an in-memory cache with a persistent datastore to balance speed and correctness. The system is designed to minimize tail latency on redirects while maintaining predictable performance under load.
`,
    motivation: "Most URL shortener examples focus on basic CRUD functionality and ignore the systems-level concerns that dominate real production services. The goal was to create a small but serious system that reflects how production backend services are actually designed, measured, and evolved.",
    architecture: [
      "Client → HTTP API layer",
      "In-memory cache for hot URLs",
      "Persistent storage layer for durability",
      "Deterministic short-code generation",
      "Synchronous write path with fast read path"
    ],
    components: [
      { name: "HttpServer", description: "HTTP server responsible for request routing, input validation, and API-level concerns" },
      { name: "RateLimiter", description: "Token-bucket rate limiter applied to all public APIs to enforce per-client throughput limits" },
      { name: "UrlService", description: "Core domain service handling short-code generation, resolution, cache coordination, and persistence logic" },
      { name: "RedisCache", description: "In-memory cache layer optimized for low-latency short URL lookups" },
      { name: "SqliteStore", description: "Persistent storage adapter for durable URL mappings and metadata" },
      { name: "CleanupJob", description: "Background job responsible for expiring and deleting stale URL entries from persistent storage" },
    ],
    setup: [
      "git clone https://github.com/Tobias-Johannesson/bitlink",
      "cd bitlink/build",
      "# Install dependencies",
      "make",
      "./bitlink"
    ],
    technologies: [
      "C++",
      "Low-latency systems design",
      "In-memory caching",
      "Persistent storage",
      "Concurrency and synchronization",
      "Backend service architecture"
    ],
    githubUrl: "https://github.com/Tobias-Johannesson/bitlink",
    image: "/bitlink_high_level_system_design.png",
  }
  // "4": {
  //   title: "Real-time Analytics Dashboard",
  //   description: "High-performance analytics platform processing millions of events per second",
  //   longDescription: "A comprehensive analytics platform capable of processing and visualizing streaming data in real-time. Built to handle massive scale with sub-second latency, demonstrating expertise in stream processing, data engineering, and frontend performance optimization.",
  //   motivation: "Modern applications generate massive amounts of event data. I built this to showcase how to build scalable analytics infrastructure that provides actionable insights without sacrificing performance.",
  //   architecture: [
  //     "Event ingestion pipeline using Apache Kafka",
  //     "Stream processing with Apache Flink for real-time aggregations",
  //     "Time-series database (TimescaleDB) for efficient storage",
  //     "React-based dashboard with WebSocket for live updates"
  //   ],
  //   components: [
  //     { name: "Event Collector", description: "High-throughput event ingestion API" },
  //     { name: "Stream Processor", description: "Real-time aggregation and transformation" },
  //     { name: "Query Engine", description: "Optimized analytical queries" },
  //     { name: "Visualization Layer", description: "Interactive charts and dashboards" }
  //   ],
  //   setup: [
  //     "Clone the repository: git clone https://github.com/Tobias-Johannesson/analytics-dashboard",
  //     "Install dependencies: npm install && pip install -r requirements.txt",
  //     "Start Kafka: docker-compose up kafka zookeeper",
  //     "Start stream processor: python processor.py",
  //     "Start web server: npm run dev",
  //     "Access dashboard at http://localhost:3000"
  //   ],
  //   technologies: ["React", "TypeScript", "Apache Kafka", "Apache Flink", "PostgreSQL", "WebSocket", "D3.js"],
  //   githubUrl: "https://github.com/Tobias-Johannesson/project2",
  //   demoUrl: "https://demo.example.com",
  //   image: "/placeholder.svg"
  // },
  // "5": {
  //   title: "API Gateway",
  //   description: "Scalable API gateway with rate limiting, authentication, and monitoring",
  //   longDescription: "A production-grade API gateway built from scratch to demonstrate deep understanding of distributed systems, security, and performance optimization. Implements advanced features like circuit breaking, rate limiting, and request routing.",
  //   motivation: "Understanding API gateways is crucial for microservices architecture. This project showcases my ability to build critical infrastructure components that can handle production-level traffic.",
  //   architecture: [
  //     "Written in Go for high performance and low latency",
  //     "Redis-based distributed rate limiting",
  //     "JWT authentication with refresh token rotation",
  //     "gRPC for backend communication with HTTP/REST frontend"
  //   ],
  //   components: [
  //     { name: "Proxy Layer", description: "Request routing and load balancing" },
  //     { name: "Auth Service", description: "JWT validation and user management" },
  //     { name: "Rate Limiter", description: "Token bucket implementation with Redis" },
  //     { name: "Metrics Collector", description: "Prometheus integration for observability" }
  //   ],
  //   setup: [
  //     "Clone the repository: git clone https://github.com/Tobias-Johannesson/api-gateway",
  //     "Install Go dependencies: go mod download",
  //     "Start Redis: docker run -p 6379:6379 redis",
  //     "Configure environment: cp .env.example .env",
  //     "Build and run: go build && ./gateway",
  //     "Run tests: go test ./..."
  //   ],
  //   technologies: ["Go", "Redis", "gRPC", "Prometheus", "Docker", "JWT", "OpenAPI"],
  //   githubUrl: "https://github.com/Tobias-Johannesson/project3",
  //   demoUrl: "https://demo.example.com",
  //   image: "/placeholder.svg"
  // }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = id ? projectDetails[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => navigate("/projects")}>Back to Projects</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/projects")}
            className="mb-6 -ml-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>

          <div className="aspect-video bg-muted rounded-lg mb-8 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain bg-background"
            />
          </div>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <Button asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Source
                </a>
              </Button>
              {project.demoUrl && (
                <Button variant="outline" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.paperUrl && (
                <Button variant="outline" asChild>
                  <a href={project.paperUrl} target="_blank" rel="noopener noreferrer">
                    <Newspaper className="mr-2 h-4 w-4" />
                    View Paper
                  </a>
                </Button>
              )}
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-3">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-3">Motivation</h2>
              <p className="text-muted-foreground leading-relaxed">{project.motivation}</p>
            </CardContent>
          </Card>
          
          {project.architecture && (
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Architecture & Design</h2>
                <ul className="space-y-2">
                  {project.architecture.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {project.components && (
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Key Components</h2>
                <div className="space-y-4">
                  {project.components.map((component: any, index: number) => (
                    <div key={index}>
                      <h3 className="font-semibold text-lg mb-1">{component.name}</h3>
                      <p className="text-muted-foreground">{component.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {project.setup && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Setup Instructions</h2>
                <div className="bg-muted p-4 rounded-md">
                  <ol className="space-y-3 font-mono text-sm">
                    {project.setup.map((step: string, index: number) => (
                      <li key={index} className="text-muted-foreground">
                        <span className="text-primary font-bold mr-2">{index + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;