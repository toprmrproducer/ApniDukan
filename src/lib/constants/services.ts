import { Globe, TrendingUp, Mail, Bot } from 'lucide-react';

export const SERVICES = [
  {
    icon: Globe,
    title: 'Web Design',
    description: 'We create stunning, responsive websites that drive engagement and sales.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  },
  {
    icon: TrendingUp,
    title: 'SEO',
    description: 'Rank higher on search engines and increase visibility where it matters most.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  },
  {
    icon: Mail,
    title: 'Digital Marketing',
    description: 'Build meaningful connections with targeted marketing strategies.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  },
  {
    icon: Bot,
    title: 'AI Automations',
    description: 'Save time and scale faster with intelligent automation solutions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  },
] as const;