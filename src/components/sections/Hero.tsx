import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StarScene } from '@/components/3d/StarScene';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
      
      <div className="relative z-20 text-center max-w-5xl mx-auto px-4 py-20">
        <StarScene />
        <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight mt-20 tracking-tight">
          Your Digital Partner for
          <span className="block gradient-text glow-text mt-2">
            Exceptional Growth
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light tracking-wide">
          Transforming Businesses with Stunning Designs, Smart Marketing, and Cutting-Edge AI Solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg"
            className="bg-[#00d4ff] hover:bg-[#00ff85] text-black transition-all duration-300 group text-lg btn-glow"
            onClick={() => window.open('https://calendly.com/linkanpatidar/1-1-call', '_blank')}
          >
            Get a Free Consultation
            <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="group text-lg border-[#00d4ff] hover:border-[#00ff85] hover:text-[#00ff85] transition-colors"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Our Portfolio
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}