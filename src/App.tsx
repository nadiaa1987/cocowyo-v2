import { useEffect, useRef, useState } from 'react';
import { 
  Infinity, Palette, Download, Check, Lock, Sparkles, 
  Zap, Layers, X, ArrowRight, Play,
  Shield, RefreshCw, Star, ChevronDown, CheckCircle2,
  AlertTriangle, DollarSign, TrendingUp, BookOpen, ShoppingBag,
  GraduationCap, Video, PenTool, Infinity as InfinityIcon
} from 'lucide-react';

// Animation hook for scroll reveal
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function ScrollReveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

// Header Component
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-zinc-800' : ''}`}>
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <Palette className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold">
              <span className="text-white">Cocowyo</span>
              <span className="text-gradient">Coloring</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

// Hero Section
function Hero() {
  const features = [
    { icon: Infinity, label: 'UNLIMITED CREATION' },
    { icon: Palette, label: '20+ STYLES' },
    { icon: Download, label: 'FHD QUALITY' },
    { icon: Check, label: 'NO CREDITS' },
    { icon: Lock, label: 'NO API' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-hero grid-pattern pt-20">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700 mb-8">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-zinc-300">Still wasting time or money on illustrators, Photoshop, or messy AI outputs?</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Create Coloring Pages<br />
              <span className="text-gradient">& Colored Illustrations</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-2xl md:text-3xl font-bold text-gradient mb-6">
              Faster Than You Ever Thought Possible
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-lg text-zinc-400 mb-4">
              One prompt creates both B/W coloring pages and full-color illustrations.
            </p>
            <p className="text-base text-zinc-500 mb-8 max-w-2xl mx-auto">
              Create usable line art and finished illustrations <span className="text-cyan-400 font-semibold">without</span> drawing skills, design software, or revisions.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <button className="btn-primary flex items-center gap-2">
                <Star className="w-4 h-4" />
                One dashboard. Unlimited pages. Built for KDP, Etsy, and printables.
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700">
                  <f.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-medium text-zinc-300">{f.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="relative rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl glow-purple">
              <img 
                src="/images/hero-dashboard.jpg" 
                alt="Cocowyo Coloring Dashboard" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-pink-500/90 flex items-center justify-center hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white ml-1" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// Why Choose Section
function WhyChoose() {
  const features = [
    { icon: CheckCircle2, text: 'No credits — create unlimited images', color: 'text-green-400' },
    { icon: CheckCircle2, text: 'Clean line-art actually usable for coloring', color: 'text-cyan-400' },
    { icon: CheckCircle2, text: '20+ styles, ratios & quantities per prompt', color: 'text-purple-400' },
    { icon: CheckCircle2, text: 'One dashboard: B/W + Colored outputs', color: 'text-pink-400' },
    { icon: CheckCircle2, text: 'High-quality FHD PNGs ready to publish', color: 'text-yellow-400' },
    { icon: CheckCircle2, text: 'Ready for KDP, Etsy, Shopify & printables', color: 'text-orange-400' },
    { icon: CheckCircle2, text: 'No drawing skills or design software required', color: 'text-blue-400' },
    { icon: Lock, text: 'No API keys required — just log in and create', color: 'text-indigo-400' },
  ];

  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900/50 p-4">
                <img 
                  src="/images/hero-dashboard.jpg" 
                  alt="Cocowyo Coloring on devices" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-32 rounded-xl overflow-hidden border border-zinc-700 shadow-xl hidden lg:block">
                <img 
                  src="/images/panda-colored.jpg" 
                  alt="Sample output" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <Star className="w-5 h-5 text-black" />
                </div>
                <span className="text-zinc-400 text-sm">Why creators choose</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Cocowyo<span className="text-gradient">Coloring</span>
              </h2>
              <p className="text-zinc-500 mb-8">Benefits that actually matter for your business</p>
            </ScrollReveal>

            <div className="space-y-4">
              {features.map((f, i) => (
                <ScrollReveal key={i} delay={i * 50}>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 card-hover">
                    <f.icon className={`w-5 h-5 ${f.color}`} />
                    <span className="text-zinc-300 text-sm">{f.text}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-orange-400">Creating coloring pages</span> shouldn't feel like a second job.
              </h2>
              <p className="text-zinc-400 mb-8">
                Creating coloring pages sounds fun — until you try scaling it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-zinc-300 text-sm">Hand-drawing takes forever. Freelancers charge $5–15 per page.</p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-zinc-300 text-sm">AI tools create pretty images — but the lines are broken and unusable for coloring.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-zinc-500 text-sm border-l-2 border-orange-400 pl-4">
                Hours turn into days. Projects stall. Ideas stay unfinished.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-zinc-700">
                <img src="/images/gallery-owl-bw.jpg" alt="Messy lines example" className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-zinc-700 mt-8">
                <img src="/images/gallery-fox.jpg" alt="Broken lines example" className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-zinc-700 -mt-8">
                <img src="/images/panda-bw.jpg" alt="Unusable output" className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-zinc-700">
                <img src="/images/dog-bw.jpg" alt="Poor quality" className="w-full h-48 object-cover" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// Real Problem Section
function RealProblemSection() {
  const problems = [
    'Hours spent cleaning up broken lines from AI tools',
    'Manually removing shading that ruins printability',
    'Redoing layouts because elements are cut off or unbalanced',
    'Exporting and resizing to meet platform requirements',
  ];

  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium border border-red-500/30">Other AI</span>
              </div>
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/30">Cocowyo Coloring</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-red-500/30">
                  <img src="/images/gallery-owl-bw.jpg" alt="Other AI output" className="w-full h-64 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden border border-green-500/30">
                  <img src="/images/panda-bw.jpg" alt="Cocowyo Coloring output" className="w-full h-64 object-cover" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Here's the real problem no one talks about
              </h2>
              <p className="text-zinc-400 mb-8">
                It's not ideas. It's not motivation. It's the <span className="text-orange-400 font-semibold">process</span>.
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {problems.map((p, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-zinc-300 text-sm">{p}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={500}>
              <p className="mt-8 text-zinc-500 text-sm">
                Now try scaling: 20 pages. 50 pages. 100 pages. The workload explodes.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// Solution Section
function SolutionSection() {
  const benefits = [
    { label: 'FREEDOM', text: 'Test ideas without hesitation', color: 'from-green-400 to-emerald-500' },
    { label: 'SPEED', text: 'Go from prompt to page in minutes', color: 'from-cyan-400 to-blue-500' },
    { label: 'SCALE', text: 'Build collections without burnout', color: 'from-purple-400 to-pink-500' },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-[#0a0a0f] to-[#12121a]">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-green-400">But what if</span> <span className="text-pink-400">it didn't</span><br />
                <span className="text-purple-400">have to be</span> <span className="text-cyan-400">this hard?</span>
              </h2>
              <p className="text-zinc-400 mb-6">
                What if you could generate usable pages in minutes, test 20+ styles freely, and scale without worrying about costs?
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-green-400 font-semibold mb-4">That's the turning point.</p>
              <p className="text-zinc-500 text-sm mb-8">
                Generate pages in minutes instead of hours. Test unlimited styles without counting credits. Scale from 10 pages to 100+ without changing your workflow.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-4">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 card-hover">
                  <span className={`text-xs font-bold bg-gradient-to-r ${b.color} bg-clip-text text-transparent`}>
                    {b.label}
                  </span>
                  <p className="text-white font-medium mt-1">{b.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Created Section
function WhyCreatedSection() {
  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            This is exactly why <span className="text-gradient">Cocowyo Coloring</span> was created.
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-12">
            Cocowyo Coloring removes the hardest parts — <span className="text-white font-semibold">without</span> the busywork. You describe what you want. The system does the heavy lifting.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium border border-red-500/30">
                BEFORE
              </span>
              <div className="w-64 h-64 rounded-2xl overflow-hidden border border-zinc-700">
                <img src="/images/dog-bw.jpg" alt="Before" className="w-full h-full object-cover" />
              </div>
            </div>
            <ArrowRight className="w-8 h-8 text-green-400 hidden md:block" />
            <div className="relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/30">
                AFTER
              </span>
              <div className="w-64 h-64 rounded-2xl overflow-hidden border border-zinc-700">
                <img src="/images/dog-colored.jpg" alt="After" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <p className="text-zinc-500 text-sm">From rough outputs to clean, printable pages in seconds.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Two Types Section
function TwoTypesSection() {
  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              <span className="text-gradient">One tool.</span> Two types of pages.
            </h2>
            <p className="text-zinc-400">Choose the output that fits your goal in seconds.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={100}>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center">
                  <PenTool className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Coloring Pages (B/W)</h3>
                  <p className="text-zinc-500 text-xs">Designed for real coloring — clean lines and no shading.</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden mb-4">
                <img src="/images/panda-bw.jpg" alt="Black and white coloring page" className="w-full h-64 object-contain bg-white" />
              </div>
              <ul className="space-y-2">
                {['Clean black-and-white line art', 'Clear, connected outlines', 'No colors, no shading', 'Easy to print and color'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                    <Check className="w-4 h-4 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-zinc-500">
                Perfect for: Coloring books, printables, worksheets, Amazon KDP, Etsy, Shopify
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Colored Illustration Pages</h3>
                  <p className="text-zinc-500 text-xs">Fully colored, ready to publish, print, or sell.</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden mb-4">
                <img src="/images/panda-colored.jpg" alt="Colored illustration" className="w-full h-64 object-contain bg-white" />
              </div>
              <ul className="space-y-2">
                {['Balanced colors', 'Polished composition', 'Visually finished', 'Ready for print or digital use'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                    <Check className="w-4 h-4 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-zinc-500">
                Perfect for: Book illustrations, cover pages, intro or divider pages, marketing visuals
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function GallerySection() {
  const images = [
    '/images/gallery-bubbletea.jpg',
    '/images/gallery-dino.jpg',
    '/images/dog-bw.jpg',
    '/images/gallery-owl-bw.jpg',
    '/images/gallery-dragon.jpg',
    '/images/gallery-mountain.jpg',
    '/images/gallery-donut.jpg',
    '/images/gallery-unicorn.jpg',
    '/images/gallery-robot.jpg',
    '/images/gallery-fox.jpg',
    '/images/gallery-icecream.jpg',
    '/images/panda-colored.jpg',
  ];

  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">See What You Can Create</h2>
            <p className="text-zinc-400">B/W coloring pages + colored illustrations — all from simple prompts</p>
            <p className="text-zinc-500 text-sm mt-2">Just a few samples from <span className="text-gradient font-semibold">20+ unique styles</span> available</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((src, i) => (
              <div key={i} className="break-inside-avoid rounded-xl overflow-hidden border border-zinc-700 card-hover">
                <img src={src} alt={`Gallery image ${i + 1}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-center text-zinc-500 text-sm mt-8">
            All images generated using Cocowyo Coloring — no editing required
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    { num: '1', title: 'Write your prompt', desc: 'Describe the page you want in plain text.' },
    { num: '2', title: 'Choose your output', desc: 'Coloring Page or Colored Illustration.' },
    { num: '3', title: 'Select 20+ styles, ratio, quantity', desc: 'Pick a look and format in seconds.' },
    { num: '4', title: 'Click Generate', desc: 'Let the system do the heavy lifting.' },
    { num: '5', title: 'Download PNGs and use instantly', desc: 'Ready for KDP, Etsy, printables, or web.' },
  ];

  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-cyan-400">From idea</span> <span className="text-purple-400">to finished page</span><br />
                <span className="text-white">in minutes</span>
              </h2>
              <p className="text-zinc-400 mb-8">Five quick steps. No complex setup, no confusing settings.</p>
            </ScrollReveal>

            <div className="space-y-4">
              {steps.map((s, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 card-hover">
                    <span className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {s.num}
                    </span>
                    <div>
                      <h4 className="text-white font-medium">{s.title}</h4>
                      <p className="text-zinc-500 text-sm">{s.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={600}>
              <p className="mt-6 text-zinc-500 text-sm">That's it. Fast, clear, and repeatable.</p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="relative rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900/50 p-4">
              <div className="aspect-video rounded-xl bg-zinc-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
                <button className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center hover:scale-110 transition-transform z-10">
                  <Play className="w-6 h-6 text-white ml-1" />
                </button>
              </div>
              <div className="mt-4 text-center">
                <button className="btn-secondary flex items-center gap-2 mx-auto">
                  <Play className="w-4 h-4" />
                  Watch Demo
                </button>
                <p className="text-zinc-500 text-xs mt-2">See the full workflow in action</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// Features Grid Section
function FeaturesGridSection() {
  const features = [
    { icon: Zap, title: 'Create faster', desc: 'Generate usable pages without the rework loop.' },
    { icon: Palette, title: 'Test ideas freely', desc: 'Try 20+ styles and formats without hesitation.' },
    { icon: Layers, title: 'Build full collections', desc: 'Scale up without burnout or bottlenecks.' },
    { icon: Sparkles, title: 'Turn concepts into pages', desc: 'Consistent outputs, ready to use or sell.' },
  ];

  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-pink-400">When Cocowyo Coloring</span> <span className="text-cyan-400">steps in,</span><br />
                <span className="text-white">everything clicks</span>
              </h2>
              <p className="text-zinc-400 mb-4">
                You stop fighting tools and start shipping usable pages.
              </p>
              <p className="text-zinc-500 text-sm">
                What used to take hours now takes minutes. No more wasted hours on cleanup. No more hesitation before each generation. Just type, generate, and use — every single time.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 card-hover">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-3">
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-white font-medium mb-1">{f.title}</h4>
                  <p className="text-zinc-500 text-sm">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Built For Section
function BuiltForSection() {
  const features = [
    'Prompt-based generation with 20+ styles',
    'Create coloring pages and colored illustrations',
    'Choose ratios and export high-quality PNGs',
    'Clean, beginner-friendly interface',
  ];

  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900/50 p-4">
              <img src="/images/success.jpg" alt="Built for creators" className="w-full h-auto rounded-xl" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-pink-400">Built for creators</span><br />
                <span className="text-white">— not designers or engineers</span>
              </h2>
              <p className="text-zinc-500 mb-8">Here's the short list of what actually matters.</p>
            </ScrollReveal>

            <div className="space-y-3">
              {features.map((f, i) => (
                <ScrollReveal key={i} delay={150 + i * 50}>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                    <span className="text-zinc-300 text-sm">{f}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Who Is It For Section
function WhoIsItForSection() {
  const audiences = [
    { icon: BookOpen, title: 'Coloring book creators', desc: 'Build books faster with clean, original art.' },
    { icon: ShoppingBag, title: 'Printable sellers', desc: 'Etsy/Shopify-ready pages in minutes.' },
    { icon: GraduationCap, title: 'Teachers & educators', desc: 'Worksheets and activities without the hassle.' },
    { icon: TrendingUp, title: 'Self-publishers (KDP)', desc: 'Test ideas and scale without burning budget.' },
    { icon: Video, title: 'Content creators', desc: 'Coloring pages as lead magnets or products.' },
    { icon: PenTool, title: 'Designers who value speed', desc: 'Clean outputs without busywork.' },
  ];

  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Who is <span className="text-gradient">Cocowyo</span> for?
            </h2>
            <p className="text-zinc-400">If you make pages to sell, teach, or publish — this is for you.</p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 card-hover">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center mb-3">
                  <a.icon className="w-5 h-5 text-yellow-400" />
                </div>
                <h4 className="text-white font-medium mb-1">{a.title}</h4>
                <p className="text-zinc-500 text-sm">{a.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Comparison Section
function ComparisonSection() {
  const comparisons = [
    {
      title: 'When You Hire a Freelancer',
      color: 'from-blue-600 to-blue-800',
      steps: ['You post a job', 'You filter 20-50 proposals', 'You wait days for drafts', 'You request revisions', 'You pay per page', 'You wait again'],
      conclusion: 'More delays. More frustration. Higher costs.',
    },
    {
      title: 'When You Do It Yourself',
      color: 'from-cyan-600 to-cyan-800',
      steps: ['You open Photoshop/Canva', 'You learn the basics', 'You trace or clean lines manually', 'You fight shading & composition', 'You save money, lose time', 'Results still feel "meh"'],
      conclusion: 'You burn time, scrap it — or settle for less.',
    },
    {
      title: 'When You Use Credit-Based Tools',
      color: 'from-pink-600 to-rose-800',
      steps: ['You buy credits', 'You hit quality/limit caps', 'You keep regenerating', 'You still fix lines', 'You burn credits fast', 'You\'re stuck behind paywalls'],
      conclusion: 'You\'re renting creativity you don\'t control.',
    },
  ];

  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              The old way is a <span className="text-orange-400">grind.</span><br />
              The Cocowyo Coloring way is <span className="text-green-400">instant.</span>
            </h2>
            <p className="text-zinc-400">Pick your pain — or skip it entirely.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {comparisons.map((c, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className={`p-6 rounded-2xl bg-gradient-to-b ${c.color} text-white`}>
                <h4 className="font-semibold mb-4 text-sm">{c.title}</h4>
                <div className="space-y-2 mb-4">
                  {c.steps.map((s, j) => (
                    <div key={j} className="text-xs bg-white/10 rounded-lg px-3 py-2">
                      {s}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/70">{c.conclusion}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <p className="text-center text-zinc-400 text-sm">
            With Cocowyo Coloring, you skip the grind and ship usable pages in minutes.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

// What You Get Section
function WhatYouGetSection() {
  const items = [
    { num: '1', title: 'Cocowyo Coloring Web App — Full Access', desc: 'The complete platform to generate unlimited coloring pages and illustrations from text prompts. No credits, no limits.' },
    { num: '2', title: 'Two Premium Output Types', desc: 'Generate B/W coloring pages with clean lines OR full-color illustrations — both from the same prompt.' },
    { num: '3', title: '2,000 Ready-to-Use Prompts', desc: '1,000 coloring page prompts + 1,000 illustration prompts. Organized by themes like animals, fantasy, nature, and more.' },
    { num: '4', title: '500 Pre-Made Image Pack', desc: 'Ready-to-publish assets across 10 popular themes. Start selling on day one without waiting for generation.' },
    { num: '5', title: '20+ Artistic Styles', desc: 'Choose from kawaii, mandala, realistic, cartoon, vintage, and more. Match any niche or audience preference.' },
    { num: '6', title: 'Commercial License Included', desc: 'Sell everything you create. Amazon KDP, Etsy, Shopify, Gumroad — anywhere. You keep 100% of profits.' },
    { num: '7', title: 'Free Updates', desc: 'Every new feature, style, and improvement we add — you get automatically at no extra cost for the duration of your subscription.' },
    { num: '8', title: 'Priority Support', desc: 'Get fast answers when you need help. We\'re real humans who actually respond quickly.' },
  ];

  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900/50 p-4">
              <img src="/images/struggle.jpg" alt="What you get" className="w-full h-auto rounded-xl" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">What do you get?</h2>
              <p className="text-zinc-500 mb-8">Everything you need to create finished pages fast.</p>
            </ScrollReveal>

            <div className="space-y-4">
              {items.map((item, i) => (
                <ScrollReveal key={i} delay={150 + i * 50}>
                  <div className="flex items-start gap-4">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      i === 0 ? 'bg-purple-500/20 text-purple-400' :
                      i === 1 ? 'bg-cyan-500/20 text-cyan-400' :
                      i === 2 ? 'bg-green-500/20 text-green-400' :
                      i === 3 ? 'bg-pink-500/20 text-pink-400' :
                      i === 4 ? 'bg-yellow-500/20 text-yellow-400' :
                      i === 5 ? 'bg-orange-500/20 text-orange-400' :
                      i === 6 ? 'bg-blue-500/20 text-blue-400' :
                      'bg-indigo-500/20 text-indigo-400'
                    }`}>
                      {item.num}
                    </span>
                    <div>
                      <h4 className="text-white font-medium text-sm">{item.title}</h4>
                      <p className="text-zinc-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Bonuses Section
function BonusesSection() {
  const bonuses = [
    { num: '1', title: '1,000 Coloring Page Prompts', desc: '1,000 diverse prompt ideas to create black-and-white coloring pages across multiple themes.', color: 'from-purple-500 to-indigo-500' },
    { num: '2', title: '1,000 Illustration Prompts', desc: '1,000 diverse prompt ideas to generate fully colored illustration pages in 20+ styles.', color: 'from-cyan-500 to-blue-500' },
    { num: '3', title: '500 Ready-to-Use Images', desc: '500 images across 10 themes — ready to use, publish, or sell.', color: 'from-pink-500 to-rose-500', badge: 'Save' },
  ];

  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <p className="text-center text-zinc-500 mb-8">Bonuses below remove guesswork so you can move faster on day one.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {bonuses.map((b, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 card-hover text-center">
                {b.badge && (
                  <span className="inline-block px-3 py-1 rounded-full bg-red-500 text-white text-xs font-bold mb-4">
                    {b.badge}
                  </span>
                )}
                <div className={`w-16 h-20 mx-auto mb-4 rounded-lg bg-gradient-to-br ${b.color} flex items-center justify-center`}>
                  <span className="text-white text-2xl font-bold">{b.num}</span>
                </div>
                <h4 className="text-white font-medium mb-2">Bonus #{b.num}</h4>
                <h5 className={`text-lg font-bold bg-gradient-to-r ${b.color} bg-clip-text text-transparent mb-2`}>
                  {b.title}
                </h5>
                <p className="text-zinc-500 text-sm">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Hidden Cost Section
function HiddenCostSection() {
  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <div className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium border border-orange-500/30 mb-4">
                <AlertTriangle className="w-3 h-3 inline mr-1" />
                The Hidden Cost
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-orange-400">You haven't sold a single page</span><br />
                <span className="text-white">and you're already $500+ in the hole.</span>
              </h2>
              <p className="text-zinc-400 mb-6">
                Most creators don't realize how fast costs add up. Between hiring, AI credits, cleanup time, and failed experiments — you're paying before you earn.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-medium">With Cocowyo Coloring</span>
                </div>
                <p className="text-green-400/80 text-sm mt-1">$0 per page. Unlimited.</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <h4 className="text-zinc-400 text-xs font-medium mb-4 uppercase tracking-wider">Cost Breakdown (Traditional Methods)</h4>
              <div className="space-y-3">
                {[
                  { label: 'Hiring illustrators', cost: '$5-$25 / page' },
                  { label: 'Per-image AI fees', cost: '$0.50-$2 / image' },
                  { label: 'Cleanup & rework time', cost: '3-5 hrs / project' },
                  { label: 'Failed experiments', cost: '$50-$200 wasted' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-zinc-800">
                    <span className="text-zinc-400 text-sm">{item.label}</span>
                    <span className="text-zinc-300 text-sm font-medium">{item.cost}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-700 flex justify-between items-center">
                <span className="text-zinc-500 text-sm">Before you earn $1:</span>
                <span className="text-orange-400 font-bold text-lg">$500-$2,000+</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// Why Different Section
function WhyDifferentSection() {
  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-xs font-medium uppercase tracking-wider mb-2">The Difference</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why Cocowyo Coloring is different</h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { icon: DollarSign, title: 'Most tools charge per image', desc: 'You hesitate, test less, and stop early. Every generation costs you money.' },
              { icon: AlertTriangle, title: 'Credit systems create anxiety', desc: 'You watch credits drain. You second-guess every prompt. Creativity suffers.' },
              { icon: X, title: 'Limits kill momentum', desc: 'When you hit caps, projects stall. You lose creative flow and waste time.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-zinc-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-cyan-500/30 glow-purple h-full">
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
                COLORINGKIT WAY
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Create freely.</h3>
              <h3 className="text-2xl font-bold text-white mb-4">Keep momentum.</h3>
              <p className="text-zinc-400 mb-6">
                No credits. No caps. No penalties. Just unlimited creation.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'No Credits', icon: InfinityIcon },
                  { label: 'No Limits', icon: InfinityIcon },
                  { label: '0 Hesitation', icon: Check },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-zinc-800/50">
                    <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-1" />
                    <span className="text-zinc-400 text-xs">{stat.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-zinc-500 text-sm">
                Test 100 ideas. Generate 500 pages. Build entire collections — all without watching a counter.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <p className="text-zinc-400 mb-4">If you're ready to stop paying per output, this is the simplest path.</p>
            <button className="btn-primary">Start Creating Without Limits</button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Walk Away Section
function WalkAwaySection() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#0a0a0f] to-[#12121a]">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-white mb-6">Walk away & leave creativity behind?</h3>
            <div className="rounded-2xl overflow-hidden mb-6">
              <img src="/images/struggle.jpg" alt="Struggle" className="w-full h-64 object-cover" />
            </div>
            <ul className="space-y-3">
              {[
                'Miss out on the coloring book boom while others profit.',
                'Keep wasting hours creating pages from scratch.',
                'Watch competitors dominate KDP and Etsy.',
                'Struggle with expensive freelancers and slow turnarounds.',
                'Stay stuck with limited, generic AI tools.',
                'Lose momentum burning credits on every generation.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                  <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="inline-block px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium border border-yellow-500/30 mb-4">
              Launch Price — Limited Time Only!
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Grab Cocowyo Coloring Today!</h3>
            <div className="rounded-2xl overflow-hidden mb-6">
              <img src="/images/success.jpg" alt="Success" className="w-full h-64 object-cover" />
            </div>
            <ul className="space-y-3">
              {[
                'Boost passive income with trending coloring products.',
                'Save time and cut costs on design instantly.',
                'Scale faster with unlimited generation power.',
                'Beautiful, print-ready designs in seconds.',
                'Build your brand with unique, original content.',
                'Turn creativity into your Low Content secret weapon.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                  <Sparkles className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const items = [
    { name: 'Cocowyo Coloring Web App — Full Access', value: '$97' },
    { name: '2,000 Ready-to-Use Prompts', value: '$97' },
    { name: '500 Pre-Made Image Pack (10 Themes)', value: '$67' },
    { name: 'Commercial License (Sell Anywhere)', value: '$97' },
    { name: 'Free Updates', value: '$57' },
  ];

  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium border border-green-500/30 mb-4">
              <CheckCircle2 className="w-4 h-4" />
              Limited Time Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Get <span className="text-green-400">Everything</span> for One Price
            </h2>
            <p className="text-zinc-400">No monthly fees. No per-image credits. No hidden costs.</p>
            <p className="text-zinc-500 text-sm">Just one payment and you're in.</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* 1 Month Card */}
          <ScrollReveal delay={100}>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-cyan-500/30 glow-purple h-full flex flex-col">
              <div className="inline-block px-3 py-1 rounded-full bg-yellow-500 text-black text-xs font-bold mb-4 self-start">
                SAVE 92% TODAY
              </div>
              <div className="text-center mb-6">
                <p className="text-zinc-500 text-sm mb-2">1 MONTH ACCESS</p>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-zinc-500 line-through text-lg">$355</span>
                  <span className="text-5xl font-bold text-green-400">$29</span>
                </div>
                <p className="text-zinc-400 text-sm">One payment • Full access for 1 month</p>
              </div>
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 mb-6">
                <p className="text-red-400 text-xs text-center">
                  <span className="font-bold">Launch price</span> — will increase to $57 soon<br />
                  <span className="font-bold">Only 47 spots left at this price!</span>
                </p>
              </div>
              <div className="mt-auto">
                <a href="https://warriorplus.com/o2/buy/lby14x/gsmjx1/w580gj"><img src="https://warriorplus.com/o2/btn/cn100011001/lby14x/gsmjx1/458141" /></a>
                <div className="flex items-center justify-center gap-2 mt-4 text-zinc-500 text-xs">
                  <Shield className="w-4 h-4" />
                  Secure Checkout
                  <CheckCircle2 className="w-4 h-4 ml-2" />
                  30-Day Guarantee
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 1 Year Card */}
          <ScrollReveal delay={200}>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-yellow-500/30 glow-gold h-full flex flex-col">
               <div className="inline-block px-3 py-1 rounded-full bg-yellow-500 text-black text-xs font-bold mb-4 self-start">
                BEST VALUE
              </div>
              <div className="text-center mb-6">
                <p className="text-zinc-500 text-sm mb-2">1 YEAR ACCESS</p>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-5xl font-bold text-yellow-400">$299</span>
                </div>
                <p className="text-zinc-400 text-sm">One payment • Full access for 12 months</p>
              </div>
               <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30 mb-6">
                <p className="text-green-400 text-xs text-center">
                  <span className="font-bold">Includes everything from the monthly plan & more!</span>
                </p>
              </div>
              <div className="mt-auto">
                <a href="https://warriorplus.com/o2/buy/lby14x/gsmjx1/pp7045"><img src="https://warriorplus.com/o2/btn/cn100011001/lby14x/gsmjx1/458145" /></a>
                <div className="flex items-center justify-center gap-2 mt-4 text-zinc-500 text-xs">
                  <Shield className="w-4 h-4" />
                  Secure Checkout
                  <CheckCircle2 className="w-4 h-4 ml-2" />
                  30-Day Guarantee
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={300}>
            <div className="p-6 mt-12 rounded-2xl bg-zinc-900/50 border border-zinc-800 max-w-4xl mx-auto">
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-4 text-center">Everything Included in Your Subscription:</p>
              <div className="space-y-3">
                {items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-zinc-800 last:border-0">
                    <span className="text-zinc-300 text-sm">{item.name}</span>
                    <span className="text-zinc-500 text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
               <div className="mt-4 pt-4 border-t border-zinc-700 flex justify-between items-center">
                <span className="text-zinc-400 font-medium">Total Value:</span>
                <span className="text-zinc-300 font-bold text-xl">$415</span>
              </div>
            </div>
          </ScrollReveal>
      </div>
    </section>
  );
}

// Risk Free Section
function RiskFreeSection() {
  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto text-center max-w-2xl">
        <ScrollReveal>
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Try Cocowyo Coloring <span className="text-green-400">risk-free</span>
          </h2>
          <p className="text-zinc-400 mb-8">
            We offer a 30-day money-back guarantee. Try it, explore the workflow, and see how it fits into your process. If it's not right for you, request a refund within 30 days. No stress. No risk.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { icon: Lock, label: 'Secure Payment' },
              { icon: Zap, label: 'Instant Access' },
              { icon: RefreshCw, label: '30-Day Refund' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800">
                <item.icon className="w-4 h-4 text-yellow-400" />
                <span className="text-zinc-300 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-xs">
            This is a one-time payment offer. We plan to move to a monthly pricing model in the future, so taking advantage of this launch period lets you secure unlimited access now with no recurring fees.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    { q: 'What exactly is Cocowyo Coloring?', a: 'Cocowyo Coloring is an AI-powered platform that generates both black-and-white coloring pages and full-color illustrations from simple text prompts. It\'s designed specifically for creators who want clean, usable outputs without the hassle of traditional design tools or expensive freelancers.' },
    { q: 'Can I sell the pages I create?', a: 'Yes! Every purchase includes a commercial license that allows you to sell your creations on Amazon KDP, Etsy, Shopify, Gumroad, or anywhere else. You keep 100% of the profits.' },
    { q: 'Do I need design skills or experience?', a: 'Not at all. Cocowyo Coloring is built for creators, not designers. The interface is simple and intuitive. Just type what you want, choose your style, and click generate.' },
    { q: 'Will I get updates in the future?', a: 'Yes, your purchase includes free updates for the duration of your subscription. Every new feature, style, and improvement we add is yours at no extra cost.' },
    { q: 'Do I need to pay monthly fees?', a: 'We offer both monthly and yearly subscription options. This is a one-time payment for the chosen subscription period (1 month or 1 year). There are no other fees.' },
    { q: 'Is there a refund policy?', a: 'Absolutely. We offer a 30-day money-back guarantee. If Cocowyo Coloring isn\'t right for you, just request a refund within 30 days — no questions asked.' },
    { q: 'How fast can I start creating pages?', a: 'Immediately after purchase. Login, write your first prompt, and have your first coloring page or illustration in minutes.' },
    { q: 'How many images can I create per day?', a: 'Unlimited. There are no daily caps, no credit systems, and no restrictions. Create as much as you want.' },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-400 text-xl font-bold">?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Frequently Asked <span className="text-pink-400">Questions</span>
            </h2>
            <p className="text-zinc-500">Everything you need to know before getting started.</p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div className="rounded-xl bg-zinc-900/50 border border-zinc-800 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-800/50 transition-colors"
                >
                  <span className="text-zinc-300 text-sm font-medium">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === i && (
                  <div className="px-4 pb-4">
                    <p className="text-zinc-500 text-sm">{faq.a}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Team Section
function TeamSection() {
  const team = [
    { name: 'Lylia Phan', role: 'Co-Founder', desc: 'Passionate about empowering creators with tools that simplify the creative process and unlock new opportunities.' },
    { name: 'Jayson Nguyen', role: 'Co-Founder', desc: 'Dedicated to building smart automation that helps publishers and entrepreneurs scale their creative businesses faster.' },
  ];

  return (
    <section className="section-padding bg-[#0a0a0f]">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Meet the Team Behind <span className="text-gradient">Cocowyo</span>
            </h2>
            <p className="text-zinc-500">We're creators who built the tool we wished existed.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{member.name[0]}</span>
                </div>
                <h4 className="text-white font-semibold text-lg">{member.name}</h4>
                <p className="text-zinc-500 text-sm mb-3">{member.role}</p>
                <p className="text-zinc-400 text-sm">{member.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#0a0a0f] to-[#12121a]">
      <div className="container-max mx-auto text-center">
        <ScrollReveal>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mx-auto mb-6">
            <Palette className="w-8 h-8 text-black" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Ready to start</span> <span className="text-gradient">creating?</span>
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Join hundreds of creators already using Cocowyo Coloring to build their publishing business.
          </p>
          <button className="btn-primary text-lg px-10 py-5">
            Unlock Full Access to Cocowyo Coloring
          </button>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {[
              { icon: Lock, label: 'Secure checkout' },
              { icon: CheckCircle2, label: 'One-time payment' },
              { icon: RefreshCw, label: '30-day guarantee' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-zinc-500 text-xs">
                <item.icon className="w-4 h-4" />
                {item.label}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-4 bg-[#0a0a0f] border-t border-zinc-800">
      <div className="container-max mx-auto max-w-4xl">
        <div className="text-zinc-500 text-xs leading-relaxed mb-8 space-y-4">
          <p>
            <strong className="text-zinc-400">Disclaimer:</strong> WarriorPlus is used to help manage the sale of products on this site. While WarriorPlus helps facilitate the sale, all payments are made directly to the product vendor and NOT WarriorPlus. Thus, all product questions, support inquiries and/or refund requests must be sent to the vendor. WarriorPlus's role should not be construed as an endorsement, approval or review of these products or any claim, statement or opinion used in the marketing of these products.
          </p>
          <p>
            <strong className="text-zinc-400">Income Disclaimer:</strong> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Cocowyo Coloring and its creators make absolutely no guarantee, expressed or implied, that by following the advice or content available on this website you will make any money or improve current profits, as there are many factors and variables beyond our control which may impact any given business.
          </p>
          <p>
            <strong className="text-zinc-400">Liability Disclaimer:</strong> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way.
          </p>
          <p>
            <strong className="text-zinc-400">Guarantee Terms:</strong> The Conditional Guarantee is Not A Promise Of Payout Whatsoever. It's Merely There To Show You That We're Confident About What We're Offering. To Qualify For The Conditional Guarantee You Must Show Clear Cut Evidence That You've Done The Work And Asked For Help And We Weren't Able To Solve The Problem.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {['Privacy Policy', 'Terms of Service', 'Earning Disclaimer', 'Refund Policy', 'Support'].map((link, i) => (
            <a key={i} href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">
              {link}
            </a>
          ))}
        </div>

        <p className="text-center text-zinc-600 text-xs">
          © 2026 Solya Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <ProblemSection />
        <RealProblemSection />
        <SolutionSection />
        <WhyCreatedSection />
        <TwoTypesSection />
        <GallerySection />
        <HowItWorksSection />
        <FeaturesGridSection />
        <BuiltForSection />
        <WhoIsItForSection />
        <ComparisonSection />
        <WhatYouGetSection />
        <BonusesSection />
        <HiddenCostSection />
        <WhyDifferentSection />
        <WalkAwaySection />
        <PricingSection />
        <RiskFreeSection />
        <FAQSection />
        <TeamSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
