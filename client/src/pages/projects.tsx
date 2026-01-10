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

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  outcome: string;
  stack: string[];
  status: 'Live' | 'In Development' | 'Case Study';
  playStoreUrl?: string;
  appStoreUrl?: string;
}

const ProjectCard = ({ title, category, description, outcome, stack, status, playStoreUrl, appStoreUrl }: ProjectCardProps) => (
  <div className="flex flex-col border-l-2 border-neutral-800 hover:border-amber-600 pl-8 py-4 transition-colors duration-300 group">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xs font-mono uppercase tracking-widest text-amber-600">{category}</span>
      <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
      <span className="text-xs text-neutral-500 font-mono">{status}</span>
    </div>
    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">{title}</h3>
    <p className="text-neutral-400 mb-6 max-w-2xl leading-relaxed">{description}</p>

    <div className="mb-6 bg-neutral-900/50 p-4 border border-neutral-800 rounded-lg">
      <strong className="text-white text-sm block mb-1 font-mono uppercase tracking-wide">Key Outcome</strong>
      <p className="text-neutral-300 text-sm">{outcome}</p>
    </div>

    {(playStoreUrl || appStoreUrl) && (
      <div className="flex gap-4 mb-6">
        {playStoreUrl && (
          <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-amber-600 hover:text-amber-500 font-medium underline-offset-4 hover:underline">
            Google Play
          </a>
        )}
        {appStoreUrl && (
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-amber-600 hover:text-amber-500 font-medium underline-offset-4 hover:underline">
            App Store
          </a>
        )}
      </div>
    )}

    <div className="flex flex-wrap gap-2 mt-auto">
      {stack.map((tech) => (
        <Badge key={tech} variant="secondary" className="bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white">
          #{tech}
        </Badge>
      ))}
    </div>
  </div>
);

export default function Projects() {
  return (
    <div className="animate-in fade-in duration-500 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Selected Work">Case Studies</SectionTitle>

        <div className="space-y-16">
          <ProjectCard
            title="Ummah360 - Quran Tutor & Prayer"
            category="Mobile App"
            status="Live"
            description="A comprehensive Islamic application featuring Quran learning tools, prayer times, and community features. Built to serve the global Muslim community with accurate data and educational resources."
            outcome="Successfully launched on both Android and iOS platforms."
            playStoreUrl="https://play.google.com/store/apps/details?id=com.brownfish.ummah360&hl=en_IN"
            appStoreUrl="https://apps.apple.com/in/app/ummah360-quran-tutor-prayer/id6756374492"
            stack={['Flutter', 'Dart', 'Firebase', 'Rest API']}
          />

          <ProjectCard
            title="FinTrack - Corporate Expense Management"
            category="SaaS Platform"
            status="Live"
            description="A UK-based fintech startup needed to replace their legacy Angular frontend. We rebuilt the dashboard using React and Next.js, implementing real-time data visualization for expense tracking."
            outcome="Reduced initial load time by 65%. Onboarded 50+ enterprise clients in Q1."
            stack={['React', 'TypeScript', 'D3.js', 'Node.js']}
          />

          <ProjectCard
            title="LogiChain - Supply Chain Logistics"
            category="Mobile App"
            status="Live"
            description="Designed and built a cross-platform mobile application for a logistics company to track fleet movements and inventory in real-time. Integrated with custom IoT sensors."
            outcome="Improved fleet efficiency by 22% and reduced lost cargo incidents by 40%."
            stack={['React Native', 'Firebase', 'Google Maps API', 'Redux']}
          />

          <ProjectCard
            title="MediConnect - Telehealth Portal"
            category="Healthcare Web App"
            status="Case Study"
            description="HIPAA-compliant patient portal allowing secure video consultations and medical record sharing. Focused heavily on accessibility and security standards."
            outcome="Passed third-party security audit with zero critical vulnerabilities. Served 10k+ patients in pilot phase."
            stack={['Next.js', 'PostgreSQL', 'WebRTC', 'Tailwind CSS']}
          />
        </div>
      </div>
    </div>
  );
}
