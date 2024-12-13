import { Button } from '@/components/ui/button';
import { NavigationItem } from '@/types/navigation';

interface MobileNavProps {
  items: NavigationItem[];
  isOpen: boolean;
  onClose: () => void;
  onConsultation: () => void;
}

export function MobileNav({ items, isOpen, onClose, onConsultation }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-neutral-800">
      <div className="container mx-auto px-4 py-4">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block py-3 text-base font-medium text-gray-300 hover:text-white transition-colors"
            onClick={onClose}
          >
            {item.name}
          </a>
        ))}
        <Button
          className="w-full mt-4 bg-[#00d4ff] hover:bg-[#00ff85] text-black transition-all duration-300"
          onClick={onConsultation}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}