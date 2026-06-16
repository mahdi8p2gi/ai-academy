import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { useThemeStore } from '../../store/useStore';

export default function Newsletter() {
  const { theme } = useThemeStore();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubscribed(true);
    setLoading(false);
    setEmail('');
  };

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-[#050714]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`relative rounded-3xl overflow-hidden p-10 md:p-16 text-center ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-blue-900/50 border border-indigo-500/20'
              : 'bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 border border-indigo-200'
          }`}
        >
          {/* Background decorations */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-lg shadow-indigo-500/30">
              <Sparkles className="w-7 h-7 text-white" />
            </div>

            <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              در خبرنامه ما عضو شوید
            </h2>
            <p className={`text-base mb-8 max-w-xl mx-auto ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}>
              جدیدترین مقالات، دوره‌ها و نکات AI را هر هفته در ایمیلتان دریافت کنید. رایگان و بدون اسپم.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-6 py-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">با موفقیت عضو خبرنامه شدید! 🎉</span>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="آدرس ایمیل شما"
                  required
                  dir="ltr"
                  className={`flex-1 px-5 py-3.5 rounded-xl border text-sm focus:outline-none transition-all duration-200 ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-white placeholder-slate-500 focus:border-indigo-500/50 focus:bg-white/8'
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-400 shadow-sm'
                  }`}
                />
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-500/25 disabled:opacity-70 transition-all duration-200"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      عضویت رایگان
                    </>
                  )}
                </motion.button>
              </form>
            )}

            <p className={`mt-4 text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
              بدون اسپم • لغو اشتراک در هر زمان • بیش از ۱۰,۰۰۰ مشترک
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
