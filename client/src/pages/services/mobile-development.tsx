import { Smartphone, CheckCircle2, Zap, ArrowRight, Layers, SmartphoneCharging, GraduationCap } from "lucide-react";
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

export default function MobileDevelopment() {
    return (
        <div className="animate-in fade-in duration-500 pt-20 pb-32">
            {/* Hero */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-600/5 opacity-20 blur-3xl rounded-full translate-x-1/2"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 mb-8">
                            <Smartphone className="w-4 h-4 text-amber-600" />
                            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">iOS & Android Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
                            Native Performance, <span className="text-amber-600">Cross-Platform Efficiency.</span>
                        </h1>
                        <p className="text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed font-light">
                            We build high-performance mobile applications using Flutter and React Native that feel truly native. Offline-first, animation-rich, and ready for scale.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white border-0 text-base h-14 px-8">
                                <Link href="/contact">
                                    Book Free Consultation
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:border-amber-600 hover:text-white hover:bg-transparent text-base h-14 px-8">
                                <Link href="/projects">
                                    View Mobile Case Studies
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
                            <SmartphoneCharging className="w-10 h-10 text-amber-600 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Native Performance</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                60 FPS animations and native module integration ensure your app feels smooth and responsive on all devices.
                            </p>
                        </div>
                        <div className="bg-neutral-900 p-8 border border-neutral-800 rounded-lg">
                            <Layers className="w-10 h-10 text-amber-600 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Cross-Platform</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                One codebase for iOS and Android. Save 40% on development time and maintenance without compromising quality.
                            </p>
                        </div>
                        <div className="bg-neutral-900 p-8 border border-neutral-800 rounded-lg">
                            <GraduationCap className="w-10 h-10 text-amber-600 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Smart Architecture</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                Clean Architecture + BLoC/Redux for maintainable, testable, and scalable mobile codebases.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle subtitle="Our Mobile Stack">Tools & Technologies</SectionTitle>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Supabase', 'RevenueCat', 'Codemagic'].map((tech) => (
                            <div key={tech} className="flex items-center gap-3 p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                                <CheckCircle2 className="w-5 h-5 text-amber-600" />
                                <span className="text-white font-medium">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-neutral-900 to-neutral-800 border-t border-neutral-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have a Mobile App Idea?</h2>
                    <p className="text-lg text-neutral-400 mb-10">
                        Let's discuss how we can bring your mobile strategy to life with a free technical consultation.
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
