import { Link } from 'wouter';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/InnerPage';
export default function NotFound(){return <div className="inner-page"><PageHero eyebrow="404 / A LITTLE OFF COURSE" title="Uncharted waters." accent="Let’s head back." description="We couldn’t find that page. There’s plenty more to explore back at the studio."/><section className="inner-section"><Link href="/" className="orange-button">Back to the studio<ArrowUpRight size={18}/></Link></section></div>}
