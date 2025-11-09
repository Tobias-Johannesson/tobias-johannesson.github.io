import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Database, Cloud } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
  const navigate = useNavigate();

  const featuredProjects = [
    {
      id: "1",
      title: "Distributed Task Scheduler",
      description: "Fault-tolerant scheduling system with microservices architecture",
      icon: Cloud,
    },
    {
      id: "2",
      title: "Real-time Analytics Dashboard",
      description: "Processing millions of events per second with sub-second latency",
      icon: Database,
    },
    {
      id: "3",
      title: "API Gateway",
      description: "Production-grade gateway with advanced routing and security",
      icon: Code,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Software Engineer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-150">
              Building scalable, reliable systems at AWS. Passionate about distributed systems,
              cloud infrastructure, and elegant code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <Button size="lg" onClick={() => navigate("/projects")} className="group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/about")}>
                About Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground">
                Showcasing technical expertise through real-world solutions
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {featuredProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card
                    key={project.id}
                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border animate-in fade-in slide-in-from-bottom-8 duration-700"
                    style={{ animationDelay: `${index * 150}ms` }}
                    onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="group/btn w-full justify-between">
                        Learn More
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" onClick={() => navigate("/projects")}>
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Great</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm currently seeking new opportunities. If you're looking for a software engineer
              who's passionate about building reliable, scalable systems, let's connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:your.email@example.com">Get In Touch</a>
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/about")}>
                Learn More About Me
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;