import React from 'react';

const AboutSection = () => {
  const [selectedMetric, setSelectedMetric] = React.useState<'throughput' | 'startup' | 'memory'>('throughput');
  const [hoveredRuntime, setHoveredRuntime] = React.useState<string | null>(null);

  const performanceData = {
    throughput: {
      title: 'Server Throughput',
      unit: 'K requests/sec',
      description: 'Higher is better. Measured with plaintext HTTP responses on Linux.',
      runtimes: [
        { name: 'Elide', value: 800, color: 'from-pink-400/80 to-pink-500/60', description: 'GraalVM + Netty native transports' },
        { name: 'Bun', value: 260, color: 'from-white/70 to-white/50', description: 'JavaScriptCore + custom HTTP server' },
        { name: 'Node.js', value: 110, color: 'from-white/50 to-white/30', description: 'V8 + libuv' },
        { name: 'Deno', value: 105, color: 'from-white/30 to-white/20', description: 'V8 + Tokio' },
      ]
    },
    startup: {
      title: 'Startup Time',
      unit: 'ms',
      description: 'Lower is better. Time to execute a simple "Hello World" script.',
      runtimes: [
        { name: 'Bun', value: 25, color: 'from-white/90 to-white/70', description: 'JavaScriptCore + fast startup' },
        { name: 'Elide', value: 35, color: 'from-pink-400/80 to-pink-500/60', description: 'GraalVM SubstrateVM' },
        { name: 'Node.js', value: 45, color: 'from-white/50 to-white/30', description: 'V8 JIT compilation' },
        { name: 'Deno', value: 50, color: 'from-white/30 to-white/20', description: 'V8 + TypeScript checks' },
      ]
    },
    memory: {
      title: 'Memory Footprint',
      unit: 'MB',
      description: 'Lower is better. Resident memory for a basic HTTP server.',
      runtimes: [
        { name: 'Bun', value: 35, color: 'from-white/90 to-white/70', description: 'Optimized for low memory' },
        { name: 'Elide', value: 45, color: 'from-pink-400/80 to-pink-500/60', description: 'Native image footprint' },
        { name: 'Deno', value: 65, color: 'from-white/50 to-white/30', description: 'V8 heap + Rust runtime' },
        { name: 'Node.js', value: 75, color: 'from-white/30 to-white/20', description: 'V8 heap overhead' },
      ]
    }
  };

  const currentData = performanceData[selectedMetric];
  const maxValue = Math.max(...currentData.runtimes.map(r => r.value));

  return (
    <section id="about" className="relative min-h-screen bg-[#0a0a0a] py-24 px-6 md:px-12">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 via-pink-500 to-rose-400 bg-clip-text text-transparent">
            One Runtime, Every Language
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-inter">
            Elide combines the best of all worlds: the reach of JavaScript, the safety of TypeScript, 
            the simplicity of Python, and the power of Kotlin — all in a single, blazing-fast runtime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
              What is Elide?
            </h3>
            <p className="text-lg text-white leading-relaxed mb-4 font-inter">
              Elide is an <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent font-semibold">all-in-one, AI-native polyglot runtime</span> powered 
              by GraalVM. Think of it as Node.js or Python, but with superpowers: run JavaScript, TypeScript, Python, and Kotlin 
              in a single binary, with seamless interoperability between languages.
            </p>
            <p className="text-lg text-white leading-relaxed mb-4 font-inter">
              No build steps. No separate installations. No compromise on performance. Import Python libraries from TypeScript, 
              call Kotlin from JavaScript, or mix all languages in one project — Elide handles the complexity.
            </p>
            <p className="text-lg text-white leading-relaxed font-inter">
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
                  <h5 className="font-semibold text-white mb-1">True Polyglot Execution</h5>
                  <p className="text-white font-inter">Mix JavaScript, TypeScript, Python, and Kotlin seamlessly. Import across language boundaries with zero friction.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-400 mt-2 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white mb-1">Native Performance</h5>
                  <p className="text-white font-inter">800K+ requests/second on Linux. Competitive with Node.js, faster than CPython, powered by GraalVM JIT.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-400 mt-2 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white mb-1">AI-Native Runtime</h5>
                  <p className="text-white font-inter">Built-in AI APIs with llama.cpp integration. Run local LLMs, integrate HuggingFace models, all from your code.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Performance Comparison Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-4 text-center text-white">Performance Comparison</h3>
          <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto font-inter">
            Elide delivers exceptional performance across key metrics. Select a metric below to compare.
          </p>

          {/* Metric Selector */}
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedMetric('throughput')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedMetric === 'throughput'
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              Throughput
            </button>
            <button
              onClick={() => setSelectedMetric('startup')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedMetric === 'startup'
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              Startup Time
            </button>
            <button
              onClick={() => setSelectedMetric('memory')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedMetric === 'memory'
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              Memory
            </button>
          </div>

          {/* Chart Container */}
          <div className="bg-transparent border border-white/10 rounded-xl p-8">
            <div className="mb-6">
              <h4 className="text-xl font-bold text-white mb-2">{currentData.title}</h4>
              <p className="text-sm text-gray-400 font-inter">
                {selectedMetric === 'throughput' && (
                  <><span className="text-pink-400">Higher is better.</span> Measured with plaintext HTTP responses on Linux.</>
                )}
                {selectedMetric === 'startup' && (
                  <><span className="text-pink-400">Lower is better.</span> Time to execute a simple "Hello World" script.</>
                )}
                {selectedMetric === 'memory' && (
                  <><span className="text-pink-400">Lower is better.</span> Resident memory for a basic HTTP server.</>
                )}
              </p>
            </div>

            {/* Bar Chart */}
            <div className="space-y-4">
              {currentData.runtimes.map((runtime, index) => (
                <div
                  key={runtime.name}
                  className="group"
                  onMouseEnter={() => setHoveredRuntime(runtime.name)}
                  onMouseLeave={() => setHoveredRuntime(null)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right">
                      <span className={`font-semibold ${runtime.name === 'Elide' ? 'text-pink-400' : 'text-white'}`}>{runtime.name}</span>
                    </div>
                    <div className="flex-1 relative">
                      <div className="h-12 bg-white/5 rounded-lg overflow-hidden relative">
                        <div
                          className={`h-full bg-gradient-to-r ${runtime.color} transition-all duration-700 ease-out flex items-center justify-end pr-4`}
                          style={{
                            width: `${(runtime.value / maxValue) * 100}%`,
                            transitionDelay: `${index * 100}ms`
                          }}
                        >
                          <span className="text-white font-bold text-sm">
                            {runtime.value}{currentData.unit === 'ms' ? ' ms' : currentData.unit === 'MB' ? ' MB' : ''}
                          </span>
                        </div>
                      </div>
                      
                      {/* Hover Tooltip */}
                      {hoveredRuntime === runtime.name && (
                        <div className="absolute left-0 -top-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-sm text-white whitespace-nowrap z-10 shadow-xl">
                          {runtime.description}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Source Note */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-xs text-gray-500 text-center font-inter">
                {selectedMetric === 'throughput' && 'Source: Elide internal benchmarks with plaintext HTTP responses. Independently verified by TechEmpower.'}
                {selectedMetric === 'startup' && 'Source: Hyperfine benchmarks averaging 200 warmup runs and 200 test runs per runtime.'}
                {selectedMetric === 'memory' && 'Source: RSS memory usage measured during HTTP server operation with htop.'}
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">Built For Real-World Use Cases</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card/50 border border-pink-500/30 rounded-lg p-6 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/20 transition-all">
              <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">Web Applications</h4>
              <p className="text-white text-sm font-inter">
                Built-in high-performance server with HTTP/2, HTTP/3, and WebSockets. Deploy full-stack apps in one binary.
              </p>
            </div>
            
            <div className="bg-card/50 border border-pink-500/30 rounded-lg p-6 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/20 transition-all">
              <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">CLI Tools</h4>
              <p className="text-white text-sm font-inter">
                Ship native binaries or scripts. Run TypeScript directly with no build step. Support for LSP and MCP protocols.
              </p>
            </div>
            
            <div className="bg-card/50 border border-pink-500/30 rounded-lg p-6 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/20 transition-all">
              <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">AI Applications</h4>
              <p className="text-white text-sm font-inter">
                Embed local LLMs directly in your apps. Stream inference results. Download and cache models from HuggingFace.
              </p>
            </div>
            
            <div className="bg-card/50 border border-pink-500/30 rounded-lg p-6 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/20 transition-all">
              <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">Build Systems</h4>
              <p className="text-white text-sm font-inter">
                Compile to JVM bytecode, build native images, create container images — all without Docker or complex tooling.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 border border-pink-500/30 rounded-lg p-6 hover:border-pink-500/60 hover:shadow-xl hover:shadow-pink-500/30 transition-all">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent mb-3">800K+</div>
            <h4 className="text-xl font-semibold mb-2 text-white">Requests Per Second</h4>
            <p className="text-white font-inter">
              Independently benchmarked by TechEmpower. Native performance powered by GraalVM with non-blocking I/O.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 border border-pink-500/30 rounded-lg p-6 hover:border-pink-500/60 hover:shadow-xl hover:shadow-pink-500/30 transition-all">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent mb-3">4+</div>
            <h4 className="text-xl font-semibold mb-2 text-white">Languages Supported</h4>
            <p className="text-white font-inter">
              JavaScript, TypeScript, Python, Kotlin, and more. Mix them freely with full interop and shared runtime state.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 border border-pink-500/30 rounded-lg p-6 hover:border-pink-500/60 hover:shadow-xl hover:shadow-pink-500/30 transition-all">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent mb-3">1</div>
            <h4 className="text-xl font-semibold mb-2 text-white">Binary</h4>
            <p className="text-white font-inter">
              No separate runtimes or interpreters. Everything you need ships in a single, optimized native binary.
            </p>
          </div>
        </div>

        {/* Open Source Section */}
        <div className="bg-gradient-to-br from-pink-500/10 via-fuchsia-500/10 to-purple-500/10 border border-pink-500/40 rounded-xl p-12 text-center shadow-2xl shadow-pink-500/20">
          <div className="relative inline-block mb-4">
            {/* GitHub Sticker Logo */}
            <div className="absolute -top-6 -right-12 rotate-12 opacity-20 hover:opacity-30 transition-opacity">
              <svg 
                width="80" 
                height="80" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]"
              >
                <path 
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" 
                  fill="url(#github-gradient)"
                />
                <defs>
                  <linearGradient id="github-gradient" x1="2" y1="2" x2="22" y2="22">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#d946ef" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="relative text-3xl font-bold bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-300 bg-clip-text text-transparent">Open Source & Community Driven</h3>
          </div>
          <p className="text-lg text-white max-w-3xl mx-auto mb-8 font-inter">
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
              className="px-8 py-3 bg-card border border-pink-500/50 text-white font-semibold rounded-lg hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20 transition-all"
            >
              Join Discord
            </a>
          </div>
          <p className="text-sm text-white mt-6 font-inter">
            Check out our <a href="https://docs.elide.dev" className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent underline hover:no-underline">contributing guide</a> to get started
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
