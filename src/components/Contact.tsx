import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-card border-4 border-accent mb-4 animate-block-bounce">
            <p className="text-xs text-accent">★ GAME OVER? CONTINUE! ★</p>
          </div>
          <h2 className="text-2xl md:text-4xl text-accent gold-glow text-shadow-pixel mb-4">
            PRESS START
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Ready to collaborate on your next project
          </p>
        </div>

        <div className="retro-card p-8 md:p-12 text-center space-y-8">
          <div className="flex justify-center gap-3">
            <div className="w-6 h-6 bg-accent rounded-full coin-spin" />
            <div className="w-6 h-6 bg-accent rounded-full coin-spin" style={{ animationDelay: '0.2s' }} />
            <div className="w-6 h-6 bg-accent rounded-full coin-spin" style={{ animationDelay: '0.4s' }} />
          </div>

          <div className="space-y-4">
            <p className="text-sm md:text-base text-foreground">
              Shall we build something amazing together?
            </p>
            <p className="text-xs text-muted-foreground">
              Get in touch via social networks or email
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="pixel-button bg-accent hover:bg-accent/90 text-background border-4 border-accent/50 text-xs gap-2"
            >
              <Mail className="h-4 w-4" />
              EMAIL
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="pixel-button border-4 border-primary hover:bg-primary text-xs gap-2"
            >
              <Linkedin className="h-4 w-4" />
              LINKEDIN
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="pixel-button border-4 border-primary hover:bg-primary text-xs gap-2"
            >
              <Github className="h-4 w-4" />
              GITHUB
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="pixel-button border-4 border-primary hover:bg-primary text-xs gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              WHATSAPP
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 • Built with ❤️ and lots of ☕
          </p>
          <p className="text-xs text-accent mt-2">
            PLAYER_01 • DATA ANALYST + FULLSTACK DEV
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
