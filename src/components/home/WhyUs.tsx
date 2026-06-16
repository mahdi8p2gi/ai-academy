import { motion } from 'framer-motion';
import { Zap, Shield, Users, BookOpen, Award, HeadphonesIcon, Globe, BarChart3 } from 'lucide-react';
import { useThemeStore } from '../../store/useStore';

const features = [
  {
    icon: Zap,
    title: 'محتوای به‌روز',
    description: 'دوره‌ها با آخرین تحولات هوش مصنوعی به‌روزرسانی می‌شوند.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  {
    icon: Users,
    title: 'مدرسین متخصص',
    description: 'یادگیری از برترین متخصصان هوش مصنوعی ایران با سابقه صنعتی.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: BookOpen,
    title: 'پروژه محور',
    description: 'هر دوره شامل پروژه‌های عملی و واقعی برای تقویت پرتفولیو.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: Award,
    title: 'گواهینامه رسمی',
    description: 'دریافت گواهینامه معتبر قابل اشتراک‌گذاری در LinkedIn.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: HeadphonesIcon,
    title: 'پشتیبانی ۲۴/۷',
    description: 'پشتیبانی شبانه‌روزی از طریق چت، ایمیل و تلفن.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: Shield,
    title: 'ضمانت بازگشت وجه',
    description: 'در صورت عدم رضایت، طی ۳۰ روز وجه کامل بازگردانده می‌شود.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
  },
  {
    icon: Globe,
    title: 'کاملاً فارسی',
    description: 'تمام محتوا به زبان فارسی روان و قابل فهم تهیه شده است.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  {
    icon: BarChart3,
    title: 'مسیر شغلی',
    description: 'راهنمایی برای یافتن شغل و پیشرفت در بازار کار AI.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
];

export default function WhyUs() {
  const { theme } = useThemeStore();

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-[#050714]' : 'bg-white'}`}>
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
            چرا هوش‌آموز؟
          </span>
          <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            مزایایی که ما را متمایز می‌کند
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            هوش‌آموز با بهترین تجربه آموزشی، یادگیری AI را برای شما آسان و لذت‌بخش می‌کند
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`group p-6 rounded-2xl border transition-all duration-300 ${
                theme === 'dark'
                  ? `bg-[#0f1221] border-white/5 hover:border-indigo-500/20`
                  : `bg-slate-50 border-slate-200 hover:border-indigo-200`
              } hover:shadow-xl hover:shadow-indigo-500/5`}
            >
              <div className={`w-11 h-11 rounded-xl ${feature.bg} border ${feature.border} flex items-center justify-center mb-4`}>
                <feature.icon className={`w-5 h-5 ${feature.color}`} />
              </div>
              <h3 className={`font-bold mb-2 text-base ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                {feature.title}
              </h3>
              <p className={`text-sm leading-6 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
