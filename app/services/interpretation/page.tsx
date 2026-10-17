import { MessageSquare, Phone, Video, MapPin, Calendar, HeartPulse, Scale, Briefcase, GraduationCap, HeadphonesIcon, ArrowRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interpretation Services",
  description: "Multilingual Communication Solutions provided through qualified professionals and trusted partners.",
};

export default function Interpretation() {
  const services = [
    { name: "Over-the-Phone (OPI)", icon: Phone },
    { name: "Video Remote (VRI)", icon: Video },
    { name: "On-Site Interpretation", icon: MapPin },
    { name: "Scheduled Interpretation", icon: Calendar },
    { name: "Medical Interpretation", icon: HeartPulse },
    { name: "Legal Interpretation", icon: Scale },
    { name: "Business Interpretation", icon: Briefcase },
    { name: "Educational Interpretation", icon: GraduationCap },
    { name: "Customer Support", icon: HeadphonesIcon },
  ];

  const coreLanguages = ["Haitian Creole", "English", "French", "Spanish", "Portuguese"];
  
  const additionalLanguages = [
    "Arabic", "Mandarin Chinese", "Cantonese", "Japanese", "Korean", 
    "German", "Italian", "Dutch", "Russian", "Turkish", 
    "Hindi", "Vietnamese", "Tagalog", "Polish", "Romanian", 
    "Greek", "Other languages upon request"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B2545] via-[#0E356A] to-[#1B4F8F] text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 -translate-y-1/3 translate-x-1/3 w-[500px] h-[500px] bg-blue-500/25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-200 text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Our Services</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-amber-300 flex-shrink-0 shadow-lg backdrop-blur-sm">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">Interpretation</h1>
          </div>
          <p className="text-lg sm:text-2xl text-blue-100/90 max-w-3xl font-light leading-relaxed">
            Real-time multilingual communication solutions provided by qualified professionals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-xs font-black uppercase tracking-widest text-brand-blue mb-3">Capabilities</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">Our Interpretation Solutions</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="group flex items-center p-6 bg-white rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-brand-blue/40 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue mr-4 group-hover:bg-brand-blue group-hover:text-white transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-brand-navy">{service.name}</h3>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-blue to-brand-blue-light"></div>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-10 tracking-tight">Supported Languages</h2>
            
            <div className="mb-12">
              <h3 className="text-sm font-black uppercase tracking-widest text-brand-blue mb-5">Core Languages</h3>
              <div className="flex flex-wrap gap-3">
                {coreLanguages.map((lang, idx) => (
                  <span key={idx} className="px-5 py-2.5 bg-brand-navy text-white rounded-xl font-bold text-sm shadow-md hover:scale-105 transition-transform cursor-default">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-8 border-t border-slate-100">
              <h3 className="text-xl font-bold text-brand-navy mb-3">Additional Languages</h3>
              <p className="text-sm text-slate-500 mb-6 font-medium">Available through our professional network (subject to availability).</p>
              <div className="flex flex-wrap gap-2.5">
                {additionalLanguages.map((lang, idx) => (
                  <span key={idx} className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-white hover:border-brand-blue/50 hover:text-brand-blue transition-colors cursor-default">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <Link 
               href="/contact" 
               className="inline-flex justify-center items-center px-9 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-blue-light text-white font-black text-lg shadow-xl shadow-brand-blue/20 hover:scale-105 active:scale-95 transition-all duration-200"
             >
                Request Interpretation Services
                <ArrowRight className="w-5 h-5 ml-2" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
