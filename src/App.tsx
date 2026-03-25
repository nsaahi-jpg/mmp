import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Presentation, 
  TrendingUp, 
  Globe, 
  ShieldCheck, 
  Layout, 
  Lightbulb, 
  PenTool, 
  Star,
  Menu,
  X,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Award,
  Zap,
  Target,
  MessageSquare,
  MapPin,
  Clock,
  ExternalLink,
  ChevronRight,
  Play
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { cn } from './lib/utils';

// --- Types ---
interface Service {
  title: string;
  description: string;
  outcome: string;
  icon: React.ReactNode;
  size?: 'small' | 'large' | 'wide';
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    title: "Investor Pitch Decks",
    description: "Strategic decks for startups looking to raise their first rounds of funding. We help you tell a compelling story to early-stage investors.",
    outcome: "Investment-Ready Narratives",
    icon: <TrendingUp className="w-6 h-6" />,
    size: 'large'
  },
  {
    title: "Corporate Strategy",
    description: "Professional presentations for internal strategy meetings and stakeholder alignments.",
    outcome: "Strategic Clarity",
    icon: <ShieldCheck className="w-6 h-6" />,
    size: 'small'
  },
  {
    title: "Sales & Marketing",
    description: "Designed to capture attention in the competitive Indian market and drive conversions.",
    outcome: "High Engagement",
    icon: <Zap className="w-6 h-6" />,
    size: 'small'
  },
  {
    title: "Company Profiles",
    description: "Modern profiles that introduce your brand and vision to potential partners and clients.",
    outcome: "Professional Identity",
    icon: <Globe className="w-6 h-6" />,
    size: 'wide'
  },
  {
    title: "Conference Keynotes",
    description: "Impactful slides for speakers at industry events and summits.",
    outcome: "Audience Impact",
    icon: <Award className="w-6 h-6" />,
    size: 'small'
  },
  {
    title: "Training Modules",
    description: "Clear and educational content for internal team training and workshops.",
    outcome: "Knowledge Sharing",
    icon: <Lightbulb className="w-6 h-6" />,
    size: 'small'
  }
];

const PROCESS: ProcessStep[] = [
  { number: "01", title: "Discovery", description: "Understanding your vision and the unique context of your business." },
  { number: "02", title: "Storyboarding", description: "Crafting a narrative structure that effectively communicates your message." },
  { number: "03", title: "Visual Design", description: "Applying professional aesthetics with focus on clarity and impact." },
  { number: "04", title: "Review", description: "Collaborative feedback to ensure every slide meets your expectations." },
  { number: "05", title: "Delivery", description: "Final editable files ready for your next big presentation." }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-colors duration-300",
      isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
            <Presentation className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">
            makemypresentation<span className="text-brand-primary">.in</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Process', 'Portfolio', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-brand-muted hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-brand-primary hover:text-white transition-colors">
            Get Started
          </button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-brand-card border-b border-white/10 p-8 flex flex-col gap-6 md:hidden">
          {['Services', 'Process', 'Portfolio', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg font-medium text-brand-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-brand-primary text-white py-4 rounded-xl font-bold">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-secondary/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-primary uppercase tracking-wider mb-8">
            <Zap className="w-3 h-3" />
            Kolkata's Newest Strategic Presentation Partner
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight">
            Empowering <span className="gradient-text">Startups</span> with Visual Storytelling.
          </h1>
          <p className="text-xl text-brand-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            Based in Kolkata, we help emerging businesses and startups craft high-impact presentations that win investments and close deals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-brand-primary hover:text-white transition-colors flex items-center justify-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Play className="w-4 h-4 fill-current" />
              View Portfolio
            </button>
          </div>
        </div>

        {/* Hero Image / Mockup */}
        <div className="mt-20 relative">
          <div className="gradient-border rounded-3xl p-[1px]">
            <div className="bg-brand-card rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/kolkata-startup/1200/600" 
                alt="Presentation Design Preview" 
                className="w-full h-auto opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          {/* Static Glows (Removed animate-pulse) */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-primary/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-accent/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategic Design for Every Stage</h2>
          <p className="text-lg text-brand-muted">
            We don't just make slides; we build communication assets that help you scale in the world's fastest-growing economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <div
              key={service.title}
              className={cn(
                "glass-card p-8 flex flex-col justify-between group",
                service.size === 'large' && "md:col-span-2 md:row-span-2",
                service.size === 'wide' && "md:col-span-2"
              )}
            >
              <div>
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-primary mb-6 transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-brand-muted leading-relaxed mb-8">{service.description}</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-brand-primary uppercase tracking-wider">
                {service.outcome}
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <section id="process" className="py-32 bg-brand-card/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">The Path to <span className="gradient-text">Perfection</span></h2>
            <p className="text-lg text-brand-muted mb-12">
              Our meticulous process ensures that your presentation is not just seen, but remembered and acted upon.
            </p>
            <div className="space-y-8">
              {PROCESS.map((step, idx) => (
                <div key={step.number} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-primary font-bold transition-colors group-hover:bg-brand-primary group-hover:text-white">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-brand-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="gradient-border rounded-[40px] p-[1px]">
              <div className="bg-black rounded-[40px] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/process-kolkata/800/1000" 
                  alt="Process Illustration" 
                  className="w-full h-auto opacity-60"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-secondary/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="glass-card p-12 md:p-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Story?</h2>
            <p className="text-lg text-brand-muted">Whether it's a high-stakes pitch or a corporate overhaul, we're here to help.</p>
          </div>

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-brand-primary/20 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Namaste!</h3>
              <p className="text-brand-muted">We've received your message and will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-primary outline-none transition-colors"
                />
                <input 
                  {...register("email", { required: true })}
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-primary outline-none transition-colors"
                />
              </div>
              <select 
                {...register("type")}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-primary outline-none transition-colors appearance-none"
              >
                <option className="bg-black">Investor Pitch Deck</option>
                <option className="bg-black">Corporate Presentation</option>
                <option className="bg-black">Sales/Marketing Deck</option>
                <option className="bg-black">Other</option>
              </select>
              <textarea 
                {...register("message", { required: true })}
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-primary outline-none transition-colors resize-none"
              />
              <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-brand-primary hover:text-white transition-colors">
                Send Message
              </button>
            </form>
          )}
          
          <div className="mt-12 pt-12 border-t border-white/10 grid md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-brand-muted uppercase tracking-wider">Call Us</p>
                <p className="font-bold">+91 33 2222 1111</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-brand-muted uppercase tracking-wider">Email Us</p>
                <p className="font-bold">hello@makemypresentation.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <Presentation className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                makemypresentation<span className="text-brand-primary">.in</span>
              </span>
            </div>
            <p className="text-brand-muted max-w-sm leading-relaxed">
              Kolkata's emerging strategic presentation agency. We blend professional design standards with local market insights to help startups grow.
            </p>
            <div className="mt-6 flex items-center gap-2 text-brand-muted text-sm">
              <MapPin className="w-4 h-4" />
              Kolkata, West Bengal, India
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Expertise</h4>
            <ul className="space-y-4 text-brand-muted text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Pitch Decks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Board Presentations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sales Enablement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Visual Storytelling</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-muted text-xs">
          <p>© 2026 makemypresentation.in. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Contact />
      <Footer />
      
      {/* Floating Action Button - Static */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-brand-primary rounded-full shadow-lg shadow-brand-primary/20 flex items-center justify-center transition-transform hover:scale-110">
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
