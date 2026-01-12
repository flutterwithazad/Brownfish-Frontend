import { Terminal, CheckCircle2, Globe, ArrowRight, ChevronRight, Code, Zap, Shield, Users, Layers, Smartphone, Database, PenTool, ShoppingCart, Wrench } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

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

const companies = [
  { name: "TechVenture Labs", initials: "TVL" },
  { name: "DataFlow Systems", initials: "DFS" },
  { name: "CloudScale AI", initials: "CSA" },
  { name: "FinCore Analytics", initials: "FCA" },
  { name: "NexGen Infrastructure", initials: "NGI" },
];

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Scalable, SEO-optimized web applications built with Next.js and React.",
    benefit: "Faster load times, higher conversion.",
    link: "/services/web-applications"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform apps for iOS and Android using Flutter.",
    benefit: "One codebase, dual-platform reach.",
    link: "/services/mobile-development"
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "User-centric interfaces that are intuitive, accessible, and beautiful.",
    benefit: "Increased user retention and engagement.",
    link: "/services"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "Custom E-commerce stores with secure payment gateways and inventory management.",
    benefit: "Seamless shopping experiences that drive sales.",
    link: "/services"
  },
  {
    icon: Database,
    title: "Backend & API",
    desc: "Robust, secure server-side logic and API integrations.",
    benefit: "Reliable performance under high load.",
    link: "/services/backend-architecture"
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Ongoing updates, security patches, and performance monitoring.",
    benefit: "Zero downtime and peace of mind.",
    link: "/services"
  }
];

const testimonials = [
  {
    quote: "Brown Fish Technologies transformed our MVP into a full-scale product in record time. Their architectural decisions saved us months of rework.",
    name: "Sarah Jenkins",
    role: "CTO, FinCore Analytics"
  },
  {
    quote: "The team's transparency and technical depth are unmatched. They didn't just build what we asked for; they built what we needed.",
    name: "David Chen",
    role: "Founder, TechVenture Labs"
  }
];

const projects = [
  {
    title: "Ummah360",
    category: "Mobile App",
    tech: "Flutter",
    problem: "Fragmented Islamic apps for prayer, learning, and community.",
    solution: "All-in-one app with Quran tools, accuracy verified data, and community features.",
    result: "Live on Play Store & App Store.",
    image: "/projects/ummah360.png",
    playStore: "https://play.google.com/store/apps/details?id=com.brownfish.ummah360&hl=en_IN",
    appStore: "https://apps.apple.com/in/app/ummah360-quran-tutor-prayer/id6756374492"
  },
  {
    title: "UstaHub Service Platform",
    category: "Platform",
    tech: "Laravel + Flutter",
    problem: "Disconnected experience between service providers and customers.",
    solution: "Unified dual-role app with real-time booking and robust admin panel.",
    result: "Streamlined operations and live on App Store.",
    image: "/projects/ustahub.png",
    appStore: "https://apps.apple.com/in/app/ustahub/id6753018350"
  },
  {
    title: "Bitewise AI Scanner",
    category: "AI Tech",
    tech: "ML/AI",
    problem: "Difficulty in accessing instant, accurate nutritional data.",
    solution: "AI-powered barcode scanner for instant health analysis.",
    result: "Deployed on Android & iOS.",
    image: "/projects/bitewise-ai.png",
    playStore: "https://play.google.com/store/apps/details?id=com.brownfish.bitwise&hl=en_IN",
    appStore: "https://apps.apple.com/in/app/bitewise-ai/id6752122391"
  }
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.playStore && project.appStore) {
      setSelectedProject(project);
    } else if (project.playStore) {
      window.open(project.playStore, '_blank', 'noopener,noreferrer');
    } else if (project.appStore) {
      window.open(project.appStore, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="bg-neutral-900 border-neutral-800 text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Download {selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-neutral-400">
              Choose your preferred platform to download the app.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-4">
            {selectedProject?.playStore && (
              <a
                href={selectedProject.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-4 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg border border-neutral-700 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.14L6.05,2.66Z" /></svg>
                <span>Google Play Store</span>
              </a>
            )}
            {selectedProject?.appStore && (
              <a
                href={selectedProject.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-4 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg border border-neutral-700 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.69C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" /></svg>
                <span>Apple App Store</span>
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>

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
              We build scalable web & mobile apps for <span className="text-amber-600">startups</span> and growing businesses.
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed font-light">
              Get to market faster with high-performance software. We combine engineering excellence with business strategy to deliver ROI-focused digital products.
            </p>

            {/* Trust Signals near CTA */}
            <div className="flex flex-wrap items-center gap-6 mb-10 text-sm text-neutral-500 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" /> 12+ Years Exp
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" /> 200+ Projects
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" /> Global Clients
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white border-0 text-base h-14 px-8">
                <Link href="/contact">
                  Book a Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:border-amber-600 hover:text-white hover:bg-transparent text-base h-14 px-8">
                <Link href="/contact">
                  Get a Project Estimate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (Outcome Driven) */}
      <section className="py-24 bg-neutral-900/30 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <SectionTitle subtitle="What We Do">End-to-End Engineering</SectionTitle>
            <Button asChild variant="ghost" className="text-neutral-300 hover:text-amber-500 hover:bg-transparent mb-12 md:mb-0 p-0 group">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Link key={idx} href={service.link}>
                <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg hover:border-amber-600/30 transition-all duration-300 group cursor-pointer h-full">
                  <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-600/10 transition-colors">
                    <service.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">{service.title}</h3>
                  <p className="text-neutral-400 mb-4">{service.desc}</p>
                  <div className="text-sm border-t border-neutral-800 pt-4 text-neutral-500 font-mono">
                    <strong className="text-amber-600">Benefit:</strong> {service.benefit}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Why Choose Us">Our Development Process</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            <div className="flex gap-4">
              <span className="text-5xl font-bold text-neutral-800">01</span>
              <div>
                <h4 className="text-white font-bold text-xl mb-2">Discovery & Strategy</h4>
                <p className="text-neutral-400">We analyze your business goals, target audience, and technical requirements to create a roadmap.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-5xl font-bold text-neutral-800">02</span>
              <div>
                <h4 className="text-white font-bold text-xl mb-2">Design & Prototype</h4>
                <p className="text-neutral-400">We create wireframes and high-fidelity designs to visualize the user journey before coding.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-5xl font-bold text-neutral-800">03</span>
              <div>
                <h4 className="text-white font-bold text-xl mb-2">Agile Development</h4>
                <p className="text-neutral-400">We build in sprints, delivering frequent updates and gathering feedback to ensure alignment.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-5xl font-bold text-neutral-800">04</span>
              <div>
                <h4 className="text-white font-bold text-xl mb-2">Testing & QA</h4>
                <p className="text-neutral-400">Rigorous testing for bugs, security vulnerabilities, and performance bottlenecks.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-5xl font-bold text-neutral-800">05</span>
              <div>
                <h4 className="text-white font-bold text-xl mb-2">Launch & Scale</h4>
                <p className="text-neutral-400">Seamless deployment and scaling infrastructure to handle growth.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-5xl font-bold text-neutral-800">06</span>
              <div>
                <h4 className="text-white font-bold text-xl mb-2">Support & Maintenance</h4>
                <p className="text-neutral-400">Post-launch monitoring, updates, and feature enhancements to keep you ahead.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-neutral-900 border border-neutral-800 rounded-lg">
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="w-8 h-8 text-amber-600 mb-4" />
              <h5 className="text-white font-bold mb-2">Transparent Communication</h5>
              <p className="text-sm text-neutral-400">Direct access to your project manager and developers.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Code className="w-8 h-8 text-amber-600 mb-4" />
              <h5 className="text-white font-bold mb-2">Clean, Scalable Code</h5>
              <p className="text-sm text-neutral-400">Built for the future, easy to maintain and extend.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-8 h-8 text-amber-600 mb-4" />
              <h5 className="text-white font-bold mb-2">Post-Launch Support</h5>
              <p className="text-sm text-neutral-400">We don't disappear after launch. We're here to help you grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects (Case Studies) */}
      <section className="py-24 bg-neutral-900/30 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <SectionTitle subtitle="Case Studies">Recent Work</SectionTitle>
            <Button asChild variant="ghost" className="text-neutral-300 hover:text-amber-500 hover:bg-transparent mb-12 md:mb-0 p-0 group">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group cursor-pointer" onClick={() => handleProjectClick(project)}>
                <div className="bg-neutral-800 h-64 w-full rounded-lg mb-6 overflow-hidden relative">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="absolute inset-0 bg-neutral-900/50 flex items-center justify-center group-hover:bg-neutral-900/30 transition-all">
                      <span className="text-amber-600 font-mono text-xl font-bold">{project.title}</span>
                    </div>
                  )}
                </div>
                <div className="flex gap-3 mb-3">
                  <span className="text-xs font-mono bg-neutral-900 text-amber-600 px-2 py-1 rounded">{project.category}</span>
                  <span className="text-xs font-mono bg-neutral-900 text-neutral-400 px-2 py-1 rounded">{project.tech}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">{project.title}</h3>
                <p className="text-neutral-400 mb-4 text-sm">
                  <strong className="text-neutral-300">Problem:</strong> {project.problem}<br />
                  <strong className="text-neutral-300">Solution:</strong> {project.solution}<br />
                  <strong className="text-neutral-300">Result:</strong> {project.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Testimonials">Client Success Stories</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg relative">
                <div className="text-4xl text-amber-900/40 absolute top-6 left-6 font-serif">"</div>
                <p className="text-lg text-neutral-300 italic mb-6 relative z-10 pl-4">{t.quote}</p>
                <div className="flex items-center gap-4 pl-4">
                  <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-bold">{t.name}</div>
                    <div className="text-sm text-neutral-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-neutral-800 text-center">
            <p className="text-neutral-500 uppercase tracking-widest text-sm mb-8">Trusted by innovaters at</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {companies.map((c, i) => (
                <span key={i} className="text-xl font-bold text-white">{c.name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-neutral-900/30 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Collaboration">Engagement Models</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg text-center hover:border-amber-600/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Fixed Price</h3>
              <p className="text-sm text-neutral-400 mb-4">Best for clear, well-defined project scopes.</p>
              <ul className="text-sm text-neutral-500 space-y-2 mb-6 text-left pl-4 list-disc">
                <li>Fixed budget & timeline</li>
                <li>Detailed requirements</li>
                <li>Milestone-based delivery</li>
              </ul>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg text-center hover:border-amber-600/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Hourly</h3>
              <p className="text-sm text-neutral-400 mb-4">Flexible support for ongoing maintenance.</p>
              <ul className="text-sm text-neutral-500 space-y-2 mb-6 text-left pl-4 list-disc">
                <li>Pay as you go</li>
                <li>Flexible priorities</li>
                <li>Direct task management</li>
              </ul>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg text-center hover:border-amber-600/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Dedicated Team</h3>
              <p className="text-sm text-neutral-400 mb-4">Your own extended engineering team.</p>
              <ul className="text-sm text-neutral-500 space-y-2 mb-6 text-left pl-4 list-disc">
                <li>Full-time allocation</li>
                <li>Integrated with your team</li>
                <li>Long-term roadmap</li>
              </ul>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg text-center hover:border-amber-600/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">MVP Development</h3>
              <p className="text-sm text-neutral-400 mb-4">Rapid launch for startups.</p>
              <ul className="text-sm text-neutral-500 space-y-2 mb-6 text-left pl-4 list-disc">
                <li>Core features only</li>
                <li>4-8 weeks to launch</li>
                <li>Scalable architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Discuss Your Project</h2>
          <p className="text-xl text-neutral-400 mb-10 leading-relaxed">
            Ready to turn your idea into a successful product? Contact us for a free technical consultation and estimate.
          </p>
          <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-800 inline-block text-left w-full max-w-lg mx-auto">
            <div className="flex gap-4 items-center mb-6">
              <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-amber-600">
                1
              </div>
              <div>
                <h4 className="text-white font-bold">Fill Brief Form</h4>
                <p className="text-sm text-neutral-500">Tell us about your goals.</p>
              </div>
            </div>
            <div className="flex gap-4 items-center mb-6">
              <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-amber-600">
                2
              </div>
              <div>
                <h4 className="text-white font-bold">Free Discovery Call</h4>
                <p className="text-sm text-neutral-500">We discuss technical feasibility.</p>
              </div>
            </div>
            <div className="flex gap-4 items-center mb-8">
              <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-amber-600">
                3
              </div>
              <div>
                <h4 className="text-white font-bold">Detailed Propsoal</h4>
                <p className="text-sm text-neutral-500">Timeline, budget, and roadmap.</p>
              </div>
            </div>

            <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg">
              <Link href="/contact">Book Your Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
