import { Button } from "@/components/ui/button";
import elideLogo from "@/assets/elide-logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={elideLogo} alt="Elide Logo" className="h-8 w-8" />
          <span 
            className="text-2xl font-agrandir font-bold bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent" 
            style={{ letterSpacing: '0.15em' }}
          >
            ELIDE
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-4 bg-card/50 backdrop-blur-sm px-6 py-2 rounded-full border border-border/50">
          <a 
            href="#about" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-3 py-1"
          >
            About
          </a>
          <a 
            href="#features" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-3 py-1"
          >
            Features
          </a>
          <a 
            href="#docs" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-3 py-1"
          >
            Documentation
          </a>
          <Button variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-instrument font-semibold rounded-full">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
