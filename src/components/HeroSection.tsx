import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-astronaut.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-[hsl(var(--glow))]/10 animate-glow" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="max-w-3xl text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-foreground text-left">
            The next generation of{" "}
            <span className="bg-gradient-to-r from-primary via-[hsl(var(--glow))] to-primary bg-clip-text text-transparent animate-float">
              runtime development
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 leading-relaxed text-left">
            Elide is a powerful runtime development tool with native Polyglot capabilities.
          </p>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-8 text-left">
            A modern alternative to Node.js, Deno, and Bun—built for the future.
          </p>
          
          <div className="flex flex-col gap-4 items-start">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-instrument font-semibold text-lg px-8 py-6 shadow-lg hover:scale-105 transition-all"
            >
              Get Started
            </Button>
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg px-6 py-4 font-mono text-sm text-foreground/90 hover:bg-card/40 transition-colors">
              curl -sSL --tlsv1.2 elide.sh | bash -s - --install-rev=1.0.0-beta10
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:opacity-80 transition-opacity"
      >
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-foreground"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
};

export default HeroSection;
