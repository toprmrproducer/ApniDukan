import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    name: 'TechCorp Redesign',
    service: 'Web Design & Development',
    outcome: '50% increase in conversions',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  },
  {
    name: 'GrowthAI Platform',
    service: 'AI Automation',
    outcome: '75% reduction in manual tasks',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  },
  {
    name: 'EcoStore SEO',
    service: 'SEO & Marketing',
    outcome: '200% organic traffic growth',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  },
];

export function Portfolio() {
  return (
    <section className="py-24 bg-neutral-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore some of the brands we've transformed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="group"
          >
            View More Success Stories
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ name, service, outcome, image }: {
  name: string;
  service: string;
  outcome: string;
  image: string;
}) {
  return (
    <Card className="group overflow-hidden border-neutral-800 hover:border-[#00d4ff] transition-all duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-gray-300 mb-1">{service}</p>
          <p className="text-[#00ff85]">{outcome}</p>
        </div>
      </div>
    </Card>
  );
}