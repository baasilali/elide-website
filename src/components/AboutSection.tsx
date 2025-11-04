const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen bg-[#0a0a0a] py-24 px-6 md:px-12">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 via-pink-500 to-rose-400 bg-clip-text text-transparent">
            One Runtime, Every Language
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elide combines the best of all worlds: the reach of JavaScript, the safety of TypeScript, 
            the simplicity of Python, and the power of Kotlin — all in a single, blazing-fast runtime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
              What is Elide?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Elide is an <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent font-semibold">all-in-one, AI-native polyglot runtime</span> powered 
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

          <div className="bg-gradient-to-br from-pink-500/10 via-fuchsia-500/10 to-purple-500/10 border border-pink-500/30 rounded-lg p-8 shadow-lg shadow-pink-500/20">
            <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-300 to-fuchsia-300 bg-clip-text text-transparent">Core Capabilities</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 mt-2 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-foreground mb-1">True Polyglot Execution</h5>
                  <p className="text-muted-foreground">Mix JavaScript, TypeScript, Python, and Kotlin seamlessly. Import across language boundaries with zero friction.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-400 mt-2 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Native Performance</h5>
                  <p className="text-muted-foreground">800K+ requests/second on Linux. Competitive with Node.js, faster than CPython, powered by GraalVM JIT.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-400 mt-2 flex-shrink-0" />
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
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">Built For Real-World Use Cases</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card/50 border border-pink-500/30 rounded-lg p-6 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/20 transition-all">
              <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Web Applications</h4>
              <p className="text-muted-foreground text-sm">
                Built-in high-performance server with HTTP/2, HTTP/3, and WebSockets. Deploy full-stack apps in one binary.
              </p>
            </div>
            
            <div className="bg-card/50 border border-fuchsia-500/30 rounded-lg p-6 hover:border-fuchsia-500/60 hover:shadow-lg hover:shadow-fuchsia-500/20 transition-all">
              <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">CLI Tools</h4>
              <p className="text-muted-foreground text-sm">
                Ship native binaries or scripts. Run TypeScript directly with no build step. Support for LSP and MCP protocols.
              </p>
            </div>
            
            <div className="bg-card/50 border border-rose-500/30 rounded-lg p-6 hover:border-rose-500/60 hover:shadow-lg hover:shadow-rose-500/20 transition-all">
              <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">AI Applications</h4>
              <p className="text-muted-foreground text-sm">
                Embed local LLMs directly in your apps. Stream inference results. Download and cache models from HuggingFace.
              </p>
            </div>
            
            <div className="bg-card/50 border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
              <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Build Systems</h4>
              <p className="text-muted-foreground text-sm">
                Compile to JVM bytecode, build native images, create container images — all without Docker or complex tooling.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/30 rounded-lg p-6 hover:border-pink-500/60 hover:shadow-xl hover:shadow-pink-500/30 transition-all">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-3">800K+</div>
            <h4 className="text-xl font-semibold mb-2 text-foreground">Requests Per Second</h4>
            <p className="text-muted-foreground">
              Independently benchmarked by TechEmpower. Native performance powered by GraalVM with non-blocking I/O.
            </p>
          </div>

          <div className="bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10 border border-fuchsia-500/30 rounded-lg p-6 hover:border-fuchsia-500/60 hover:shadow-xl hover:shadow-fuchsia-500/30 transition-all">
            <div className="text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-3">4+</div>
            <h4 className="text-xl font-semibold mb-2 text-foreground">Languages Supported</h4>
            <p className="text-muted-foreground">
              JavaScript, TypeScript, Python, Kotlin, and more. Mix them freely with full interop and shared runtime state.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/30 transition-all">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-3">1</div>
            <h4 className="text-xl font-semibold mb-2 text-foreground">Binary</h4>
            <p className="text-muted-foreground">
              No separate runtimes or interpreters. Everything you need ships in a single, optimized native binary.
            </p>
          </div>
        </div>

        {/* Open Source Section */}
        <div className="bg-gradient-to-br from-pink-500/10 via-fuchsia-500/10 to-purple-500/10 border border-pink-500/40 rounded-xl p-12 text-center shadow-2xl shadow-pink-500/20">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-300 bg-clip-text text-transparent">Open Source & Community Driven</h3>
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
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-fuchsia-600 transition-all shadow-lg shadow-pink-500/30"
            >
              View on GitHub
            </a>
            <a 
              href="https://elide.dev/discord" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-card border border-pink-500/50 text-foreground font-semibold rounded-lg hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20 transition-all"
            >
              Join Discord
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Check out our <a href="https://docs.elide.dev" className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent underline hover:no-underline">contributing guide</a> to get started
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
