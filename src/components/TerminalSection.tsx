import { useState, useEffect } from "react";

const TerminalSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [displayedOutput, setDisplayedOutput] = useState("");
  const [isTypingCommand, setIsTypingCommand] = useState(true);
  
  const examples = [
    {
      title: "JavaScript",
      command: 'elide run --javascript -c "console.log(\'Hello from Elide!\');"',
      output: "Hello from Elide!"
    },
    {
      title: "Python",
      command: 'elide run --python -c "print(\'Blazing fast Python\')"',
      output: "Blazing fast Python"
    },
    {
      title: "TypeScript",
      command: "elide hello.ts",
      output: `Running hello.ts...
✓ Compiled successfully
Hello from TypeScript on Elide!`
    },
    {
      title: "Polyglot",
      command: "elide polyglot-example.ts",
      output: `Importing Python from TypeScript...
Python result: [1, 4, 9, 16, 25]
Cross-language execution complete`
    },
    {
      title: "API Fetch",
      command: "elide api-request.ts",
      output: `GET https://api.example.com/users
✓ 200 OK (124ms)
{
  "users": 42,
  "status": "active"
}`
    },
    {
      title: "Run Tests",
      command: "elide test",
      output: `Running test suite...
✓ auth.test.ts (3 tests)
✓ api.test.ts (5 tests)
✓ utils.test.ts (2 tests)

Tests: 10 passed, 10 total
Time: 0.89s`
    },
    {
      title: "Build",
      command: "elide build --optimize",
      output: `Building project...
✓ Bundling modules
✓ Optimizing assets
✓ Generating types

Build complete in 1.2s
Output: dist/`
    }
  ];

  // Typewriter effect
  useEffect(() => {
    setDisplayedCommand("");
    setDisplayedOutput("");
    setIsTypingCommand(true);

    const currentExample = examples[activeTab];
    let commandIndex = 0;
    let outputIndex = 0;

    // Type command first
    const commandInterval = setInterval(() => {
      if (commandIndex < currentExample.command.length) {
        setDisplayedCommand(currentExample.command.slice(0, commandIndex + 1));
        commandIndex++;
      } else {
        clearInterval(commandInterval);
        setIsTypingCommand(false);
        
        // Then type output after small delay
        setTimeout(() => {
          const outputInterval = setInterval(() => {
            if (outputIndex < currentExample.output.length) {
              setDisplayedOutput(currentExample.output.slice(0, outputIndex + 1));
              outputIndex++;
            } else {
              clearInterval(outputInterval);
            }
          }, 15);
        }, 200);
      }
    }, 40);

    return () => clearInterval(commandInterval);
  }, [activeTab]);

  return (
    <section id="terminal" className="relative py-24 px-6 md:px-12 bg-background">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
            See Elide in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Run multiple languages with a single runtime
          </p>
        </div>

        {/* Terminal Window */}
        <div className="bg-card border border-pink-500/30 rounded-lg overflow-hidden shadow-2xl shadow-pink-500/20">
          {/* Terminal Header */}
          <div className="bg-card/50 border-b border-border px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-4 text-sm text-muted-foreground font-mono">terminal</span>
            </div>
            
            {/* Language Tabs */}
            <div className="flex gap-2">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                    activeTab === index
                      ? "bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 text-pink-300 border border-pink-500/50"
                      : "text-muted-foreground hover:text-pink-300 hover:bg-pink-500/10"
                  }`}
                >
                  {example.title}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Content */}
          <div className="bg-[#0a0a0a] p-6 font-mono text-sm min-h-[250px]">
            <div className="space-y-4">
              {/* Command Line */}
              <div className="flex items-start gap-2">
                <span className="text-pink-400/60 select-none">$</span>
                <span className="text-foreground/90">
                  {displayedCommand}
                  {isTypingCommand && <span className="w-2 h-4 bg-gradient-to-b from-pink-400 to-fuchsia-500 inline-block ml-0.5 animate-pulse" />}
                </span>
              </div>
              
              {/* Output */}
              {displayedOutput && (
                <div className="pl-4 text-white whitespace-pre-line leading-relaxed">
                  {displayedOutput}
                </div>
              )}
              
              {/* Cursor */}
              {!isTypingCommand && displayedOutput === examples[activeTab].output && (
                <div className="flex items-center gap-2">
                  <span className="text-pink-400/60 select-none">$</span>
                  <span className="w-2 h-4 bg-gradient-to-b from-pink-400 to-fuchsia-500 animate-pulse" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Feature Grid Below Terminal */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-card/50 backdrop-blur-sm border border-pink-500/30 rounded-lg p-6 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/20 transition-all">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">Single Binary</h3>
            <p className="text-muted-foreground text-sm">
              One runtime for JavaScript, TypeScript, Python, and WASM. No separate installations needed.
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-fuchsia-500/30 rounded-lg p-6 hover:border-fuchsia-500/60 hover:shadow-lg hover:shadow-fuchsia-500/20 transition-all">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-2">Native Performance</h3>
            <p className="text-muted-foreground text-sm">
              Built on GraalVM for optimized execution. Competitive with Node.js and faster than CPython.
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">Polyglot Ready</h3>
            <p className="text-muted-foreground text-sm">
              Import and use code across languages seamlessly. TypeScript calling Python, and vice versa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;

