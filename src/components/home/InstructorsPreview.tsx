import { motion } from 'framer-motion';
import { ArrowLeft, Star, Users, BookOpen } from 'lucide-react';
import { instructors } from '../../data/instructors';
import { useThemeStore } from '../../store/useStore';

interface InstructorsPreviewProps {
  onNavigate: (page: string) => void;
}

export default function InstructorsPreview({ onNavigate }: InstructorsPreviewProps) {
  const { theme } = useThemeStore();

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-[#0c0f1e]' : 'bg-slate-50'}`}>
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
              مدرسین برتر
            </span>
            <h2 className={`text-3xl sm:text-4xl font-black ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              از بهترین‌ها بیاموزید
            </h2>
            <p className={`mt-3 text-base max-w-lg ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              مدرسین برتر با سابقه صنعتی و دانشگاهی
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => onNavigate('instructors')}
            whileHover={{ x: -4 }}
            className={`hidden sm:flex items-center gap-2 text-sm font-semibold ${
              theme === 'dark' ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
            } transition-colors duration-200`}
          >
            همه مدرسین
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {instructors.map((instructor, i) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                theme === 'dark'
                  ? 'bg-[#0f1221] border-white/5 hover:border-indigo-500/30'
                  : 'bg-white border-slate-200 hover:border-indigo-300'
              } hover:shadow-2xl hover:shadow-indigo-500/10`}
              onClick={() => onNavigate('instructors')}
            >
              {/* Cover */}
              <div className="h-28 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 relative">
                <div className="absolute inset-0 grid-pattern opacity-30" />
              </div>

              {/* Avatar */}
              <div className="px-6 -mt-10 pb-5">
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-current ring-2 ring-indigo-500/20"
                    style={{ borderColor: theme === 'dark' ? '#0f1221' : '#fff' }}>
                    <img
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
                          target.parentElement.innerHTML = `<span class="flex items-center justify-center w-full h-full text-3xl text-white font-bold">${instructor.name[0]}</span>`;
                        }
                      }}
                    />
                  </div>
                </div>

                <h3 className={`text-lg font-bold mb-1 group-hover:text-indigo-500 transition-colors duration-200 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {instructor.name}
                </h3>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {instructor.title}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {instructor.expertise.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className={`text-[11px] px-2.5 py-1 rounded-lg font-medium ${
                        theme === 'dark'
                          ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                          : 'bg-indigo-50 text-indigo-600'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className={`flex items-center gap-4 pt-4 border-t text-xs ${
                  theme === 'dark' ? 'border-white/5 text-slate-400' : 'border-slate-100 text-slate-500'
                }`}>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{instructor.rating}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>{instructor.studentCount.toLocaleString('fa-IR')}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{instructor.courseCount} دوره</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
