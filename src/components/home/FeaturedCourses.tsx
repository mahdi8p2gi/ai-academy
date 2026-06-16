import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import CourseCard from '../shared/CourseCard';
import { courses } from '../../data/courses';
import { useThemeStore } from '../../store/useStore';

interface FeaturedCoursesProps {
  onNavigate: (page: string, id?: string) => void;
}

export default function FeaturedCourses({ onNavigate }: FeaturedCoursesProps) {
  const { theme } = useThemeStore();
  const featured = courses.filter((c) => c.featured);

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-[#050714]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={`text-xs font-semibold tracking-widest uppercase mb-3 block ${
              theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              دوره‌های ویژه
            </span>
            <h2 className={`text-3xl sm:text-4xl font-black ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              محبوب‌ترین دوره‌ها
            </h2>
            <p className={`mt-3 text-base max-w-lg ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              انتخاب هزاران دانشجو در سراسر ایران
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => onNavigate('courses')}
            whileHover={{ x: -4 }}
            className={`hidden sm:flex items-center gap-2 text-sm font-semibold ${
              theme === 'dark' ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
            } transition-colors duration-200`}
          >
            مشاهده همه دوره‌ها
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((course, i) => (
            <CourseCard
              key={course.id}
              course={course}
              onNavigate={onNavigate}
              index={i}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <button
            onClick={() => onNavigate('courses')}
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold rounded-xl"
          >
            مشاهده همه دوره‌ها
          </button>
        </div>
      </div>
    </section>
  );
}
