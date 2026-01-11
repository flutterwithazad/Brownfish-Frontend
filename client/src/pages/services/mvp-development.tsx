import { Rocket, Target, TrendingUp, Clock, Lightbulb, ArrowRight } from "lucide-react";
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

export default function MVPDevelopment() {
    return (
        <div className="animate-in fade-in duration-500 pt-20 pb-32">
            {/* Hero */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-amber-600/5 opacity-20 blur-3xl rounded-full translate-y-1/2"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 mb-8">
                            <Rocket className="w-4 h-4 text-amber-600" />
                            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Startup Accelerators</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
                            Validate Fast, <span className="text-amber-600">Scale Confidence.</span>
                        </h1>
                        <p className="text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed font-light">
                            We help founders turn ideas into market-ready products in weeks, not months. Focus on your business while we handle the tech.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white border-0 text-base h-14 px-8">
                                <Link href="/contact">
                                    Book Free Consultation
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:border-amber-600 hover:text-white hover:bg-transparent text-base h-14 px-8">
                                <Link href="/projects">
                                    See Startup Case Studies
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
                            <Clock className="w-10 h-10 text-amber-600 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Speed to Market</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                Launch your MVP in 8-12 weeks. We prioritize core features to get you in front of users fast.
                            </p>
                        </div>
                        <div className="bg-neutral-900 p-8 border border-neutral-800 rounded-lg">
                            <Target className="w-10 h-10 text-amber-600 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Focused Scope</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                We help you define the most critical features for your initial launch, avoiding feature creep.
                            </p>
                        </div>
                        <div className="bg-neutral-900 p-8 border border-neutral-800 rounded-lg">
                            <TrendingUp className="w-10 h-10 text-amber-600 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Growth Ready</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                Code written to scale. When you get traction, your tech stack won't hold you back.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle subtitle="Our MVP Stack">Fast Iteration Tools</SectionTitle>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {['Next.js', 'Supabase', 'Vercel', 'Stripe', 'Tailwind', 'Shadcn UI', 'PostHog', 'Resend'].map((tech) => (
                            <div key={tech} className="flex items-center gap-3 p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                                <Lightbulb className="w-5 h-5 text-amber-600" />
                                <span className="text-white font-medium">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-neutral-900 to-neutral-800 border-t border-neutral-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have a Startup Idea?</h2>
                    <p className="text-lg text-neutral-400 mb-10">
                        Let's validate your concept with a free consultation and roadmap session.
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
