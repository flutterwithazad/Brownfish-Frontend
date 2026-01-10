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
      <div className="flex flex-wrap gap-4 mb-6">
        {playStoreUrl && (
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium rounded-md border border-neutral-700 hover:border-amber-600 transition-all duration-300"
          >
            <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.14L6.05,2.66Z" /></svg>
            <span>Get it on Google Play</span>
          </a>
        )}
        {appStoreUrl && (
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium rounded-md border border-neutral-700 hover:border-amber-600 transition-all duration-300"
          >
            <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.69C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" /></svg>
            <span>Download on App Store</span>
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
            title="UstaHub - Service Provider & Consumer App"
            category="Mobile App & Admin Panel"
            status="Live"
            description="A dual-role platform for service providers and consumers with unified login. Includes a robust web-based admin panel for management. Features push notifications for real-time updates."
            outcome="Streamlined service booking and management with real-time notifications."
            appStoreUrl="https://apps.apple.com/in/app/ustahub/id6753018350"
            stack={['Flutter', 'Laravel', 'Firebase', 'Push Notifications']}
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
