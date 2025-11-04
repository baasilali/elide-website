import { useState } from "react";
import { Button } from "@/components/ui/button";

interface DemoExample {
  id: string;
  title: string;
  description: string;
  files: {
    name: string;
    language: string;
    code: string;
  }[];
  output: string;
}

interface CodeSandboxProps {
  demo: DemoExample;
}

const CodeSandbox = ({ demo }: CodeSandboxProps) => {
  const [selectedFile, setSelectedFile] = useState(0);
  const [code, setCode] = useState(demo.files[0].code);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleFileChange = (index: number) => {
    setSelectedFile(index);
    setCode(demo.files[index].code);
  };

  const handleRun = () => {
    setIsRunning(true);
    setOutput("Running...");
    
    // Simulate execution delay
    setTimeout(() => {
      setOutput(demo.output);
      setIsRunning(false);
    }, 800);
  };

  return (
    <div className="bg-[#0a0a0a]">
      <div className="grid md:grid-cols-2 divide-x divide-white/10">
        {/* Editor Panel */}
        <div className="flex flex-col">
          <div className="bg-black/30 p-3 border-b border-white/10">
            <div className="flex gap-2">
              {demo.files.map((file, index) => (
                <button
                  key={index}
                  onClick={() => handleFileChange(index)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                    selectedFile === index
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {file.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex-1 p-4 bg-[#0a0a0a]">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-[400px] bg-black/50 border border-white/10 rounded-lg p-4 font-mono text-sm text-gray-100 resize-none focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10"
              spellCheck={false}
            />
          </div>

          <div className="p-4 border-t border-white/10 bg-black/30">
            <Button
              onClick={handleRun}
              disabled={isRunning}
              className="w-full bg-white text-black font-semibold hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isRunning ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Running...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Run Code
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Output Panel */}
        <div className="flex flex-col">
          <div className="bg-black/30 p-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs font-semibold text-white uppercase tracking-wide">Output</span>
            </div>
          </div>
          
          <div className="flex-1 p-4 bg-black/50">
            <pre className="font-mono text-sm text-gray-100 whitespace-pre-wrap h-[400px] overflow-auto">
              {output || "Click 'Run Code' to see the output..."}
            </pre>
          </div>

          <div className="p-4 border-t border-white/10 bg-black/30">
            <div className="flex items-center gap-2 text-xs text-gray-400 font-inter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <span>Simulated output - Real execution coming soon!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeSandbox;

