import { motion } from 'framer-motion';
import { Clock, ArrowRight, Calendar, Tag, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { useThemeStore } from '../store/useStore';

interface BlogPostPageProps {
  postId: string;
  onNavigate: (page: string, id?: string) => void;
}

const tableOfContents = [
  { id: 'intro', title: 'مقدمه' },
  { id: 'math', title: 'پایه‌های ریاضی' },
  { id: 'python', title: 'Python برای AI' },
  { id: 'ml', title: 'یادگیری ماشین' },
  { id: 'conclusion', title: 'نتیجه‌گیری' },
];

export default function BlogPostPage({ postId, onNavigate }: BlogPostPageProps) {
  const { theme } = useThemeStore();
  const post = blogPosts.find((p) => p.id === postId) || blogPosts[0];
  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-[#050714]' : 'bg-slate-50'}`}>
      {/* Hero */}
      <div className={`${theme === 'dark' ? 'bg-[#0c0f1e]' : 'bg-white'} border-b ${
        theme === 'dark' ? 'border-white/5' : 'border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => onNavigate('blog')}
              className={`flex items-center gap-2 text-sm mb-6 ${
                theme === 'dark' ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
              } transition-colors duration-200`}
            >
              <ArrowRight className="w-4 h-4" />
              بازگشت به وبلاگ
            </button>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`text-xs px-3 py-1 rounded-lg font-medium ${
                theme === 'dark' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
              }`}>
                {post.categoryLabel}
              </span>
            </div>

            <h1 className={`text-3xl sm:text-4xl font-black mb-6 leading-tight max-w-4xl ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  {post.author[0]}
                </div>
                <div>
                  <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {post.author}
                  </p>
                </div>
              </div>
              <div className={`flex items-center gap-1.5 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className={`flex items-center gap-1.5 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                <Clock className="w-4 h-4" />
                {post.readTime} مطالعه
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* TOC Sidebar */}
          <div className="hidden lg:block">
            <div className={`sticky top-24 p-5 rounded-2xl border ${
              theme === 'dark' ? 'bg-[#0f1221] border-white/5' : 'bg-white border-slate-200'
            }`}>
              <h3 className={`font-bold text-sm mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                فهرست مطالب
              </h3>
              <ul className="space-y-2">
                {tableOfContents.map((item, i) => (
                  <li key={item.id}>
                    <button className={`flex items-center gap-2 text-xs w-full text-right transition-colors duration-200 hover:text-indigo-400 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      <span className="w-5 h-5 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                        {i + 1}
                      </span>
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>

              <div className={`mt-5 pt-5 border-t ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
                <button className={`flex items-center gap-2 text-xs w-full ${
                  theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                } transition-colors duration-200`}>
                  <Share2 className="w-3.5 h-3.5" />
                  اشتراک‌گذاری
                </button>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-3">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}
            >
              {/* Article header image */}
              <div className={`h-64 rounded-2xl bg-gradient-to-br ${post.gradient} flex items-center justify-center text-8xl mb-8 overflow-hidden relative`}>
                <span className="relative z-10">{post.icon}</span>
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.4) 0%, transparent 60%)'
                }} />
              </div>

              {/* Lead paragraph */}
              <p className={`text-lg leading-8 mb-6 font-medium ${
                theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
              }`}>
                {post.excerpt}
              </p>

              {/* Article body - simulated content */}
              {[
                { title: 'مقدمه', content: 'هوش مصنوعی یکی از پرسرعت‌ترین حوزه‌های فناوری در دهه اخیر بوده است. از تشخیص تصویر و پردازش زبان طبیعی تا خودروهای خودران و دستیارهای هوشمند، AI در حال تغییر چهره جهان است. در این مقاله، نگاهی جامع به این حوزه داریم و مسیر یادگیری آن را بررسی می‌کنیم.' },
                { title: 'پایه‌های ریاضی', content: 'قبل از ورود به دنیای هوش مصنوعی، باید با برخی مفاهیم ریاضی آشنا شوید. جبر خطی، حساب دیفرانسیل و انتگرال، آمار و احتمال سه پایه اصلی ریاضیات هوش مصنوعی هستند. این مفاهیم در ابتدا پیچیده به نظر می‌رسند، اما با تمرین مستمر قابل یادگیری هستند.' },
                { title: 'Python برای هوش مصنوعی', content: 'Python زبان برنامه‌نویسی اصلی در حوزه هوش مصنوعی و یادگیری ماشین است. دلیل این محبوبیت سادگی نحو، کتابخانه‌های غنی و جامعه بزرگ توسعه‌دهندگان است. با NumPy، Pandas، Scikit-learn و TensorFlow می‌توانید پروژه‌های قدرتمندی بسازید.' },
                { title: 'یادگیری ماشین', content: 'یادگیری ماشین زیرمجموعه‌ای از هوش مصنوعی است که به کامپیوترها قابلیت یادگیری از داده را می‌دهد. الگوریتم‌های کلاسیک مانند رگرسیون، درخت تصمیم و SVM نقطه شروع خوبی هستند. سپس می‌توانید به سراغ شبکه‌های عصبی و دیپ لرنینگ بروید.' },
                { title: 'نتیجه‌گیری', content: 'یادگیری هوش مصنوعی یک سفر هیجان‌انگیز است که نیاز به صبر، تمرین و مطالعه مداوم دارد. مهم این است که قدم به قدم پیش بروید، از پروژه‌های کوچک شروع کنید و به تدریج مهارت‌های خود را افزایش دهید. هوش‌آموز در تمام این مسیر همراه شماست.' },
              ].map((section, i) => (
                <div key={i} className="mb-8">
                  <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {section.title}
                  </h2>
                  <p className={`text-sm leading-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    {section.content}
                  </p>
                </div>
              ))}

              {/* Tags */}
              <div className={`flex flex-wrap gap-2 mt-8 pt-8 border-t ${
                theme === 'dark' ? 'border-white/5' : 'border-slate-200'
              }`}>
                <Tag className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-400'} mt-0.5`} />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-xl text-xs font-medium border ${
                      theme === 'dark'
                        ? 'border-white/10 text-slate-400 bg-white/5'
                        : 'border-slate-200 text-slate-600 bg-slate-50'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>

            {/* Related Posts */}
            <div className="mt-12">
              <h2 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                مقالات مرتبط
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    onClick={() => onNavigate('blog-post', p.id)}
                    className={`rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-[#0f1221] border-white/5 hover:border-indigo-500/30'
                        : 'bg-white border-slate-200 hover:border-indigo-300'
                    } hover:shadow-lg`}
                  >
                    <div className={`h-28 bg-gradient-to-br ${p.gradient} flex items-center justify-center text-4xl`}>
                      {p.icon}
                    </div>
                    <div className="p-4">
                      <h3 className={`text-sm font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        {p.title}
                      </h3>
                      <p className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                        {p.readTime} مطالعه
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
