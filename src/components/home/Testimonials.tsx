import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { useThemeStore } from '../../store/useStore';

const testimonials = [
  {
    id: 1,
    name: 'محمد کریمی',
    role: 'ML Engineer در دیجی‌کالا',
    avatar: 'م',
    rating: 5,
    text: 'دوره یادگیری ماشین هوش‌آموز کاملاً زندگیم را تغییر داد. از یک برنامه‌نویس معمولی به ML Engineer در یکی از بزرگ‌ترین شرکت‌های ایران تبدیل شدم. محتوای دوره بسیار عمیق و عملی بود.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    name: 'فاطمه احمدی',
    role: 'Data Scientist مستقل',
    avatar: 'ف',
    rating: 5,
    text: 'به عنوان یک خانم که وارد حوزه AI شدم، هوش‌آموز بهترین انتخاب بود. توضیحات فارسی روان، پروژه‌های عملی جذاب و پشتیبانی فوق‌العاده. الان درآمدم چند برابر شده.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 3,
    name: 'امیرحسین موسوی',
    role: 'AI Researcher در دانشگاه تهران',
    avatar: 'ا',
    rating: 5,
    text: 'دوره دیپ لرنینگ خانم محمدی واقعاً استثنایی بود. از پایه تا مقالات روز دنیا همه چیز پوشش داده شد. همین دوره پایه تحقیقاتم در دانشگاه شد.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 4,
    name: 'رضا تهرانی',
    role: 'Freelance AI Developer',
    avatar: 'ر',
    rating: 5,
    text: 'چند ماه بعد از اتمام دوره LLM، اولین پروژه فریلنسم رو ۸ میلیون گرفتم. هوش‌آموز نه فقط آموزش داد بلکه به من یاد داد چطور از دانشم پول در بیارم.',
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 5,
    name: 'زهرا نظری',
    role: 'AI Product Manager',
    avatar: 'ز',
    rating: 5,
    text: 'از هیچ برنامه‌نویسی نمی‌دونستم به AI Product Manager تبدیل شدم. مسیر یادگیری هوش‌آموز خیلی هوشمندانه طراحی شده و کاملاً به شغلی که می‌خواستم رسیدم.',
    color: 'from-cyan-500 to-blue-600',
  },
];

export default function Testimonials() {
  const { theme } = useThemeStore();
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className={`py-20 overflow-hidden ${theme === 'dark' ? 'bg-[#050714]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            نظرات دانشجویان
          </span>
          <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            داستان‌های موفقیت واقعی
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            هزاران دانشجو با هوش‌آموز به اهداف شغلی خود رسیده‌اند
          </p>
        </motion.div>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[activeIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`relative p-8 rounded-3xl border ${
                theme === 'dark'
                  ? 'bg-[#0f1221] border-white/5'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              {/* Quote icon */}
              <div className="absolute top-6 left-6 opacity-10 text-indigo-500">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>

              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonials[activeIndex].color} flex items-center justify-center text-white text-xl font-bold shrink-0 shadow-lg`}>
                  {testimonials[activeIndex].avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className={`text-lg leading-8 mb-5 ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    "{testimonials[activeIndex].text}"
                  </p>
                  <div>
                    <div className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {testimonials[activeIndex].name}
                    </div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      {testimonials[activeIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className={`p-3 rounded-xl border transition-all duration-200 ${
              theme === 'dark'
                ? 'border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/10'
                : 'border-slate-200 text-slate-500 hover:text-slate-900 hover:border-indigo-300 hover:bg-indigo-50'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'bg-indigo-500 w-6'
                    : theme === 'dark'
                    ? 'bg-white/20 w-1.5 hover:bg-white/40'
                    : 'bg-slate-300 w-1.5 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className={`p-3 rounded-xl border transition-all duration-200 ${
              theme === 'dark'
                ? 'border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/10'
                : 'border-slate-200 text-slate-500 hover:text-slate-900 hover:border-indigo-300 hover:bg-indigo-50'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Mini cards */}
        <div className="hidden md:flex items-center gap-4 justify-center">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveIndex(i)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 ${
                i === activeIndex
                  ? 'border-indigo-500/50 bg-indigo-500/10'
                  : theme === 'dark'
                  ? 'border-white/5 bg-white/2 hover:border-white/10'
                  : 'border-slate-200 bg-slate-50 hover:border-indigo-200'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold`}>
                {t.avatar}
              </div>
              <div className="text-right">
                <div className={`text-xs font-semibold ${
                  i === activeIndex
                    ? 'text-indigo-400'
                    : theme === 'dark'
                    ? 'text-slate-300'
                    : 'text-slate-700'
                }`}>
                  {t.name}
                </div>
                <div className={`text-[10px] ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                  {t.role.split(' ').slice(0, 2).join(' ')}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
