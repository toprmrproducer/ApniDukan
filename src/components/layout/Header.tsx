import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold gradient-text">
            Your Apni Dukan
          </a>

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

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-neutral-800">
            <div className="container mx-auto px-4 py-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-base font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                className="w-full mt-4 bg-[#00d4ff] hover:bg-[#00ff85] text-black transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}