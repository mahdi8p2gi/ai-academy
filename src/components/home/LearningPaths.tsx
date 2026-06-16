import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Clock, BookOpen } from 'lucide-react';
import { learningPaths } from '../../data/courses';
import { useThemeStore } from '../../store/useStore';

interface LearningPathsProps {
  onNavigate: (page: string) => void;
}

export default function LearningPaths({ onNavigate }: LearningPathsProps) {
  const { theme } = useThemeStore();

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-[#0c0f1e]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className={`text-xs font-semibold tracking-widest uppercase mb-3 block ${
            theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
          }`}>
            مسیرهای یادگیری
          </span>
          <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            مسیر شغلی خود را انتخاب کنید
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            مسیرهای یادگیری ساختاریافته برای رسیدن به هدف شغلی شما در حوزه هوش مصنوعی
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningPaths.map((path, i) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl overflow-hidden border transition-all duration-300 group cursor-pointer ${
                theme === 'dark'
                  ? 'bg-[#0f1221] border-white/5 hover:border-indigo-500/30'
                  : 'bg-white border-slate-200 hover:border-indigo-300'
              } hover:shadow-2xl hover:shadow-indigo-500/10`}
              onClick={() => onNavigate('courses')}
            >
              {/* Gradient Header */}
              <div className={`h-36 bg-gradient-to-br ${path.gradient} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.4) 0%, transparent 60%)'
                  }} />
                </div>
                <span className="text-5xl relative z-10">{path.icon}</span>

                {/* Steps preview */}
                <div className="absolute bottom-0 left-0 right-0 flex gap-1 p-3">
                  {path.steps.map((_, si) => (
                    <div
                      key={si}
                      className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden"
                    >
                      <div
                        className="h-full bg-white rounded-full"
                        style={{ width: `${(si + 1) / path.steps.length * 100}%`, opacity: 0.8 }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                    theme === 'dark' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
                  }`}>
                    {path.level}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors duration-200 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {path.title}
                </h3>
                <p className={`text-sm leading-6 mb-5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {path.description}
                </p>

                {/* Stats */}
                <div className={`flex items-center gap-4 mb-5 text-xs ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {path.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    {path.courses} دوره
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-2 mb-5">
                  {path.steps.map((step, si) => (
                    <div key={si} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className={`text-xs ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className={`flex items-center gap-2 text-sm font-semibold pt-4 border-t ${
                  theme === 'dark' ? 'border-white/5 text-indigo-400' : 'border-slate-100 text-indigo-600'
                } group-hover:gap-4 transition-all duration-300`}>
                  شروع این مسیر
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
