import { PageHero } from "@/components/InnerPage";
import { Megaphone, Search, BarChart3, Users, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
    <div className="mb-12">
        {subtitle && (
            <span className="text-sm font-mono tracking-wider uppercase text-amber-600 mb-3 block">
                {subtitle}
            </span>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{children}</h2>
        <div className="h-1 w-20 bg-amber-600 mt-6"></div>
    </div>
);

const marketingServices = [
    {
        icon: Search,
        title: "Search Engine Optimization (SEO)",
        description: "Dominate search results with our data-driven SEO strategies. We focus on technical SEO, content optimization, and high-quality link building to drive organic traffic that converts.",
        features: ["Technical Site Audit", "Keyword Research & Strategy", "On-Page & Off-Page Optimization", "Local SEO Domination"]
    },
    {
        icon: Target,
        title: "PPC & Performance Marketing",
        description: "Instant visibility and guaranteed results. Our ad campaigns on Google and Meta are optimized for high ROAS (Return on Ad Spend), ensuring every dollar works for you.",
        features: ["Google Search & Display Ads", "Meta (Facebook/Instagram) Ads", "Retargeting Campaigns", "A/B Testing & Optimization"]
    },
    {
        icon: Users,
        title: "Social Media Strategy",
        description: "Build a brand that resonates. We create engaging content and manage your community to foster loyalty and drive brand awareness across all major platforms.",
        features: ["Content Strategy & Creation", "Community Management", "Influencer Collaborations", "Analytics & Reporting"]
    },
    {
        icon: Megaphone,
        title: "Content Marketing",
        description: "Content is king. We craft compelling narratives, blogs, and case studies that establish your authority and guide users through the sales funnel.",
        features: ["Blog Writing & Management", "Whitepapers & E-books", "Email Marketing Sequences", "Video Scripting"]
    }
];

const tools = [
    "Google Analytics 4", "Google Search Console", "Semrush", "Ahrefs",
    "Meta Business Suite", "Google Tag Manager", "Mailchimp", "HubSpot"
];

export default function DigitalMarketing() {
    return (
        <div className="inner-page service-detail">
            {/* Hero Section */}
            <PageHero back eyebrow="GROWTH / DIGITAL MARKETING" title="Make your mark." accent="Find your people." description="Search, content, and campaigns that connect your business with the right audience. Considered strategy. Clear direction."/>

            {/* Services Grid */}
            <section className="py-24 bg-neutral-900 border-y border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle subtitle="Our Services">360° Digital Marketing</SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {marketingServices.map((service, idx) => (
                            <div key={idx} className="bg-neutral-950 border border-neutral-800 p-8 rounded-lg hover:border-amber-600/30 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-600/20 transition-colors">
                                    <service.icon className="w-6 h-6 text-amber-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-neutral-400 mb-6 leading-relaxed">{service.description}</p>
                                <div className="space-y-3 border-t border-neutral-800 pt-6">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                                            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools & Tech Stack */}
            <section className="py-24 bg-neutral-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center md:text-left mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Powered by Premium Tools</h2>
                        <p className="text-neutral-400">We use the industry's best analytics and marketing tools to give you an unfair advantage.</p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        {tools.map((tool, idx) => (
                            <div key={idx} className="px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-300 font-mono text-sm hover:border-amber-600/50 hover:text-white transition-colors cursor-default">
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 border-t border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle subtitle="How We Work">The Growth Framework</SectionTitle>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600/0 via-amber-600/50 to-amber-600/0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Audit & Analysis", desc: "We deep dive into your current presence, competitors, and market gaps." },
                                { step: "02", title: "Strategic Roadmap", desc: "We build a custom plan tailored to your KPIs, budget, and timeline." },
                                { step: "03", title: "Execution", desc: "Our experts launch campaigns, creating content and optimizing channels." },
                                { step: "04", title: "Scale & Optimize", desc: "We analyze data daily to cut wasted spend and double down on what works." }
                            ].map((item, idx) => (
                                <div key={idx} className="relative pt-8 md:pt-16">
                                    <div className="w-4 h-4 rounded-full bg-amber-600 absolute top-10 left-0 md:left-1/2 md:-translate-x-1/2 hidden md:block outline outline-4 outline-neutral-900"></div>
                                    <span className="text-5xl font-bold text-neutral-800 mb-4 block md:text-center">{item.step}</span>
                                    <h3 className="text-xl font-bold text-white mb-2 md:text-center">{item.title}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed md:text-center">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-amber-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Scale Your Business?</h2>
                    <p className="text-amber-100 text-lg mb-10 max-w-2xl mx-auto">
                        Get a free competitor analysis and digital audit worth $500. See exactly where you stand and how to win.
                    </p>
                    <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-neutral-100 border-0 h-14 px-8 text-lg font-bold">
                        <Link href="/contact">
                            Claim Your Free Audit
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
