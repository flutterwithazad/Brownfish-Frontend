import { Shield, Lock, FileText, Mail } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
    return (
        <div className="animate-in fade-in duration-500 py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <span className="text-sm font-mono tracking-wider uppercase text-amber-600 mb-3 block">
                        Legal
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Privacy Policy</h1>
                    <p className="text-neutral-400">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                    <div className="h-1 w-20 bg-amber-600 mt-6"></div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-neutral-300">
                    <p className="lead text-xl text-neutral-400 mb-8">
                        At Brown Fish Technologies, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website or use our services.
                    </p>

                    <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg mb-12">
                        <div className="flex items-start gap-4">
                            <Shield className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
                            <div>
                                <h3 className="text-white font-bold text-xl mb-2 mt-0">Our Commitment</h3>
                                <p className="text-neutral-400 m-0">
                                    We collect only the information necessary to provide our engineering services. We never sell your personal data to third parties.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-white font-bold text-2xl mt-12 mb-6 flex items-center gap-3">
                        <FileText className="w-6 h-6 text-amber-600" /> Information We Collect
                    </h2>
                    <p>
                        We collect information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-400 marker:text-amber-600">
                        <li>Register on the website</li>
                        <li>Express interest in obtaining information about us or our products and services</li>
                        <li>Participate in activities on the website (such as filling out contact forms)</li>
                    </ul>
                    <p className="mt-4">
                        The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-400 marker:text-amber-600">
                        <li>Names</li>
                        <li>Phone numbers</li>
                        <li>Email addresses</li>
                        <li>Job titles</li>
                        <li>Company names</li>
                    </ul>

                    <h2 className="text-white font-bold text-2xl mt-12 mb-6 flex items-center gap-3">
                        <Lock className="w-6 h-6 text-amber-600" /> How We Use Your Information
                    </h2>
                    <p>
                        We use the information we collect or receive:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-400 marker:text-amber-600">
                        <li>To facilitate account creation and logon process.</li>
                        <li>To send you administrative information.</li>
                        <li>To fulfill and manage your orders.</li>
                        <li>To post testimonials (with your consent).</li>
                        <li>To request feedback.</li>
                        <li>To protect our Services.</li>
                    </ul>

                    <h2 className="text-white font-bold text-2xl mt-12 mb-6">Data Security</h2>
                    <p>
                        We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Website is at your own risk.
                    </p>

                    <h2 className="text-white font-bold text-2xl mt-12 mb-6">Contact Us</h2>
                    <p>
                        If you have questions or comments about this policy, you may email us at <a href="mailto:hello@brownfishtech.com" className="text-amber-500 hover:text-amber-400 underline">hello@brownfishtech.com</a> or by post to:
                    </p>
                    <address className="not-italic bg-neutral-900 p-6 rounded border border-neutral-800 text-neutral-400 mt-4">
                        <strong>Brown Fish Technologies</strong><br />
                        Flat 101, Tigri DDA Flats<br />
                        South Delhi, 110080<br />
                        India
                    </address>

                    <div className="mt-12 pt-8 border-t border-neutral-800 flex justify-between items-center">
                        <Link href="/" className="text-neutral-500 hover:text-white transition-colors">
                            &larr; Back to Home
                        </Link>
                        <Link href="/terms" className="text-amber-600 hover:text-amber-500 transition-colors">
                            View Terms of Service &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
