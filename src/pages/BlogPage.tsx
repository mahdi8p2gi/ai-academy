import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, X } from 'lucide-react';
import { blogPosts, blogCategories } from '../data/blog';
import { useThemeStore } from '../store/useStore';

interface BlogPageProps {
  onNavigate: (page: string, id?: string) => void;
}

export default function BlogPage({ onNavigate }: BlogPageProps) {
  const { theme } = useThemeStore();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filtered = useMemo(() => {
    let result = [...blogPosts];
    if (search) {
      result = result.filter(
        (p) => p.title.includes(search) || p.excerpt.includes(search)
      );
    }
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }
    return result;
  }, [search, selectedCategory]);

  const featured = blogPosts.filter((p) => p.featured);

  return (
    <div className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-[#050714]' : 'bg-slate-50'}`}>
      {/* Header */}
      <div className={`py-16 ${theme === 'dark' ? 'bg-[#0c0f1e]' : 'bg-white'} border-b ${
        theme === 'dark' ? 'border-white/5' : 'border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className={`text-xs font-semibold tracking-widest uppercase mb-3 block ${
              theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              وبلاگ
            </span>
            <h1 className={`text-3xl sm:text-4xl font-black mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              مقالات و آموزش‌های AI
            </h1>
            <p className={`text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              جدیدترین مطالب در حوزه هوش مصنوعی به زبان فارسی
            </p>
          </motion.div>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-400'
              }`} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="جستجو در مقالات..."
                className={`w-full pr-12 pl-5 py-4 rounded-2xl border text-sm focus:outline-none transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-white placeholder-slate-500 focus:border-indigo-500/50'
                    : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-400 shadow-sm'
                }`}
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute left-4 top-1/2 -translate-y-1/2">
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Featured posts */}
        {!search && selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              مقالات ویژه
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featured.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  onClick={() => onNavigate('blog-post', post.id)}
                  className={`group rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-[#0f1221] border-white/5 hover:border-indigo-500/30'
                      : 'bg-white border-slate-200 hover:border-indigo-300'
                  } hover:shadow-2xl hover:shadow-indigo-500/10`}
                >
                  <div className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center text-6xl relative overflow-hidden`}>
                    <span className="relative z-10">{post.icon}</span>
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.4) 0%, transparent 60%)'
                    }} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                        theme === 'dark' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
                      }`}>
                        {post.categoryLabel}
                      </span>
                      <div className={`flex items-center gap-1 text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className={`text-lg font-bold mb-2 group-hover:text-indigo-500 transition-colors duration-200 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {post.title}
                    </h3>
                    <p className={`text-sm leading-6 mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                        {post.author[0]}
                      </div>
                      <div>
                        <p className={`text-xs font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                          {post.author}
                        </p>
                        <p className={`text-[10px] ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                          {post.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {blogCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : theme === 'dark'
                  ? 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              onClick={() => onNavigate('blog-post', post.id)}
              className={`group rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-[#0f1221] border-white/5 hover:border-indigo-500/30'
                  : 'bg-white border-slate-200 hover:border-indigo-300'
              } hover:shadow-xl hover:shadow-indigo-500/10`}
            >
              <div className={`h-36 bg-gradient-to-br ${post.gradient} flex items-center justify-center text-4xl`}>
                {post.icon}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[11px] px-2 py-0.5 rounded-lg font-medium ${
                    theme === 'dark' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
                  }`}>
                    {post.categoryLabel}
                  </span>
                  <div className={`flex items-center gap-1 text-[11px] ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className={`font-bold text-sm leading-6 mb-2 group-hover:text-indigo-500 transition-colors duration-200 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {post.title}
                </h3>
                <p className={`text-xs leading-5 mb-4 line-clamp-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-bold">
                    {post.author[0]}
                  </div>
                  <span className={`text-[11px] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    {post.author} · {post.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
