export const blogCategories = [
  { id: 'all', label: 'همه مقالات' },
  { id: 'ml', label: 'یادگیری ماشین' },
  { id: 'dl', label: 'دیپ لرنینگ' },
  { id: 'nlp', label: 'NLP' },
  { id: 'tools', label: 'ابزارها' },
  { id: 'career', label: 'مسیر شغلی' },
  { id: 'news', label: 'اخبار AI' },
];

export const blogPosts = [
  {
    id: '1',
    title: 'راهنمای کامل شروع یادگیری هوش مصنوعی در ۲۰۲۵',
    slug: 'guide-to-ai-learning-2025',
    category: 'career',
    categoryLabel: 'مسیر شغلی',
    author: 'دکتر علی رضایی',
    authorAvatar: '/images/instructor-1.jpg',
    authorId: '1',
    date: '۱۵ دی ۱۴۰۳',
    readTime: '8 دقیقه',
    thumbnail: null,
    gradient: 'from-blue-500 to-indigo-600',
    icon: '🚀',
    excerpt: 'اگر می‌خواهید در حوزه هوش مصنوعی شروع به یادگیری کنید، این مقاله نقشه راه کاملی برای شما آماده کرده است.',
    content: `
# راهنمای کامل شروع یادگیری هوش مصنوعی

هوش مصنوعی یکی از داغ‌ترین حوزه‌های فناوری در سال ۲۰۲۵ است. اما چطور باید شروع کنید؟

## ۱. پایه‌های ریاضی

قبل از هر چیز، باید پایه‌های ریاضی را تقویت کنید:
- **جبر خطی**: ماتریس‌ها، بردارها، مقادیر ویژه
- **حساب دیفرانسیل**: مشتق، گرادیان
- **آمار و احتمال**: توزیع‌ها، بیز

## ۲. برنامه‌نویسی با Python

Python زبان اصلی هوش مصنوعی است. باید با این موارد آشنا شوید:
- NumPy و Pandas
- Matplotlib و Seaborn
- Scikit-learn

## ۳. یادگیری ماشین

بعد از Python، نوبت یادگیری ماشین است:
- الگوریتم‌های کلاسیک
- شبکه‌های عصبی
- دیپ لرنینگ
    `,
    tags: ['AI', 'یادگیری', 'شغل', 'راهنما'],
    featured: true,
    related: ['2', '3', '4'],
  },
  {
    id: '2',
    title: 'GPT-5 چه تحولاتی در صنعت ایجاد می‌کند؟',
    slug: 'gpt-5-industry-revolution',
    category: 'news',
    categoryLabel: 'اخبار AI',
    author: 'مهندس سارا محمدی',
    authorAvatar: '/images/instructor-2.jpg',
    authorId: '2',
    date: '۱۰ دی ۱۴۰۳',
    readTime: '6 دقیقه',
    thumbnail: null,
    gradient: 'from-purple-500 to-pink-600',
    icon: '🤖',
    excerpt: 'OpenAI در حال توسعه GPT-5 است و انتظار می‌رود این مدل تحولات عظیمی در صنایع مختلف ایجاد کند.',
    content: 'محتوای کامل مقاله...',
    tags: ['GPT-5', 'OpenAI', 'آینده AI'],
    featured: true,
    related: ['1', '5', '6'],
  },
  {
    id: '3',
    title: 'مقایسه PyTorch و TensorFlow در ۲۰۲۵',
    slug: 'pytorch-vs-tensorflow-2025',
    category: 'tools',
    categoryLabel: 'ابزارها',
    author: 'دکتر امیر حسینی',
    authorAvatar: '/images/instructor-3.jpg',
    authorId: '3',
    date: '۵ دی ۱۴۰۳',
    readTime: '10 دقیقه',
    thumbnail: null,
    gradient: 'from-emerald-500 to-teal-600',
    icon: '⚖️',
    excerpt: 'کدام فریم‌ورک برای پروژه شما مناسب‌تر است؟ بررسی کامل PyTorch و TensorFlow.',
    content: 'محتوای کامل مقاله...',
    tags: ['PyTorch', 'TensorFlow', 'دیپ لرنینگ'],
    featured: false,
    related: ['1', '2', '4'],
  },
  {
    id: '4',
    title: 'آموزش LangChain از صفر: ساخت اپلیکیشن AI',
    slug: 'langchain-tutorial-zero-to-hero',
    category: 'tools',
    categoryLabel: 'ابزارها',
    author: 'دکتر علی رضایی',
    authorAvatar: '/images/instructor-1.jpg',
    authorId: '1',
    date: '۱ دی ۱۴۰۳',
    readTime: '12 دقیقه',
    thumbnail: null,
    gradient: 'from-cyan-500 to-blue-600',
    icon: '🔗',
    excerpt: 'LangChain یکی از محبوب‌ترین فریم‌ورک‌های ساخت اپلیکیشن‌های مبتنی بر LLM است.',
    content: 'محتوای کامل مقاله...',
    tags: ['LangChain', 'LLM', 'Python'],
    featured: false,
    related: ['2', '5', '6'],
  },
  {
    id: '5',
    title: 'درآمد یک ML Engineer در ایران چقدر است؟',
    slug: 'ml-engineer-salary-iran',
    category: 'career',
    categoryLabel: 'مسیر شغلی',
    author: 'مهندس سارا محمدی',
    authorAvatar: '/images/instructor-2.jpg',
    authorId: '2',
    date: '۲۵ آذر ۱۴۰۳',
    readTime: '7 دقیقه',
    thumbnail: null,
    gradient: 'from-orange-500 to-red-600',
    icon: '💰',
    excerpt: 'بررسی کامل بازار کار هوش مصنوعی در ایران و درآمد متخصصان ML.',
    content: 'محتوای کامل مقاله...',
    tags: ['شغل', 'درآمد', 'بازار کار'],
    featured: false,
    related: ['1', '3', '4'],
  },
  {
    id: '6',
    title: 'RAG چیست و چطور پیاده‌سازی کنیم؟',
    slug: 'what-is-rag-implementation',
    category: 'nlp',
    categoryLabel: 'NLP',
    author: 'دکتر امیر حسینی',
    authorAvatar: '/images/instructor-3.jpg',
    authorId: '3',
    date: '۲۰ آذر ۱۴۰۳',
    readTime: '9 دقیقه',
    thumbnail: null,
    gradient: 'from-violet-500 to-purple-600',
    icon: '🔍',
    excerpt: 'Retrieval Augmented Generation یا RAG روشی است که دقت LLM‌ها را به شکل چشمگیری افزایش می‌دهد.',
    content: 'محتوای کامل مقاله...',
    tags: ['RAG', 'LLM', 'Vector DB'],
    featured: false,
    related: ['2', '4', '5'],
  },
];
