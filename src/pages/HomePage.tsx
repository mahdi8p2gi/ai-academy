import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import FeaturedCourses from '../components/home/FeaturedCourses';
import LearningPaths from '../components/home/LearningPaths';
import WhyUs from '../components/home/WhyUs';
import InstructorsPreview from '../components/home/InstructorsPreview';
import Testimonials from '../components/home/Testimonials';
import FAQSection from '../components/home/FAQSection';
import Newsletter from '../components/home/Newsletter';

interface HomePageProps {
  onNavigate: (page: string, id?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main>
      <HeroSection onNavigate={onNavigate} />
      <StatsSection />
      <FeaturedCourses onNavigate={onNavigate} />
      <LearningPaths onNavigate={onNavigate} />
      <WhyUs />
      <InstructorsPreview onNavigate={onNavigate} />
      <Testimonials />
      <FAQSection />
      <Newsletter />
    </main>
  );
}
