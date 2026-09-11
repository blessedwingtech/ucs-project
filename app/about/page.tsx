import { Users, Globe2, Handshake, Sparkles, Shield, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Universe Center Services",
  description: "Learn more about Universe Center Services (UCS), a premier Language and Business Solutions Provider.",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-teal text-xs font-bold tracking-wider uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Who We Are</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">About Us</h1>
          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl font-light leading-relaxed">
            We bridge linguistic gaps and optimize business operations globally through professional human expertise and scalable technology.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-xs font-black uppercase tracking-widest text-brand-teal">Our Purpose</h2>
              <h3 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight leading-tight">
                A Premier Language & Business Solutions Provider
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-normal">
                Universe Center Services (UCS) specializes in high-stakes multilingual communication and reliable remote business support. In an increasingly connected world, clear communication is the foundation of every successful relationship.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-normal">
                Our mission is to empower organizations to engage deeply with diverse communities by providing professional, culturally attuned, and unwavering language solutions—from real-time medical interpretation to intricate business documentation translation.
              </p>
              <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-brand-teal my-8">
                <p className="text-slate-800 font-semibold italic text-base sm:text-lg">
                  &ldquo;Through our stringent quality protocols, reliable global network, and tailored operational partnerships, we deliver scalable solutions adapted specifically to your institutional demands.&rdquo;
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="group bg-white p-8 rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-brand-teal/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal mb-5 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-brand-navy transition-all duration-200">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-2">Diverse Communities</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Connecting organizations authentically with the multi-lingual people they serve daily.</p>
              </div>

              <div className="group bg-white p-8 rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-brand-teal/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal mb-5 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-brand-navy transition-all duration-200">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-2">Cultural Accuracy</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Providing professional, dialect-specific, and culturally respectful language interpretation and translation.</p>
              </div>

              <div className="group bg-white p-8 rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-brand-teal/40 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal mb-5 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-brand-navy transition-all duration-200">
                  <Handshake className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-2">Reliable Partnerships</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Supporting healthcare, education, legal, and corporate enterprises with scalable BPO and language workflows.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
