import { useState } from "react";
import Navigation from "@/components/Navigation";
import BlogPost from "@/components/BlogPost";
import DemoCard from "@/components/DemoCard";
import CodeSandboxModal from "@/components/CodeSandboxModal";

interface DemoExample {
  id: string;
  title: string;
  description: string;
  languages: string[];
  files: {
    name: string;
    language: string;
    code: string;
  }[];
  output: string;
}

const Blog = () => {
  const [selectedDemo, setSelectedDemo] = useState<DemoExample | null>(null);
  // Demo examples with polyglot code
  const demoExamples: DemoExample[] = [
    {
      id: "js-python-interop",
      title: "Greetings from JS + Python",
      description: "Import and call Python functions directly from JavaScript with zero serialization overhead.",
      languages: ["JavaScript", "Python"],
      files: [
        {
          name: "sample.mjs",
          language: "javascript",
          code: `/**
 * Elide Polyglot Demo: JavaScript + Python Interop
 * 
 * This example shows how to import and call Python functions
 * directly from JavaScript with zero serialization overhead.
 */

// Import the Python module just like any JavaScript module
// Elide handles the language boundary transparently
import sample from "./greeting.py"

// Call the Python function as if it were JavaScript
// No JSON serialization, no separate processes - just works!
const message = sample.greeting("Elide");
console.log(message);

// Mix JavaScript code seamlessly with Python calls
const answer = 42;
console.log(\`The answer is \${answer}\`);

// Benefits:
// ✓ No build step required
// ✓ Shared memory between languages
// ✓ Single runtime (no separate Python interpreter)
// ✓ Native performance with GraalVM JIT`
        },
        {
          name: "greeting.py",
          language: "python",
          code: `"""
Python module that can be imported by JavaScript

This Python code runs on GraalVM's Python implementation,
allowing seamless interop with JavaScript and other languages.
"""

def greeting(name="World"):
    """
    Generate a greeting message.
    
    Args:
        name (str): The name to greet
        
    Returns:
        str: A greeting message
    """
    return f"Hello from Python, {name}!"

# You can use standard Python libraries
import sys

# This will be executed when the module is imported
print(f"Running on Python {sys.version_info.major}.{sys.version_info.minor}")`
        }
      ],
      output: `Hello from Python, Elide!
The answer is 42`
    },
    {
      id: "typescript-python",
      title: "TypeScript + Python",
      description: "Use TypeScript with full type safety while calling Python code - no build step required!",
      languages: ["TypeScript", "Python"],
      files: [
        {
          name: "app.ts",
          language: "typescript",
          code: `/**
 * TypeScript + Python Integration Demo
 * 
 * Run TypeScript directly with no build step, while calling
 * Python functions with full type safety!
 */

// Import Python module in TypeScript
// Elide provides type hints for better IDE support
import math from "./math.py"

// TypeScript type checking works as expected
const numbers: number[] = [1, 2, 3, 4, 5];

// Call Python function with TypeScript type annotations
// The result is properly typed as a number
const result: number = math.calculate_sum(numbers);
console.log(\`Sum: \${result}\`);

// Use TypeScript interfaces and features
interface Stats {
  sum: number;
  average: number;
}

// Calculate statistics using both languages
const stats: Stats = {
  sum: result,  // From Python
  average: result / numbers.length  // TypeScript calculation
};

console.log(\`Average: \${stats.average}\`);

// Key features demonstrated:
// ✓ No tsc compilation needed - run TypeScript directly
// ✓ Full type checking at development time
// ✓ Seamless Python function calls with type safety
// ✓ Best of both worlds: Python's simplicity + TypeScript's safety`
        },
        {
          name: "math.py",
          language: "python",
          code: `"""
Python Math Utilities Module

These functions can be called from TypeScript with
full type safety and zero overhead.
"""

def calculate_sum(numbers):
    """
    Calculate the sum of a list of numbers.
    
    Args:
        numbers (list): List of numbers to sum
        
    Returns:
        int/float: The sum of all numbers
    """
    return sum(numbers)

def calculate_average(numbers):
    """
    Calculate the average of a list of numbers.
    
    Args:
        numbers (list): List of numbers to average
        
    Returns:
        float: The average value, or 0 if list is empty
    """
    if len(numbers) == 0:
        return 0
    return sum(numbers) / len(numbers)`
        }
      ],
      output: `Sum: 15
Average: 3`
    },
    {
      id: "http-server",
      title: "HTTP Server",
      description: "Build a high-performance HTTP server with Elide's built-in server capabilities.",
      languages: ["JavaScript"],
      files: [
        {
          name: "server.mjs",
          language: "javascript",
          code: `/**
 * High-Performance HTTP Server with Elide
 * 
 * Elide includes a built-in HTTP server powered by Netty
 * that can handle 800K+ requests per second on Linux.
 * 
 * This server supports:
 * - HTTP/1.1, HTTP/2, and HTTP/3
 * - WebSockets
 * - Server-Sent Events (SSE)
 * - Non-blocking I/O
 */

// Define server configuration
const server = {
  port: 8080,
  
  // Request handler using modern Web APIs
  // Similar to Deno and Bun's approach
  async handler(req) {
    // Parse the request URL
    const url = new URL(req.url);
    
    // Route: Homepage
    if (url.pathname === '/') {
      // Return a simple text response
      return new Response('Hello from Elide!', {
        headers: { 'Content-Type': 'text/plain' }
      });
    }
    
    // Route: API endpoint returning JSON
    if (url.pathname === '/api/data') {
      // Use Response.json() for automatic serialization
      return Response.json({
        message: 'API Response',
        timestamp: Date.now(),
        runtime: 'Elide',
        version: '1.0.0-beta10'
      });
    }
    
    // Default: 404 Not Found
    return new Response('Not Found', { 
      status: 404,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
};

// Start the server
console.log(\`🚀 Server starting on port \${server.port}...\`);
console.log('📝 Try these commands:');
console.log('   curl http://localhost:8080/');
console.log('   curl http://localhost:8080/api/data');`
        }
      ],
      output: `🚀 Server starting on port 8080...
📝 Try these commands:
   curl http://localhost:8080/
   curl http://localhost:8080/api/data

> curl http://localhost:8080/
Hello from Elide!

> curl http://localhost:8080/api/data
{"message":"API Response","timestamp":1699123456789,"runtime":"Elide","version":"1.0.0-beta10"}`

    },
    {
      id: "polyglot-power",
      title: "Full Polyglot Power",
      description: "Mix JavaScript, Python, and Kotlin in a single application - showcasing Elide's true power.",
      languages: ["JavaScript", "Python", "Kotlin"],
      files: [
        {
          name: "main.mjs",
          language: "javascript",
          code: `/**
 * Full Polyglot Application Demo
 * 
 * This example demonstrates Elide's true power: mixing
 * JavaScript, Python, and Kotlin in a single application.
 * 
 * All languages share:
 * - Same memory space (no serialization)
 * - Same garbage collector
 * - Same JIT compiler optimizations
 */

// Import Python module for data analytics
import analytics from "./analytics.py"

// Import Kotlin module for utility functions
import utils from "./utils.kt"

console.log("=== Elide Polyglot Demo ===\\n");

// Sample data to analyze
const data = [100, 200, 150, 300, 250];

// Use Python for data processing
// Python excels at data manipulation
const stats = analytics.analyze(data);

console.log("📊 Python Analytics:");
console.log(\`  Average: \${stats.average}\`);
console.log(\`  Max: \${stats.max}\`);
console.log(\`  Min: \${stats.min}\`);
console.log(\`  Count: \${stats.count}\`);

// Use Kotlin for string formatting
// Kotlin provides strong typing and excellent string handling
const formatted = utils.formatCurrency(stats.average);
const percentChange = utils.formatPercentage(0.15);

console.log(\`\\n💰 Kotlin Formatter:\`);
console.log(\`  Average as currency: \${formatted}\`);
console.log(\`  Sample percentage: \${percentChange}\`);

console.log("\\n✨ Three languages, one runtime!");
console.log("   No serialization, no IPC, just pure performance.");`
        },
        {
          name: "analytics.py",
          language: "python",
          code: `"""
Python Data Analytics Module

Python is excellent for data processing and analysis.
This module demonstrates using Python's built-in functions
for statistical calculations.
"""

def analyze(data):
    """
    Analyze a list of numerical data.
    
    This function leverages Python's built-in functions
    like sum(), max(), min(), and len() which are highly
    optimized in GraalPython.
    
    Args:
        data (list): List of numbers to analyze
        
    Returns:
        dict: Dictionary containing statistical measures
    """
    return {
        'average': sum(data) / len(data),
        'max': max(data),
        'min': min(data),
        'count': len(data)
    }

# You could also use NumPy, Pandas, etc.
# All Python libraries are supported!`
        },
        {
          name: "utils.kt",
          language: "kotlin",
          code: `/**
 * Kotlin Utility Functions
 * 
 * Kotlin provides excellent type safety and expressive syntax
 * for utility functions. These can be called from JavaScript
 * or any other language in the Elide runtime.
 */

/**
 * Format a number as USD currency.
 * 
 * @param amount The amount to format
 * @return Formatted currency string (e.g., "$200.00")
 */
fun formatCurrency(amount: Double): String {
    return "$%.2f".format(amount)
}

/**
 * Format a decimal as a percentage.
 * 
 * @param value The decimal value (0.15 = 15%)
 * @return Formatted percentage string (e.g., "15.0%")
 */
fun formatPercentage(value: Double): String {
    return "%.1f%%".format(value * 100)
}`
        }
      ],
      output: `=== Elide Polyglot Demo ===

📊 Python Analytics:
  Average: 200
  Max: 300
  Min: 100
  Count: 5

💰 Kotlin Formatter:
  Average as currency: $200.00
  Sample percentage: 15.0%

✨ Three languages, one runtime!
   No serialization, no IPC, just pure performance.`
    }
  ];

  // Blog posts content
  const blogPosts = [
    {
      title: "Elide 1.0.0-beta10 Release",
      date: "November 2024",
      category: "Release",
      excerpt: "We're excited to announce Elide 1.0.0-beta10! This release brings significant performance improvements, enhanced polyglot capabilities, and better TypeScript support. Try it now with our new interactive demos.",
      author: "Elide Team",
      readTime: "5 min read"
    },
    {
      title: "Getting Started with Elide",
      date: "October 2024",
      category: "Tutorial",
      excerpt: "Learn how to install Elide, run your first polyglot application, and understand the core concepts that make Elide unique. From zero to hero in 10 minutes.",
      author: "Elide Team",
      readTime: "10 min read"
    },
    {
      title: "Polyglot Programming Made Easy",
      date: "October 2024",
      category: "Guide",
      excerpt: "Discover how Elide's polyglot architecture enables seamless interoperability between JavaScript, TypeScript, Python, and Kotlin. No serialization, shared memory, single runtime.",
      author: "Elide Team",
      readTime: "8 min read"
    },
    {
      title: "Building High-Performance APIs with Elide",
      date: "September 2024",
      category: "Tutorial",
      excerpt: "Learn how to leverage Elide's native HTTP server capabilities to build APIs that handle 800K+ requests per second. Independently benchmarked by TechEmpower.",
      author: "Elide Team",
      readTime: "12 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CodeSandboxModal demo={selectedDemo} onClose={() => setSelectedDemo(null)} />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-6 md:px-12 bg-gradient-to-b from-background to-[#0a0a0a]">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Blog & Demos
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-inter">
              Stay updated with the latest Elide news, tutorials, and try out interactive demos right in your browser.
            </p>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16 px-6 md:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Announcements & Articles
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto font-inter">
                News, tutorials, and insights from the Elide team.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <BlogPost key={index} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demos Section */}
        <section className="py-16 px-6 md:px-12 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Interactive Demos
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto font-inter">
                Explore Elide's polyglot capabilities with detailed, commented examples. Click a demo to view the code with IDE-like syntax highlighting.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {demoExamples.map((demo) => (
                <DemoCard
                  key={demo.id}
                  title={demo.title}
                  description={demo.description}
                  languages={demo.languages}
                  onClick={() => setSelectedDemo(demo)}
                />
              ))}
            </div>

            <div className="p-6 bg-black/30 border border-white/10 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Want Real Execution?</h3>
                  <p className="text-gray-400 font-inter">
                    These demos currently simulate output for demonstration purposes. We're working on integrating real Elide execution via WebAssembly or server-side API. 
                    Meanwhile, <a href="https://docs.elide.dev" className="text-white hover:text-pink-400 underline transition-colors">install Elide locally</a> to run these examples for real!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 md:px-12 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Build with Elide?
            </h2>
            <p className="text-lg text-gray-400 mb-8 font-inter">
              Install Elide and start building polyglot applications today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all"
              >
                Get Started
              </a>
              <a
                href="https://docs.elide.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:border-white/40 hover:bg-white/5 transition-all"
              >
                View Documentation
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;

