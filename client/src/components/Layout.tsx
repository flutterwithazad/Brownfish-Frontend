import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImg from "@assets/image_1766825735711.png";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src={logoImg}
                alt="Brown Fish Technologies"
                className="h-12 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight tracking-tight text-white">
                  Brown Fish
                </span>
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                  Technologies
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`text-sm font-medium transition-colors hover:text-amber-500 ${location === item.href ? "text-amber-500" : "text-neutral-400"
                      }`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white border-0">
                <Link href="/contact">
                  Book Free Consultation
                </Link>
              </Button>
            </nav>

            {/* Mobile Nav */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white hover:bg-neutral-800">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-neutral-900 border-neutral-800 w-[300px] p-0">
                  <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-display font-bold text-xl text-white">Menu</span>
                    </div>
                    <nav className="flex flex-col gap-6">
                      {navItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <a
                            className={`text-lg font-medium transition-colors ${location === item.href ? "text-amber-500" : "text-neutral-400"
                              }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </a>
                        </Link>
                      ))}
                    </nav>
                    <div className="mt-auto pt-8 border-t border-neutral-800">
                      <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white" onClick={() => setIsMobileMenuOpen(false)}>
                        <Link href="/contact">
                          Book Free Consultation
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img
                  src={logoImg}
                  alt="Brown Fish Technologies"
                  className="h-10 w-auto object-contain"
                />
                <span className="font-display font-bold text-lg text-white">Brown Fish Technologies</span>
              </div>
              <p className="text-neutral-400 max-w-sm leading-relaxed mb-6">
                Engineering digital resilience for the modern web. We build scalable, mission-critical software solutions for ambitious enterprises.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-amber-600 hover:text-white transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/brownfishtech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-amber-600 hover:text-white transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:hello@brownfishtech.com" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-amber-600 hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Services</h4>
              <ul className="space-y-4 text-neutral-400">
                <li><Link href="/services/mobile-development" className="hover:text-amber-500 transition-colors">Mobile Development</Link></li>
                <li><Link href="/services/web-applications" className="hover:text-amber-500 transition-colors">Web Applications</Link></li>
                <li><Link href="/services/backend-architecture" className="hover:text-amber-500 transition-colors">Backend Architecture</Link></li>
                <li><Link href="/services/mvp-development" className="hover:text-amber-500 transition-colors">MVP Development</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Company</h4>
              <ul className="space-y-4 text-neutral-400">
                <li><Link href="/projects" className="hover:text-amber-500 transition-colors">Case Studies</Link></li>
                <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} Brown Fish Technologies. All rights reserved.
            </p>
            <p className="text-neutral-600 text-sm font-mono">
              Designed & Engineered in NYC
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
