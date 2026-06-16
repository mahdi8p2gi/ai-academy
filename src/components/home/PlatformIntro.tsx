import { motion } from 'framer-motion';
import { Play, BrainCircuit, Layers, TrendingUp } from 'lucide-react';
import { useThemeStore } from '../../store/useStore';

interface PlatformIntroProps {
  onNavigate: (page: string) => void;
}

const highlights = [
  {
    icon: BrainCircuit,
    title: 'هوش مصنوعی مولد',
    desc: 'یاد بگیرید با ChatGPT، Midjourney و دیگر ابزارهای AI کار کنید',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Layers,
    title: 'یادگیری عمیق',
    desc: 'معماری‌های پیشرفته Transformer، CNN و مدل‌های diffusion',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: TrendingUp,
    title: 'مسیر شغلی',
    desc: 'از یادگیری تا استخدام در شرکت‌های فناوری برتر ایران',
    color: 'from-emerald-500 to-teal-600',
  },
];

export default function PlatformIntro({ onNavigate }: PlatformIntroProps) {
  const { theme } = useThemeStore();

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-[#050714]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={`text-xs font-semibold tracking-widest uppercase mb-4 block ${
              theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              چرا هوش‌آموز؟
            </span>
            <h2 className={`text-3xl sm:text-4xl font-black mb-5 leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              آموزش AI به سبک{' '}
              <span className="text-gradient">استارتاپ‌های برتر جهان</span>
            </h2>
            <p className={`text-base leading-8 mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              هوش‌آموز با تجمیع تجربه بهترین دانشگاه‌ها و شرکت‌های AI جهان، محتوایی ارائه می‌دهد که واقعاً کاربردی است. نه تئوری خشک، بلکه پروژه‌های واقعی.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-md`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm mb-0.5 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs leading-5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3">
              <motion.button
                onClick={() => onNavigate('courses')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-500/25"
              >
                مشاهده دوره‌ها
              </motion.button>
              <motion.button
                onClick={() => onNavigate('about')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 text-sm font-semibold rounded-xl border transition-all duration-200 ${
                  theme === 'dark'
                    ? 'border-white/10 text-slate-300 hover:bg-white/5'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                درباره ما
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className={`relative rounded-3xl overflow-hidden border ${
              theme === 'dark' ? 'border-white/10' : 'border-slate-200'
            } shadow-2xl`}>
              {/* Main card */}
              <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-700 p-8 h-80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                                    radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)`
                }} />
                <div className="absolute inset-0 grid-pattern opacity-10" />
                
                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center text-lg">🧠</div>
                    <div>
                      <p className="text-white text-xs font-bold">ML Course</p>
                      <p className="text-white/60 text-[10px]">در حال یادگیری</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-500/30 rounded-xl flex items-center justify-center text-lg">✅</div>
                    <div>
                      <p className="text-white text-xs font-bold">گواهینامه</p>
                      <p className="text-white/60 text-[10px]">دریافت شد!</p>
                    </div>
                  </div>
                </motion.div>

                {/* Center icon */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/30"
                  >
                    <BrainCircuit className="w-12 h-12 text-white" />
                  </motion.div>
                  <div className="text-center">
                    <p className="text-white font-black text-xl">هوش‌آموز</p>
                    <p className="text-white/70 text-sm">پلتفرم آموزش AI</p>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className={`grid grid-cols-3 divide-x divide-x-reverse ${
                theme === 'dark' ? 'bg-[#0f1221] divide-white/5' : 'bg-white divide-slate-100'
              }`}>
                {[
                  { value: '+۵۰K', label: 'دانشجو' },
                  { value: '+۱۰۰', label: 'دوره' },
                  { value: '۴.۸★', label: 'امتیاز' },
                ].map((stat) => (
                  <div key={stat.label} className="py-4 text-center">
                    <div className={`text-lg font-black text-gradient`}>{stat.value}</div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
