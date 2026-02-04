import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Newspaper } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "1",
    title: "DUGET: Dynamic User Grouping & Evolution Tracking",
    description: "A machine learning framework for clustering users, tracking their evolution over time, and quantifying behavioral changes. Published in IEEE and applied to public transit data.",
    tags: ["Machine Learning", "Python", "Data Science", "Public Transit", "Clustering", "Temporal Analysis"],
    image: "/duget_methodology_overview.png",
    githubUrl: "https://github.com/Tobias-Johannesson/DUGET",
    paperUrl: "https://ieeexplore.ieee.org/document/10825688",
  },
  {
    id: "2",
    title: "Mimir: Write Your Story, Map Your World, Own Your Data",
    description: `My friends and I have been working on something that combines two things we care about: writing and privacy. It's called Mimir, and it's an AI-powered writing tool that runs completely on your computer.`,
    tags: ["Electron", "React", "TypeScript", "Python", "Local AI", "Privacy"],
    image: "https://img.youtube.com/vi/TTz-LGa5uZo/maxresdefault.jpg",
    websiteUrl: "https://mimir-editor.com",
  },
  {
    id: "3",
    title: "[IN PROGRESS] Asynchronous Work Scheduler",
    description: "A backend-first Java system for high-throughput asynchronous work scheduling, focusing on concurrency control, async execution models, and system reliability under load.",
    tags: ["Java", "Distributed Systems", "Asynchronous Processing", "Concurrency", "Backend Architecture"],
    image: "/async-scheduler-in-progress.png",
  },
  {
    id: "4",
    title: "BitLink: High-Performance URL Shortener",
    description: "A backend URL shortener in C++ exploring systems-level trade-offs around latency, throughput, and durability with a two-layer storage architecture.",
    tags: ["C++", "Backend Systems", "High Performance", "Caching", "Storage"],
    image: "/bitlink_high_level_system_design.png",
    githubUrl: "https://github.com/Tobias-Johannesson/bitlink",
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
                    {project.githubUrl && (
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
                    )}
                    {project.websiteUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.websiteUrl, "_blank");
                        }}
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Website
                      </Button>
                    )}
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