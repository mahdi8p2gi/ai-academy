import { motion } from 'framer-motion';
import { Star, Users, BookOpen, Award } from 'lucide-react';
import { instructors } from '../data/instructors';
import { useThemeStore } from '../store/useStore';

interface InstructorsPageProps {
  onNavigate: (page: string, id?: string) => void;
}

export default function InstructorsPage({ onNavigate }: InstructorsPageProps) {
  const { theme } = useThemeStore();

  return (
    <div className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-[#050714]' : 'bg-slate-50'}`}>
      {/* Header */}
      <div className={`py-16 ${theme === 'dark' ? 'bg-[#0c0f1e]' : 'bg-white'} border-b ${
        theme === 'dark' ? 'border-white/5' : 'border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`text-xs font-semibold tracking-widest uppercase mb-3 block ${
              theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              مدرسین
            </span>
            <h1 className={`text-3xl sm:text-4xl font-black mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              از بهترین‌ها بیاموزید
            </h1>
            <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              مدرسین ما از برترین متخصصان هوش مصنوعی ایران با سابقه دانشگاهی و صنعتی هستند
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, i) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className={`group rounded-2xl overflow-hidden border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-[#0f1221] border-white/5 hover:border-indigo-500/30'
                  : 'bg-white border-slate-200 hover:border-indigo-300'
              } hover:shadow-2xl hover:shadow-indigo-500/10`}
            >
              {/* Cover */}
              <div className="h-32 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 relative">
                <div className="absolute inset-0 grid-pattern opacity-20" />
              </div>

              {/* Content */}
              <div className="px-6 -mt-12 pb-6">
                <div className="mb-4">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 shadow-lg"
                    style={{ borderColor: theme === 'dark' ? '#0f1221' : '#fff' }}>
                    <img
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        t.style.display = 'none';
                        const p = t.parentElement;
                        if (p) {
                          p.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
                          p.innerHTML = `<div class="w-full h-full flex items-center justify-center text-white text-3xl font-bold">${instructor.name[0]}</div>`;
                        }
                      }}
                    />
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-1 group-hover:text-indigo-500 transition-colors duration-200 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {instructor.name}
                </h3>
                <p className={`text-sm mb-1 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`}>
                  {instructor.title}
                </p>
                <p className={`text-xs mb-2 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                  {instructor.education}
                </p>

                <p className={`text-sm leading-6 mb-5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {instructor.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {instructor.expertise.map((skill) => (
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

                {/* Achievements */}
                <div className="space-y-2 mb-5">
                  {instructor.achievements.slice(0, 3).map((a, ai) => (
                    <div key={ai} className="flex items-start gap-2">
                      <Award className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{a}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className={`flex items-center gap-5 pt-4 border-t text-xs ${
                  theme === 'dark' ? 'border-white/5 text-slate-400' : 'border-slate-100 text-slate-500'
                }`}>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="font-semibold">{instructor.rating}</span>
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

                {/* Social links */}
                <div className="flex items-center gap-2 mt-4">
                  {['L', 'X', 'G', 'Y'].map((s, si) => (
                    <a
                      key={si}
                      href="#"
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                        theme === 'dark'
                          ? 'border-white/10 text-slate-400 hover:border-indigo-500/30 hover:text-indigo-400 hover:bg-indigo-500/10'
                          : 'border-slate-200 text-slate-400 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50'
                      }`}
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mt-16 p-10 rounded-3xl text-center border ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-indigo-900/30 to-purple-900/20 border-indigo-500/20'
              : 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200'
          }`}
        >
          <h2 className={`text-2xl font-black mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            می‌خواهید مدرس ما شوید؟
          </h2>
          <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            اگر در حوزه هوش مصنوعی تخصص دارید، با ما تدریس کنید و به هزاران دانشجو کمک کنید.
          </p>
          <motion.button
            onClick={() => onNavigate('contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25"
          >
            درخواست همکاری
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
