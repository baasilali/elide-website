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
        <div className="grid md:grid-cols-[48%_52%] gap-40 items-start">
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
            
            <p className="text-lg md:text-xl text-foreground/70 text-left">
              A modern alternative to Node.js, Deno, and Bun—built for the future.
            </p>
          </div>

          {/* Right Column - Download Section */}
          <div className="flex flex-col gap-4">
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
              <div className="bg-[#0a0a0a] backdrop-blur-sm border border-border/50 rounded-lg rounded-tl-none px-6 py-4 font-mono text-sm text-foreground/90 hover:bg-black/95 transition-colors w-fit">
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
            
            <div className="flex gap-4 items-center mt-8">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-instrument font-semibold text-lg px-8 py-6 shadow-lg hover:scale-105 transition-all"
              >
                Get Started
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="font-instrument font-semibold text-lg px-8 py-6 shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join our Discord
              </Button>
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
