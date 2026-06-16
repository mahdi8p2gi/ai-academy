import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search } from 'lucide-react';
import { useThemeStore } from '../store/useStore';

const faqCategories = [
  { id: 'all', label: 'همه' },
  { id: 'general', label: 'عمومی' },
  { id: 'payment', label: 'مالی' },
  { id: 'course', label: 'دوره‌ها' },
  { id: 'technical', label: 'فنی' },
];

const allFaqs = [
  { cat: 'general', q: 'آیا برای شروع نیاز به دانش برنامه‌نویسی دارم؟', a: 'خیر! بسیاری از دوره‌های ما از صفر شروع می‌کنند. ما دوره‌های مقدماتی Python و ریاضیات مورد نیاز را ارائه می‌دهیم.' },
  { cat: 'general', q: 'آیا دوره‌ها آنلاین هستند یا حضوری؟', a: 'تمام دوره‌ها آنلاین و ضبط‌شده هستند. می‌توانید در هر زمان و مکانی یاد بگیرید.' },
  { cat: 'general', q: 'آیا جامعه و انجمن دارید؟', a: 'بله! جامعه دانشجویی فعال با بیش از ۵۰,۰۰۰ عضو داریم. می‌توانید سوالات خود را مطرح کنید.' },
  { cat: 'payment', q: 'آیا می‌توانم دوره را به صورت اقساط بخرم؟', a: 'بله! اقساط بدون بهره تا ۶ ماه ارائه می‌دهیم. همچنین تخفیف‌های دوره‌ای داریم.' },
  { cat: 'payment', q: 'آیا ضمانت بازگشت وجه دارید؟', a: 'بله! ضمانت بازگشت وجه ۳۰ روزه داریم. اگر راضی نبودید، وجه کامل بازگردانده می‌شود.' },
  { cat: 'payment', q: 'چه روش‌های پرداختی قبول می‌کنید؟', a: 'کارت‌های بانکی، درگاه‌های آنلاین و واریز بانکی را قبول می‌کنیم.' },
  { cat: 'course', q: 'آیا گواهینامه دوره‌ها معتبر است؟', a: 'بله! گواهینامه‌های ما رسمی و قابل تأیید هستند و می‌توانید آن‌ها را در LinkedIn اضافه کنید.' },
  { cat: 'course', q: 'آیا دسترسی به محتوای دوره برای همیشه است؟', a: 'بله! پس از خرید، دسترسی مادام‌العمر به تمام محتوا و به‌روزرسانی‌ها دارید.' },
  { cat: 'course', q: 'چطور می‌توانم با مدرسین در ارتباط باشم؟', a: 'از طریق پنل دانشجویی می‌توانید سوالات خود را مستقیماً با مدرس مطرح کنید.' },
  { cat: 'technical', q: 'آیا پشتیبانی فنی وجود دارد؟', a: 'بله! تیم پشتیبانی ما ۲۴ ساعته در ۷ روز هفته آماده پاسخگویی است.' },
  { cat: 'technical', q: 'چه سخت‌افزاری برای دوره‌ها نیاز است؟', a: 'برای اکثر دوره‌ها یک لپ‌تاپ معمولی کافی است. برای دوره‌های دیپ لرنینگ GPU توصیه می‌شود.' },
  { cat: 'technical', q: 'آیا می‌توانم دوره را روی موبایل ببینم؟', a: 'بله! پلتفرم ما کاملاً ریسپانسیو است و روی تمام دستگاه‌ها کار می‌کند.' },
];

export default function FAQPage() {
  const { theme } = useThemeStore();
  const [selectedCat, setSelectedCat] = useState('all');
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = allFaqs.filter((faq) => {
    const matchCat = selectedCat === 'all' || faq.cat === selectedCat;
    const matchSearch = !search || faq.q.includes(search) || faq.a.includes(search);
    return matchCat && matchSearch;
  });

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
              سوالات متداول
            </span>
            <h1 className={`text-3xl sm:text-4xl font-black mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              پاسخ سوالات شما
            </h1>
            <p className={`text-base mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              اگر سوالی دارید، احتمالاً اینجا پاسخ آن را می‌یابید
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-400'
              }`} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="جستجو در سوالات..."
                className={`w-full pr-12 pl-5 py-4 rounded-2xl border text-sm focus:outline-none transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-white placeholder-slate-500 focus:border-indigo-500/50'
                    : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-400 shadow-sm'
                }`}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedCat === cat.id
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : theme === 'dark'
                  ? 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filtered.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
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
                  {openIndex === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
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

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">🤔</div>
            <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              سوالی یافت نشد
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
