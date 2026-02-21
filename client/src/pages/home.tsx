import { Terminal, CheckCircle2, Globe, ArrowRight, ChevronRight, Code, Zap, Shield, Users, Layers, Smartphone, Database, PenTool, ShoppingCart, Wrench, Megaphone } from "lucide-react";
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
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    className="mb-12 md:mb-16"
  >
    {subtitle && (
      <span className="text-sm font-mono tracking-wider uppercase text-amber-600 mb-3 block">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{children}</h2>
    <div className="h-1 w-20 bg-amber-600 mt-6"></div>
  </motion.div>
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
    title: "Web Application Development",
    target: "Scale-ups & Enterprises",
    problem: "Legacy systems slowing down operations or poor user retention.",
    outcome: "High-performance, SEO-ready web apps that convert visitors.",
    link: "/services/web-applications"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    target: "Startups & Consumer Brands",
    problem: "Need to reach users on both iOS and Android without double the cost.",
    outcome: "Native-feel Flutter apps with 99% code sharing & fast launch.",
    link: "/services/mobile-development"
  },
  {
    icon: Zap,
    title: "Startup MVP Development",
    target: "Founders & Visionaries",
    problem: "Validating an idea quickly without wasting months on development.",
    outcome: "Market-ready MVP in 4-8 weeks to secure funding or users.",
    link: "/services/mvp-development"
  },
  {
    icon: PenTool,
    title: "UI/UX Designing",
    target: "Product Teams",
    problem: "Complex interfaces confusing users and killing engagement.",
    outcome: "Intuitive, accessible designs that increase user retention.",
    link: "/services"
  },
  {
    icon: Database,
    title: "Backend & API Development",
    target: "Data-Heavy Platforms",
    problem: "Security vulnerabilities and inability to handle traffic spikes.",
    outcome: "Scalable, secure architecture that grows with your business.",
    link: "/services/backend-architecture"
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    target: "Established Products",
    problem: "Downtime, broken features, and outdated security.",
    outcome: "24/7 reliability, proactive monitoring, and zero stress.",
    link: "/services"
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    target: "Growth-Focused Brands",
    problem: "Invisible online presence and wasted ad budget.",
    outcome: "Turnkey SEO, Google Ads & social campaigns that scale.",
    link: "/services/digital-marketing"
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
  },
  {
    title: "Attendio - Self Attendance",
    category: "Mobile App",
    tech: "Flutter",
    problem: "Keeping track of attendance manually is tedious and prone to errors.",
    solution: "Smart attendance tracking with easy check-in/out and reports.",
    result: "Live on Play Store.",
    image: "/projects/attendio.png",
    playStore: "https://play.google.com/store/apps/details?id=com.brownfish.attendio"
  },
  {
    title: "DispoMail",
    category: "Utility App",
    tech: "Flutter",
    problem: "Spam emails cluttering personal inboxes after signing up for services.",
    solution: "Instant disposable email generation for privacy and spam protection.",
    result: "Live on Play Store.",
    image: "/projects/dispomail.png",
    playStore: "https://play.google.com/store/apps/details?id=com.brownfish.dispomail"
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
    <div className="w-full overflow-hidden">
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
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-800/20 to-transparent opacity-50 block dark:hidden"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-800/20 to-transparent"
          ></motion.div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
              <span className="text-xs font-mono text-neutral-400">Accepting New Projects for Q1 2026</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-8">
              We build scalable web & mobile apps for <span className="text-amber-600">startups</span> and growing businesses.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed font-light">
              Get to market faster with high-performance software. We combine engineering excellence with business strategy to deliver ROI-focused digital products.
            </motion.p>

            {/* Trust Signals near CTA */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 mb-10 text-sm text-neutral-500 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" /> 12+ Years Exp
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" /> 200+ Projects
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" /> Global Clients
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white border-0 text-base h-14 px-8 transition-transform hover:scale-105 active:scale-95">
                <Link href="/contact">
                  Book a Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:border-amber-600 hover:text-white hover:bg-transparent text-base h-14 px-8 transition-transform hover:scale-105 active:scale-95">
                <Link href="/contact">
                  Get a Project Estimate
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section (Outcome Driven) */}
      <section className="py-24 bg-neutral-900/30 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <SectionTitle subtitle="What We Do">End-to-End Engineering</SectionTitle>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Button asChild variant="ghost" className="text-neutral-300 hover:text-amber-500 hover:bg-transparent mb-12 md:mb-0 p-0 group">
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, idx) => (
              <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -5 }}>
                <Link href={service.link}>
                  <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg hover:border-amber-600/30 transition-all duration-300 group cursor-pointer h-full flex flex-col hover:shadow-lg hover:shadow-amber-900/10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center group-hover:bg-amber-600/10 transition-colors shrink-0">
                        <service.icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="text-xs font-mono text-neutral-500 bg-neutral-950 px-2 py-1 rounded border border-neutral-800">
                        For: <span className="text-neutral-300">{service.target}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">{service.title}</h3>

                    <div className="space-y-4 mt-auto">
                      <div>
                        <span className="text-xs text-red-400 font-mono block mb-1">The Problem:</span>
                        <p className="text-sm text-neutral-400 leading-relaxed">{service.problem}</p>
                      </div>
                      <div className="border-t border-neutral-800 pt-3">
                        <span className="text-xs text-green-500 font-mono block mb-1">The Outcome:</span>
                        <p className="text-sm text-neutral-300 leading-relaxed font-medium">{service.outcome}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Startup MVP Focus Section */}
      <section className="py-24 bg-neutral-900 border-b border-neutral-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-600/5 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-amber-600 font-mono tracking-wider uppercase text-sm mb-4 block">Startup Accelerator</motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">From Idea to Market in <span className="text-amber-600">Weeks</span>, Not Months.</motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-neutral-400 mb-8 leading-relaxed">
                Most startups fail because they build too much, too slow. We help you validate your idea, build a lean MVP, and launch fast to get real user feedback.
              </motion.p>

              <div className="space-y-6">
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center shrink-0 border border-amber-600/20">
                    <Zap className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Rapid Prototyping</h4>
                    <p className="text-neutral-400 text-sm">Visualise your app in days. No code, just clarity.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center shrink-0 border border-amber-600/20">
                    <Layers className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Scalable MVP Build</h4>
                    <p className="text-neutral-400 text-sm">Core features only. Built on a stack that scales (Flutter/Next.js).</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center shrink-0 border border-amber-600/20">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Launch & Iterate</h4>
                    <p className="text-neutral-400 text-sm">Deploy to stores, gather data, and improve based on real usage.</p>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="mt-10">
                <Button asChild size="lg" className="bg-white text-neutral-900 hover:bg-neutral-200">
                  <Link href="/services/mvp-development">
                    Start Your MVP Journey <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-amber-900 rounded-2xl opacity-20 blur-lg"></div>
              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Code className="w-64 h-64 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Discovery Checklist</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>Problem-Solution Fit Analysis</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>Competitor Technical Audit</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>Feature Prioritization (MoSCoW)</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>Tech Stack Selection</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>Go-to-Market Technical Roadmap</span>
                  </li>
                </ul>
                <div className="mt-8 pt-8 border-t border-neutral-700">
                  <div className="text-center">
                    <p className="text-neutral-400 text-sm mb-3">Want this checklist for your idea?</p>
                    <Button asChild variant="outline" className="w-full border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-white">
                      <Link href="/contact">Get Free Assessment</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Why Choose Us">Our Development Process</SectionTitle>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { num: "01", title: "Discovery & Strategy", desc: "We analyze your business goals, target audience, and technical requirements to create a roadmap." },
              { num: "02", title: "Design & Prototype", desc: "We create wireframes and high-fidelity designs to visualize the user journey before coding." },
              { num: "03", title: "Agile Development", desc: "We build in sprints, delivering frequent updates and gathering feedback to ensure alignment." },
              { num: "04", title: "Testing & QA", desc: "Rigorous testing for bugs, security vulnerabilities, and performance bottlenecks." },
              { num: "05", title: "Launch & Scale", desc: "Seamless deployment and scaling infrastructure to handle growth." },
              { num: "06", title: "Support & Maintenance", desc: "Post-launch monitoring, updates, and feature enhancements to keep you ahead." },
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex gap-4">
                <span className="text-5xl font-bold text-neutral-800">{step.num}</span>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">{step.title}</h4>
                  <p className="text-neutral-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-neutral-900 border border-neutral-800 rounded-lg"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Featured Projects (Case Studies) */}
      <section className="py-24 bg-neutral-900/30 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <SectionTitle subtitle="Case Studies">Recent Work</SectionTitle>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Button asChild variant="ghost" className="text-neutral-300 hover:text-amber-500 hover:bg-transparent mb-12 md:mb-0 p-0 group">
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="bg-neutral-800/40 h-64 w-full rounded-lg mb-6 overflow-hidden relative flex items-center justify-center">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105 drop-shadow-lg" />
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Testimonials">Client Success Stories</SectionTitle>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8 bg-neutral-900 border border-neutral-800 w-fit px-4 py-2 rounded-full mx-auto md:mx-0"
          >
            <div className="flex text-amber-500">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
            </div>
            <span className="text-white font-bold">4.9/5</span>
            <span className="text-neutral-500 border-l border-neutral-700 pl-4">Review Ratings</span>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg relative">
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
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 pt-8 border-t border-neutral-800 text-center"
          >
            <p className="text-neutral-500 uppercase tracking-widest text-sm mb-8">Trusted by innovaters at</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {companies.map((c, i) => (
                <span key={i} className="text-xl font-bold text-white">{c.name}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-neutral-900/30 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Collaboration">Engagement Models</SectionTitle>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg text-center hover:border-amber-600/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Fixed Price</h3>
              <p className="text-sm text-neutral-400 mb-4">Best for clear, well-defined project scopes.</p>
              <ul className="text-sm text-neutral-500 space-y-2 mb-6 text-left pl-4 list-disc">
                <li>Fixed budget & timeline</li>
                <li>Detailed requirements</li>
                <li>Milestone-based delivery</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg text-center hover:border-amber-600/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Hourly</h3>
              <p className="text-sm text-neutral-400 mb-4">Flexible support for ongoing maintenance.</p>
              <ul className="text-sm text-neutral-500 space-y-2 mb-6 text-left pl-4 list-disc">
                <li>Pay as you go</li>
                <li>Flexible priorities</li>
                <li>Direct task management</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg text-center hover:border-amber-600/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Dedicated Team</h3>
              <p className="text-sm text-neutral-400 mb-4">Your own extended engineering team.</p>
              <ul className="text-sm text-neutral-500 space-y-2 mb-6 text-left pl-4 list-disc">
                <li>Full-time allocation</li>
                <li>Integrated with your team</li>
                <li>Long-term roadmap</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg text-center hover:border-amber-600/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">MVP Development</h3>
              <p className="text-sm text-neutral-400 mb-4">Rapid launch for startups.</p>
              <ul className="text-sm text-neutral-500 space-y-2 mb-6 text-left pl-4 list-disc">
                <li>Core features only</li>
                <li>4-8 weeks to launch</li>
                <li>Scalable architecture</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-24 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Our Office">Visit Our HQ</SectionTitle>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[400px] md:h-[500px] bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 relative z-0 group"
          >
            <iframe
              src="https://maps.google.com/maps?q=BrownFish+Technologies+South+Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Let's Discuss Your Project
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-400 mb-10 leading-relaxed"
          >
            Ready to turn your idea into a successful product? Contact us for a free technical consultation and estimate.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-neutral-900 p-8 rounded-lg border border-neutral-800 inline-block text-left w-full max-w-lg mx-auto"
          >
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

            <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg transition-transform hover:scale-105 active:scale-95">
              <Link href="/contact">Book Your Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
