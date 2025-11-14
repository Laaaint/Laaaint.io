import { Code2, Database, Gamepad2 } from "lucide-react";

const Header = () => {
  return (
    <header aria-label="Main header" className="fixed top-0 left-0 right-0 z-50 border-b-4 border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 py-4">
        <nav role="navigation" aria-label="Primary" className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-accent animate-pixel-float" aria-hidden="true" />
            <span className="text-sm md:text-base text-accent gold-glow">PLAYER_01</span>
          </div>

          <div className="flex items-center gap-4 md:gap-8 text-xs md:text-sm">
            <a href="#about" aria-label="About" className="hover:text-accent transition-colors flex items-center gap-2">
              <span className="hidden md:inline">ABOUT</span>
              <span className="md:hidden" aria-hidden="true">▶</span>
            </a>
            <a href="#skills" aria-label="Skills" className="hover:text-accent transition-colors flex items-center gap-2">
              <Code2 className="h-4 w-4" aria-hidden="true" />
              <span className="hidden md:inline">SKILLS</span>
            </a>
            <a href="#projects" aria-label="Projects" className="hover:text-accent transition-colors flex items-center gap-2">
              <Database className="h-4 w-4" aria-hidden="true" />
              <span className="hidden md:inline">PROJECTS</span>
            </a>
            <a href="#contact" aria-label="Contact" className="hover:text-accent transition-colors">
              CONTACT
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
