import { Link, useLocation } from 'wouter';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useSeo } from '@/hooks/useSeo';

export function Layout({ children }: { children: React.ReactNode }) {
  useSeo();
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  return <div className="studio-shell" id="top">
    <header className="studio-header">
      <Link href="/" className="studio-logo" aria-label="Brownfish home"><span className="fish-symbol">b<span>f</span></span><span>brownfish<span className="logo-dot">®</span><small>INDEPENDENT DIGITAL STUDIO</small></span></Link>
      <nav className="desktop-navigation" aria-label="Main navigation">{[['Work','/projects'],['Expertise','/services'],['Let’s talk','/contact']].map(([name,url])=><Link href={url} key={url} className={location===url?'active':''}>{name}{url==='/contact' && <ArrowUpRight size={15}/>}</Link>)}</nav>
      <span className="nav-availability"><i/>Available for new projects</span>
      <button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      {open && <nav className="mobile-navigation" aria-label="Mobile navigation">{[['Home','/'],['Work','/projects'],['Expertise','/services'],['Let’s talk','/contact']].map(([name,url])=><Link href={url} key={url} onClick={()=>setOpen(false)}>{name}<ArrowUpRight/></Link>)}</nav>}
    </header>
    <main className={location==='/'?'studio-main':'studio-main interior-main'}>{children}</main>
    <footer className="studio-footer"><div className="footer-top"><span>HAVE SOMETHING IN MIND?</span><Link href="/contact">Let’s make<br/>some waves.<ArrowUpRight/></Link></div><div className="footer-bottom"><Link href="/" className="footer-brand">brownfish®</Link><p>Independent minds. Exceptional digital products.<br/>New Delhi, India · Working everywhere.</p><a href="mailto:hello@brownfishtech.com">hello@brownfishtech.com<ArrowUpRight size={16}/></a></div><div className="footer-legal"><span>© {new Date().getFullYear()} Brown Fish Technologies</span><div><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link><a href="https://www.linkedin.com/company/brownfishtech" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><a href="#top">Back to top ↑</a></div></footer>
  </div>;
}
