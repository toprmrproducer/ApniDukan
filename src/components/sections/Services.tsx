import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { SERVICES } from '@/lib/constants/services';

export function Services() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Services, Tailored for Your Success"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-[#00d4ff] hover:bg-[#00ff85] text-black transition-all duration-300"
          >
            Discover How We Can Help
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, description, image }: (typeof SERVICES)[number]) {
  return (
    <Card className="group overflow-hidden border-neutral-800 hover:border-[#00d4ff] transition-all duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <Icon className="h-16 w-16 text-[#00d4ff] group-hover:text-[#00ff85] transition-colors" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </Card>
  );
}