import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Play,
  Quote
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { cn } from './lib/utils';

// --- Types ---
interface Service {
  title: string;
  description: string;
  outcome: string;
  icon: React.ReactNode;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    title: "Investor Pitch Decks",
    description: "Strategic decks for Indian startups looking to raise their first rounds of funding. We help you tell a compelling story to early-stage investors across the globe.",
    outcome: "Investment-Ready Narratives",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Corporate Strategy",
    description: "Professional presentations for internal strategy meetings and stakeholder alignments, as trusted by major Indian corporations and state-owned entities.",
    outcome: "Strategic Clarity",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Sales & Marketing",
    description: "Designed to capture attention in the competitive Indian market and drive conversions for B2B and B2C brands.",
    outcome: "High Engagement",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Company Profiles",
    description: "Modern profiles that introduce your brand and vision. We've recently completed comprehensive profiles for major power sector entities in Bengal.",
    outcome: "Professional Identity",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Conference Keynotes",
    description: "Impactful slides for speakers at industry events and summits across India and beyond.",
    outcome: "Audience Impact",
    icon: <Award className="w-6 h-6" />
  },
  {
    title: "Training Modules",
    description: "Clear and educational content for internal team training and workshops for Indian corporate teams.",
    outcome: "Knowledge Sharing",
    icon: <Lightbulb className="w-6 h-6" />
  }
];

const PROCESS: ProcessStep[] = [
  { number: "01", title: "Discovery", description: "Understanding your vision and the unique context of your business in the Indian market." },
  { number: "02", title: "Storyboarding", description: "Crafting a narrative structure that effectively communicates your message to your target audience." },
  { number: "03", title: "Visual Design", description: "Applying professional aesthetics with focus on clarity, impact, and modern Indian design sensibilities." },
  { number: "04", title: "Review", description: "Collaborative feedback to ensure every slide meets your expectations and global standards." },
  { number: "05", title: "Delivery", description: "Final editable files ready for your next big presentation, delivered with pride from Park Street." }
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "S. Mukhopadhyay",
    role: "Director (Operations)",
    company: "Bengal Power Corporation",
    content: "The strategic clarity and visual impact of the company profiles created by the team were exceptional. They managed to simplify complex power sector data into a compelling narrative for our stakeholders.",
    avatar: "SM"
  },
  {
    name: "Arindam Ghosh",
    role: "Head of Strategy",
    company: "BPC Sister Concerns",
    content: "Their ability to handle high-stakes corporate presentations with such professionalism is rare. They are now our go-to partner for all our pitch decks and strategy slides.",
    avatar: "AG"
  },
  {
    name: "Priyanka Das",
    role: "Founder & CEO",
    company: "Kolkata Tech Hub",
    content: "As a startup founder, I needed a deck that could stand out. The team at makemypresentation.in delivered exactly that. Their understanding of the Indian startup ecosystem is unmatched.",
    avatar: "PD"
  }
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
      "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
      isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
            <Presentation className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            makemypresentation<span className="text-brand-primary">.in</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Process', 'Testimonials', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-brand-muted hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-brand-primary hover:text-white transition-all shadow-lg shadow-white/5">
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
        <div className="absolute top-full left-0 right-0 bg-brand-card border-b border-white/10 p-8 flex flex-col gap-6 md:hidden shadow-2xl">
          {['Services', 'Process', 'Testimonials', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg font-medium text-white"
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
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateHeroImage = async () => {
      try {
        const { GoogleGenAI } = await import("@google/genai");
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: 'A premium, high-end presentation design studio in India. Modern workspace with Indian designers working on sleek digital interfaces showing pitch decks. Subtle Indian aesthetic elements in the background, minimalist office, soft cinematic lighting, professional atmosphere, 4k resolution, dark theme.',
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9"
            }
          }
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            setHeroImage(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      } catch (error) {
        console.error("Error generating hero image:", error);
        setHeroImage("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070");
      } finally {
        setLoading(false);
      }
    };

    generateHeroImage();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-secondary/10 blur-[100px] rounded-full pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left flex flex-col justify-center h-full"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-8 w-fit">
              <MapPin className="w-3 h-3" />
              Park Street, Kolkata
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight text-white">
              We Craft <span className="gradient-text">High-Stakes</span> Presentations That Win.
            </h1>
            <p className="text-lg md:text-xl text-brand-muted mb-12 max-w-xl leading-relaxed font-medium">
              India's premier strategic presentation partner. Based in the heart of Kolkata at Park Street, we blend global design standards with Indian market insights to help you scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-base hover:bg-brand-primary hover:text-white transition-all shadow-xl shadow-white/10 flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Play className="w-4 h-4 fill-current" />
                View Portfolio
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className={cn(
              "image-embedded bg-white/5 p-1 transition-opacity duration-1000",
              loading ? "opacity-0" : "opacity-100"
            )}>
              {heroImage && (
                <img 
                  src={heroImage} 
                  alt="Strategic Presentation Design" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              )}
              {loading && (
                <div className="aspect-video w-full bg-white/5 animate-pulse rounded-xl flex items-center justify-center">
                  <Presentation className="w-12 h-12 text-white/10 animate-bounce" />
                </div>
              )}
            </div>
            
            {/* Floating Accents */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-primary/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-accent/20 blur-3xl rounded-full" />
            
            {/* Stats Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-6 right-6 glass-card px-6 py-4 flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">100+</div>
                <div className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">Decks Delivered</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustedBy = () => (
  <section className="py-20 border-y border-white/5 bg-brand-card/30">
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-center text-[10px] font-bold text-brand-muted uppercase tracking-[0.4em] mb-12">
        Empowering Industry Leaders Across India
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 place-items-center">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold tracking-tighter text-white">BENGAL POWER</span>
          <span className="text-[8px] font-bold tracking-[0.3em] text-brand-primary">CORPORATION</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold tracking-tighter text-white">TATA</span>
          <span className="text-[8px] font-bold tracking-[0.3em] text-brand-primary">CONSULTANCY</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold tracking-tighter text-white">RELIANCE</span>
          <span className="text-[8px] font-bold tracking-[0.3em] text-brand-primary">INDUSTRIES</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold tracking-tighter text-white">ITC LIMITED</span>
          <span className="text-[8px] font-bold tracking-[0.3em] text-brand-primary">KOLKATA</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold tracking-tighter text-white">HDFC BANK</span>
          <span className="text-[8px] font-bold tracking-[0.3em] text-brand-primary">FINANCE</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold tracking-tighter text-white">MAHINDRA</span>
          <span className="text-[8px] font-bold tracking-[0.3em] text-brand-primary">GROUP</span>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="text-brand-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">Our Expertise</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Strategic Design for Every Stage</h2>
            <p className="text-lg text-brand-muted leading-relaxed">
              We don't just make slides; we build communication assets that help Indian brands scale, from startups to state-owned corporations.
            </p>
          </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.title}
              className="glass-card p-10 flex flex-col group h-full"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-primary mb-8 transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-primary transition-colors">{service.title}</h3>
              <p className="text-brand-muted leading-relaxed mb-8 text-base flex-grow">{service.description}</p>
              <div className="flex items-center gap-2 text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] pt-6 border-t border-white/5">
                {service.outcome}
                <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">The Path to <span className="gradient-text">Perfection</span></h2>
            <p className="text-lg text-brand-muted mb-12">
              Our meticulous process ensures that your presentation is not just seen, but remembered and acted upon.
            </p>
            <div className="space-y-10">
              {PROCESS.map((step, idx) => (
                <div key={step.number} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl border-2 border-white/10 flex items-center justify-center text-brand-primary font-black text-xl transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{step.title}</h4>
                    <p className="text-brand-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="image-embedded bg-white/5 p-1">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2070" 
                alt="Our Design Process" 
                className="w-full h-auto rounded-xl opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/10 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Voices of Impact</h2>
          <p className="text-lg text-brand-muted">Delivering excellence for India's industry giants.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={t.name}
              className="glass-card p-10 relative overflow-hidden flex flex-col h-full"
            >
              <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5 -z-0" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-brand-primary text-brand-primary" />)}
              </div>
              <p className="text-lg text-white/90 font-medium italic mb-10 leading-relaxed relative z-10 flex-grow">"{t.content}"</p>
              <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center font-black text-lg shadow-lg shadow-brand-primary/20">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-base text-white">{t.name}</div>
                  <div className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">{t.role}</div>
                  <div className="text-[10px] font-bold text-brand-muted uppercase tracking-widest mt-0.5">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="glass-card p-12 md:p-20 shadow-2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Elevate Your Story?</h2>
            <p className="text-lg text-brand-muted max-w-2xl mx-auto">Whether it's a high-stakes board presentation in Mumbai or a startup pitch in Bangalore, we're here to help you win from our Park Street studio.</p>
          </div>

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-24 h-24 bg-brand-primary/20 text-brand-primary rounded-3xl flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Namaste!</h3>
              <p className="text-xl text-brand-muted">We've received your inquiry and our team will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    {...register("name", { required: true })}
                    placeholder="e.g. Rahul Chatterjee"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-brand-primary focus:bg-white/10 outline-none transition-all text-white font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    {...register("email", { required: true })}
                    placeholder="e.g. rahul@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-brand-primary focus:bg-white/10 outline-none transition-all text-white font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">Project Type</label>
                <select 
                  {...register("type")}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-brand-primary focus:bg-white/10 outline-none transition-all appearance-none text-white font-medium"
                >
                  <option className="bg-brand-card">Investor Pitch Deck</option>
                  <option className="bg-brand-card">Corporate Strategy Presentation</option>
                  <option className="bg-brand-card">Company Profile Design</option>
                  <option className="bg-brand-card">Sales/Marketing Deck</option>
                  <option className="bg-brand-card">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">Project Details</label>
                <textarea 
                  {...register("message", { required: true })}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-brand-primary focus:bg-white/10 outline-none transition-all resize-none text-white font-medium"
                />
              </div>
              <button className="w-full py-5 rounded-2xl bg-white text-black font-bold text-xl hover:bg-brand-primary hover:text-white transition-all shadow-xl shadow-white/5">
                Send Message
              </button>
            </form>
          )}
          
          <div className="mt-20 pt-12 border-t border-white/10 grid md:grid-cols-2 gap-12">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-primary shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-brand-muted uppercase tracking-widest font-bold">Call Our Studio</p>
                <p className="text-xl font-bold text-white">+91 33 4000 5000</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-primary shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-brand-muted uppercase tracking-widest font-bold">Our Location</p>
                <p className="text-xl font-bold text-white">Park Street, Kolkata</p>
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
    <footer className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/20">
                <Presentation className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                makemypresentation<span className="text-brand-primary">.in</span>
              </span>
            </div>
            <p className="text-brand-muted max-w-sm leading-relaxed text-base font-medium">
              India's premier strategic presentation agency. We blend professional design standards with local market insights from our Park Street studio to help startups and corporations grow.
            </p>
            <div className="mt-8 flex items-center gap-3 text-white font-bold text-sm">
              <MapPin className="w-5 h-5 text-brand-primary" />
              Park Street, Kolkata, India
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-8 text-white">Expertise</h4>
            <ul className="space-y-5 text-brand-muted text-sm font-bold">
              <li><a href="#" className="hover:text-white transition-colors">Pitch Decks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Board Presentations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sales Enablement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Visual Storytelling</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-8 text-white">Connect</h4>
            <div className="flex gap-5">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-sm">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-brand-muted text-xs font-bold uppercase tracking-widest">
          <p>© 2026 makemypresentation.in. All rights reserved.</p>
          <div className="flex gap-10">
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
      <TrustedBy />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Floating Action Button - Static */}
      <div className="fixed bottom-10 right-10 z-50">
        <button className="w-16 h-16 bg-brand-primary text-white rounded-2xl shadow-2xl shadow-brand-primary/40 flex items-center justify-center transition-all hover:scale-110 hover:bg-brand-secondary active:scale-95">
          <MessageSquare className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}
