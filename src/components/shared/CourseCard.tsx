import { motion } from 'framer-motion';
import { Star, Users, Clock, BookOpen, Zap, TrendingUp } from 'lucide-react';
import { useThemeStore } from '../../store/useStore';
import { formatPrice } from '../../lib/utils';

interface CourseCardProps {
  course: any;
  onNavigate: (page: string, id?: string) => void;
  index?: number;
}

export default function CourseCard({ course, onNavigate, index = 0 }: CourseCardProps) {
  const { theme } = useThemeStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
        theme === 'dark'
          ? 'bg-[#0f1221] border-white/5 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10'
          : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/10'
      }`}
      onClick={() => onNavigate('course-detail', course.id)}
    >
      {/* Thumbnail */}
      <div className={`relative h-44 bg-gradient-to-br ${course.gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)'
          }} />
        </div>
        <span className="text-6xl relative z-10">{course.icon}</span>
        
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5">
          {course.bestseller && (
            <span className="px-2.5 py-1 bg-amber-500 text-white text-[10px] font-bold rounded-lg flex items-center gap-1">
              <TrendingUp className="w-2.5 h-2.5" /> پرفروش
            </span>
          )}
          {course.isNew && (
            <span className="px-2.5 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded-lg flex items-center gap-1">
              <Zap className="w-2.5 h-2.5" /> جدید
            </span>
          )}
        </div>

        {/* Price badge */}
        <div className="absolute bottom-3 left-3">
          <div className="px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-xl text-white">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold">{formatPrice(course.price)}</span>
              {course.originalPrice > course.price && (
                <span className="text-[10px] line-through text-white/50">{formatPrice(course.originalPrice)}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${
            theme === 'dark' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
          }`}>
            {course.categoryLabel}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className={`text-xs font-semibold ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
              {course.rating}
            </span>
            <span className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
              ({course.reviewCount.toLocaleString('fa-IR')})
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-base leading-6 mb-2 group-hover:text-indigo-500 transition-colors duration-200 line-clamp-2 ${
          theme === 'dark' ? 'text-white' : 'text-slate-900'
        }`}>
          {course.title}
        </h3>

        {/* Instructor */}
        <p className={`text-xs mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
          {course.instructor}
        </p>

        {/* Stats */}
        <div className={`flex items-center gap-4 pt-4 border-t ${
          theme === 'dark' ? 'border-white/5' : 'border-slate-100'
        }`}>
          <div className={`flex items-center gap-1.5 text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
            <Users className="w-3.5 h-3.5" />
            <span>{course.studentCount.toLocaleString('fa-IR')}</span>
          </div>
          <div className={`flex items-center gap-1.5 text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
            <Clock className="w-3.5 h-3.5" />
            <span>{course.duration}</span>
          </div>
          <div className={`flex items-center gap-1.5 text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
            <BookOpen className="w-3.5 h-3.5" />
            <span>{course.lessonsCount} درس</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
