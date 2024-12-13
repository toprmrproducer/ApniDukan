import { Lightbulb, Search, Target, Cpu } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Lightbulb,
    title: 'Stunning Web Design',
    description: 'Impress your audience with designs that convert.',
  },
  {
    icon: Search,
    title: 'Result-Driven SEO',
    description: 'Get found on Google and boost your organic traffic.',
  },
  {
    icon: Target,
    title: 'Smart Digital Marketing',
    description: 'Reach your ideal audience with precision campaigns.',
  },
  {
    icon: Cpu,
    title: 'AI Automations',
    description: 'Streamline your operations with cutting-edge AI tools.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-neutral-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Businesses Trust <span className="text-[#00d4ff]">Your Apni Dukan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver tangible results through innovation, creativity, and technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              Icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ Icon, title, description }: {
  Icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 bg-black/50 border-neutral-800 hover:border-[#00d4ff] transition-all duration-300 group">
      <Icon className="h-10 w-10 mb-4 text-[#00d4ff] group-hover:text-[#00ff85] transition-colors" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  );
}