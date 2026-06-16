import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useThemeStore } from '../../store/useStore';

const faqs = [
  {
    q: 'آیا برای شروع نیاز به دانش برنامه‌نویسی دارم؟',
    a: 'خیر! بسیاری از دوره‌های ما از صفر شروع می‌کنند. ما دوره‌های مقدماتی Python و ریاضیات مورد نیاز را ارائه می‌دهیم. تنها چیزی که نیاز دارید اشتیاق به یادگیری است.',
  },
  {
    q: 'آیا گواهینامه دوره‌ها معتبر است؟',
    a: 'بله! گواهینامه‌های هوش‌آموز رسمی و قابل تأیید هستند. می‌توانید آن‌ها را در LinkedIn، پرتفولیو یا رزومه خود اضافه کنید. بسیاری از شرکت‌های ایرانی این گواهینامه‌ها را می‌شناسند.',
  },
  {
    q: 'آیا دسترسی به محتوای دوره برای همیشه است؟',
    a: 'بله! پس از خرید هر دوره، دسترسی مادام‌العمر به تمام محتوا، به‌روزرسانی‌ها و منابع دارید. هیچ هزینه اضافی برای بروزرسانی وجود ندارد.',
  },
  {
    q: 'آیا پشتیبانی فنی برای سوالات وجود دارد؟',
    a: 'بله! تیم پشتیبانی ما ۲۴ ساعته در ۷ روز هفته آماده پاسخگویی است. علاوه بر این، جامعه دانشجویی فعال هوش‌آموز با بیش از ۵۰,۰۰۰ عضو وجود دارد که می‌توانید سوالات خود را مطرح کنید.',
  },
  {
    q: 'آیا می‌توانم دوره را به صورت اقساط بخرم؟',
    a: 'بله! ما اقساط بدون بهره تا ۶ ماه ارائه می‌دهیم. همچنین تخفیف‌های دوره‌ای و بسته‌های ویژه برای دوره‌های متعدد داریم.',
  },
  {
    q: 'اگر از دوره راضی نبودم چطور؟',
    a: 'ما ضمانت بازگشت وجه ۳۰ روزه داریم. اگر به هر دلیلی از دوره راضی نبودید، طی ۳۰ روز اول بدون هیچ سوالی وجه کامل را بازمی‌گردانیم.',
  },
  {
    q: 'آیا دوره‌ها آنلاین هستند یا حضوری؟',
    a: 'تمام دوره‌ها آنلاین و ضبط‌شده هستند، پس می‌توانید در هر زمان و مکانی یاد بگیرید. برخی دوره‌ها شامل جلسات زنده هفتگی با مدرس هم هستند.',
  },
  {
    q: 'چطور می‌توانم با مدرسین در ارتباط باشم؟',
    a: 'از طریق پنل دانشجویی می‌توانید سوالات خود را مستقیماً با مدرس مطرح کنید. مدرسین معمولاً طی ۲۴ ساعت پاسخ می‌دهند.',
  },
];

export default function FAQSection() {
  const { theme } = useThemeStore();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-[#0c0f1e]' : 'bg-slate-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            سوالات متداول
          </span>
          <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            سوالی دارید؟
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            پاسخ سوالات رایج دانشجویان را اینجا بیابید
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                theme === 'dark'
                  ? `bg-[#0f1221] ${openIndex === i ? 'border-indigo-500/30' : 'border-white/5'}`
                  : `bg-white ${openIndex === i ? 'border-indigo-300' : 'border-slate-200'}`
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-right"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`text-sm font-semibold leading-6 ${
                  openIndex === i
                    ? 'text-indigo-500'
                    : theme === 'dark'
                    ? 'text-white'
                    : 'text-slate-900'
                }`}>
                  {faq.q}
                </span>
                <div className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  openIndex === i
                    ? 'bg-indigo-500 text-white'
                    : theme === 'dark'
                    ? 'bg-white/5 text-slate-400'
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  {openIndex === i ? (
                    <Minus className="w-3.5 h-3.5" />
                  ) : (
                    <Plus className="w-3.5 h-3.5" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className={`px-5 pb-5 text-sm leading-7 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
