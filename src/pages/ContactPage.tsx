import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useThemeStore } from '../store/useStore';

export default function ContactPage() {
  const { theme } = useThemeStore();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  const contactInfo = [
    { icon: Mail, label: 'ایمیل', value: 'info@hooshamooz.ir', color: 'text-blue-400' },
    { icon: Phone, label: 'تلفن', value: '۰۲۱-۱۲۳۴-۵۶۷۸', color: 'text-emerald-400' },
    { icon: MapPin, label: 'آدرس', value: 'تهران، ایران', color: 'text-rose-400' },
    { icon: Clock, label: 'ساعت کاری', value: 'شنبه تا پنج‌شنبه ۹-۱۸', color: 'text-amber-400' },
  ];

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
              ارتباط با ما
            </span>
            <h1 className={`text-3xl sm:text-4xl font-black mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              چطور می‌توانیم کمک کنیم؟
            </h1>
            <p className={`text-base max-w-xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              تیم پشتیبانی ما آماده پاسخگویی به سوالات شما است
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              اطلاعات تماس
            </h2>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-start gap-4 p-4 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-[#0f1221] border-white/5'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 ${
                    theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'
                  }`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className={`text-xs mb-0.5 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                      {item.label}
                    </p>
                    <p className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ CTA */}
            <div className={`p-5 rounded-2xl border ${
              theme === 'dark'
                ? 'bg-indigo-500/10 border-indigo-500/20'
                : 'bg-indigo-50 border-indigo-200'
            }`}>
              <h3 className={`font-bold mb-2 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                سوال متداول دارید؟
              </h3>
              <p className={`text-xs leading-5 mb-3 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                شاید پاسخ سوال شما در صفحه سوالات متداول باشد.
              </p>
              <button className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-200">
                مشاهده سوالات متداول ←
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`lg:col-span-2 p-8 rounded-2xl border ${
              theme === 'dark'
                ? 'bg-[#0f1221] border-white/5'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-80 text-center"
              >
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  پیام دریافت شد!
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  تیم پشتیبانی ما طی ۲۴ ساعت با شما تماس خواهد گرفت.
                </p>
              </motion.div>
            ) : (
              <>
                <h2 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  ارسال پیام
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={`block text-xs font-medium mb-2 ${
                        theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        نام و نام خانوادگی
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="نام شما"
                        required
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all duration-200 ${
                          theme === 'dark'
                            ? 'bg-white/5 border-white/10 text-white placeholder-slate-500 focus:border-indigo-500/50'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-400'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-medium mb-2 ${
                        theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        آدرس ایمیل
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="example@mail.com"
                        required
                        dir="ltr"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all duration-200 ${
                          theme === 'dark'
                            ? 'bg-white/5 border-white/10 text-white placeholder-slate-500 focus:border-indigo-500/50'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-medium mb-2 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      موضوع
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      required
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all duration-200 ${
                        theme === 'dark'
                          ? 'bg-white/5 border-white/10 text-white focus:border-indigo-500/50'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-400'
                      }`}
                    >
                      <option value="">انتخاب موضوع</option>
                      <option value="support">پشتیبانی فنی</option>
                      <option value="payment">امور مالی</option>
                      <option value="course">سوال درباره دوره</option>
                      <option value="teach">همکاری به عنوان مدرس</option>
                      <option value="other">سایر موارد</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs font-medium mb-2 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      پیام شما
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="پیام خود را بنویسید..."
                      required
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all duration-200 resize-none ${
                        theme === 'dark'
                          ? 'bg-white/5 border-white/10 text-white placeholder-slate-500 focus:border-indigo-500/50'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-400'
                      }`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 disabled:opacity-70"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        ارسال پیام
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
