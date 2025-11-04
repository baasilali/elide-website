import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-[hsl(var(--glow))] bg-clip-text text-transparent">
            ELIDE
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#about" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </a>
          <a 
            href="#features" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a 
            href="#docs" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Documentation
          </a>
          <Button variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
