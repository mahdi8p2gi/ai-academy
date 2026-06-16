import { motion } from 'framer-motion';
import { Star, Users, Clock, BookOpen, ChevronDown, ChevronUp, Check, Play, Award } from 'lucide-react';
import { useState } from 'react';
import { courses } from '../data/courses';
import { formatPrice } from '../lib/utils';
import { useThemeStore } from '../store/useStore';
import CourseCard from '../components/shared/CourseCard';

interface CourseDetailProps {
  courseId: string;
  onNavigate: (page: string, id?: string) => void;
}

export default function CourseDetailPage({ courseId, onNavigate }: CourseDetailProps) {
  const { theme } = useThemeStore();
  const [openSyllabus, setOpenSyllabus] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState('overview');

  const course = courses.find((c) => c.id === courseId) || courses[0];
  const related = courses.filter((c) => c.id !== course.id && c.category === course.category).slice(0, 3);

  const tabs = [
    { id: 'overview', label: 'معرفی' },
    { id: 'syllabus', label: 'سرفصل‌ها' },
    { id: 'instructor', label: 'مدرس' },
    { id: 'reviews', label: 'نظرات' },
    { id: 'faq', label: 'سوالات' },
  ];

  const faqItems = [
    { q: 'پیش‌نیاز این دوره چیست؟', a: 'آشنایی پایه با Python کافی است. ما مفاهیم لازم را از ابتدا آموزش می‌دهیم.' },
    { q: 'آیا دسترسی مادام‌العمر است؟', a: 'بله! پس از خرید، دسترسی مادام‌العمر به تمام محتوا و به‌روزرسانی‌ها دارید.' },
    { q: 'چه مدت برای اتمام دوره نیاز است؟', a: 'با ۲ ساعت مطالعه روزانه، حدود ۳-۴ ماه برای اتمام کافی است.' },
  ];

  return (
    <div className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-[#050714]' : 'bg-slate-50'}`}>
      {/* Hero */}
      <div className={`${theme === 'dark' ? 'bg-[#0c0f1e]' : 'bg-white'} border-b ${
        theme === 'dark' ? 'border-white/5' : 'border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`text-xs px-3 py-1 rounded-lg font-medium ${
                    theme === 'dark' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
                  }`}>
                    {course.categoryLabel}
                  </span>
                  {course.bestseller && (
                    <span className="text-xs px-3 py-1 rounded-lg font-medium bg-amber-500/10 text-amber-400">
                      پرفروش
                    </span>
                  )}
                  {course.isNew && (
                    <span className="text-xs px-3 py-1 rounded-lg font-medium bg-emerald-500/10 text-emerald-400">
                      جدید
                    </span>
                  )}
                </div>

                <h1 className={`text-3xl sm:text-4xl font-black mb-4 leading-tight ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {course.title}
                </h1>

                <p className={`text-base leading-7 mb-6 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {course.description}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-5 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{course.rating}</span>
                    <span className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      ({course.reviewCount.toLocaleString('fa-IR')} نظر)
                    </span>
                  </div>
                  <div className={`flex items-center gap-1.5 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    <Users className="w-4 h-4" />
                    {course.studentCount.toLocaleString('fa-IR')} دانشجو
                  </div>
                  <div className={`flex items-center gap-1.5 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className={`flex items-center gap-1.5 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    <BookOpen className="w-4 h-4" />
                    {course.lessonsCount} درس
                  </div>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {course.instructor[0]}
                  </div>
                  <div>
                    <span className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>مدرس: </span>
                    <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {course.instructor}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Purchase Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`rounded-2xl border overflow-hidden sticky top-24 self-start ${
                theme === 'dark'
                  ? 'bg-[#0f1221] border-white/10'
                  : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
              }`}
            >
              {/* Course visual */}
              <div className={`h-48 bg-gradient-to-br ${course.gradient} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-7xl">{course.icon}</span>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                    <Play className="w-6 h-6 text-white fill-white mr-1" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Price */}
                <div className="flex items-baseline gap-3 mb-1">
                  <span className={`text-3xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {formatPrice(course.price)}
                  </span>
                </div>
                {course.originalPrice > course.price && (
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-sm line-through ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                      {formatPrice(course.originalPrice)}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-lg">
                      {Math.round((1 - course.price / course.originalPrice) * 100)}٪ تخفیف
                    </span>
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-base rounded-xl shadow-lg shadow-indigo-500/25 mb-3"
                >
                  ثبت‌نام در دوره
                </motion.button>
                <button className={`w-full py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                  theme === 'dark'
                    ? 'border-white/10 text-slate-300 hover:bg-white/5'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}>
                  امتحان رایگان
                </button>

                <p className={`text-xs text-center mt-3 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                  ضمانت بازگشت وجه ۳۰ روزه
                </p>

                {/* Includes */}
                <div className={`mt-5 pt-5 border-t ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
                  <p className={`text-xs font-semibold mb-3 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                    این دوره شامل:
                  </p>
                  {[
                    `${course.duration} ویدیو آموزشی`,
                    `${course.lessonsCount} درس`,
                    'پروژه‌های عملی',
                    'گواهینامه پایان دوره',
                    'دسترسی مادام‌العمر',
                    'پشتیبانی مدرس',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 mb-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Tab nav */}
        <div className={`flex gap-1 p-1 rounded-2xl mb-8 overflow-x-auto ${
          theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'
        }`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                  : theme === 'dark'
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className={`text-xl font-bold mb-5 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  چه چیزی یاد خواهید گرفت؟
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {course.whatYouLearn.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  درباره این دوره
                </h2>
                <p className={`text-sm leading-7 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {course.description} این دوره با رویکرد کاملاً عملی طراحی شده تا شما بتوانید مهارت‌های یاد گرفته را در پروژه‌های واقعی به‌کار ببرید. از مفاهیم پایه شروع می‌کنیم و به مباحث پیشرفته می‌رسیم. مدرس این دوره با بیش از ۱۰ سال تجربه، محتوا را به صورت ساده و قابل فهم ارائه می‌دهد.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium border ${
                        theme === 'dark'
                          ? 'border-white/10 text-slate-400 bg-white/5'
                          : 'border-slate-200 text-slate-600 bg-slate-50'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'syllabus' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    سرفصل‌های دوره
                  </h2>
                  <span className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    {course.lessonsCount} درس · {course.duration}
                  </span>
                </div>
                <div className="space-y-3">
                  {course.syllabus.map((section, i) => (
                    <div
                      key={i}
                      className={`rounded-xl border overflow-hidden ${
                        theme === 'dark'
                          ? `bg-[#0f1221] ${openSyllabus === i ? 'border-indigo-500/30' : 'border-white/5'}`
                          : `bg-white ${openSyllabus === i ? 'border-indigo-300' : 'border-slate-200'}`
                      }`}
                    >
                      <button
                        className="w-full flex items-center justify-between gap-4 p-4"
                        onClick={() => setOpenSyllabus(openSyllabus === i ? null : i)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 bg-indigo-500/10 text-indigo-400 rounded-lg flex items-center justify-center text-xs font-bold">
                            {i + 1}
                          </div>
                          <span className={`text-sm font-semibold ${
                            theme === 'dark' ? 'text-white' : 'text-slate-900'
                          }`}>
                            {section.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                            {section.lessons} درس · {section.duration}
                          </span>
                          {openSyllabus === i ? (
                            <ChevronUp className="w-4 h-4 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                          )}
                        </div>
                      </button>
                      {openSyllabus === i && (
                        <div className={`px-4 pb-4 ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {Array.from({ length: Math.min(section.lessons, 4) }).map((_, li) => (
                            <div key={li} className="flex items-center gap-3 py-2">
                              <Play className="w-3.5 h-3.5 text-indigo-400" />
                              <span className="text-xs">جلسه {li + 1} - آموزش جامع مبحث {section.title}</span>
                            </div>
                          ))}
                          {section.lessons > 4 && (
                            <p className="text-xs text-indigo-400 mt-1 pr-6">
                              و {section.lessons - 4} درس دیگر...
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'instructor' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className={`p-6 rounded-2xl border ${
                  theme === 'dark' ? 'bg-[#0f1221] border-white/5' : 'bg-white border-slate-200'
                }`}>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                      {course.instructor[0]}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        {course.instructor}
                      </h3>
                      <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        متخصص هوش مصنوعی و یادگیری ماشین
                      </p>
                    </div>
                  </div>
                  <p className={`text-sm leading-7 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    مدرس این دوره با سال‌ها تجربه در صنعت و دانشگاه، محتوای آموزشی را به شیوه‌ای جذاب و کاربردی تهیه کرده است. سابقه همکاری با شرکت‌های بزرگ فناوری و انتشار مقالات علمی در مجلات معتبر بین‌المللی.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'reviews' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-center">
                    <div className={`text-6xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{course.rating}</div>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} />
                      ))}
                    </div>
                    <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                      {course.reviewCount.toLocaleString('fa-IR')} نظر
                    </p>
                  </div>
                </div>
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-3 mb-2">
                    <div className="flex items-center gap-1 w-16">
                      <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{star}</span>
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    </div>
                    <div className={`flex-1 h-2 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-white/10' : 'bg-slate-100'}`}>
                      <div
                        className="h-full bg-amber-400 rounded-full"
                        style={{ width: `${star === 5 ? 75 : star === 4 ? 18 : star === 3 ? 5 : 2}%` }}
                      />
                    </div>
                    <span className={`text-xs w-8 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                      {star === 5 ? 75 : star === 4 ? 18 : star === 3 ? 5 : 2}٪
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'faq' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="space-y-4">
                  {faqItems.map((item, i) => (
                    <div key={i} className={`p-5 rounded-xl border ${
                      theme === 'dark' ? 'bg-[#0f1221] border-white/5' : 'bg-white border-slate-200'
                    }`}>
                      <h4 className={`font-semibold mb-2 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.q}</h4>
                      <p className={`text-sm leading-6 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{item.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar stats */}
          <div className="hidden lg:block">
            <div className={`p-5 rounded-2xl border mb-5 ${
              theme === 'dark' ? 'bg-[#0f1221] border-white/5' : 'bg-white border-slate-200'
            }`}>
              <h3 className={`font-bold mb-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                اطلاعات دوره
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'سطح', value: course.level },
                  { label: 'مدت زمان', value: course.duration },
                  { label: 'تعداد درس', value: `${course.lessonsCount} درس` },
                  { label: 'زبان آموزش', value: course.language },
                  { label: 'دانشجو', value: course.studentCount.toLocaleString('fa-IR') },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{item.label}</span>
                    <span className={`text-xs font-semibold ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`p-5 rounded-2xl border ${
              theme === 'dark' ? 'bg-indigo-500/10 border-indigo-500/20' : 'bg-indigo-50 border-indigo-200'
            }`}>
              <Award className="w-6 h-6 text-indigo-400 mb-3" />
              <h3 className={`font-bold mb-2 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                گواهینامه رسمی
              </h3>
              <p className={`text-xs leading-5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                پس از اتمام دوره، گواهینامه رسمی دریافت کنید.
              </p>
            </div>
          </div>
        </div>

        {/* Related Courses */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className={`text-2xl font-black mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              دوره‌های مرتبط
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((c, i) => (
                <CourseCard key={c.id} course={c} onNavigate={onNavigate} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
