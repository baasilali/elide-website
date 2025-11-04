import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-4">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src="/logo.png" alt="Elide Logo" className="h-8 w-auto" />
        </a>
        
        <div className="hidden md:flex items-center gap-4 bg-card/50 backdrop-blur-sm px-6 py-2 rounded-full border border-border/50">
          <a 
            href="https://docs.elide.dev" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-3 py-1"
          >
            Documentation
          </a>
          <a 
            href="/blog" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-3 py-1"
          >
            Blog
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
