import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-astronaut.png";
import { useState } from "react";

const HeroSection = () => {
  const [installMethod, setInstallMethod] = useState<'bash' | 'brew'>('bash');

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
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 py-32">
        <div className="grid md:grid-cols-[48%_52%] gap-16 items-center">
          {/* Left Column - Hero Text */}
          <div className="text-left">
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
            
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-instrument font-semibold text-lg px-8 py-6 shadow-lg hover:scale-105 transition-all"
            >
              Get Started
            </Button>
          </div>

          {/* Right Column - Download Section */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-foreground">Download the latest release</h3>
            
            <div className="flex flex-col">
              {/* Tab Buttons */}
              <div className="flex gap-0">
                <button
                  onClick={() => setInstallMethod('bash')}
                  className={`px-4 py-2 rounded-t-lg font-semibold font-inter transition-all ${
                    installMethod === 'bash'
                      ? 'bg-[#0a0a0a] text-foreground border-t border-l border-r border-border/50 border-b-0'
                      : 'bg-transparent text-foreground/60 hover:text-foreground hover:bg-card/20 border border-transparent'
                  }`}
                >
                  Bash
                </button>
                <button
                  onClick={() => setInstallMethod('brew')}
                  className={`px-4 py-2 rounded-t-lg font-semibold font-inter transition-all ${
                    installMethod === 'brew'
                      ? 'bg-[#0a0a0a] text-foreground border-t border-l border-r border-border/50 border-b-0'
                      : 'bg-transparent text-foreground/60 hover:text-foreground hover:bg-card/20 border border-transparent'
                  }`}
                >
                  Brew
                </button>
              </div>

              {/* Command Display */}
              <div className="bg-[#0a0a0a] backdrop-blur-sm border border-border/50 rounded-lg rounded-tl-none px-6 py-4 font-mono text-sm text-foreground/90 hover:bg-black/95 transition-colors">
                {installMethod === 'bash' && (
                  <div className="flex gap-2">
                    <span className="text-purple-400">$</span>
                    <span>
                      <span className="text-purple-300">curl</span> -sSL --tlsv1.2 <span className="text-purple-300">elide.sh</span> | <span className="text-purple-300">bash</span> -s - --install-rev=1.0.0-beta10
                    </span>
                  </div>
                )}
                {installMethod === 'brew' && (
                  <div className="flex gap-2">
                    <span className="text-purple-400">&gt;</span>
                    <span>
                      <span className="text-purple-300">brew tap</span> elide-dev/elide && <span className="text-purple-300">brew install</span> elide
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a 
        href="#terminal" 
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
