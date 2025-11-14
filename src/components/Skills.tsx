import { Code2, Database, LineChart, Palette, Server, Zap } from "lucide-react";

const skills = [
  {
    category: "DATA ANALYSIS",
    icon: LineChart,
    items: ["Python", "SQL", "Power BI", "Excel", "Pandas", "NumPy"],
    color: "accent",
  },
  {
    category: "FRONTEND",
    icon: Palette,
    items: ["React", "TypeScript", "Tailwind", "Next.js", "HTML/CSS"],
    color: "primary",
  },
  {
    category: "BACKEND",
    icon: Server,
    items: ["Node.js", "PostgreSQL", "API REST", "Supabase"],
    color: "accent",
  },
  {
    category: "TOOLS & MORE",
    icon: Zap,
    items: ["Git", "Docker", "VS Code", "Figma", "Jupyter"],
    color: "primary",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-card border-4 border-accent mb-4">
            <p className="text-xs text-accent">★ POWER-UPS ★</p>
          </div>
          <h2 className="text-2xl md:text-4xl text-accent gold-glow text-shadow-pixel mb-4">
            SKILLS TREE
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Skills unlocked along the journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.category}
                className="retro-card p-6 hover:translate-y-[-4px] transition-transform animate-power-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-${skill.color} border-2 border-${skill.color}/50`}>
                    <Icon className="h-5 w-5 text-background" />
                  </div>
                  <h3 className="text-sm md:text-base text-foreground">
                    {skill.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-background border-2 border-border text-xs hover:border-accent hover:text-accent transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-4 bg-background border-2 border-border overflow-hidden">
                  <div
                    className="h-full bg-accent animate-power-up"
                    style={{
                      width: `${85 + Math.random() * 15}%`,
                      animationDelay: `${index * 0.1 + 0.3}s`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
