import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CallToActionSection } from '../components/CallToActionSection';

export const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CallToActionSection />
    </main>
  );
};
