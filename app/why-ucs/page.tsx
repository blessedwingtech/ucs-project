import { CheckCircle2, ShieldCheck, HeartHandshake, Zap, Target, Star, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why UCS | Universe Center Services",
  description: "Discover the UCS advantage: Professionalism, quality, and dedicated partnerships.",
};

export default function WhyUCS() {
  const reasons = [
    {
      title: "Human-Centric Approach",
      description: "While we leverage modern technology for efficiency, we believe that true communication requires the empathy, cultural understanding, and nuance that only human professionals can provide.",
      icon: HeartHandshake
    },
    {
      title: "Stringent Quality Control",
      description: "Our linguists and BPO agents undergo rigorous testing and continuous evaluation to ensure they meet industry-specific standards.",
      icon: ShieldCheck
    },
    {
      title: "Scalable Flexibility",
      description: "Whether you need a one-time document translated or a dedicated team of remote customer support agents, our services scale with your needs.",
      icon: Zap
    },
    {
      title: "Industry Expertise",
      description: "We don't just speak the language; we know your industry. Our professionals understand the specific terminology of healthcare, legal, and corporate sectors.",
      icon: Target
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-teal text-xs font-bold tracking-wider uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The UCS Advantage</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">Why Choose UCS?</h1>
          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl font-light leading-relaxed">
            We don&apos;t just provide services; we build long-term partnerships dedicated to your organizational success.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight leading-tight">
                Built on Excellence, Driven by Results
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Universe Center Services was founded on the belief that language barriers should never impede progress, and operational bottlenecks should never slow growth.
              </p>
              
              <div className="space-y-6 pt-4">
                {reasons.map((reason, idx) => {
                  const Icon = reason.icon;
                  return (
                    <div key={idx} className="group flex bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-brand-teal/40 transition-all duration-300">
                      <div className="mr-5 mt-1">
                        <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-brand-navy transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-brand-navy mb-2">{reason.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{reason.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-teal/20 to-brand-gold/20 blur-2xl rounded-3xl z-0"></div>
              <div className="relative z-10 bg-gradient-to-br from-brand-navy to-slate-900 p-10 sm:p-14 rounded-3xl shadow-2xl border border-slate-800 text-white">
                <Star className="w-12 h-12 text-brand-gold mb-8" />
                <h3 className="text-3xl font-black mb-6">Our Commitment</h3>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  We promise to treat your business with the same dedication as our own. We commit to transparency, relentless quality, and being a partner you can trust in critical moments.
                </p>
                <ul className="space-y-5">
                  {[
                    "Rapid response times",
                    "Transparent pricing",
                    "Dedicated account managers",
                    "Continuous process improvement"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle2 className="w-6 h-6 text-brand-teal mr-4 flex-shrink-0" />
                      <span className="font-semibold text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
