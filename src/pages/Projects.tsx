import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Newspaper } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "1",
    title: "DUGET: Dynamic User Grouping & Evolution Tracking",
    description: `Dynamic User Grouping and Evolution Tracking (DUGET) framework:
- Represent objects and prepare for clustering
- Cluster objects for two time periods
- Track/match clusters over time
- Evaluate and quantify change
  
DUGET_V1 and DUGET_V2 implement this on public transportation data, showing robust user profiles over time and the ability to identify distinct patterns.`,
    tags: ["Machine Learning", "Python", "Data Science", "Public Transit", "Clustering", "Temporal Analysis"],
    image: "/duget_methodology_overview.png",
    githubUrl: "https://github.com/Tobias-Johannesson/DUGET",
    paperUrl: "https://ieeexplore.ieee.org/document/10825688",
  },
  {
    id: "2",
    title: "[IN PROGRESS] Asynchronous Work Scheduler",
    description: `A backend-first Java system focused on designing and implementing a high-throughput asynchronous work scheduling engine.

The goal is to build a production-grade scheduler focusing less on storage-heavy request paths and more on concurrency control, async execution models, and system reliability under load.`,
    tags: ["Java", "Distributed Systems", "Asynchronous Processing", "Concurrency", "Backend Architecture"],
    image: "/async-scheduler-in-progress.png",
    githubUrl: "",
  },
  {
    id: "3",
    title: "BitLink: High-Performance URL Shortener",
    description: `BitLink is a backend URL shortener service written in C++ with a strong focus on performance, scalability, and systems-level trade-offs.

The system is designed for high read and write throughput and uses a two-layer storage architecture to balance latency, durability, and cost. It explores key backend concerns such as request routing, caching strategies, rate limiting, and failure handling under load.

This project serves as a hands-on exercise in building low-latency services, reasoning about storage and memory trade-offs, and implementing performance-critical backend infrastructure from first principles.`,
    tags: ["C++", "Backend Systems", "High Performance", "Caching", "Storage"],
    image: "/bitlink_high_level_system_design.png",
    githubUrl: "https://github.com/Tobias-Johannesson/bitlink",
  }
  // {
  //   id: "4",
  //   title: "Real-time Analytics Dashboard",
  //   description: "High-performance analytics platform processing millions of events per second",
  //   tags: ["React", "TypeScript", "Apache Kafka", "PostgreSQL"],
  //   image: "/placeholder.svg",
  //   githubUrl: "https://github.com/Tobias-Johannesson/project2",
  // },
  // {
  //   id: "5",
  //   title: "API Gateway",
  //   description: "Scalable API gateway with rate limiting, authentication, and monitoring",
  //   tags: ["Go", "Redis", "gRPC", "Prometheus"],
  //   image: "/placeholder.svg",
  //   githubUrl: "https://github.com/Tobias-Johannesson/project3",
  // },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
            <p className="text-xl text-muted-foreground">
              A collection of my work showcasing technical expertise and problem-solving skills
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all cursor-pointer border-border"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, "_blank");
                      }}
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    {project.paperUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.paperUrl, "_blank", "noopener,noreferrer");
                        }}
                        className="flex items-center gap-2"
                      >
                        <Newspaper className="mr-2 h-4 w-4" />
                        Paper
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/projects/${project.id}`);
                      }}
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;