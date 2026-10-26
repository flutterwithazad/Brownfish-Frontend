import { lazy, Suspense, type ReactNode, type PointerEvent, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
const Sculpture = lazy(() => import('./Sculpture'));

export function PageHero({ eyebrow, title, accent, description, back, compact = false }: { eyebrow: string; title: string; accent: string; description: string; back?: boolean; compact?: boolean }) {
  return <section className={`inner-hero ${compact ? 'inner-hero-compact' : ''}`}>
    <div className="inner-hero-copy">{back && <Link href="/services" className="inner-back"><ArrowLeft size={13}/> All expertise</Link>}<span className="section-kicker">{eyebrow}</span><h1>{title}<br/><span>{accent}</span></h1><p>{description}</p></div>
    <div className="inner-hero-art" aria-hidden="true"><Suspense fallback={<div className="sculpture-fallback">✳</div>}><Sculpture/></Suspense><span>DESIGNED TO GO FURTHER. / BF STUDIO</span></div>
    <div className="inner-hero-line"><span>BROWNFISH / INDEPENDENT DIGITAL STUDIO</span><span>IDEAS INTO IMPACT ↘</span></div>
  </section>;
}

export function TiltSurface({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    ref.current?.style.setProperty('--tilt-x', `${-((event.clientY - rect.top) / rect.height - .5) * 7}deg`);
    ref.current?.style.setProperty('--tilt-y', `${((event.clientX - rect.left) / rect.width - .5) * 7}deg`);
  };
  return <div ref={ref} className={`tilt-surface ${className}`} onPointerMove={move} onPointerLeave={()=>{ref.current?.style.setProperty('--tilt-x','0deg');ref.current?.style.setProperty('--tilt-y','0deg');}}>{children}</div>;
}

export function InnerCallout({ title = 'Something in mind?', text = 'Let’s find the right way to bring it to life.' }: {title?:string; text?:string}) {
  return <section className="inner-callout"><div><span className="section-kicker">THE NEXT STEP</span><h2>{title}</h2><p>{text}</p></div><Link href="/contact" className="orange-button">Start a conversation<ArrowUpRight size={19}/></Link></section>;
}
