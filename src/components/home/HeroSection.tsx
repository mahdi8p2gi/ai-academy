import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Sparkles, ChevronDown } from 'lucide-react';
import { useThemeStore } from '../../store/useStore';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const typewriterTexts = [
  'یادگیری ماشین',
  'دیپ لرنینگ',
  'هوش مصنوعی مولد',
  'پردازش زبان طبیعی',
  'بینایی کامپیوتر',
  'مدل‌های زبانی بزرگ',
];

function TypeWriter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const current = typewriterTexts[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1));
          setSpeed(80);
        } else {
          setSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          setSpeed(40);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % typewriterTexts.length);
          setSpeed(200);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, speed]);

  return (
    <span className="text-gradient inline-block min-w-[8ch]">
      {displayText}
      <span className="animate-pulse text-indigo-400">|</span>
    </span>
  );
}

export default function HeroSection({ onNavigate }: HeroProps) {
  const { theme } = useThemeStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    const count = 60;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      theme === 'dark' ? 'bg-[#050714]' : 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30'
    }`}>
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
          style={{
            background: theme === 'dark' ? 'rgba(99,102,241,0.1)' : 'rgba(99,102,241,0.08)',
            borderColor: theme === 'dark' ? 'rgba(99,102,241,0.3)' : 'rgba(99,102,241,0.2)',
          }}
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span className={`text-xs font-medium ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-600'}`}>
            پیشرفته‌ترین پلتفرم آموزش AI به فارسی
          </span>
          <span className="px-2 py-0.5 bg-indigo-500 text-white text-[10px] font-bold rounded-full">NEW</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}
        >
          مهارت‌های
          <br />
          <TypeWriter />
          <br />
          را از صفر بیاموز
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`text-lg sm:text-xl max-w-2xl mx-auto leading-8 mb-10 ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          با بهترین مدرسین ایران، دوره‌های جامع AI را به زبان فارسی بیاموزید. 
          از مفاهیم پایه تا پروژه‌های حرفه‌ای و استخدام در صنعت.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={() => onNavigate('courses')}
            whileHover={{ scale: 1.03, boxShadow: '0 20px 60px rgba(99,102,241,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-base rounded-2xl shadow-xl shadow-indigo-500/25 transition-all duration-300"
          >
            شروع رایگان
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`flex items-center gap-2.5 px-8 py-4 font-semibold text-base rounded-2xl border transition-all duration-300 ${
              theme === 'dark'
                ? 'border-white/10 text-white hover:bg-white/5'
                : 'border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
              <Play className="w-4 h-4 text-white fill-white mr-0.5" />
            </div>
            مشاهده دمو
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { value: '+۵۰,۰۰۰', label: 'دانشجو فعال' },
            { value: '+۱۰۰', label: 'دوره تخصصی' },
            { value: '۴.۸/۵', label: 'میانگین امتیاز' },
            { value: '+۹۵٪', label: 'رضایت دانشجویان' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-2xl font-black mb-0.5 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {stat.value}
              </div>
              <div className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>اسکرول کنید</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className={`w-5 h-5 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`} />
        </motion.div>
      </motion.div>
    </section>
  );
}
