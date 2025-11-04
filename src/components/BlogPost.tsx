interface BlogPostProps {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  author?: string;
  readTime?: string;
}

const BlogPost = ({ title, date, category, excerpt, author, readTime }: BlogPostProps) => {
  return (
    <article className="bg-[#0a0a0a] border border-white/10 rounded-lg p-6 hover:border-white/20 hover:shadow-xl hover:shadow-white/5 transition-all group">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide group-hover:text-pink-400 transition-colors">
          {category}
        </span>
        <span className="text-xs text-gray-600">•</span>
        <span className="text-xs text-gray-500">{date}</span>
        {readTime && (
          <>
            <span className="text-xs text-gray-600">•</span>
            <span className="text-xs text-gray-500">{readTime}</span>
          </>
        )}
      </div>
      
      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 leading-relaxed mb-4 font-inter">
        {excerpt}
      </p>
      
      <div className="flex items-center justify-between">
        {author && (
          <span className="text-sm text-gray-500 font-inter">By {author}</span>
        )}
        <button className="text-sm font-semibold text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2 group-hover:gap-3">
          Read More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </article>
  );
};

export default BlogPost;

