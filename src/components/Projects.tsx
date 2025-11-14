import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "DASHBOARD ANALYTICS",
    description: "Comprehensive data analysis with interactive visualizations and real-time insights",
    tech: ["Python", "Power BI", "SQL"],
    level: "LEVEL 10",
    stars: 5,
  },
  {
    title: "E-COMMERCE FULLSTACK",
    description: "Full-stack e-commerce platform with cart, payments, and admin panel",
    tech: ["React", "Node.js", "PostgreSQL"],
    level: "LEVEL 9",
    stars: 5,
  },
  {
    title: "DATA PIPELINE",
    description: "Automated ETL pipeline processing thousands of records daily",
    tech: ["Python", "Pandas", "API"],
    level: "LEVEL 8",
    stars: 4,
  },
  {
    title: "PORTFOLIO GEEK",
    description: "Portfolio site with pixel art theme and interactive game-inspired animations",
    tech: ["React", "TypeScript", "Tailwind"],
    level: "LEVEL 10",
    stars: 5,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-card border-4 border-primary mb-4">
            <p className="text-xs text-accent">★ ACHIEVEMENTS ★</p>
          </div>
          <h2 className="text-2xl md:text-4xl text-accent gold-glow text-shadow-pixel mb-4">
            COMPLETED PROJECTS
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Each project is a level successfully completed
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="retro-card p-6 hover:translate-y-[-4px] transition-all group animate-power-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Level badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="px-3 py-1 bg-primary border-2 border-accent">
                  <span className="text-xs text-accent">{project.level}</span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: project.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-base md:text-lg text-foreground mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-background border border-border text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="pixel-button border-2 text-xs gap-1"
                >
                  <Github className="h-3 w-3" />
                  CODE
                </Button>
                <Button
                  size="sm"
                  className="pixel-button bg-accent hover:bg-accent/90 text-background border-2 border-accent/50 text-xs gap-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  DEMO
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="pixel-button border-4 border-accent hover:bg-accent hover:text-background text-sm"
          >
            VIEW ALL PROJECTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
