interface DemoCardProps {
  title: string;
  description: string;
  languages: string[];
  onClick: () => void;
}

const DemoCard = ({ title, description, languages, onClick }: DemoCardProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#0a0a0a] border border-white/10 rounded-lg p-6 hover:border-white/30 hover:shadow-xl hover:shadow-white/5 transition-all group text-left w-full"
    >
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        {languages.map((lang) => (
          <span
            key={lang}
            className="text-xs font-semibold px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/10 group-hover:border-pink-400/30 group-hover:text-pink-400 transition-colors"
          >
            {lang}
          </span>
        ))}
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gray-200 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 leading-relaxed mb-4 font-inter text-sm">
        {description}
      </p>
      
      <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-pink-400 transition-colors">
        <span className="font-semibold">Try Demo</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </button>
  );
};

export default DemoCard;

