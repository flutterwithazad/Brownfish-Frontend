import { Smartphone, Code2, Database, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12 md:mb-16">
    {subtitle && (
      <span className="text-sm font-mono tracking-wider uppercase text-amber-600 mb-3 block">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{children}</h2>
    <div className="h-1 w-20 bg-amber-600 mt-6"></div>
  </div>
);

interface ServiceItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  technologies: string[];
}

const ServiceCard = ({ icon: Icon, title, description, technologies }: ServiceItemProps) => (
  <div className="bg-neutral-900 border border-neutral-800 p-8 hover:border-amber-600/30 transition-all duration-300 group h-full flex flex-col">
    <div className="w-12 h-12 bg-amber-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 text-amber-600" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-neutral-400 mb-6 flex-grow leading-relaxed">{description}</p>
    <div>
      <p className="text-xs font-mono text-neutral-500 uppercase tracking-wide mb-3">Tech Stack</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge key={tech} variant="outline" className="border-neutral-700 text-neutral-300 bg-neutral-800/50 hover:bg-neutral-800 hover:text-white transition-colors">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  </div>
);

export default function Services() {
  return (
    <div className="animate-in fade-in duration-500 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Our Expertise">Technical Services</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard 
            icon={Smartphone}
            title="Mobile Application Development"
            description="Native-performance cross-platform apps. We don't just wrap websites; we build responsive, offline-first mobile experiences that pass App Store reviews on the first try."
            technologies={['Flutter', 'React Native', 'iOS/Swift', 'Android/Kotlin']}
          />
          <ServiceCard 
            icon={Code2}
            title="Modern Web Applications"
            description="SPA and SSR applications built for speed and SEO. From complex dashboards to high-traffic consumer platforms, we handle the full frontend lifecycle."
            technologies={['React', 'Next.js', 'TypeScript', 'Tailwind CSS']}
          />
          <ServiceCard 
            icon={Database}
            title="Backend & API Architecture"
            description="Robust server-side solutions. We design database schemas, REST/GraphQL APIs, and microservices that can handle spikes in load without crashing."
            technologies={['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS']}
          />
          <ServiceCard 
            icon={Rocket}
            title="MVP for Startups"
            description="Rapid prototyping for validation. We help you cut feature creep and launch a solid, scalable Minimum Viable Product in 8-12 weeks."
            technologies={['Supabase', 'Firebase', 'Next.js', 'Vercel']}
          />
        </div>
      </div>
    </div>
  );
}
