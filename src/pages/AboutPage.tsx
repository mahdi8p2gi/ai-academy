import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap } from 'lucide-react';
import AnimatedCounter from '../components/shared/AnimatedCounter';
import { useThemeStore } from '../store/useStore';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const values = [
  {
    icon: Target,
    title: 'هدفمندی',
    description: 'هر دوره با هدف مشخص شغلی و عملی طراحی شده است.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Heart,
    title: 'کیفیت محور',
    description: 'کیفیت محتوا مهم‌ترین اولویت ماست. هیچ타وری بر کیفیت فدا نمی‌شود.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
  },
  {
    icon: Eye,
    title: 'شفافیت',
    description: 'در همه چیز، از قیمت تا محتوا، کاملاً شفاف هستیم.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Zap,
    title: 'نوآوری',
    description: 'همیشه در حال بهبود و به‌روزرسانی محتوا با آخرین پیشرفت‌های AI هستیم.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
];

const milestones = [
  { year: '۱۴۰۰', title: 'تأسیس هوش‌آموز', desc: 'شروع با ۳ دوره و ۱۰۰ دانشجو' },
  { year: '۱۴۰۱', title: 'رشد سریع', desc: 'رسیدن به ۵,۰۰۰ دانشجو و ۲۰ دوره' },
  { year: '۱۴۰۲', title: 'توسعه محتوا', desc: 'راه‌اندازی مسیرهای یادگیری و پروژه‌های عملی' },
  { year: '۱۴۰۳', title: 'بزرگترین AI Academy', desc: 'بیش از ۵۰,۰۰۰ دانشجو و ۱۰۰+ دوره' },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const { theme } = useThemeStore();

  return (
    <div className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-[#050714]' : 'bg-slate-50'}`}>
      {/* Hero */}
      <div className={`py-20 ${theme === 'dark' ? 'bg-[#0c0f1e]' : 'bg-white'} border-b ${
        theme === 'dark' ? 'border-white/5' : 'border-slate-200'
      } relative overflow-hidden`}>
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className={`text-xs font-semibold tracking-widest uppercase mb-4 block ${
              theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              درباره ما
            </span>
            <h1 className={`text-4xl sm:text-5xl font-black mb-6 leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              مأموریت ما آموزش <span className="text-gradient">هوش مصنوعی</span> به همه ایرانیان است
            </h1>
            <p className={`text-lg leading-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              هوش‌آموز در سال ۱۴۰۰ با هدف ایجاد بهترین پلتفرم آموزش هوش مصنوعی به زبان فارسی تأسیس شد. ما باور داریم که هر ایرانی باید فرصت یادگیری تکنولوژی‌های آینده را داشته باشد.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: 50000, suffix: '+', label: 'دانشجو' },
            { value: 120, suffix: '+', label: 'دوره' },
            { value: 12, suffix: '+', label: 'مدرس' },
            { value: 95, suffix: '٪', label: 'رضایت' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`p-6 rounded-2xl border text-center ${
                theme === 'dark'
                  ? 'bg-[#0f1221] border-white/5'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className={`text-3xl font-black text-gradient mb-1`}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-2xl sm:text-3xl font-black mb-5 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              داستان ما
            </h2>
            <div className={`space-y-4 text-sm leading-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              <p>
                هوش‌آموز در یک آپارتمان کوچک در تهران توسط سه دوست که همه به AI علاقه داشتند آغاز شد. ما دیدیم که محتوای آموزشی با کیفیت به زبان فارسی بسیار محدود است.
              </p>
              <p>
                اولین دوره‌مان را در سال ۱۴۰۰ با ۱۰۰ دانشجو لانچ کردیم. بازخورد بسیار مثبت بود و دانشجویان می‌گفتند که برای اولین بار مفاهیم AI را به درستی درک کرده‌اند.
              </p>
              <p>
                امروز هوش‌آموز با بیش از ۵۰,۰۰۰ دانشجو، ۱۲ مدرس متخصص و ۱۰۰+ دوره، بزرگترین آکادمی آنلاین هوش مصنوعی به زبان فارسی است.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="space-y-5">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {m.year}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-0.5 h-8 bg-indigo-500/20 mt-1" />
                    )}
                  </div>
                  <div className={`pt-2 ${i < milestones.length - 1 ? 'pb-8' : ''}`}>
                    <h4 className={`font-bold text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {m.title}
                    </h4>
                    <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className={`text-2xl sm:text-3xl font-black ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              ارزش‌های ما
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl border text-center transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-[#0f1221] border-white/5 hover:border-indigo-500/20'
                    : 'bg-white border-slate-200 hover:border-indigo-200 shadow-sm'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl ${v.bg} flex items-center justify-center mx-auto mb-4`}>
                  <v.icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{v.title}</h3>
                <p className={`text-sm leading-6 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-10 rounded-3xl text-center border ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-indigo-900/40 to-purple-900/30 border-indigo-500/20'
              : 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200'
          }`}
        >
          <h2 className={`text-2xl font-black mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            بخشی از هوش‌آموز شوید
          </h2>
          <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            با بیش از ۵۰,۰۰۰ دانشجو به خانواده هوش‌آموز بپیوندید
          </p>
          <motion.button
            onClick={() => onNavigate('courses')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25"
          >
            شروع یادگیری رایگان
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
