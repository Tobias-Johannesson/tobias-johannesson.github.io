import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = {
  languages: ["Python", "TypeScript", "Go", "Java", "SQL"],
  cloud: ["AWS (EC2, S3, Lambda, ECS)", "Docker", "Kubernetes", "Terraform"],
  backend: ["Node.js", "Django", "FastAPI", "PostgreSQL", "Redis", "Apache Kafka"],
  frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  tools: ["Git", "CI/CD", "Prometheus", "Grafana", "Linux"]
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I'm a software engineer at AWS with a passion for building scalable, reliable systems. 
                My experience spans distributed systems, cloud infrastructure, and full-stack development, 
                with a focus on creating solutions that solve real-world problems at scale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Throughout my career, I've worked on high-impact projects involving microservices architecture, 
                data pipelines, and infrastructure automation. I believe in writing clean, maintainable code 
                and building systems with observability and reliability in mind from day one.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently seeking new opportunities where I can contribute to challenging technical problems, 
                work with talented teams, and continue growing as an engineer. I'm particularly interested in 
                roles involving distributed systems, cloud infrastructure, and platform engineering.
              </p>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Cloud & Infrastructure</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.cloud.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Backend Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Frontend Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Tools & DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Experience Highlights</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Software Engineer at AWS</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Working on cloud infrastructure and distributed systems, building services that handle 
                    millions of requests per day. Focus on reliability, scalability, and operational excellence.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Key Achievements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">
                        Designed and implemented microservices architecture serving millions of users
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">
                        Reduced infrastructure costs by 40% through optimization and automation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">
                        Built monitoring and alerting systems improving system reliability to 99.9% uptime
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;