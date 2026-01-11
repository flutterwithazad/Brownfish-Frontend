import { Scale, Gavel, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function TermsOfService() {
    return (
        <div className="animate-in fade-in duration-500 py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <span className="text-sm font-mono tracking-wider uppercase text-amber-600 mb-3 block">
                        Legal
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Terms of Service</h1>
                    <p className="text-neutral-400">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                    <div className="h-1 w-20 bg-amber-600 mt-6"></div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-neutral-300">
                    <p className="lead text-xl text-neutral-400 mb-8">
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Brown Fish Technologies ("we," "us" or "our"), concerning your access to and use of our website and services.
                    </p>

                    <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg mb-12">
                        <div className="flex items-start gap-4">
                            <Scale className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
                            <div>
                                <h3 className="text-white font-bold text-xl mb-2 mt-0">Agreement to Terms</h3>
                                <p className="text-neutral-400 m-0">
                                    By accessing the Site, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, then you are expressly prohibited from using the Site and must discontinue use immediately.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-white font-bold text-2xl mt-12 mb-6">1. Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise indicated, the Site and our services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                    </p>

                    <h2 className="text-white font-bold text-2xl mt-12 mb-6">2. User Representations</h2>
                    <p>
                        By using the Site, you represent and warrant that:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-400 marker:text-amber-600">
                        <li>All registration information you submit will be true, accurate, current, and complete.</li>
                        <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                        <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                        <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                    </ul>

                    <h2 className="text-white font-bold text-2xl mt-12 mb-6">3. Prohibited Activities</h2>
                    <p>
                        You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                    </p>

                    <h2 className="text-white font-bold text-2xl mt-12 mb-6 flex items-center gap-3">
                        <AlertCircle className="w-6 h-6 text-amber-600" /> Limitation of Liability
                    </h2>
                    <p>
                        In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                    </p>

                    <h2 className="text-white font-bold text-2xl mt-12 mb-6 flex items-center gap-3">
                        <Gavel className="w-6 h-6 text-amber-600" /> Governing Law
                    </h2>
                    <p>
                        These Terms shall be governed by and defined following the laws of India. Brown Fish Technologies and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                    </p>

                    <h2 className="text-white font-bold text-2xl mt-12 mb-6">Contact Us</h2>
                    <p>
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                    </p>
                    <a href="mailto:hello@brownfishtech.com" className="text-amber-500 font-medium hover:text-amber-400 transition-colors">hello@brownfishtech.com</a>

                    <div className="mt-12 pt-8 border-t border-neutral-800 flex justify-between items-center">
                        <Link href="/" className="text-neutral-500 hover:text-white transition-colors">
                            &larr; Back to Home
                        </Link>
                        <Link href="/privacy-policy" className="text-amber-600 hover:text-amber-500 transition-colors">
                            View Privacy Policy &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
