import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const skills = {
  languages: ["Java", "C++", "Python", "C#", "JavaScript", "TypeScript", "SQL"],
  cloud: ["AWS (EC2, S3, Lambda, Aurora, RDS, CloudFormation, EBS, CloudWatch)", "Azure",],
  backend: ["Spring Boot", "Node.js", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Apache Kafka", "REST APIs", "Microservices"],
  frontend: ["React", "Next.js", "TypeScript"],
  tools: ["Git", "CI/CD", "Linux", "Monitoring & Observability", "PyTorch", "JUnit"],
  aiMl: ["Model Training", "Data Preprocessing", "Feature Engineering"]
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
                I'm a software engineer at AWS with a strong track record of delivering high-impact projects in cloud infrastructure, distributed systems, and full-stack development. I specialize in building scalable, reliable systems that solve real-world problems efficiently.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Over my career, I have designed and optimized microservices architectures, implemented low-latency trading and data pipelines, and enhanced observability and automation across critical infrastructure. My work has reduced operational latency by up to 80%, saved hundreds of thousands of dollars monthly, and improved system reliability.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I have a strong foundation in cloud platforms (AWS, Azure), programming languages (Java, C++, Python, TypeScript), and frameworks (React, Spring Boot). I also have hands-on experience in DevOps, CI/CD pipelines, monitoring, and AI/ML workflows.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am passionate about tackling challenging technical problems, contributing to high-performing teams, and building systems that scale globally. My goal is to continue driving impact through engineering excellence and innovative solutions.
              </p>
              <Button asChild size="lg">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
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
                    Working on cloud infrastructure and distributed systems, building services that handle millions of requests per day. Focus on reliability, scalability, and operational excellence.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Key Achievements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">
                        Ranked top 3 in team code contributions and led projects reducing workflow latency by 80%
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">
                        Improved infrastructure efficiency and test automation, saving ~$400K/month
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">
                        Co-led cross-team AI hackathon project and built monitoring systems achieving 99.9% uptime
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