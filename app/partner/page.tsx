import { Handshake, ArrowRight, Network, Building, Users2, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner With Us | Universe Center Services",
  description: "Collaborate with UCS to expand your capabilities and offer premium language solutions.",
};

export default function Partner() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-teal text-xs font-bold tracking-wider uppercase mb-6 mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Collaboration</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">Partner With UCS</h1>
          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Let&apos;s build mutually beneficial relationships that drive global growth.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-brand-navy mb-6 tracking-tight">Expand Your Capabilities</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We actively seek partnerships with agencies, language networks, and technology platforms. By partnering with UCS, you can augment your service offerings and provide your clients with seamless language and BPO support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="group bg-white p-10 rounded-3xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-brand-teal/40 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-brand-teal mx-auto mb-6 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-brand-navy transition-all duration-300">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Corporate Partners</h3>
              <p className="text-slate-600 leading-relaxed">Integrate our language solutions directly into your workflow to better serve international markets.</p>
            </div>
            
            <div className="group bg-white p-10 rounded-3xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-brand-teal/40 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-brand-teal mx-auto mb-6 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-brand-navy transition-all duration-300">
                <Network className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Agency Subcontracting</h3>
              <p className="text-slate-600 leading-relaxed">Extend your language coverage by tapping into our specialized network of linguists.</p>
            </div>
            
            <div className="group bg-white p-10 rounded-3xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-brand-teal/40 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-brand-teal mx-auto mb-6 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-brand-navy transition-all duration-300">
                <Users2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Referral Partners</h3>
              <p className="text-slate-600 leading-relaxed">Connect your clients with trusted UCS services and benefit from our mutual referral programs.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-navy to-slate-900 rounded-3xl p-10 sm:p-16 text-center border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>
            <Handshake className="w-16 h-16 text-brand-teal mx-auto mb-8 relative z-10" />
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 relative z-10">Start a Conversation</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">
              We are always open to discussing new opportunities. Contact our partnership team to explore how we can grow together.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex justify-center items-center px-9 py-4 rounded-xl bg-gradient-to-r from-brand-teal to-emerald-400 text-brand-navy font-black text-lg shadow-xl shadow-brand-teal/20 hover:scale-105 active:scale-95 transition-all duration-200 relative z-10"
            >
               Contact Partnership Team
               <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
