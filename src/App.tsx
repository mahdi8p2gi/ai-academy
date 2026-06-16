import { useState, useEffect } from 'react';
import { useThemeStore } from './store/useStore';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/shared/ScrollToTop';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import InstructorsPage from './pages/InstructorsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';

type Page =
  | 'home'
  | 'courses'
  | 'course-detail'
  | 'blog'
  | 'blog-post'
  | 'instructors'
  | 'about'
  | 'contact'
  | 'faq';

export default function App() {
  const { theme } = useThemeStore();
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentId, setCurrentId] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Apply dark/light mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  const handleNavigate = (page: string, id?: string) => {
    setCurrentPage(page as Page);
    setCurrentId(id);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'courses':
        return <CoursesPage onNavigate={handleNavigate} />;
      case 'course-detail':
        return <CourseDetailPage courseId={currentId || '1'} onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'blog-post':
        return <BlogPostPage postId={currentId || '1'} onNavigate={handleNavigate} />;
      case 'instructors':
        return <InstructorsPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'faq':
        return <FAQPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#050714]' : 'bg-white'
    }`}>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer onNavigate={handleNavigate} />
      <ScrollToTop />
    </div>
  );
}
