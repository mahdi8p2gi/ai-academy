import { motion } from 'framer-motion';
import { Users, BookOpen, Star, Award, Zap, Globe } from 'lucide-react';
import AnimatedCounter from '../shared/AnimatedCounter';
import { useThemeStore } from '../../store/useStore';

const stats = [
  {
    icon: Users,
    value: 50000,
    suffix: '+',
    label: 'دانشجوی فعال',
    color: 'text-blue-400',
    bg: 'from-blue-500/10 to-blue-600/5',
    border: 'border-blue-500/20',
  },
  {
    icon: BookOpen,
    value: 120,
    suffix: '+',
    label: 'دوره تخصصی',
    color: 'text-purple-400',
    bg: 'from-purple-500/10 to-purple-600/5',
    border: 'border-purple-500/20',
  },
  {
    icon: Star,
    value: 48,
    suffix: '/۵',
    label: 'میانگین امتیاز دوره‌ها',
    color: 'text-amber-400',
    bg: 'from-amber-500/10 to-amber-600/5',
    border: 'border-amber-500/20',
  },
  {
    icon: Award,
    value: 95,
    suffix: '٪',
    label: 'رضایت دانشجویان',
    color: 'text-emerald-400',
    bg: 'from-emerald-500/10 to-emerald-600/5',
    border: 'border-emerald-500/20',
  },
  {
    icon: Zap,
    value: 12,
    suffix: '+',
    label: 'مدرس متخصص',
    color: 'text-cyan-400',
    bg: 'from-cyan-500/10 to-cyan-600/5',
    border: 'border-cyan-500/20',
  },
  {
    icon: Globe,
    value: 30000,
    suffix: '+',
    label: 'گواهینامه صادرشده',
    color: 'text-rose-400',
    bg: 'from-rose-500/10 to-rose-600/5',
    border: 'border-rose-500/20',
  },
];

export default function StatsSection() {
  const { theme } = useThemeStore();

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-[#0c0f1e]' : 'bg-slate-50'}`}>
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
            آمار و ارقام
          </span>
          <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            پلتفرمی که به آن اعتماد می‌کنند
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            هزاران دانشجو در سراسر ایران با هوش‌آموز مهارت‌های هوش مصنوعی را فرا گرفته‌اند
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`relative rounded-2xl p-5 text-center border bg-gradient-to-br ${stat.bg} ${stat.border} ${
                theme === 'dark' ? '' : 'bg-white shadow-sm'
              } transition-all duration-300`}
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 ${
                theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'
              }`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className={`text-2xl font-black mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className={`text-xs leading-5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
