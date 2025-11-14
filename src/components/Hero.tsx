import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import heroPixelBg from "@/assets/hero-pixel-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pixel-grid">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroPixelBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Coin decoration */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-8 h-8 bg-accent rounded-full coin-spin border-4 border-accent/50" />
            <div className="w-8 h-8 bg-accent rounded-full coin-spin border-4 border-accent/50" style={{ animationDelay: '0.3s' }} />
            <div className="w-8 h-8 bg-accent rounded-full coin-spin border-4 border-accent/50" style={{ animationDelay: '0.6s' }} />
          </div>

          <div className="inline-block px-6 py-3 bg-primary border-4 border-accent mb-4 animate-power-up">
            <p className="text-xs md:text-sm text-accent">★ LEVEL UP YOUR DATA ★</p>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight text-shadow-pixel text-foreground space-y-4">
            <span className="block text-accent gold-glow">DATA ANALYST</span>
            <span className="block text-sm md:text-xl">+</span>
            <span className="block text-accent gold-glow">FULLSTACK DEV</span>
          </h1>

          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I turn data into powerful insights and build end-to-end applications.
            Like in a game, every project is a new level to conquer! 🎮
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="pixel-button bg-accent hover:bg-accent/90 text-background border-4 border-accent/50 text-xs md:text-sm gap-2"
            >
              <Sparkles className="h-4 w-4" />
              SEE PROJECTS
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="pixel-button border-4 border-primary hover:bg-primary text-xs md:text-sm gap-2"
            >
              DOWNLOAD CV
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-12">
            <div className="retro-card p-4 space-y-2">
              <p className="text-2xl md:text-3xl text-accent gold-glow">50+</p>
              <p className="text-xs text-muted-foreground">PROJECTS</p>
            </div>
            <div className="retro-card p-4 space-y-2">
              <p className="text-2xl md:text-3xl text-accent gold-glow">100%</p>
              <p className="text-xs text-muted-foreground">DEDICATION</p>
            </div>
            <div className="retro-card p-4 space-y-2">
              <p className="text-2xl md:text-3xl text-accent gold-glow">∞</p>
              <p className="text-xs text-muted-foreground">CREATIVITY</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-accent" />
      </div>
    </section>
  );
};

export default Hero;
