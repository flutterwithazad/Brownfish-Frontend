import { Terminal, CheckCircle2, Globe, ArrowRight, ChevronRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

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

export default function Home() {
  const [_, setLocation] = useLocation();

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-800/20 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
              <span className="text-xs font-mono text-neutral-400">Accepting New Projects for Q1 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-8">
              Engineering <span className="text-neutral-500">Digital Resilience.</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed font-light">
              Brown Fish Technologies builds scalable, mission-critical software for ambitious startups and enterprises. We prioritize architecture over aesthetics and performance over promises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white border-0 text-base h-14 px-8">
                <Link href="/contact">
                  Book Technical Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:border-amber-600 hover:text-white hover:bg-transparent text-base h-14 px-8">
                <Link href="/projects">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-neutral-900/50 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Terminal,
                title: "Technical Depth",
                text: "We don't rely on drag-and-drop builders. We write clean, testable code designed to scale from day one."
              },
              {
                icon: CheckCircle2,
                title: "Transparent Process",
                text: "No black boxes. You get direct access to engineers, weekly sprints, and honest feasibility assessments."
              },
              {
                icon: Globe,
                title: "Global Standards",
                text: "Building for US, UK, and UAE markets requires understanding compliance, speed, and reliability. We deliver that."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-start group">
                <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-600/10 transition-colors">
                  <item.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <SectionTitle subtitle="How We Work">Our Engineering Process</SectionTitle>
            <Button asChild variant="ghost" className="text-neutral-300 hover:text-amber-500 hover:bg-transparent mb-12 md:mb-0 p-0 group">
              <Link href="/services">
                Explore Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {['Discovery', 'Architecture', 'Development', 'QA & Audit', 'Deployment'].map((step, i) => (
              <div key={step} className="relative group">
                <div className="p-6 border border-neutral-800 bg-neutral-900 hover:border-amber-900/50 transition-colors h-full min-h-[160px] flex flex-col justify-between">
                  <span className="text-4xl font-bold text-neutral-800 group-hover:text-amber-900/40 transition-colors self-end">0{i + 1}</span>
                  <h4 className="text-white font-medium">{step}</h4>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ChevronRight className="w-6 h-6 text-neutral-800" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
