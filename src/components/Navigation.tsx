import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            Portfolio
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              end
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
            >
              Projects
            </NavLink>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Tobias-Johannesson" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/tobiasjohannesson" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <NavLink
              to="/"
              end
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              activeClassName="text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              activeClassName="text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              activeClassName="text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </NavLink>
            
            <div className="flex items-center gap-2 pt-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Tobias-Johannesson" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/tobiasjohannesson" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;