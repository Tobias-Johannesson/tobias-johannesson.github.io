import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink, Newspaper } from "lucide-react";
import Navigation from "@/components/Navigation";

// Helper function to parse simple markdown to HTML
const parseMarkdown = (text: string): string => {
  return text
    .trim()
    // Bold text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-4 hover:text-primary/80">$1</a>')
    // Convert - lists to •
    .replace(/^- /gm, '• ')
    // Double newlines become paragraph breaks
    .replace(/\n\n/g, '</p><p class="mt-4">')
    // Single newline before bullet becomes new line with bullet
    .replace(/\n• /g, '</p><p class="mt-2">• ')
    // Wrap in paragraphs
    .replace(/^/, '<p>')
    .replace(/$/, '</p>');
};

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
    title: "Mimir: Write Your Story, Map Your World, Own Your Data",
    description: "An AI-powered writing tool that runs completely on your computer",
    isBlogStyle: true,
    youtubeVideoId: "TTz-LGa5uZo",
    websiteUrl: "https://mimir-editor.com",
    image: "https://img.youtube.com/vi/TTz-LGa5uZo/maxresdefault.jpg",
    technologies: [
      "Electron",
      "React",
      "TypeScript",
      "Python",
      "Sentence Transformers",
      "Qdrant",
      "llama.cpp",
      "Local AI"
    ],
    blogSections: [
      {
        content: `My friends and I have been working on something that combines two things we care about: writing and privacy. It's called Mimir, and it's an AI-powered writing tool that runs completely on your computer.

**Want to try it?** Visit [mimir-editor.com](https://mimir-editor.com) to join the waitlist and get updates on the beta release.`
      },
      {
        title: "The Problem",
        content: `Most modern writing tools make you choose:

• **Traditional tools (Word, Scrivener):** Private, but no AI help
• **Cloud AI tools (Sudowrite, NovelAI):** Powerful AI, but your manuscript lives on their servers

We wanted both. AI assistance for story development without sending our work to the cloud.`
      },
      {
        title: "What Mimir Does",
        content: `Mimir is a desktop app with two main modes:

**Editor Mode**

A clean writing interface where you work on your manuscript. Import Word documents, organize chapters, and write in a distraction-free environment.

**Creator Mode**

This is where it gets interesting. As you write, Mimir helps you visualize your story through different views:

• **Canvas:** Visual map of characters, locations, and relationships
• **Timeline:** See events chronologically
• **Structured View:** Organized lists of story elements
• **Outline:** Hierarchical story structure

The idea is simple: write naturally, and see your story world emerge visually.`
      },
      {
        title: "The Privacy-First Approach",
        content: `Here's what makes Mimir different: it uses a tiny local AI that runs on your machine.

The system has two parts:

• **Mimir Editor** (Electron + React + TypeScript) - The desktop app you interact with
• **Mimir Embedder** (Python backend) - The AI engine that processes your text locally

The embedder uses:

• **Sentence Transformers** for understanding your text semantically
• **Qdrant** (embedded vector database) for storing story elements
• **Local LLM** (Phi-3.5 via llama.cpp) for text generation and extraction (teeny tiny model that runs on your CPU)

Everything runs on your computer. Your manuscript never touches the cloud.`
      }
    ]
  },
  "3": {
    title: "[IN PROGRESS] Asynchronous Work Scheduler",
    description: "A backend-first Java system focused on designing and implementing a high-throughput asynchronous work scheduling engine",
    longDescription: `This project is a backend-focused asynchronous work scheduling system inspired by production-grade job queues and messaging platforms such as SQS, Kafka, and internal big-tech schedulers.

The system is planned to accept, persist, schedule, and execute asynchronous jobs at scale, with strong guarantees around durability, ordering, retries, and fault tolerance. The emphasis is on explicit system design, clear trade-offs, and correctness under failure rather than framework-driven abstractions.`,
    motivation: `Modern backend systems rely heavily on asynchronous execution to decouple services, smooth traffic spikes, and improve system resilience. While many developers consume job queues as managed services, fewer understand the internal mechanics that make these systems reliable at scale.

This project exists to:

- Go deep on asynchronous systems design in Java
- Explore trade-offs between pull vs push scheduling models
- Understand durability, retries, and idempotency guarantees
- Build intuition for throughput, latency, and backpressure
- Focus on coordination and async execution rather than request/response performance`,
    technologies: [
      "Java",
      "Spring",
      "Concurrency & Multithreading",
      "Asynchronous Processing",
      "Durable Queues",
    ],
    githubUrl: "https://github.com/Tobias-Johannesson/Dispatch",
    image: "/async-scheduler-in-progress.png",
  },
  "4": {
    title: "BitLink: High-Performance URL Shortener",
    description: "BitLink is a backend URL shortener service written in C++ with a strong focus on performance, scalability, and systems-level trade-offs",
    longDescription: `BitLink is a high-performance, backend-focused URL shortener designed to explore real-world systems engineering trade-offs around latency, throughput, durability, and simplicity.

The service is optimized for read-heavy workloads while still supporting high write throughput. It implements a layered storage architecture combining an in-memory cache with a persistent datastore to balance speed and correctness. The system is designed to minimize tail latency on redirects while maintaining predictable performance under load.`,
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
  },
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

          {!project.isBlogStyle && (
            <div className="aspect-video bg-muted rounded-lg mb-8 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain bg-background"
              />
            </div>
          )}

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
              {project.githubUrl && (
                <Button asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                  </a>
                </Button>
              )}
              {project.websiteUrl && (
                <Button asChild>
                  <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
              )}
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

          {/* Blog-style content */}
          {project.isBlogStyle && project.blogSections && (
            <>
              {project.blogSections.map((section: any, index: number) => (
                <Card key={index} className="mb-8">
                  <CardContent className="pt-6">
                    {section.title && (
                      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    )}
                    <div
                      className="text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_strong]:font-semibold"
                      dangerouslySetInnerHTML={{ __html: parseMarkdown(section.content) }}
                    />
                    {/* YouTube video after first section */}
                    {index === 1 && project.youtubeVideoId && (
                      <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">See Mimir in Action</h3>
                        <p className="text-muted-foreground mb-4">
                          Watch how Mimir works—from writing your manuscript to seeing your story world visualized automatically:
                        </p>
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </>
          )}

          {/* Standard project content */}
          {!project.isBlogStyle && (
            <>
              {project.longDescription && (
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-3">Overview</h2>
                    <div
                      className="text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_strong]:font-semibold"
                      dangerouslySetInnerHTML={{ __html: parseMarkdown(project.longDescription) }}
                    />
                  </CardContent>
                </Card>
              )}

              {project.motivation && (
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-3">Motivation</h2>
                    <div
                      className="text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_strong]:font-semibold"
                      dangerouslySetInnerHTML={{ __html: parseMarkdown(project.motivation) }}
                    />
                  </CardContent>
                </Card>
              )}

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
            </>
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