import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { courses, categories } from '../data/courses';
import CourseCard from '../components/shared/CourseCard';
import { useThemeStore } from '../store/useStore';

interface CoursesPageProps {
  onNavigate: (page: string, id?: string) => void;
}

const sortOptions = [
  { value: 'popular', label: 'محبوب‌ترین' },
  { value: 'newest', label: 'جدیدترین' },
  { value: 'price-low', label: 'ارزان‌ترین' },
  { value: 'price-high', label: 'گران‌ترین' },
  { value: 'rating', label: 'بهترین امتیاز' },
];

export default function CoursesPage({ onNavigate }: CoursesPageProps) {
  const { theme } = useThemeStore();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');


  const filtered = useMemo(() => {
    let result = [...courses];

    if (search) {
      result = result.filter(
        (c) =>
          c.title.includes(search) ||
          c.description.includes(search) ||
          c.instructor.includes(search)
      );
    }

    if (selectedCategory !== 'all') {
      result = result.filter((c) => c.category === selectedCategory);
    }

    switch (sortBy) {
      case 'popular':
        result.sort((a, b) => b.studentCount - a.studentCount);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [search, selectedCategory, sortBy]);

  return (
    <div className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-[#050714]' : 'bg-slate-50'}`}>
      {/* Hero */}
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
            <h1 className={`text-3xl sm:text-4xl font-black mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              دوره‌های آموزشی
            </h1>
            <p className={`text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              بیش از ۱۰۰ دوره تخصصی هوش مصنوعی به زبان فارسی
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
                placeholder="جستجو در دوره‌ها..."
                className={`w-full pr-12 pl-5 py-4 rounded-2xl border text-sm focus:outline-none transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-white placeholder-slate-500 focus:border-indigo-500/50'
                    : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-400 shadow-sm'
                }`}
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                >
                  <X className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-400'}`} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                    : theme === 'dark'
                    ? 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/8 border border-white/5'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-indigo-300'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
              {filtered.length} دوره
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`px-4 py-2 rounded-xl text-sm border focus:outline-none transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-slate-300 focus:border-indigo-500/50'
                  : 'bg-white border-slate-200 text-slate-700 focus:border-indigo-400'
              }`}
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Course Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course, i) => (
              <CourseCard
                key={course.id}
                course={course}
                onNavigate={onNavigate}
                index={i}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              دوره‌ای یافت نشد
            </h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              جستجوی دیگری امتحان کنید
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
