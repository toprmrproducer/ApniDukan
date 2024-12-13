import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useScroll } from '@/hooks/use-scroll';
import { Logo } from './logo';
import { MobileNav } from './mobile-nav';
import { NavigationItem } from '@/types/navigation';

const navigation: NavigationItem[] = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
];

export function Header() {
  const isScrolled = useScroll(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleConsultation = () => {
    window.open('https://calendly.com/linkanpatidar/1-1-call', '_blank');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-[#00d4ff] hover:bg-[#00ff85] text-black transition-all duration-300"
              onClick={handleConsultation}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        <MobileNav
          items={navigation}
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          onConsultation={handleConsultation}
        />
      </div>
    </header>
  );
}