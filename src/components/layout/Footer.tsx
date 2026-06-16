import { motion } from 'framer-motion';
import { Brain, Send, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useThemeStore } from '../../store/useStore';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const socialLinks = [
  { label: 'اینستاگرام', symbol: 'I' },
  { label: 'توییتر', symbol: 'X' },
  { label: 'لینکدین', symbol: 'L' },
  { label: 'یوتیوب', symbol: 'Y' },
  { label: 'گیت‌هاب', symbol: 'G' },
];

export default function Footer({ onNavigate }: FooterProps) {
  const { theme } = useThemeStore();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative mt-20 ${
      theme === 'dark' ? 'bg-[#050714]' : 'bg-slate-950'
    } text-white`}>
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => handleNav('home')} className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-white">هوش‌آموز</span>
                <span className="text-[10px] text-indigo-400 font-medium">AI Academy</span>
              </div>
            </button>
            <p className="text-slate-400 text-sm leading-7 mb-6">
              بهترین پلتفرم آموزش هوش مصنوعی به زبان فارسی. یاد بگیرید، رشد کنید، موفق شوید.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-400 text-slate-400 flex items-center justify-center transition-all duration-200 border border-white/5 hover:border-indigo-500/30 text-xs font-bold"
                  aria-label={social.label}
                >
                  {social.symbol}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm">لینک‌های سریع</h3>
            <ul className="space-y-3">
              {[
                { label: 'خانه', page: 'home' },
                { label: 'دوره‌ها', page: 'courses' },
                { label: 'مدرسین', page: 'instructors' },
                { label: 'وبلاگ', page: 'blog' },
                { label: 'درباره ما', page: 'about' },
                { label: 'تماس با ما', page: 'contact' },
              ].map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => handleNav(item.page)}
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm">اطلاعات تماس</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">info@hooshamooz.ir</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm" dir="ltr">+98 21 1234 5678</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm leading-6">تهران، ایران</span>
              </li>
            </ul>

            <h3 className="text-white font-semibold mb-3 text-sm">خبرنامه</h3>
            {subscribed ? (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-emerald-400 text-sm"
              >
                ✓ با موفقیت عضو شدید!
              </motion.p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ایمیل شما"
                  className="flex-1 px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-colors duration-200"
                  required
                  dir="ltr"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm">دسته‌بندی‌ها</h3>
            <ul className="space-y-3">
              {[
                'یادگیری ماشین',
                'دیپ لرنینگ',
                'پردازش زبان طبیعی',
                'بینایی کامپیوتر',
                'علم داده',
                'مدل‌های زبانی بزرگ',
              ].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => handleNav('courses')}
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © ۱۴۰۳ هوش‌آموز. تمام حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-6">
            {['حریم خصوصی', 'شرایط استفاده', 'سوالات متداول'].map((item) => (
              <button
                key={item}
                onClick={() => handleNav('faq')}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
