import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";

// Sample project data - replace with your actual projects
const projects = [
  {
    id: "1",
    title: "Distributed Task Scheduler",
    description: "A fault-tolerant distributed task scheduling system built with microservices architecture",
    tags: ["AWS", "Docker", "Kubernetes", "Python"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    id: "2",
    title: "Real-time Analytics Dashboard",
    description: "High-performance analytics platform processing millions of events per second",
    tags: ["React", "TypeScript", "Apache Kafka", "PostgreSQL"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    id: "3",
    title: "API Gateway",
    description: "Scalable API gateway with rate limiting, authentication, and monitoring",
    tags: ["Go", "Redis", "gRPC", "Prometheus"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/yourusername/project3",
  },
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