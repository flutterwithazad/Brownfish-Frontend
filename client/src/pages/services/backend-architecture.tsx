import { PageHero } from "@/components/InnerPage";
import { Database, Server, Network, ShieldCheck, Cpu, HardDrive, ArrowRight } from "lucide-react";
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

export default function BackendArchitecture() {
    return (
        <div className="inner-page service-detail">
            {/* Hero */}
            <PageHero back eyebrow="SYSTEMS / BACKEND & APIs" title="Strong foundations." accent="Room to grow." description="Reliable infrastructure behind remarkable experiences. APIs, databases, and cloud systems designed around your next chapter."/>

            {/* Features */}
            <section className="py-24 bg-neutral-900/50 border-y border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-neutral-900 p-8 border border-neutral-800 rounded-lg">
                            <Network className="w-10 h-10 text-amber-600 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Scalable APIs</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                RESTful and GraphQL APIs designed for ease of consumption and massive scale.
                            </p>
                        </div>
                        <div className="bg-neutral-900 p-8 border border-neutral-800 rounded-lg">
                            <ShieldCheck className="w-10 h-10 text-amber-600 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Security First</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                OWASP Top 10 compliance, JWT authentication, and end-to-end encryption.
                            </p>
                        </div>
                        <div className="bg-neutral-900 p-8 border border-neutral-800 rounded-lg">
                            <HardDrive className="w-10 h-10 text-amber-600 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Database Optimization</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                Expert schema design, indexing strategies, and query optimization for PostgreSQL and NoSQL.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle subtitle="Our Backend Stack">Tools & Technologies</SectionTitle>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Go', 'Python'].map((tech) => (
                            <div key={tech} className="flex items-center gap-3 p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                                <Cpu className="w-5 h-5 text-amber-600" />
                                <span className="text-white font-medium">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-neutral-900 to-neutral-800 border-t border-neutral-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a Rock-Solid Backend?</h2>
                    <p className="text-lg text-neutral-400 mb-10">
                        Schedule a free backend architecture review.
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
