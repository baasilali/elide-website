const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen bg-[#0a0a0a] py-24 px-6 md:px-12">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            One Runtime, Every Language
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elide combines the best of all worlds: the reach of JavaScript, the safety of TypeScript, 
            the simplicity of Python, and the power of Kotlin — all in a single, blazing-fast runtime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              What is Elide?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Elide is an <span className="text-foreground font-semibold">all-in-one, AI-native polyglot runtime</span> powered 
              by GraalVM. Think of it as Node.js or Python, but with superpowers: run JavaScript, TypeScript, Python, and Kotlin 
              in a single binary, with seamless interoperability between languages.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              No build steps. No separate installations. No compromise on performance. Import Python libraries from TypeScript, 
              call Kotlin from JavaScript, or mix all languages in one project — Elide handles the complexity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Built on battle-tested technology and independently benchmarked by TechEmpower, Elide delivers 
              native-level performance while maintaining the developer experience you love.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h4 className="text-2xl font-bold mb-6 text-foreground">Core Capabilities</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground/60 mt-2 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-foreground mb-1">True Polyglot Execution</h5>
                  <p className="text-muted-foreground">Mix JavaScript, TypeScript, Python, and Kotlin seamlessly. Import across language boundaries with zero friction.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground/60 mt-2 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Native Performance</h5>
                  <p className="text-muted-foreground">800K+ requests/second on Linux. Competitive with Node.js, faster than CPython, powered by GraalVM JIT.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground/60 mt-2 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-foreground mb-1">AI-Native Runtime</h5>
                  <p className="text-muted-foreground">Built-in AI APIs with llama.cpp integration. Run local LLMs, integrate HuggingFace models, all from your code.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Built For Real-World Use Cases</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card/50 border border-border rounded-lg p-6 hover:border-foreground/30 transition-colors">
              <h4 className="text-xl font-semibold mb-3 text-foreground">Web Applications</h4>
              <p className="text-muted-foreground text-sm">
                Built-in high-performance server with HTTP/2, HTTP/3, and WebSockets. Deploy full-stack apps in one binary.
              </p>
            </div>
            
            <div className="bg-card/50 border border-border rounded-lg p-6 hover:border-foreground/30 transition-colors">
              <h4 className="text-xl font-semibold mb-3 text-foreground">CLI Tools</h4>
              <p className="text-muted-foreground text-sm">
                Ship native binaries or scripts. Run TypeScript directly with no build step. Support for LSP and MCP protocols.
              </p>
            </div>
            
            <div className="bg-card/50 border border-border rounded-lg p-6 hover:border-foreground/30 transition-colors">
              <h4 className="text-xl font-semibold mb-3 text-foreground">AI Applications</h4>
              <p className="text-muted-foreground text-sm">
                Embed local LLMs directly in your apps. Stream inference results. Download and cache models from HuggingFace.
              </p>
            </div>
            
            <div className="bg-card/50 border border-border rounded-lg p-6 hover:border-foreground/30 transition-colors">
              <h4 className="text-xl font-semibold mb-3 text-foreground">Build Systems</h4>
              <p className="text-muted-foreground text-sm">
                Compile to JVM bytecode, build native images, create container images — all without Docker or complex tooling.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card border border-border rounded-lg p-6 hover:border-foreground/30 transition-colors">
            <div className="text-4xl font-bold text-foreground mb-3">800K+</div>
            <h4 className="text-xl font-semibold mb-2 text-foreground">Requests Per Second</h4>
            <p className="text-muted-foreground">
              Independently benchmarked by TechEmpower. Native performance powered by GraalVM with non-blocking I/O.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-foreground/30 transition-colors">
            <div className="text-4xl font-bold text-foreground mb-3">4+</div>
            <h4 className="text-xl font-semibold mb-2 text-foreground">Languages Supported</h4>
            <p className="text-muted-foreground">
              JavaScript, TypeScript, Python, Kotlin, and more. Mix them freely with full interop and shared runtime state.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-foreground/30 transition-colors">
            <div className="text-4xl font-bold text-foreground mb-3">1</div>
            <h4 className="text-xl font-semibold mb-2 text-foreground">Binary</h4>
            <p className="text-muted-foreground">
              No separate runtimes or interpreters. Everything you need ships in a single, optimized native binary.
            </p>
          </div>
        </div>

        {/* Open Source Section */}
        <div className="bg-gradient-to-br from-card/80 to-card/40 border border-border rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 text-foreground">Open Source & Community Driven</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Elide is fully open source under the MIT license. We believe in building in public and welcome 
            contributions from developers of all skill levels. Whether it's code, documentation, bug reports, 
            or feature ideas — your contributions help make Elide better for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://github.com/elide-dev/elide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-colors"
            >
              View on GitHub
            </a>
            <a 
              href="https://elide.dev/discord" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-card border border-border text-foreground font-semibold rounded-lg hover:border-foreground/50 transition-colors"
            >
              Join Discord
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Check out our <a href="https://docs.elide.dev" className="text-foreground underline hover:no-underline">contributing guide</a> to get started
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
