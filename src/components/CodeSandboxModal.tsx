import { useEffect } from "react";
import CodeSandbox from "./CodeSandbox";

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

interface CodeSandboxModalProps {
  demo: DemoExample | null;
  onClose: () => void;
}

const CodeSandboxModal = ({ demo, onClose }: CodeSandboxModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (demo) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [demo, onClose]);

  if (!demo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-7xl max-h-[90vh] overflow-hidden bg-[#0a0a0a] border border-white/20 rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{demo.title}</h2>
            <p className="text-sm text-gray-400 font-inter">{demo.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        {/* Sandbox */}
        <div className="overflow-auto max-h-[calc(90vh-120px)]">
          <CodeSandbox demo={demo} />
        </div>
      </div>
    </div>
  );
};

export default CodeSandboxModal;

