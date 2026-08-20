import { motion } from "framer-motion";
import { 
  Smartphone, 
  Globe, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Copy, 
  ExternalLink,
  ShieldCheck,
  Cpu,
  MousePointer2,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const PageWrapper = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`min-h-screen w-full max-w-[1000px] mx-auto bg-[#0B1220] relative overflow-hidden shadow-2xl my-8 rounded-xl border border-white/5 ${className}`}>
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
    {children}
  </div>
);

const AppFeature = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="text-sm font-semibold text-white mb-1">{title}</h4>
      <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function PortfolioBrochure() {
  const copyCode = () => {
    alert("Project code reference copied to clipboard!");
  };

  return (
    <div className="bg-[#0d1522] min-h-screen py-12 px-4 selection:bg-orange-500/30">
      {/* Toolbar */}
      <div className="fixed top-8 right-8 z-[100] flex gap-3">
        <Button 
          variant="outline" 
          onClick={copyCode}
          className="bg-white/10 border-white/20 text-white backdrop-blur-md hover:bg-white/20"
        >
          <Copy className="w-4 h-4 mr-2" /> Copy Reference
        </Button>
        <Button 
          className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/30"
          onClick={() => window.print()}
        >
          <Download className="w-4 h-4 mr-2" /> Download Portfolio
        </Button>
      </div>

      {/* PAGE 1: COVER */}
      <PageWrapper className="flex flex-col justify-between p-12 md:p-16">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-orange-600/10 blur-[130px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-teal-600/10 blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />

        <div className="relative z-10 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-xl p-2 border border-white/10 flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">Brownfish Technologies</h2>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">Mobile • Web • SaaS</p>
            </div>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
            Flutter • Next.js • React Native
          </div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 max-w-2xl py-24"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 text-orange-500 mb-8">
            <div className="h-px w-8 bg-orange-500" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold">App Development Agency</span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-7xl md:text-8xl font-black text-white leading-[0.95] tracking-tight mb-10"
          >
            Your Idea.<br />
            <span className="text-orange-500 italic">Our Code.</span><br />
            Delivered.
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-slate-400 leading-relaxed max-w-sm font-light">
            We design and build polished, production-ready mobile apps that your users will love — on time, every time.
          </motion.p>
        </motion.div>

        <div className="relative z-10 flex flex-wrap items-center gap-6">
          {[
            { name: "Ummah360", color: "#F5A623" },
            { name: "UstaHub", color: "#00C4B4" },
            { name: "BiteWise", color: "#5DB94E" }
          ].map((app, i) => (
            <div key={app.name} className="flex items-center gap-6">
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: app.color }} />
                <span className="text-sm font-semibold text-white">{app.name}</span>
              </div>
              {i < 2 && <span className="text-white/20 text-2xl font-light">·</span>}
            </div>
          ))}
        </div>
      </PageWrapper>

      {/* PAGE 2: UMMAH360 */}
      <PageWrapper className="flex flex-col gap-12 p-12 md:p-16 border-t-[3px] border-orange-500/50">
        <div className="absolute top-8 right-16 text-[120px] font-black text-white/[0.03] select-none leading-none">01</div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col gap-4"
        >
          <div className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full w-fit">
            <span className="text-[10px] uppercase font-bold text-orange-400 tracking-widest">Islamic Lifestyle App</span>
          </div>
          <h2 className="text-5xl font-black text-white">Ummah<span className="text-orange-500">360</span></h2>
          <p className="text-lg text-slate-400 max-w-md font-light leading-relaxed">
            Your complete Islamic companion — prayer times, Quran, Duas, and community in one app.
          </p>
          <div className="flex gap-3 mt-2">
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] text-slate-400 uppercase tracking-wider">
               <Smartphone className="w-3 h-3" /> iOS & Android
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-[10px] text-orange-400 uppercase tracking-wider">
               ⭐ 21+ Features
             </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 flex-1">
          <div className="flex items-end gap-6 h-full pb-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex-1 aspect-[9/19] rounded-[2rem] overflow-hidden border-[4px] border-white/10 bg-neutral-900 shadow-2xl relative translate-y-8"
            >
              <img src="/portfolio/ummah360.png" alt="Ummah360 Mockup" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              whileHover={{ y: 10 }}
              className="flex-1 aspect-[9/19] rounded-[2rem] overflow-hidden border-[4px] border-white/10 bg-neutral-900 shadow-2xl relative -translate-y-8"
            >
              <img src="/portfolio/ummah360.png" alt="Ummah360 Mockup 2" className="w-full h-full object-cover grayscale-[0.5]" />
            </motion.div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <AppFeature 
              icon={Clock} 
              title="Accurate Prayer Times" 
              desc="Location-based timings with multiple calculation methods and beautiful desktop widgets."
            />
            <AppFeature 
              icon={Globe} 
              title="Global Community" 
              desc="Connect with users worldwide, share insights, and participate in global prayer goals."
            />
            <AppFeature 
              icon={CheckCircle2} 
              title="Verified Content" 
              desc="All Quranic data and Hadith sources are meticulously verified by scholars for accuracy."
            />
            <AppFeature 
              icon={ShieldCheck} 
              title="Privacy Focused" 
              desc="Zero data sharing. Your personal spiritual journey stays personal and secure."
            />
          </div>
        </div>
      </PageWrapper>

      {/* PAGE 3: USTAHUB */}
      <PageWrapper className="flex flex-col gap-12 p-12 md:p-16 border-t-[3px] border-teal-500/50">
        <div className="absolute top-8 right-16 text-[120px] font-black text-white/[0.03] select-none leading-none">02</div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col gap-4 text-right items-end ml-auto"
        >
          <div className="px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full w-fit">
            <span className="text-[10px] uppercase font-bold text-teal-400 tracking-widest">Service Hailing Platform</span>
          </div>
          <h2 className="text-5xl font-black text-white">Usta<span className="text-teal-500">Hub</span></h2>
          <p className="text-lg text-slate-400 max-w-md font-light leading-relaxed">
            The bridge between verified service experts and residential customers in one seamless flow.
          </p>
          <div className="flex gap-3 justify-end mt-2">
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-[10px] text-teal-400 uppercase tracking-wider font-bold">
               Dual Application Flow
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] text-slate-400 uppercase tracking-wider">
               <Zap className="w-3 h-3" /> Real-time Booking
             </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 flex-1">
          <div className="flex flex-col justify-center gap-4 order-2 lg:order-1">
            <AppFeature 
              icon={ShieldCheck} 
              title="Verified Professionals" 
              desc="Background checked experts with rating systems and verified skill certifications."
            />
            <AppFeature 
              icon={MousePointer2} 
              title="One-Tap Booking" 
              desc="Browse experts nearby and book services in seconds with integrated payments."
            />
            <AppFeature 
              icon={Cpu} 
              title="Dynamic Dashboard" 
              desc="Separate portals for providers and clients with real-time status tracking."
            />
          </div>

          <div className="flex items-end gap-6 h-full pb-12 order-1 lg:order-2">
            <motion.div 
              whileHover={{ rotate: -2, scale: 1.02 }}
              className="flex-1 aspect-[9/19] rounded-[2rem] overflow-hidden border-[4px] border-white/10 bg-neutral-900 shadow-2xl relative translate-y-8"
            >
              <img src="/portfolio/ustahub.png" alt="UstaHub Mockup" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </PageWrapper>

      {/* PAGE 4: BITEWISE */}
      <PageWrapper className="flex flex-col gap-12 p-12 md:p-16 border-t-[3px] border-lime-500/50">
        <div className="absolute top-8 right-16 text-[120px] font-black text-white/[0.03] select-none leading-none">03</div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col gap-4"
        >
          <div className="px-3 py-1 bg-lime-500/10 border border-lime-500/20 rounded-full w-fit">
            <span className="text-[10px] uppercase font-bold text-lime-400 tracking-widest">AI Nutrition Scanner</span>
          </div>
          <h2 className="text-5xl font-black text-white">Bite<span className="text-lime-500">Wise</span></h2>
          <p className="text-lg text-slate-400 max-w-md font-light leading-relaxed">
            Personal AI-powered scanning app for instant nutritional breakdown and health tracking.
          </p>
          <div className="flex gap-3 mt-2">
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-lime-500/10 border border-lime-500/20 text-[10px] text-lime-400 uppercase tracking-wider">
               Edge AI Processing
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] text-slate-400 uppercase tracking-wider">
               <Cpu className="w-3 h-3" /> ML Vision
             </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 flex-1">
          <div className="relative flex items-center justify-center gap-4">
            <motion.div 
              whileHover={{ y: -20 }}
              className="w-[200px] aspect-[9/19] rounded-[1.5rem] overflow-hidden border-[4px] border-white/15 bg-neutral-900 shadow-2xl relative z-10"
            >
              <img src="/portfolio/bw-1.png" alt="BiteWise Screen 1" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              whileHover={{ y: 20 }}
              className="w-[200px] aspect-[9/19] rounded-[1.5rem] overflow-hidden border-[4px] border-white/15 bg-neutral-900 shadow-2xl relative -translate-y-8 z-20"
            >
              <img src="/portfolio/bw-2.png" alt="BiteWise Screen 2" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="w-[200px] aspect-[9/19] rounded-[1.5rem] overflow-hidden border-[4px] border-white/15 bg-neutral-900 shadow-2xl relative translate-y-8 z-0 hidden md:block"
            >
              <img src="/portfolio/bw-3.png" alt="BiteWise Screen 3" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-lime-500/5 blur-[100px] -z-10" />
          </div>

          <div className="flex flex-col justify-center gap-4">
            <AppFeature 
              icon={MousePointer2} 
              title="Instant Vision Scan" 
              desc="Point your camera at any food item to get instant protein, carb, and calorie estimates."
            />
            <AppFeature 
              icon={CheckCircle2} 
              title="Health Goals" 
              desc="Personalized nutrition recommendations based on your unique biometric data."
            />
            <AppFeature 
              icon={ShieldCheck} 
              title="Sugar & Allergen Alerts" 
              desc="Real-time scanning for hidden sugars and personal allergens in packaged goods."
            />
            <Button className="mt-6 w-fit bg-lime-600 hover:bg-lime-700 text-white rounded-full px-8 py-6">
              View Case Study <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </PageWrapper>

      {/* PAGE 5: CTA */}
      <PageWrapper className="flex flex-col justify-center items-center text-center p-12 md:p-16 gap-8 bg-[#111827]">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/[0.05] to-transparent pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-2xl"
        >
          <div className="flex justify-center mb-10">
            <div className="w-20 h-20 bg-orange-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-600/40">
               <Zap className="w-10 h-10 text-white fill-current" />
            </div>
          </div>
          
          <h2 className="text-6xl font-black text-white leading-tight mb-8">
            Ready to Build Your <br />
            <span className="text-orange-500 underline decoration-white/10 underline-offset-8">Next Big Thing?</span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-12 font-light">
            We turn complex business problems into elegant mobile solutions. Let's start the conversation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="h-16 px-10 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-lg font-bold">
               Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 border-white/20 text-white hover:bg-white/5 rounded-xl text-lg">
               Browse More Work
            </Button>
          </div>
        </motion.div>

        <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-12 text-slate-500 font-mono text-[10px] uppercase tracking-widest">
           <span>Delivering Excellence Since 2012</span>
           <span>•</span>
           <span>Delhi, India</span>
           <span>•</span>
           <span>Available Globally</span>
        </div>
      </PageWrapper>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
        }
      `}} />
    </div>
  );
}
