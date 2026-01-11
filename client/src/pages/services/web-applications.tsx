import { Globe, Layout, Monitor, ArrowRight, Code, Server, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

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

export default function WebApplications() {
    return (
        <div className="animate-in fade-in duration-500 pt-20 pb-32">
            {/* Hero */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute bottom-0 right-0 w-1/2 h-full bg-amber-600/5 opacity-20 blur-3xl rounded-full -translate-x-1/2"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 mb-8">
                            <Monitor className="w-4 h-4 text-amber-600" />
                            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Modern Web Development</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
                            Scalable Web Apps, <span className="text-amber-600">Built for the Future.</span>
                        </h1>
                        <p className="text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed font-light">
                            From complex SaaS platforms to high-performance e-commerce sites. We utilize the latest web standards to ship fast, secure, and SEO-friendly applications.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white border-0 text-base h-14 px-8">
                                <Link href="/contact">
                                    Book Free Consultation
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:border-amber-600 hover:text-white hover:bg-transparent text-base h-14 px-8">
                                <Link href="/projects">
                                    View Web Projects
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-neutral-900/50 border-y border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-neutral-900 p-8 border border-neutral-800 rounded-lg">
                            <Zap className="w-10 h-10 text-amber-600 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">High Performance</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                Core Web Vitals optimized. We use SSR and SSG where appropriate to ensure lightning-fast load times.
                            </p>
                        </div>
                        <div className="bg-neutral-900 p-8 border border-neutral-800 rounded-lg">
                            <Layout className="w-10 h-10 text-amber-600 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Responsive Design</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                Perfect rendering on every screen size. Fluid layouts that adapt to the user's device seamlessly.
                            </p>
                        </div>
                        <div className="bg-neutral-900 p-8 border border-neutral-800 rounded-lg">
                            <Server className="w-10 h-10 text-amber-600 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Scalable Architecture</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                Built to handle growth. From hundreds to millions of users, our architecture scales with you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle subtitle="Our Web Stack">Tools & Technologies</SectionTitle>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {['React', 'Next.js', 'Typescript', 'Tailwind CSS', 'Node.js', 'Vite', 'GraphQL', 'AWS'].map((tech) => (
                            <div key={tech} className="flex items-center gap-3 p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                                <Code className="w-5 h-5 text-amber-600" />
                                <span className="text-white font-medium">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-neutral-900 to-neutral-800 border-t border-neutral-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a Powerful Web Application?</h2>
                    <p className="text-lg text-neutral-400 mb-10">
                        Get a free quote and architectural review for your next web project.
                    </p>
                    <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white border-0 text-base h-14 px-8">
                        <Link href="/contact">
                            Get Your Free Quote
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
