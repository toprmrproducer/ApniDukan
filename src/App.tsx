import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/Hero';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { WaveBackground } from '@/components/effects/WaveBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <WaveBackground />
      <Header />
      <Hero />
      <WhyChooseUs />
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
    </div>
  );
}